function convertToBRL(number) {
    if (number.toString().indexOf('.') >= 0) {
        number = number.toString().replace('.', ',');
    }
    return `R$ ${number}0`
}