document.getElementById('deposit-button').addEventListener('click',function(){
    // console.log('depo clicked');
    
    let depositInput = document.getElementById('deposit-input');
    let depositAmountText = depositInput.value;
    let depositAmount = parseFloat(depositAmountText);
    // console.log(depositAmount);

    // current diposit
    let depositTotal =document.getElementById('deposit-total');
    
    // depositTotal.innerText = depositAmount;
    let previousDepositText = depositTotal.innerText;
    let previousDepositTotal = parseFloat(previousDepositText);
    // console.log(previousDepositText);
    let newDepositeTotal = previousDepositTotal + depositAmount;
    depositTotal.innerText = newDepositeTotal;

    depositInput.value = '';


    // update balance
    let balanceTotal = document.getElementById('balance-total');
    let previousBalanceText = balanceTotal.innerText;
    let previousBalanceTotal = parseFloat(previousBalanceText);

    let newBalanceTotal = previousBalanceTotal + depositAmount;
    balanceTotal.innerText = newBalanceTotal;
    
})

// widthdraw event handler
document.getElementById('widthdraw-button').addEventListener('click',function(){
    let widthdrawInput = document.getElementById('widthdraw-input');
    let widthdrawAmountText = widthdrawInput.value;
    let WidthdrawAmount = parseFloat(widthdrawAmountText);
    // console.log(widthdrawAmountText);

    let widthdrawTotal = document.getElementById('widthdraw-total');
    let widthdrawTotalText = widthdrawTotal.innerText;
    let newWidthdrawAmount = parseFloat(widthdrawTotalText);

    let newWidthdrawTotal = newWidthdrawAmount + WidthdrawAmount;


    widthdrawTotal.innerText = newWidthdrawTotal;

    widthdrawInput.value = '';
    // widthdrawTotal.innerText = widthdrawAmount;
    let balanceTotal = document.getElementById('balance-total');
    let previousBalanceText = balanceTotal.innerText;
    let previousBalanceTotal = parseFloat(previousBalanceText);

    let newBalanceTotal = previousBalanceTotal - WidthdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
   // upadate balnce after widthdraw
})