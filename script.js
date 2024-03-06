const max2 = (a, b, c) => {
    if (a > b && a > c) {

        return a
    } else if (b > a && b > c) {

        return b

    }
    return c

}
console.log(max2(6, 8, 10) + ' ' + "je větší");
console.log(max2(15, 100, 800) + ' ' + "je větší");