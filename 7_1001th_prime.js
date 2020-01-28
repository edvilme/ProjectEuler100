

function nthPrime(max){
    let numbers = new Array(104760).fill(0).map((l, i)=>(i+1));
    numbers.splice(0,1)
    let primes = [];
    let i = 0;
    while(i<max){
        let n = numbers[0];
        primes.push(n)
        numbers = numbers.filter(j => j%n != 0);
        i++ 
    }
    console.log(primes.pop())
}

nthPrime(6)
nthPrime(10001)

 