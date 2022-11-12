let pr=JSON.parse(localStorage.getItem("productdetails"))
console.log(pr)
let add=JSON.parse(localStorage.getItem("add to cart"))||[]

function displaycard(data)
{
    data.forEach(function(el){
        let div=document.createElement("div")
        let image=document.createElement("img")
        image.src=el.img;
        let tag=document.createElement("p")
        tag.innerText=el.tag;
        let name=document.createElement("p")
        name.innerText=el.name;
        let pr=document.createElement("p")
        pr.innerText="Mrp:Rs"+el.price;
        let des=document.createElement("p")
        des.innerText=el.description
        let sp=document.createElement("span")
        sp.innerText="Qua"
        let inp=document.createElement("input")
        inp.type="number"
        let but=document.createElement("button")
        but.innerText="Add to cart"
        but.setAttribute("class","butt1")
        but.addEventListener("click",function(){
            add.push(el)
            localStorage.setItem("add to cart",JSON.stringify(add))
        })
        div.append(image,tag,name,pr,des,sp,inp,but)
        document.querySelector(".prdetails").append(div)
    })
}
displaycard(pr)