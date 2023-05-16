
let collectionMul3=[];
let collectionMul5=[];
function solution(num) {
    let sum = 0;

    for (let i = 1; i < num; i++) {
        if (i % 3 == 0) {
            console.log(i)
            collectionMul3.push(i);
            sum += i;
        }
        else if (i % 5 == 0) {
            console.log(i)
            collectionMul5.push(i);
            sum += i;
        }
    }
    console.log(`sum of the numbers is ${sum}`)
}

num=10;

solution(num);

console.log(collectionMul3)

collectionMul3.forEach((element)=>{
    console.log(element);
})
console.log(collectionMul5)
collectionMul5.forEach((element)=>{
    console.log(element);
})

let array=[...collectionMul3,...collectionMul5]


console.log(array);

array.sort()

console.log(array);

let total=array.reduce((num,acc)=>{
    return num+acc
})

console.log(total);