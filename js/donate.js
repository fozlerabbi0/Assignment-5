document.getElementById('donate-noakhali').addEventListener('click',function(){
    
    const inputNouakhali = parseFloat (document.getElementById('input-nouakhali').value); 

    const inputAddMoney = parseFloat (document.getElementById('input-add-money').innerText );
    
    const newBalance = inputNouakhali + inputAddMoney;
    // console.log(newBalance);
    
    document.getElementById('input-add-money').innerText = newBalance;

    // min-balance

    const minBalance = parseFloat (document.getElementById('min-balance').innerText);

    // update balance    

    const updateNewBalance = minBalance - newBalance;
    
    document.getElementById('min-balance').innerText = updateNewBalance;
    

    
    
})