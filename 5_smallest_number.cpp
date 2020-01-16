#include <iostream>
using namespace std;

bool isDivisible(int num, int max){
    bool res = true;
    for(int i = 1; i < max; i++){
        if(num%i != 0){
            res = false;
            break;
        }
    }
    return res;
}

void smallestMultiple(int max){
    int i = max+1;
    while(!isDivisible(i, max)){
        i++;
    }
    cout<<i<<endl;
}

int main(){
    smallestMultiple(10);
    smallestMultiple(20);
    return 0;
}