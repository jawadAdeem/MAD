var arr=[1,2,3,4,5,6,7,8]
var even=function(y){
    if(y%2==0)
    {
    return y;}
}
var a=[]
a=arr.filter(even())
console.log(a)