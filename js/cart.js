function webLoaded(){

    //onload updates the stored previousely products to cart
  let cartnumbers = localStorage.getItem('cartNumbers');
  if (cartnumbers) {
    document.getElementById("shpncrt").textContent = cartnumbers;    
  }

}

cart =localStorage.getItem('cart');

if (cart == null ) {
  var cartARR = [];
 
} else {
  var cartARR =JSON.parse(cart);

}

//add to cart
function addtoCart(prodctId) {

  let tmp = {
    id:prodctId,
    Color:null,
    Size:null,
    Uid:prodctId,
    q:1
  };

  // console.log(prodctId);

    let cartnumbers = localStorage.getItem('cartNumbers');
    cartnumbers = parseInt(cartnumbers);
  
    if (cartnumbers) {
  
      localStorage.setItem('cartNumbers',cartnumbers+1);
      document.getElementById("shpncrt").textContent=cartnumbers+1;
      
    } else {
      localStorage.setItem('cartNumbers',1);
      document.getElementById("shpncrt").textContent= 1;
    }

  
//make an array of objects each object contain product id and quantity, then fetch em and generate em in the Mycart.html
clr =localStorage.getItem('colorChosen');
color = JSON.parse(clr);
sz = localStorage.getItem('sizeChosen');
size= JSON.parse(sz);
if (color || size) {


      if (color && prodctId == color.id ) {
        tmp.Color = color.color;
        // 
        tmp.Uid = tmp.Uid + tmp.Color;
        console.log(tmp);
      } 
      if (size && prodctId == size.id){
          tmp.Size = size.size;
          // 
          tmp.Uid =tmp.Uid + tmp.Size;
          console.log(tmp);
      }


  //check if ids match , then if match merge then add to cart but befor adding check if exist already similar if it is ancreament if not push new
} else {
  // console.log("we both dont exist");
  //add it directly with no size and color but check if exist similar then ancrement if not push new
}
// ancrement it if exist similar , push it if a similar one doesnt exist  
let doiexist = 0;
for (let i = 0; i < cartARR.length; i++) {
  if (tmp.id == cartARR[i].id && tmp.Color == cartARR[i].Color && tmp.Size == cartARR.Size) {
doiexist = 1;    
 //ancrement it
 cartARR[i].q++;
 console.log("added other time");
 console.log(cartARR);

  }
}

if (doiexist == 0) {
  // cartids.push(prodctId);
//push it
cartARR.push(tmp);
console.log(cartARR);
}

/*
get cartobject array
if null
set new 
if !null
push the new object to the array
*/
  
localStorage.setItem('cart',JSON.stringify(cartARR));
// localStorage.setItem('ids',JSON.stringify(cartids));
cart =localStorage.getItem('cart');
// aidis =localStorage.getItem('ids');

document.getElementById("addtocart").parentElement.innerHTML=`<button type="button" style="font-size: 20px;" class=" btn btn-outline-dark btn-dark bg-dark col-12 text-white"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-cart-check mb-1 mr-1" viewbox="0 0 18 18">
<path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
<path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg> Added to Cart</button>`;


  }

  function checkifexist(prodctId) {
    
  }


function del(Id) {
  p=0;
  w=0;

  c =localStorage.getItem('cart');
  // ais =localStorage.getItem('ids');

  var arr =JSON.parse(c);
  // var asid=JSON.parse(ais);

  // while (Id != asid[p]) {
  //   p++;
  // }
  while (Id != arr[w].Uid) {
    w++;
  }

  qtt = arr[w].q;
  let cnumbers = localStorage.getItem('cartNumbers');
  cnumbers = parseInt(cnumbers);
  cnumbers = cnumbers-qtt;
localStorage.setItem('cartNumbers',cnumbers);
  // console.log(cnumbers);


  arr.splice(w,1);
  localStorage.setItem('cart',JSON.stringify(arr));

  // asid.splice(p,1);
  // localStorage.setItem('ids',JSON.stringify(asid));

  console.log(arr);
  // console.log(asid);
  location.reload();

}

  webLoaded();

  