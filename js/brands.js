
const brands ="./products/brands";
   
async function gnr() 
{
  try {
     const dt= await fetch(brands); 
     const dat =await dt.json();
     const data = dat.brands;
     document.getElementById("brandsdiv").innerHTML=`${data.map(gener).join('')}`;
                function gener(branitm) {
                    const a= document.getElementById("brandsdiv").innerHTML =` <div class="p-3 ">
                <div class="card" style="width: 17rem;" onclick="brandprdcts(\'${branitm.name}\');">
                    <img class="card-img-top" src="${branitm.img}" style=" height :15rem;" alt="Card image cap">
                    <div class="card-body d-flex justify-content-center">
                    <p class="card-text">${branitm.name}</p>
                    </div>
                </div>
                </div>`;
                return a;
                }
    } catch (error) {
     console.log(error);   
    }
}

// console.log(location.href);

if (location.href.includes("brands")) {
    gnr();
}


async function brandprdcts(brandname) {
     
    try {
        const dts= await fetch(brands); 
        const dats =await dts.json();
        const bdata = dats.brands;
b=0;
        while (brandname != bdata[b].name) {
            b++
        }

        const brMen = bdata[b].thisbrandproducts.MEN;
        const brWomen =bdata[b].thisbrandproducts.WOMEN;
        // const both = brMen.concat(brWomen);
        
        console.log(brMen);
        console.log(brWomen);
        // console.log(both);
        localStorage.setItem('brandname',brandname);
        localStorage.setItem('brandMen',JSON.stringify(brMen));
        localStorage.setItem('brandWomen',JSON.stringify(brWomen));
        
        // redirect into brand.html where everything should be generated , men women cards and the modal
        location.href ="brand.html";

    } catch (error) {
        console.log(error);
    }
     

 }

MeN = localStorage.getItem('brandMen');
woMeN = localStorage.getItem('brandWomen');
bmen = JSON.parse(MeN);
bwomen = JSON.parse(woMeN);
bOth =bmen.concat(bwomen);


function generateBoth(bmen,bwomen) {
    both =bmen.concat(bwomen);
    //
    bn=localStorage.getItem('brandname');
   
    document.getElementById('productdiv').innerHTML =`${both.map(generat).join('')}`;
    document.getElementById('brandname').innerText= bn;
document.getElementById('staticBackdropLabel').innerText =`${bn}`;

}

function generat(eLement){
    return `<div class="pb-5 ">
    <div class="card shadow-lg" style="width: 16rem;" onclick="clickdme('${eLement.id}');"  >
  <img class="card-img-top" src="${eLement.mainphoto}">  
  <div class="card-body ">
  <h4 class="card-title" style="font-family:  Georgia, 'Times New Roman', Times, serif; font-weight: bold; font-size: 14px;">${eLement.name}</h4>
  </div>
  <div class="pl-3 " id="stars"></div>
<h5 class=" text-right  pr-4 " style="font-family:  Georgia, 'Times New Roman', Times, serif; font-weight: bold; font-size: 14px;"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-currency-dollar" viewbox="0 0 16 16">
  <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"></path>
</svg>${eLement.price} USD</h5>
</div></div>`;
}
function generateMenProducts(bmen) {
  //
  document.getElementById('productdiv').innerHTML =`${bmen.map(generat).join('')}`;
bn = localStorage.getItem('brandname');
  document.getElementById('brandname').innerText =`${bn} - Men`; 
    
}

function generateWomenProducts(bwomen) {
//
document.getElementById('productdiv').innerHTML =`${bwomen.map(generat).join('')}`;
bn = localStorage.getItem('brandname');
  document.getElementById('brandname').innerText =`${bn} - Women`; 
}


function clickdme(Id) {
ac =0;
while (bOth[ac].id != Id) {
    ac++;
}
acc = bOth[ac];
localStorage.setItem('click2see',JSON.stringify(acc));
console.log(acc);

location.href ="./p/product.html";
}

//fn that generate the images in carousel
function generateCarousel(pictures) {

 return document.getElementById("carousel").innerHTML = `
    <div class="carousel-item ">
        <img src="${pictures}" class="d-block w-100" alt="...">
    </div>`;
  }

  function generatecolors(color) {
    return document.getElementById("availablecolors").innerHTML=`<button type="button" style="height: 40px;width: auto;margin-right: 8px;margin-top: 5px;margin-bottom: 5px;" onclick="iwantthiscolor(\'${color}\');" class="btn btn-outline-dark p-2">${color}</button>`;
  }
  
  function generatesizes(size) {
  return document.getElementById("availableSizes").innerHTML=`<button type="button" style="height: 40px;width: auto;margin-right: 8px;margin-top: 5px;margin-bottom: 5px;" onclick="iwantthissize(\'${size}\');" class="btn btn-outline-dark p-2">${size}</button>`;
  }
  
  function iwantthiscolor(colorString) {
    thisP =localStorage.getItem('click2see');
    dP=JSON.parse(thisP);
    
    let Cl ={
      id:dP.id,
      color:colorString
    };
    
    localStorage.setItem("colorChosen",JSON.stringify(Cl));

}

  function iwantthissize(sizeString) {
    thisProduct =localStorage.getItem('click2see');
    thisprdct=JSON.parse(thisProduct);
    
let Sz ={
  id:thisprdct.id,
  size:sizeString
};

localStorage.setItem("sizeChosen",JSON.stringify(Sz));
  }


  // function called onclik on a card
 function callmeOnloadingProduct(){
 
  cop =localStorage.getItem('click2see');
  copy = JSON.parse(cop);
  //fetching from
 
   tof = copy.additionalphotos;

   size = copy.availableSizes;
  colors =copy.availableColors;

document.getElementById("prd4cts").innerHTML =`<!--generate-->
<div id="spaceontop" style="height: 6vh;"></div>

  <div class="row justify-content-around ">
  
    <div class="" style="height: 100%;width: 100vh;max-width: 420px;"> 
    <!-- carousel goes here -->
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
      <div class="carousel-inner ">
        <div class="carousel-item active">
          <img src="${copy.mainphoto}" class="d-block w-100" alt="...">
        </div>
       <div id="carousel" ></div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewbox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"/></svg>  
      </a>
      <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewbox="0 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/></g></svg>
      </a>
    </div>
    <!--  -->
    </div>

    <div class="col" style="min-width: 310px;max-width: 420px;">
     <!-- product title -->
      <h3 class=" p-1" style="font-size: 32px;font-weight: 200;">${copy.name}</h3>
     <!-- product price -->
      <h3 class="row m-0 ">
        <!-- new price -->
        <a class="m-2 text-dark h3">$${copy.price}</a>
        <!-- old price -->
        <small class="mt-1">
          <del class="lead" style="font-size: 2vh;">$${copy.oldprice}</del>
        </small>
      </h3>

    <!-- available colors -->
    <div class=" p-0 ">
      <!-- colors -->
      <h5 style="font-weight: 400;">Choose a Colors:</h5>
      <div class="btn-group d-block  d-inline-block " id="availablecolors" style="padding: 10px;" role="group" aria-label="Basic example">
        
      </div>

      <!-- sizes -->
      <h5 style="font-weight: 400;">Choose the size:</h5>
      <div class="btn-group d-block  d-inline-block " id="availableSizes" style="padding: 8px;" role="group" aria-label="Basic example">
      
      </div>
      <!-- add to cart -->
        <div class="p-3">
          <button type="button" style="font-size: 20px;" onclick="addtoCart(\'${copy.id}\');" id="addtocart" class="btn btn-outline-dark col-12">Add to Cart</button>
        </div>

    </div>

    </div>
  </div>

  <!-- description start-->
  <div style="height: 5vh;"></div>
  <div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn  btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Description
        </button>
      </h2>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
        ${copy.description}
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Specifications
        </button>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
        ${copy.specification}
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h2 class="mb-0">
        <button class="btn btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Shipping-policy
        </button>
      </h2>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae suscipit tellus mauris a diam. Semper eget duis at tellus at urna condimentum mattis pellentesque. Sed risus pretium quam vulputate dignissim suspendisse in est ante. Sed nisi lacus sed viverra tellus in. Magna ac placerat vestibulum lectus mauris ultrices. Arcu non odio euismod lacinia at quis risus sed. Turpis cursus in hac habitasse platea. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Velit aliquet sagittis id consectetur. Sit amet porttitor eget dolor morbi non. Consequat ac felis donec et odio pellentesque. Adipiscing elit duis tristique sollicitudin nibh sit amet. Eu nisl nunc mi ipsum faucibus vitae aliquet nec. Sed tempus urna et pharetra pharetra massa massa ultricies. Eget aliquet nibh praesent tristique magna sit amet purus.
      </div>
    </div>
  </div>
</div> 
    
  <!-- desciption end -->

<!-- similar products -->
<div class=" d-flex justify-content-center text-dark h2 p-2" > similar products</div>
<hr>
<div class="row d-flex justify-content-around" id="similarProducts">
  <!--here cards generated-->

</div>

<!--generated-->`;

    document.getElementById('carousel').innerHTML =`${tof.map(generateCarousel).join('')}`;
    document.getElementById('availablecolors').innerHTML=`${colors.map(generatecolors).join('')}`;
    document.getElementById('availableSizes').innerHTML =`${size.map(generatesizes).join('')}`;

   
}

