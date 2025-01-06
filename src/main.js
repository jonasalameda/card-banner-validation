// Function to validate credit card number using Luhn algorithm
function validateCreditCardNumber(cardNumber) {
    let sum = 0;
    let shouldDouble = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber[i]);
        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
        shouldDouble = !shouldDouble;
    }
    return sum % 10 === 0;
}

// Function to determine the card type based on the number
function getCardType(cardNumber) {
    const cardTypes = {
        visa: /^4[0-9]{15}$/,
        mastercard: /^5[1-5][0-9]{14}$/,
        amex: /^3[47][0-9]{13}$/,
        discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        enroute: /^(2014|2149)\d{11}$/,
        jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
        voyager: /^8699[0-9]{11}$/,
        hipercard: /^(606282\d{10}(\d{3})?)|(3841\d{15})$/,
        aura: /^50[0-9]{14,17}$/,
        // Add more card types as needed
    };

    for (const [cardType, regex] of Object.entries(cardTypes)) {
        if (regex.test(cardNumber)) {
            return cardType;
        }
    }
    return 'unknown';
}

// Example usage
const cardNumber = '4332216173359';
if (validateCreditCardNumber(cardNumber)) {
    console.log(`Card number is valid. Card type: ${getCardType(cardNumber)}`);
} else {
    console.log('Card number is invalid.');
}
