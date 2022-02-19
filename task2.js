let a="23617";
let arr=a.split("");
console.log(arr)
let num_arr=[]
length=arr.length

for (let i = 0; i < length; i++){
    num_arr.push(Number(arr[i]))
}

const initialValue=0;
const sum=num_arr.reduce( (previousValue, currentValue) => previousValue + currentValue,
initialValue)
console.log(sum)