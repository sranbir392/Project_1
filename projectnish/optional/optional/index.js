// var isfalse=true
let docheck=JSON.parse(localStorage.getItem("login"))
console.log(docheck)
if(docheck===null){
  document.querySelectorAll(".upd")[0].innerText="login"
  console.log(3);
  isfalse=true
}

let ls=localStorage.getItem("pin");
document.querySelector("#enterpin").value=ls || "Enter Pin"
document.querySelector("#span2").addEventListener("click",function(){
    // <a href="index2.html"></a>
    // console.log(3)
    location.href="index2.html"
  })
  document.querySelector("#span4").addEventListener("click",function(){
    // <a href="index2.html"></a>
    // console.log(3)
    location.href="index3.html"
  })
  document.querySelector("#search").addEventListener("click",function(){
    // <a href="index2.html"></a>
    // console.log(3)
    let y=document.querySelector("#search")
    y.setAttribute("placeholder","")
  })
  document.querySelector("#search").addEventListener("mouseout",function(){
    // <a href="index2.html"></a>
    // console.log(3)
    let y=document.querySelector("#search")
    y.setAttribute("placeholder","Start shopping...")
  })
//   let x=document.querySelector("#search").setAttribute("placeholder","Start shopping...")

  document.querySelector("#enterpindiv").addEventListener("click",function(){
    let x=document.querySelector(".ppopup_pin")
    x.style.display="flex"
  })

  document.querySelector(".closee").addEventListener("click",function(){
   let x= document.querySelector(".ppopup_pin");
   x.style.display="none"
  })
  document.querySelector("#btnAddPin").addEventListener("click",function(){
   let y= document.querySelector("#txtt").value;
   localStorage.setItem("pin",y);
   let x= document.querySelector(".ppopup_pin");
   x.style.display="none"
      window.location.reload()
  if(document.querySelector("#txtt").value!=""){
    document.querySelector("#enterpin").value=document.querySelector("#txtt").value;
  
  }
})
// document.querySelector("#nexttopin").addEventListener("change",function(){
//     localStorage.removeItem("pin");
    
<<<<<<< HEAD:projectnish/optional/optional/projectnishant/navbar/index.js
   })
=======
//    })
>>>>>>> 3d7267aa05874422fd5df0cb7d55f8f6fb72e128:projectnish/optional/optional/index.js
//    var mensData = [
//     {
//       image_url:
//         "https://content.shop4reebok.com/static/Product-EX4296/reebok_EX4296_1.jpg.plp",
//       name: "MEN'S REEBOK RUNNING ROADMAP SHOES",
//       price: "1170",
//       strikedoffprice: "$2599",
//       quantity:1,
//     },
//     {
//       image_url:
//         "https://content.shop4reebok.com/static/Product-EX3921/reebok_EX3921_1.jpg.plp",
//       name: "MEN'S REEBOK SWIM ARUBA FLIP SLIPPERS ",
//       price: 699,
//       strikedoffprice: 999,
//       quantity:1,
//     }
//    ]
// //    res()
// let arrdata=[]
//     let res=mensData.forEach(function(el){
//         let divs=document.createElement("div");
//         let imgs=document.createElement("img");
//         imgs.src=el.image_url;
//         let texts1=document.createElement("h2");
//         texts1.innerText=el.name;
//         let texts2=document.createElement("h2");
//         texts2.innerText=el.price;
//         let btn=document.createElement("button");
//         btn.innerText="Add to cart";
//         btn.addEventListener("click",function(){
//           console.log(el)
//           arrdata.push(el)
//           console.log(arrdata)
//           localStorage.setItem("cartmei",JSON.stringify(arrdata))
//         })
//         divs.append(imgs,texts1,texts2,btn);
//          document.querySelector("#check").append(divs)
//       })
<<<<<<< HEAD:projectnish/optional/optional/projectnishant/navbar/index.js
 
  // else{
let checking=JSON.parse(localStorage.getItem("login"))
if(checking!==null){
  console.log(10)
       document.querySelectorAll(".upd")[0].innerText="logout";
       
       document.querySelectorAll(".upd")[1].innerText="";
       document.querySelectorAll(".upd")[2].innerText="";
       document.querySelectorAll(".upd")[0].style.marginleft="70px"
     var isfalse=false
}
if(isfalse===false){
  document.querySelectorAll(".upd")[0].addEventListener("click",function(){
    localStorage.removeItem("login");
    window.location.reload()
   })
   }
  // }
  if(isfalse===true){
document.querySelector("#loginnav").addEventListener("click",function(){
  console.log(3)
  location.href="login.html";
})
  }
document.querySelector("#regnav").addEventListener("click",function(){
  location.href="mreg.html";
})
document.querySelector("#cartnav").addEventListener("click",function(){
  location.href="linkcart.html";
})
=======
      // document.querySelectorAll(".upd")[0].innerText="logout";
      // document.querySelectorAll(".upd")[1].innerText="";
      // document.querySelectorAll(".upd")[2].innerText="";
      // document.querySelectorAll(".upd")[0].style.marginleft="70px"

>>>>>>> 3d7267aa05874422fd5df0cb7d55f8f6fb72e128:projectnish/optional/optional/index.js
