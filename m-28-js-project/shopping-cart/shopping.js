// function updateProductNumber(product, price, isIncreasing) {
//   const productInput = document.getElementById(product + "-number");
//   let productNumber = productInput.value;
//   if (isIncreasing == true) {
//     productNumber = parseInt(productNumber) + 1;
//   } else if (productNumber > 0) {
//     productNumber = parseInt(productNumber) - 1;
//   }

//   productInput.value = productNumber;

//   //update total
//   const productTotal = document.getElementById(product + '-total');
//   productTotal.innerText = productNumber*price;
//   //calculate total

// }

// function calculateTotal(){
//     const phoneTotal = get
// }

// phone increase decrease events
document.getElementById("phone-plus").addEventListener("click", function () {
  let phonePrice = document.getElementById("phone-price").innerText;
  let totalPhone = document.getElementById("phones").innerText;

  console.log( totalPhone);
});
