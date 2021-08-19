function getInputValue(inputId){
    // debugger;
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    inputField.value = '';
    return amountValue;
}

function updateTotalAmount(totalFieldId, depositAmount){
    // debugger;
    const totalAmount =document.getElementById(totalFieldId);    
    const totalText = totalAmount.innerText;
    const previousTotal = parseFloat(totalText);
    totalAmount.innerText = previousTotal + depositAmount;
}
function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    return previousBalanceTotal;
}
function updateBalance(amount, issAdd){
    // debugger;
     const balanceTotal = document.getElementById('balance-total');
   /* const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText); */
    const previousBalanceTotal = getCurrentBalance();
    if (issAdd == true){
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}


document.getElementById('deposit-button').addEventListener('click',function(){
  
    const depositAmount = getInputValue('deposit-input');

    if (depositAmount > 0){
        updateTotalAmount('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
    
    
})

// widthdraw event handler
document.getElementById('widthdraw-button').addEventListener('click',function(){

    const widthdrawAmount  = getInputValue('widthdraw-input');
    const currentBalance = getCurrentBalance();
    if (widthdrawAmount > 0 && widthdrawAmount <= currentBalance){
        updateTotalAmount('widthdraw-total', widthdrawAmount);
        updateBalance(widthdrawAmount, false);
    }
     if (widthdrawAmount> currentBalance){
         console.log('You are excedding your current balance!!!')
     }
    
})