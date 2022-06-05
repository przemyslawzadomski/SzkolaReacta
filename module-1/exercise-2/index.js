const prompt = require('prompt');

let schema = {
    properties: {
        number: {
            description: 'Wybierz liczbę od 1 do 10: ',
        },
    },
};

const random = Math.floor(Math.random() * 10) + 1;

function checkNumber() {
    prompt.start();

    prompt.get(schema, (_err, result) => {
        if (parseInt(result.number) !== random) {
            console.log(`Niestety nie jest to ${result.number}. \nSpróbuj ponownie:`);
            checkNumber();
        } else {
            console.log(`Gratulacje! Moja liczba to ${parseInt(result.number)}!`);
        }
    });
}

checkNumber();