// 1st card
document.getElementById('donate-noakhali').addEventListener('click', function () {
    const inputNouakhali = getInputValueById('input-nouakhali');
    document.getElementById('input-nouakhali').value = '';
    if (isNaN(inputNouakhali) || inputNouakhali <= 1) {
        // document.getElementById('noakhali-error-input').classList.remove('hidden')
        return alert('Invalid Input')

    }

    

    const inputAddMoney = getTextValueById('input-add-money');
    const newBalance = inputNouakhali + inputAddMoney;   
    document.getElementById('input-add-money').innerText = newBalance;
    // min-balance
    const minBalance = parseFloat(document.getElementById('min-balance').innerText);
    // update balance    
    const updateNewBalance = minBalance - newBalance;
    document.getElementById('min-balance').innerText = updateNewBalance;

    my_modal_1.showModal();

    const div = document.createElement('div');
    div.className = 'bg-slate-300 p-8 rounded-lg';
    div.innerHTML = `
            <h2 class="card-title text-color text-xl font-bold">${inputNouakhali} Taka Donate for Flood at Nokhali, Bangladesh</h2>
            <p class="text-color font-medium text-base">Date: ${new Date().toLocaleDateString()}</p>
        `
    const historyItem = document.getElementById('history-item');
    historyItem.appendChild(div);

   

});

// 2nd card
document.getElementById('donate-feni').addEventListener('click', function () {
    const inputFeni = getInputValueById('input-feni');
    document.getElementById('input-feni').value = '';
    
    if (isNaN(inputFeni) || inputFeni <= 1) {
        // document.getElementById('noakhali-error-input').classList.remove('hidden')
        return alert('Invalid Input')

    }
    const feniInputAddMoney = getTextValueById('feni-input-add-money');
    
    const newFeniBalance = inputFeni + feniInputAddMoney;
    document.getElementById('feni-input-add-money').innerText = newFeniBalance;;

    // add update balance
    
    const minBalanceFeni = parseFloat(document.getElementById('min-balance').innerText);
    const updateNewBalanceFeni = minBalanceFeni - newFeniBalance;
    document.getElementById('min-balance').innerText = updateNewBalanceFeni;

    my_modal_1.showModal()


    const div = document.createElement('div');
    div.className = 'bg-slate-300 p-8 rounded-lg';
    div.innerHTML = `
            <h2 class="card-title text-color text-xl font-bold">${inputFeni} Taka Donate for Flood at feni, Bangladesh</h2>
            <p class="text-color font-medium text-base">Date: ${new Date().toLocaleDateString()}</p>
        `
    const historyItem = document.getElementById('history-item');
    historyItem.appendChild(div);


    
    
});

// 3rd card 
document.getElementById('donate-quota').addEventListener('click',function(){
    const inputQuota = getInputValueById('input-quota');
    document.getElementById('input-quota').value = '';
    if (isNaN(inputQuota) || inputQuota <= 1) {
        // document.getElementById('noakhali-error-input').classList.remove('hidden')
        return alert('Invalid Input')

    }
    const qoutaAddMoney = getTextValueById('qouta-add-money');
    const qoutaBalance = inputQuota + qoutaAddMoney ;
    document.getElementById('qouta-add-money').innerText = qoutaBalance;
    
    const qoutaMainBalance = parseFloat (document.getElementById('min-balance').innerText);
    const updateQuotaBalance = qoutaMainBalance - qoutaBalance;
    document.getElementById('min-balance').innerText = updateQuotaBalance;

    my_modal_1.showModal()

    const div = document.createElement('div');
    div.className = 'bg-slate-300 p-8 rounded-lg';
    div.innerHTML = `
            <h2 class="card-title text-color text-xl font-bold">${inputQuota} Taka Donate for Flood at Quota, Bangladesh</h2>
            <p class="text-color font-medium text-base">Date: ${new Date().toLocaleDateString()}</p>
        `
    const historyItem = document.getElementById('history-item');
    historyItem.appendChild(div);


    
});


//  blog html added in js

document.getElementById('history-btn').addEventListener('click', function () {
    const historyBtn = document.getElementById('history-btn');
    historyBtn.className = 'bg-lime-400 btn border border-solid';
    const donationBtn = document.getElementById('donation-btn');
    donationBtn.className = "bg-slate-300 btn rounded-xl";

    const allContent = document.getElementById('all-content');
    allContent.className = 'hidden'

    const historyContainer = document.getElementById('history-container');
    historyContainer.classList.remove('hidden')
});


// Donation btn switch 
document.getElementById('donation-btn').addEventListener('click', function () {
    const historyBtn = document.getElementById('donation-btn');
    historyBtn.className = 'bg-lime-400 btn border border-solid';
    const donationBtn = document.getElementById('history-btn');
    donationBtn.className = "bg-slate-300 btn rounded-xl";

    const allContent = document.getElementById('all-content');
    allContent.classList.remove('hidden');

    const historyContainer = document.getElementById('history-container');
    historyContainer.classList.add('hidden')


})