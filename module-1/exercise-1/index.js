const year = 1972;

const checkYear = year => {
    if (year % 4 === 0) return console.log('Rok jest przestępny')
    else return console.log('Rok nie jest rokiem przestępnym')
}

checkYear(year);