

/* fetch and proccess each time 
fetch data =>shuffle data => generate cards where eachCard onclick it call fonction prdct(id)
fonction prdct(id) , it fetch again data and look for the object that contain the "id" parameter and generate html page for the product
*/ 

const WomenApi ="../products/women/data";


const onLoad = async () =>{
  try {
    const dt= await fetch(WomenApi); 
    const dat = await dt.json();
    const data = dat.womenproducts;
     console.log(data);
var cp =shuffle(data);
document.getElementById("sakblk").innerHTML = ` ${ cp.map(generateCard).join('') } `;
  } catch (error) {
    console.log(error);
  }
};


// that generate the cards
function generateCard(card) {
const crd = document.getElementById("sakblk").appendChild.innerHTML = ` <div class="pb-5">
 <div class="card" style="width: 16rem;" onclick="clickme(\'${card.id}\');">
   <img class="card-img-top" src="${card.mainphoto}">
   <div class="card-body ">
   <h4 class="card-title" style="font-family:  Georgia, 'Times New Roman', Times, serif; font-weight: bold; font-size: 14px;">${card.name}</h4>
   </div>
   
   <div class="pl-3 " id="stars"></div>
<h5 class=" text-right  pr-4 " style="font-family:  Georgia, 'Times New Roman', Times, serif; font-weight: bold; font-size: 14px;"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
   <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
 </svg>${card.price} USD</h5>
 </div></div>
 `
 return crd;
}


//the fn that shuffle 
function shuffle(data) {
    var copy = data, n = data.length, i;
  
    // While there remain elements to shuffle…
    while (n) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * n--);
  
      // And move it to the new array.
      copy.push(data.splice(i, 1)[0]);
    }
  
    return copy;
  }

// function called onclik on a card
async function clickme(id){
   console.log(id);

   //fetching
   try {
    
    const dt= await fetch(WomenApi); 
    const dat =await dt.json();
    const data = dat.womenproducts;
  
  var a=0; 
  var cop = data;
    while (cop[a].id != id) {
      // console.log(a++);
      a++;  
    }
    localStorage.setItem('click2see',JSON.stringify(cop[a]));
location.href="/p/product.html"
  } catch (error) {
    console.log(error);
  }
   //

 }
      
//
//
  onLoad();

    // search
  
const searchBar = document.getElementById("sss");

searchBar.addEventListener('keyup',async (e)=> {

  const dt= await fetch(WomenApi); 
  const dat =await dt.json();
  const data = dat.womenproducts;

  // console.log(e.target.value);
  // console.log(data);
  const searchString = e.target.value;
  const filtredChar = data.filter((character) => {
    return  character.name.includes(searchString);
  } );
  
  // console.log(filtredChar);
  document.getElementById("sakblk").innerHTML =`${filtredChar.map(generateCard).join('')}`;
});
