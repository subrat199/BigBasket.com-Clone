let arr=[{
    img:"https://www.bigbasket.com/media/uploads/p/s/10000069_20-fresho-capsicum-green.jpg",
    tag:"Fresho",
    name:"Capsicum - Green (Loose)",
    price:"MRP:Rs.41",
    description:"Standard Delivery: Tomorrow 3:00PM - 7:30PM",
},
{
    img:"https://www.bigbasket.com/media/uploads/p/s/10000071_14-fresho-carrot-orange.jpg",
    tag:"Fresho",
    name:"Carrot - Orange (Loose)",
    price:"MRP:Rs 18.75",
    description:"Standard Delivery: Tomorrow 3:00PM - 7:30PM",
},
{
    img:"https://www.bigbasket.com/media/uploads/p/s/10000097_19-fresho-coriander-leaves.jpg",
    tag:"Fresho",
    name:"Coriander Leaves",
    price:"MRP:Rs 8.50",
    description:"Standard Delivery: Tomorrow 3:00PM - 7:30PM",
},
{
    img:"https://www.bigbasket.com/media/uploads/p/s/10000102_17-fresho-cucumber.jpg",
    tag:"Fresho",
    name:"Cucumber (Loose)",
    price:"MRP:Rs 18.50",
    description:"Standard Delivery: Tomorrow 3:00PM - 7:30PM",
},
{
    img:"https://www.bigbasket.com/media/uploads/p/s/10000144_13-fresho-ladies-finger.jpg",
    tag:"Fresho",
    name:"Ladies' Fingers (Loose)",
    price:"MRP:Rs 19.75",
    description:"Standard Delivery: Tomorrow 3:00PM - 7:30PM",
},
{
    img:"https://www.bigbasket.com/media/uploads/p/s/10000148_30-fresho-onion.jpg",
    tag:"Fresho",
    name:"Onion (Loose)",
    price:"MRP:Rs 44",
    description:"Standard Delivery: Tomorrow 3:00PM - 7:30PM",
},
{
    img:"https://www.bigbasket.com/media/uploads/p/s/10000200_17-fresho-tomato-hybrid.jpg",
    tag:"Fresho",
    name:"Tomato - Hybrid (Loose)",
    price:"MRP:Rs  19.50",
    description:"Standard Delivery: Tomorrow 3:00PM - 7:30PM",
},
{
    img:"https://www.bigbasket.com/media/uploads/p/s/10000200_17-fresho-tomato-hybrid.jpg",
    tag:"Fresho",
    name:"Tomato -Local (Loose)",
    price:"MRP:Rs  19.50",
    description:"Standard Delivery: Tomorrow 3:00PM - 7:30PM",
},
{
    img:"https://www.bigbasket.com/media/uploads/p/s/10000200_17-fresho-tomato-hybrid.jpg",
    tag:"Fresho",
    name:"POTATO (Loose)",
    price:"MRP:Rs47",
    description:"Standard Delivery: Tomorrow 3:00PM - 7:30PM",
},
{
    img:"https://www.bigbasket.com/media/uploads/p/s/40089742_2-fresho-beans-haricot.jpg",
    tag:"Fresho",
    name:"Beans - Haricot (Loose)",
    price:"MRP:Rs 27",
    description:"Standard Delivery: Tomorrow 3:00PM - 7:30PM",
},
]

function displaycard(arr)
{
    arr.forEach((el)=>{
        let div=document.createElement("div")
        let image=document.createElement("img")
        image.src=el.img;
        let Tag=document.createElement("p")
        Tag.innerText=el.tag;
        let name=document.createElement("p")
        name.innerText=el.name;
        let pr=document.createElement("p")
        pr.innerText=el.price
        let des=document.createElement("p")
        des.innerText=el.description;
        div.append(image,Tag,name,pr,des)
        document.querySelector(".veg").append(div)
    })
}
displaycard(arr)