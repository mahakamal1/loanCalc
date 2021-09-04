const form = document.querySelector('#loanCalculator');
const load = document.querySelector(".loading");
const res = document.querySelector(".resulted");


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    res.style.display = 'none';
    load.style.display = 'block';
    setTimeout(calcultates , 2000);
})


function calcultates(e){
    const loanAmount = document.querySelector("#loan-amount");
    const loaninterest = document.querySelector("#interest");
    const Repay = document.querySelector("#repay");
    const Calculate = document.querySelector("#Calculate");
    const monthlyPayment = document.querySelector("#Monthly-Payment");
    const TotalPayment = document.querySelector("#Total-Payment");
    const TotalInterest = document.querySelector("#Total-Interest");
    const principle = parseFloat(loanAmount.value);
    const calculatedPayment = parseFloat(Repay.value)*12;
    const calculatedInterest = parseFloat(loaninterest.value)/100/12;
    const x = Math.pow(1+calculatedInterest,calculatedPayment);
    const monthly = (principle* x *calculatedInterest)/(x-1);
    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        TotalPayment.value = (monthly*calculatedPayment).toFixed(2);
        TotalInterest.value = ((monthly*calculatedPayment)-principle).toFixed(2);
        res.style.display = 'block';
        load.style.display = 'none';
    }
    else
    {
        res.style.display = 'none';
        load.style.display = 'none';
        alert('Please Enter Valid Input');
    }
}