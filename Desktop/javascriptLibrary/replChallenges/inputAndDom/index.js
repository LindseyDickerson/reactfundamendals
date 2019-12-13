    const replForm = document.getElementById('replForm');

    replForm.onsubmit = submit;
    function submit(event) {

    let whereBuy = document.getElementById('storeInput').value;
    let numberBuy = document.getElementById('quantityInput').value;
    let whatBuy = document.getElementById('productInput').value;
    
    console.log(whereBuy, whatBuy, numberBuy);

    event.preventDefault();
    let statement = `I went to ${whereBuy} and bought ${numberBuy} ${whatBuy}'s.`
    console.log(statement);

    let shoppingList = document.createElement('p');

    shoppingList.innerText = statement;
    document.getElementById('replForm').appendChild(shoppingList);
        
} 