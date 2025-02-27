// shared style function

function getInputValueByID(id){
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

//Donate for noakhali
document.getElementById('noakhali-btn').addEventListener('click', function(){

    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    const noakhaliInput = getInputValueByID('noakhali-input');

    const noakhaliTotal = document.getElementById('noakhali-total').innerText;
    const convertedNoakhaliTotal = parseFloat(noakhaliTotal);
    

    const modal = document.querySelector(".modal");
    const closeBtn = document.querySelector(".modal-action button");


    if (noakhaliInput < 0 || noakhaliInput > convertedMainBalance){
        alert('Amount Must be a valid Number');
        return;
    }

    if(typeof noakhaliInput=== 'number' && noakhaliInput ){

        const sub = convertedMainBalance - noakhaliInput;
        document.getElementById('main-balance').innerText = sub;

        const sum = convertedNoakhaliTotal + noakhaliInput;
        document.getElementById('noakhali-total').innerText = sum;

        document.getElementById('modal-amount').innerText = noakhaliInput;
        modal.showModal();

    }else{
        alert('Please enter only a valid number');
    }

   

})

//donate for feni
document.getElementById('feni-btn').addEventListener('click', function(){

    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    const feniInput = getInputValueByID('feni-input');

    const feniTotal = document.getElementById('feni-total').innerText;
    const convertedFeniTotal = parseFloat(feniTotal);
    

    const modal = document.querySelector(".modal");
    const closeBtn = document.querySelector(".modal-action button");


    if (feniInput < 0 || feniInput > convertedMainBalance){
        alert('Amount Must be a valid Number');
        return;
    }

    if(typeof feniiInput=== 'number' && feniInput ){

        const sub = convertedMainBalance - feniInput;
        document.getElementById('main-balance').innerText = sub;

        const sum = convertedFeniTotal + feniInput;
        document.getElementById('feni-total').innerText = sum;

        document.getElementById('modal-amount').innerText = feniInput;
        modal.showModal();

    }else{
        alert('Please enter only a valid number');
    }

   

})