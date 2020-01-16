function sumSquare(max){
    let sumSquare = 0;
    let sum = 0;
    for (let i = 0; i <= max; i++) {
        sumSquare+=i**2
        sum+=i;
    }
    let result = sum**2 - sumSquare;
    console.log(result)
}
sumSquare(10);
sumSquare(100);