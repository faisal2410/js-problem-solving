// let sum=0;
// for (i=5;i>0; i--){
//     sum+=i;
// }
// console.log(sum);

function sum(i){
    console.log(i);
    if(i==1){
        return 1;
    }
    return i+sum(--i);
}
console.log(sum(5));

// explanation
// i+sum(--i)
// 5+sum(--5) =5+sum(4)=5+4+sum(3)=5+4+3+sum(2)=5+4+3+2+sum(1)=5+4+3+2+1=15