const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 9) {
        counter = 1;
    }
}, 5000);


let trenddata = [
    {
        img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/17d6b165-a222-4e0e-9d2e-20c34236e277_425x425.jpg",
        name: "HA TAPIOCA FLOUR 400G",
        price: "299",
        quantity: "1",
        productID: "11",
    },
    {
        img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/97e020df-acc1-4b42-bc2c-40160bacf0c0_425x425.jpg",
        name: "KW MAGNUM CHOCOTRFFLE STICK 80Ml",
        price: "80",
        quantity: "1",
        productID: "12",
    },
    {
        img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/dbffcc93-9bce-442f-837f-d5d5f073c0c0_425x425.jpg",
        name: "HAAGEN DAZS MANGO RASPBERRY 473Ml",
        price: "710",
        quantity: "1",
        productID: "13",
    },
    {
        img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/8c103df4-090e-464c-a2d4-3b5c264d74f9_425x425.jpg",
        name: "WINGREENS TANDOORI HUMMUS 150G",
        price: "168",
        quantity: "1",
        productID: "14",
    },
]



// let trendbox=document.querySelector("#trend").createElement("div")
// trendbox.createElement("img")

let arrdata = []
let res = trenddata.forEach(function (el) {
    let divs = document.createElement("div");
    divs.setAttribute("class","trendbox")
    let inner1 = document.createElement("p");
    inner1.innerText = "DELIVERY IN 90 MINUTES";
    inner1.setAttribute("class", "dely")
    let imgs = document.createElement("img");
    imgs.src = el.img;
    imgs.setAttribute("class", "imgift")
    let texts1 = document.createElement("p");
    texts1.innerText = el.name;
    texts1.setAttribute("class", "des")
    let texts2 = document.createElement("p");
    texts2.innerText = "MRP" + " " + "₹" + el.price;
    texts2.setAttribute("class", "pri")
    let btn = document.createElement("img");
    btn.src = "https://www.naturesbasket.co.in/Images/CartAddBtn.PNG";
    btn.setAttribute("class", "cartthg")
    btn.addEventListener("click", function () {
        console.log(el)
        arrdata.push(el)
        console.log(arrdata)
        localStorage.setItem("cartmei", JSON.stringify(arrdata))
    })
    divs.append(imgs, inner1, texts1, texts2, btn);
    document.querySelector("#trend").append(divs)
})