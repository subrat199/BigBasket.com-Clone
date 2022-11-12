
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
        pr.innerText="Mrp:Rs"+el.price;
        let des=document.createElement("p")
        des.innerText=el.description
        let sp=document.createElement("span")
        sp.innerText="Qua"
        let inp=document.createElement("input")
        inp.type="number"
        let addtobag=document.createElement("button")
        addtobag.innerText="+";
        let count=0;
        let total;
        addtobag.addEventListener("click",function(){
            count++;
            // console.log(el.price)
            if(count>=0)
            {
                inp.value=count
                total=(+(el.price)*count)
               console.log(total)
               document.querySelector("h1").innerText=total
            }
          
        })
        let remove=document.createElement("button")
        remove.innerText="-"
        remove.addEventListener("click",function(){
            count--;
            // console.log(el.price)
            if(count>=0)
            {
                inp.value=count
                bag=(+(el.price))
                total=total-(bag)
               document.querySelector("h1").innerText=total
            }
            else{
                document.querySelector("h1").innerText="0"
            }
          
        })
           
        div.append(image,tag,name,pr,des,sp,inp,addtobag,remove)
        document.querySelector(".cart").append(div)
    })
}
display(arr5)
