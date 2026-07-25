let extraSoap = 0;
let extraCream = 0;

const SOAP_PRICE = 250;
const CREAM_PRICE = 400;
const COMBO_PRICE = 650;

function updateOrder() {

document.getElementById("soapQty").innerText = extraSoap;
document.getElementById("creamQty").innerText = extraCream;

document.getElementById("totalSoap").innerText = 1 + extraSoap;
document.getElementById("totalCream").innerText = 1 + extraCream;

let total =
COMBO_PRICE +
(extraSoap * SOAP_PRICE) +
(extraCream * CREAM_PRICE);

document.getElementById("grandTotal").innerText = "৳" + total;

}

function changeSoap(num){

extraSoap += num;

if(extraSoap < 0){
extraSoap = 0;
}

updateOrder();

}

function changeCream(num){

extraCream += num;

if(extraCream < 0){
extraCream = 0;
}

updateOrder();

}

document
.getElementById("orderForm")
.addEventListener("submit",function(e){

e.preventDefault();

let total =
COMBO_PRICE +
(extraSoap * SOAP_PRICE) +
(extraCream * CREAM_PRICE);

alert(
"🎉 অর্ডার সফল!\n\n" +
"মোট Soap : " + (1+extraSoap) +
"\nমোট Cream : " + (1+extraCream) +
"\n\nসর্বমোট : ৳" + total +
"\n\nআমাদের প্রতিনিধি খুব দ্রুত আপনার সাথে যোগাযোগ করবে।"
);

this.reset();

extraSoap = 0;
extraCream = 0;

updateOrder();

});

updateOrder();
