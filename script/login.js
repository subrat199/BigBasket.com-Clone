document.querySelector(".cont").addEventListener("click",myfun())
let arr1=JSON.parse(localStorage.getItem("mobileno"))||[]
function myfun(e)
{
    let a=document.querySelector("input").value;
    let obj={
        a,otp:"1234"
    }
    arr1.push(obj)
//     let flag="false"
//     for(let i=0;i<=arr1.length-1;i++)
//     {
//         if(arr1[i]["a"].length<=9)
//         {
//            flag="true"
//            break
//         }
//     }
//    if(flag=="true")
//    {
//     alert("please enter a valid  mobile no")
//    }
//    else{
   
//    }
alert("login successful")
   window.location.href="./index.html"
   localStorage.setItem("mobileno",JSON.stringify(arr1))
}
