function multiples3n5(sumTo){
    let total = 0;
    //multiples of 3
    for (let i = 0; i < sumTo; i+=3) {
        total+=i
    }
    //multiples of 5
    for (let i = 0; i < sumTo; i+=5) {
        total+=i;
    }
    return total;
}

console.log("Sum to 10", multiples3n5(10))
console.log("Sum to 100", multiples3n5(100))