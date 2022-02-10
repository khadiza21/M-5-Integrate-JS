//handle doposite button event
document.getElementById("deposite").addEventListener("click", function () {
  //console.log('deposite button clicked');
  let depositeInput = document.getElementById("deposite-amount");
  let newDepositeAmount = depositeInput.value;

  let depositeTotal = document.getElementById("depositeA");

  const previousDepositeAmount = depositeTotal.innerText;
  const newDepositeTotal =
    parseFloat(previousDepositeAmount) + parseFloat(newDepositeAmount);
  depositeTotal.innerText = newDepositeTotal;

  //update balance
  let balanceTotal = document.getElementById("balanceA");
  const balanceTotalText = balanceTotal.innerText;

  const previousBalanceTotal = parseFloat(balanceTotalText);

  const newBalanceTotal = previousBalanceTotal + parseFloat(newDepositeAmount);
  balanceTotal.innerText = newBalanceTotal;

  depositeInput.value = "";
});

//handle withdraw button
document.getElementById("withdraw").addEventListener("click", function () {
  //console.log('deposite button clicked');
  let withdrawInput = document.getElementById("withdraw-amount");
  let newWithdrawAmount = withdrawInput.value;

  let withdrawTotal = document.getElementById("withdrawA");

  const previousWithdrawAmount = withdrawTotal.innerText;
  const newWithdrawTotal =
    parseFloat(previousWithdrawAmount) + parseFloat(newWithdrawAmount);
  withdrawTotal.innerText = newWithdrawTotal;

  //update balance
  let balanceTotal = document.getElementById("balanceA");
  const balanceTotalText = balanceTotal.innerText;

  const previousBalanceTotal = parseFloat(balanceTotalText);

  const newBalanceTotal = previousBalanceTotal - parseFloat(newWithdrawAmount);
  balanceTotal.innerText = newBalanceTotal;

  withdrawInput.value = "";
});
