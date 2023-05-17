
let collectionMul3=[];
let collectionMul5=[];
function solution(num) {
    let sum = 0;

    for (let i = 1; i < num; i++) {
        if (i % 3 == 0) {
            // console.log(i)
            collectionMul3.push(i);
            sum += i;
        }
        else if (i % 5 == 0) {
            // console.log(i)
            collectionMul5.push(i);
            sum += i;
        }
    }
    console.log(`sum of the numbers is ${sum}`)
}

num=1000;

solution(num);








// console.log(collectionMul3)

collectionMul3.forEach((element)=>{
    // console.log(element);
})
console.log(collectionMul5)
collectionMul5.forEach((element)=>{
    // console.log(element);
})

let array=[...collectionMul3,...collectionMul5]

let filteredArray=[...new Set(array)];

// console.log(array);


console.log(array);

let total=filteredArray.reduce((num,acc)=>{
    return num+acc
})

console.log("new array");
console.log(filteredArray);

console.log(total);

console.log('.............................................................................................');


number=['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleve','twleve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenteen'];
let lengthArray=number.map((element)=>{
   return element.length;  
})


let num1=1;
let num2=20;
let wordLength=0;

for(let i=num1;i<=num2;i++){
    wordLength+=number[i].length;
}
console.log(wordLength)
console.log(lengthArray)
console.log('.............................................................................................');




let users={
    alan:{
        age:23,
        online:false
    },
    anusree:{
        age:24,
        online:true
    },
    arun:{
        age:21,
        online:false
    }
}



console.log(users)

for(let element in users){
    console.log(element);
}
let stdList=document.querySelector('.names');
console.log(stdList);
const Solution=(users)=>{
    let studentData=Object.entries(users);
    console.log(studentData);
    studentData.map((value)=>{
        let listIttem=document.createElement('li');
        console.log(value)
        let [name,values]=value
        listIttem.innerText=` ${name} , age is ${values.age}`;
        console.log(name);
        console.log(values);
        if(values.online==false){
            listIttem.style.color='red';
        }
        stdList.appendChild(listIttem);
    })

}
console.log(users);

 

Solution(users)

const histogram=(aray,str)=>{
    for(let i=0;i<aray.length;i++){
        let value1=aray[i];
        str1='';
        for(let j=0;j<value1;j++){
            str1+=str;
        }
        console.log(str1);
    }
}
histogram([5,2,5,3],'#');



//function simple ways

const newHistogram=(array1,str)=>{
    // for(let i=0;i<array1.length;i++){
    //     let re=array1[i];
    //     console.log(str.repeat(re));
       
    // }
    array1.map((values1)=>{
        console.log(str.repeat(values1))
    })

}
newHistogram([2,6,4],"$")

console.clear()

let numberArray=[];

const rangeNumber=(start,end)=>{
    if(start<=end){
        while(start<=end){
            numberArray.push(start);
            start++
        }
    }
    else{
        console.log("Enter the valid creditials ");
    }
    return numberArray;
}

let ArraY=rangeNumber(2,85);
console.log(ArraY);