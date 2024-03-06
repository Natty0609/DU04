const max2 = (a, b, c) => {
    if (a > b && a > c) {

        return a + ' ' + "je větší"
    } else if (b > a && b > c) {

        return b + ' ' +
            "je větší"
    } else if (c > a && c > b) {

        return c + ' ' + "je větší"
    }
}
console.log(max2(6, 8, 10));
console.log(max2(15, 100, 800));