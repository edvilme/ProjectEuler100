function largestPalindrome(digits){
    let largest = 0;
    for(let i=1; i<10**digits; i++){
        for(let j=1; j<10**digits; j++){
            if((i*j).toString() == (i*j).toString().split('').reverse().join('') && i*j > largest){
                largest = i*j;
            }
        }
    }
    console.log(largest)
}

largestPalindrome(2);
largestPalindrome(3); 