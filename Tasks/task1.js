console.log("M. Jawad Adeem")

kthDigitFromLast=function (n, k)
{
     
    if (k <= 0)
    {
        console.log(-1);
        return;
    }
 
    let temp = String(n);
     
    if (k > temp.length)
    {
        console.log(-1);
    }
     
    else
    {
        let req = temp.charAt(temp.length - k)
         
        console.log(Number(req));
    }
}
n=23617
k=3
kthDigitFromLast(n,k);