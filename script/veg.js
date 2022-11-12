let arr=[{
    img:"https://www.bigbasket.com/media/uploads/p/s/10000069_20-fresho-capsicum-green.jpg",
    tag:"Fresho",
    name:"Capsicum - Green (Loose)",
    price:"41",
    catagory:"vegitable",
    description:"Standard Delivery: Tomorrow 3:00PM - 7:30PM",
},
{
    img:"https://www.bigbasket.com/media/uploads/p/s/10000071_14-fresho-carrot-orange.jpg",
    tag:"Fresho",
    name:"Carrot - Orange (Loose)",
    price:"75",
    catagory:"vegitable",
    description:"Standard Delivery: Tomorrow 3:00PM - 7:30PM",
},
{
    img:"https://www.bigbasket.com/media/uploads/p/s/10000097_19-fresho-coriander-leaves.jpg",
    tag:"Fresho",
    name:"Coriander Leaves",
    price:"8.50",
    catagory:"vegitable",
    description:"Standard Delivery: Tomorrow 3:00PM - 7:30PM",
},
{
    img:"https://www.bigbasket.com/media/uploads/p/s/10000102_17-fresho-cucumber.jpg",
    tag:"Fresho",
    name:"Cucumber (Loose)",
    price:"18.50",
    catagory:"vegitable",
    description:"Standard Delivery: Tomorrow 3:00PM - 7:30PM",
},
{
    img:"https://www.bigbasket.com/media/uploads/p/s/10000144_13-fresho-ladies-finger.jpg",
    tag:"Fresho",
    name:"Ladies' Fingers (Loose)",
    price:"19.75",
    catagory:"vegitable",
    description:"Standard Delivery: Tomorrow 3:00PM - 7:30PM",
},
{
    img:"https://www.bigbasket.com/media/uploads/p/s/10000148_30-fresho-onion.jpg",
    tag:"Fresho",
    name:"Onion (Loose)",
    price:"44",
    catagory:"vegitable",
    description:"Standard Delivery: Tomorrow 3:00PM - 7:30PM",
},
{
    img:"https://www.bigbasket.com/media/uploads/p/s/10000200_17-fresho-tomato-hybrid.jpg",
    tag:"Fresho",
    name:"Tomato - Hybrid (Loose)",
    price:" 19.50",
    catagory:"vegitable",
    description:"Standard Delivery: Tomorrow 3:00PM - 7:30PM",
},
{
    img:"https://www.bigbasket.com/media/uploads/p/s/10000200_17-fresho-tomato-hybrid.jpg",
    tag:"Fresho",
    name:"Tomato -Local (Loose)",
    price:" 19.50",
    catagory:"vegitable",
    description:"Standard Delivery: Tomorrow 3:00PM - 7:30PM",
},
{
    img:"https://www.bigbasket.com/media/uploads/p/s/10000200_17-fresho-tomato-hybrid.jpg",
    tag:"Fresho",
    name:"POTATO (Loose)",
    price:"47",
    catagory:"vegitable",
    description:"Standard Delivery: Tomorrow 3:00PM - 7:30PM",
},
{
    img:"https://www.bigbasket.com/media/uploads/p/s/40089742_2-fresho-beans-haricot.jpg",
    tag:"Fresho",
    name:"Beans - Haricot (Loose)",
    price:" 27",
    catagory:"vegitable",
    description:"Standard Delivery: Tomorrow 3:00PM - 7:30PM",
},
]
let prdetails=[]
// console.log(arr)
let arr4=JSON.parse(localStorage.getItem("add to cart"))||[]
function dis(data)
{
    data.forEach(function(el){
        let div=document.createElement("div")
        div.addEventListener("click",function(){
            prdetails.push(el)
            localStorage.setItem("productdetails",JSON.stringify(prdetails))
            window.location.href="./productdetails.html"
        })
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
            arr4.push(el)
            localStorage.setItem("add to cart",JSON.stringify(arr4))
        })
        div.append(image,tag,name,pr,des,sp,inp,but)
        document.querySelector(".vegitable").append(div)
    })
}
dis(arr)