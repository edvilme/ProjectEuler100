function evenFibo(max){
    let first = 0, current = 0, last = 1, i=0, sum=0;
    while (last<=max) {
        i++;
        first = current;
        current = last;
        last = current + first;
        if(last%2==0){ sum+=last; }
    }
    console.log(sum)
}
evenFibo(4000000)