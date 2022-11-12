
let bestseller=
[
{
    img:"https://www.bigbasket.com/media/uploads/p/s/40216129_10-fresho-tender-coconut-water-no-added-sugar-flavours.jpg",
    tag:"Fresho",
    name:"Tender Coconut Water - No Added Sugar, Flavours",
    price:"27",
    catagory:"cosmetic",
    description:"Standard Delivery: Tomorrow 3:00PM - 7:30PM",
},
{
    img:"https://www.bigbasket.com/media/uploads/p/s/40163718_11-fresho-frozen-green-peas.jpg",
    tag:"Fresho",
    name:"Frozen Green Peas",
    price:" 159",
    catagory:"cosmetic",
    description:"Standard Delivery: Tomorrow 3:00PM - 7:30PM",
},
{
    img:"https://www.bigbasket.com/media/uploads/p/s/40078319_4-lakme-rose-face-powder-sunscreen.jpg",
    tag:"Fresho",
    name:"Rose Face Powder - Sunscreen",
    price:"138.75",
    catagory:"cosmetic",
    description:"Standard Delivery: Tomorrow 3:00PM - 7:30PM",
},
{
    img:"https://www.bigbasket.com/media/uploads/p/s/10000479_13-bb-royal-cuminjeera-whole.jpg",
    tag:"Fresho",
    name:"Cumin/Jeera/Jeerige - Whole",
    price:"44",
    catagory:"cosmetic",
    description:"Standard Delivery: Tomorrow 3:00PM - 7:30PM",
},
{
    img:"https://www.bigbasket.com/media/uploads/p/s/40078316_2-lakme-perfecting-liquid-foundation.jpg",
    tag:"Fresho",
    name:"Perfecting Liquid Foundation",
    price:"127.50",
    catagory:"cosmetic",
    description:"Standard Delivery: Tomorrow 3:00PM - 7:30PM",
},
{
    img:"https://www.bigbasket.com/media/uploads/p/s/106417_2-eveready-carbon-zinc-battery-red-hd-aa-1015.jpg",
    tag:"Fresho",
    name:"Carbon Zinc Battery Red HD AA 1015",
    price:"129",
    catagory:"cosmetic",
    description:"Standard Delivery: Tomorrow 3:00PM - 7:30PM",
},
{
    img:"https://www.bigbasket.com/media/uploads/p/s/10000269_31-fresho-pomegranate.jpg",
    tag:"Fresho",
    name:"Pomegranate (Loose)",
    price:"208",
    catagory:"cosmetic",
    description:"Standard Delivery: Tomorrow 3:00PM - 7:30PM",
},
{
    img:"https://www.bigbasket.com/media/uploads/p/s/40118800_21-vaseline-intensive-care-deep-moisture-body-lotion.jpg",
    tag:"Fresho",
    name:"Intensive Care Deep Moisture Body Lotion - Dry Skin, With Pure Oat Extract, Long Lasting Moisturization",
    price:"262.50",
    catagory:"cosmetic",
    description:"Standard Delivery: Tomorrow 3:00PM - 7:30PM",
},
{
    img:"https://www.bigbasket.com/media/uploads/p/s/10000800_14-bb-royal-fried-grambengal-gram.jpg",
    tag:"Fresho",
    name:"Fried Gram/Huri Kadale",
    price:"109",
    catagory:"cosmetic",
    description:"Standard Delivery: Tomorrow 3:00PM - 7:30PM",
},
{
    img:"https://www.bigbasket.com/media/uploads/p/s/40167617_7-gooddiet-ragi-sticks-achari-masala.jpg",
    tag:"Fresho",
    name:"Ragi Sticks - Achari Masala",
    price:" 13",
    catagory:"cosmetic",
    description:"Standard Delivery: Tomorrow 3:00PM - 7:30PM",
},
]

let pr=JSON.parse(localStorage.getItem("productdetails"))
console.log(pr)
let add=JSON.parse(localStorage.getItem("add to cart"))||[]

function displaycard(data)
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
        document.querySelector(".cosmetic").append(div)
    })
}
displaycard(bestseller)