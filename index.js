// const dressUrl ="https://dummyjson.com/products";

// fetch(dressUrl)
// .then((response)=>{
//     if(!response.ok){
//         throw new Error("no Dress Found");
//     }

//     return response.json
// }).then((dress)=>{
//     console.log(dress);
    
// })
 
// async function DressName() {
//     try{
//         const response =await fetch(dressUrl);
//         if(!response.ok){
//             throw new Error("No Dress Found");
//         }

//         const dress= await response.json();
//         console.log(dress.products);

//         const search =document.getElementById("inout");
//         const button = document.getElementById("but");
        
        
        
        
//         button.onclick = function() {
//             const userdata = search.value;
//             console.log(userdata);
//             if (userdata) {
//                 // console.log(dress.products[5].title);
                
//             let founder = dress.product.find(dress => dress.product[i].title === userdata); 
//                 console.log(founder);

//                 for (let i = 0; i < dress.length; i++) {

                    
//                     if (dress.products[i].title === userdata) {
//                         founder = dress[i];
//                     }
//                 }
                
//                 if (founder) {
//                     console.log('Dress found');
//                 } else {
//                     console.log('Dress not found');
//                 }
//             } else {
//                 console.log('Please enter a dress name');
//             }
//         };
        
        
        
//     }catch (error){
//         console.error("Please Enter the correct Dress Name");
//     }
    
// }
// DressName();




const buy1 = document.getElementById("buy1");
const buy2 = document.getElementById("buy2");
const buy3 = document.getElementById("buy3");
const buy4 = document.getElementById("buy4");
const buy5 = document.getElementById("buy5");
const buy6 = document.getElementById("buy6");
const buy7 = document.getElementById("buy7");
const buy8 = document.getElementById("buy8");
const buy9 = document.getElementById("buy9");
const buy10 = document.getElementById("buy10");
const buy11 = document.getElementById("buy11");
const buy12 = document.getElementById("buy12");
const number = document.getElementById("count");
const btn = document.getElementById("wheel");
const div2 = document.getElementById("comming");
const posit = document.getElementById("top");
posit.style.position = "relative";

div2.style.display = "none";

let count = 0;
let arr = [];

btn.addEventListener("click", function () {
    if (div2.style.display === "block") {
        div2.style.display = "none";
    } else {
        div2.style.display = "block";
    }
});

function updateCount() {
    number.innerHTML = `<sup>${count}</sup>`;
    number.style.fontSize = "1.5rem";
    div2.style.display = "flex";
    div2.style.display = "none";
    div2.style.flexDirection = "column";
    div2.style.right = "-80px";
    div2.style.position = "absolute";
    div2.style.zIndex = "1";

    div2.style.paddingLeft = "10px";
    div2.style.marginTop = "20px";
    div2.style.width = "200px";
    div2.style.textAlign = "left";
}

function handlePurchase(item, price) {
    count++;
    updateCount();
    arr.push({ item, price });
    console.log(arr);

    const li = document.createElement("li");
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";
    li.textContent = `${item} $${price.toFixed(2)}`;

    const image = document.createElement("img");
    image.src = "image/waste-bin.png";
    image.style.width = "20px";
    image.style.height = "20px";
    image.style.cursor = "pointer";
    li.appendChild(image);

    image.onclick = function () {
        div2.removeChild(li);
        count--;
        updateCount();
        arr = arr.filter(purchase => purchase.item !== item || purchase.price !== price);
        console.log(arr);
    };

    li.appendChild(image);
    div2.appendChild(li);
}

buy1.onclick = function () {
    handlePurchase("Shirt", 24.88);
};

buy2.onclick = function () {
    handlePurchase("Jersey T-shirt", 14.88);
};

buy3.onclick = function () {
    handlePurchase("Watch", 22.38);
};

buy4.onclick = function () {
    handlePurchase("Bangle", 4.88);
};

buy5.onclick = function () {
    handlePurchase("Shorts", 24.78);
};

buy6.onclick = function () {
    handlePurchase("Jersey T-Shirt", 34.68);
};

buy7.onclick = function () {
    handlePurchase("Short", 14.98);
};

buy8.onclick = function () {
    handlePurchase("Shirt", 48.88);
};

buy9.onclick = function () {
    handlePurchase("Short", 12.88);
};

buy10.onclick = function () {
    handlePurchase("Jersey T-Shirt", 13.98);
};

buy11.onclick = function () {
    handlePurchase("Mobile Cover", 16.98);
};

buy12.onclick = function () {
    handlePurchase("Jersey T-Shirt", 18.88);
};
