// ITERATION 1

function updateSubtotal($product) {

  const $price = parseInt($product.querySelector('.price span').innerText);
  //console.log($price);

  const $quantity = $product.querySelector('.quantity input').value;
  //console.log($quantity)

  let $subtotal = $product.querySelector('.subtotal span');
  console.log($subtotal)
  //let subtotalResult = $price * $quantity

  return $subtotal.innerText = $price * $quantity;
  
}

function calculateAll() {

  // ITERATION 2
  let listOfProducts = document.querySelectorAll(".product")

  let sumOfSubtotals = 0;

  for (let product of listOfProducts){
    console.log(product);
    let updatedProduct = updateSubtotal(product);

    sumOfSubtotals += updatedProduct;
  }

  // ITERATION 3
  document.querySelector("#total-value span").innerText = sumOfSubtotals
}

window.addEventListener('load', () => {
  const $calculateTrigger = document.getElementById('calculate');

  $calculateTrigger.addEventListener('click', calculateAll);
});

// ITERATION 4
const $removeBtn = document.getElementsByClassName("btn-remove");
console.log($removeBtn);

for (let button of $removeBtn) {

  button.onclick = function productRemoveListener(event) {
  console.log("it's clicking")
  }
};

// ITERATION 5

const $createProduct = document.getElementById("create");

$createProduct.onclick = function createProduct(event) {
  //console.log("You clicked the button.")

  //------- TARGET NAME
  const $name = document.querySelectorAll(".create-product input")[0].value;
  //console.log($name)

  //------- TARGET PRICE
  const $price = document.querySelectorAll(".create-product input")[1].value;
  //console.log($price);

  
  //------- CREATE NEW PRODUCT
  const $newProduct = document.createElement("tr");
  
  $newProduct.innerHTML = document.querySelector(".product").innerHTML;

  $newProduct.setAttribute("class", "product");
  //console.log($newProduct)

  //------- SETTING NEW PRODUCT NAME AND PRICE VALUES
  //--- name
  const $newProductName = document.querySelector(".product .name span");
  
  $newProductName.innerText = $name;
  //console.log($newProductName)

  //--- price
  const $newProductPrice = document.querySelector(".product .price span");
  
  $newProductPrice.innerText = $price;



  //------- ADD TO PARENT ELEMENT
  const $parent = document.getElementsByTagName("tbody")[0];
  //console.log($parent.childNodes);
  $parent.appendChild($newProduct);
  //console.log($parent);


  //------- CLEAR INPUT FIELDS
  let $clearName = document.querySelectorAll(".create-product input")[0];
  $clearName.value = "";

  let $clearPrice = document.querySelectorAll(".create-product input")[1];
  $clearPrice.value = 0;

}
