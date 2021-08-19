function getInputValue(inputId){
    let inputField = document.getElementById(inputId);
    let inputAmountText = inputField.value;
    let amountValue = parseFloat(inputAmountText);
    inputField.value = '';
    return amountValue;
}


document.getElementById('deposit-button').addEventListener('click',function(){
  
    let depositAmount = getInputValue('deposit-input');

    // current diposit
    let depositTotal =document.getElementById('deposit-total');
    
    
    let previousDepositText = depositTotal.innerText;
    let previousDepositTotal = parseFloat(previousDepositText);
    let newDepositeTotal = previousDepositTotal + depositAmount;

    depositTotal.innerText = newDepositeTotal;


    // update balance
    let balanceTotal = document.getElementById('balance-total');
    let previousBalanceText = balanceTotal.innerText;
    let previousBalanceTotal = parseFloat(previousBalanceText);

    let newBalanceTotal = previousBalanceTotal + depositAmount;
    balanceTotal.innerText = newBalanceTotal;
    
})

// widthdraw event handler
document.getElementById('widthdraw-button').addEventListener('click',function(){
   
    let WidthdrawAmount  = getInputValue('widthdraw-input');

    let widthdrawTotal = document.getElementById('widthdraw-total');
    let widthdrawTotalText = widthdrawTotal.innerText;
    let newWidthdrawAmount = parseFloat(widthdrawTotalText);

    let newWidthdrawTotal = newWidthdrawAmount + WidthdrawAmount;

    widthdrawTotal.innerText = newWidthdrawTotal;

    
    // widthdrawTotal.innerText = widthdrawAmount;
    let balanceTotal = document.getElementById('balance-total');
    let previousBalanceText = balanceTotal.innerText;
    let previousBalanceTotal = parseFloat(previousBalanceText);

    let newBalanceTotal = previousBalanceTotal - WidthdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
   // upadate balnce after widthdraw
})