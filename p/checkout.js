
function Confirmdetails() {
  const Fname = document.getElementById('frstname').value;
  const Lname = document.getElementById('lastname').value;
  const emailAdress = document.getElementById('email').value;
  const phone= document.getElementById('inputPhone').value;
  const Adress= document.getElementById('inputAddress').value;
  const adress2 = document.getElementById('inputAddress2').value;
  const city = document.getElementById('inputCity').value;
  const state = document.getElementById('inputStat').value;
  const zipcode = document.getElementById('inputZip').value;

 
 const data ={
     "0_firstName":Fname,
     "1_LastName":Lname,
     "2_emailAdress":emailAdress,
     "3_phoneNumber":phone,
     "4_Adress":Adress,
     "5_adress2":adress2,
     "6_city":city,
     "7_state":state,
     "8_zipcode":zipcode
     };
 
 
console.log(Fname !=0 && Lname !=0 && emailAdress !=0 && phone !=0 && Adress !=0 && city !=0 && state !=0 && zipcode !=0);

if (Fname !=0 && Lname !=0 && emailAdress !=0 && phone !=0 && Adress !=0 && city !=0 && state !=0 && zipcode !=0) {
  
 const ss =JSON.stringify(data);
 localStorage.setItem('UserShippingDetails',ss);
  window.location= "./p/payment.html";
  return false;
} 

 }


 function confirm() {

  try {
  var d = document.querySelector('.plist:checked').value;
  const a =localStorage.getItem('UserShippingDetails');
  const b =localStorage.getItem('cart');
  const c =localStorage.getItem('ids');
  ss = a+b+c+d;
 var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
if (xhr.readyState ==4 && xhr.status==200) {
  window.location="./p/success.html";
} else {
 // alert("An error has accured please re-try"); 
}
  
};
//update send.php with the directory of the php file
 xhr.open("POST" ,"./p/post.php",true);
 xhr.setRequestHeader("Content-Type","application/json");
 xhr.send(ss);

  } catch (error) {
    console.log(error);  
    alert("Please Choose a Payment Method");
  }

 }