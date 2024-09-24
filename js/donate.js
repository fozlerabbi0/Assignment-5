// 1st card
document.getElementById('donate-noakhali').addEventListener('click', function () {

    const inputNouakhali = parseFloat(document.getElementById('input-nouakhali').value);
    const inputAddMoney = parseFloat(document.getElementById('input-add-money').innerText);
    const newBalance = inputNouakhali + inputAddMoney;
    // console.log(newBalance);   
    document.getElementById('input-add-money').innerText = newBalance;
    // min-balance
    const minBalance = parseFloat(document.getElementById('min-balance').innerText);
    // update balance    
    const updateNewBalance = minBalance - newBalance;
    document.getElementById('min-balance').innerText = updateNewBalance;

})

// 2nd card
document.getElementById('donate-feni').addEventListener('click', function () {
    const inputFeni = parseFloat(document.getElementById('input-feni').value);
    const feniInputAddMoney = parseFloat(document.getElementById('feni-input-add-money').innerText);
    const newFeniBalance = inputFeni + feniInputAddMoney;
    //    add new balance
    document.getElementById('feni-input-add-money').innerText = newFeniBalance;
    // console.log(newFeniBalance);

    // add update balance
    // const feniMainBalance =parseFloat(document.getElementById('min-balance').innerText);
    // const feniUpdateNewBalance = feniMainBalance - newFeniBalance;
    // document.getElementById.apply('min-balance').innerText = feniUpdateNewBalance;
    const minBalanceFeni = parseFloat(document.getElementById('min-balance').innerText);
    const updateNewBalanceFeni = minBalanceFeni - newFeniBalance;
    document.getElementById('min-balance').innerText = updateNewBalanceFeni;

})

// 3rd card 
document.getElementById('donate-quota').addEventListener('click',function(){
    const inputQuota =parseFloat(document.getElementById('input-quota').value);
    const qoutaAddMoney =parseFloat (document.getElementById('qouta-add-money').innerText);
    const qoutaBalance = inputQuota + qoutaAddMoney ;
    document.getElementById('qouta-add-money').innerText = qoutaBalance;
    
    const qoutaMainBalance = parseFloat (document.getElementById('min-balance').innerText);
    const updateQuotaBalance = qoutaMainBalance - qoutaBalance;
    document.getElementById('min-balance').innerText = updateQuotaBalance;
    
    
})