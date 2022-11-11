document.querySelector(".cont").addEventListener("click",mycal)
let arr2=JSON.parse(localStorage.getItem("email"))||[]
function mycal(e)
{
    let a=document.querySelector("input").value;
    let obj={
        a
    }
    arr2.push(obj)
    alert("login successful")
   window.location.href="./index.html"
    localStorage.setItem("email",JSON.stringify(arr2))
}