// let factorial =1;
// for(let i=4; i>=1; i--){
//     factorial*=i;
// }
// console.log(factorial);

function factorial(n){
    if(n==1){
        return 1;
    }
    return n*factorial(--n);
}
console.log(factorial(5));