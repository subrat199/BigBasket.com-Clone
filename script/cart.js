
let arr5=JSON.parse(localStorage.getItem("add to cart"))

display(arr5)
function display(arr5)
{
    document.querySelector(".cart").innerHTML=""
    arr5.forEach((el)=>{
        let div=document.createElement("div")
        let image=document.createElement("img")
        image.src=el.img;
        let tag=document.createElement("p")
        tag.innerText=el.tag;
        let name=document.createElement("p")
        name.innerText=el.name;
        let pr=document.createElement("p")
        pr.innerText=el.price;
        let des=document.createElement("p")
        des.innerText=el.description
        let sp=document.createElement("span")
        sp.innerText="Qua"
        let inp=document.createElement("input")
        inp.type="number"
        let addtobag=document.createElement("button")
        addtobag.innerText="Add to bag";
        
        let remove=document.createElement("button")
        remove.innerText="Remove"
        div.append(image,tag,name,pr,des,sp,inp,addtobag,remove)
        document.querySelector(".cart").append(div)
    })
}
display(arr5)
