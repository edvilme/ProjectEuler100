function isDivisible(num, max){
    let res = true;
    for (let i = 1; i < max; i++) {
        if(num%i != 0){
            res = false;
            break;
        }
    }
    return res;
}

function smallestMultiple(max){
    let i = max + 1;
    while(!isDivisible(i, max)){
        i++
    }
    console.log(i)
}

smallestMultiple(10)
smallestMultiple(20)