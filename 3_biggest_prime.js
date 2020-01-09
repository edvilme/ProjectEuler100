function largestPrime(n){      
    let i = 2;
    while (i < n && n%i != 0) {
        i++;
    }
    let newNum = n/i;
    if(newNum >= 2){
        largestPrime(newNum)
    } else {
        console.log(i)
    }
}

largestPrime(13195)
largestPrime(600851475143)