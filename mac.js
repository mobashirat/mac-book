
// for memory
const memoryzero = document.getElementById('memorycost-notchanged');
const memoryIncrease = document.getElementById('memorycost-changed');

const updateMemoryCost = document.getElementById('memory-increase');




memoryzero.addEventListener('click', function () {
    updateMemoryCost.innerText = 0;
    updateTotal()

})
memoryIncrease.addEventListener('click', function () {
    updateMemoryCost.innerText = 180;
    updateTotal()
})

// for storage

const storageZero = document.getElementById('storage-input');

const storageincrese = document.getElementById('storage-inputincrease');

const storageMoreIncrease = document.getElementById('storage-input-morein');


const updateStorageCost = document.getElementById('storage-increase');



storageZero.addEventListener('click', function () {

    updateStorageCost.innerText = 0;
    updateTotal()

})
storageincrese.addEventListener('click', function () {
    updateStorageCost.innerText = 100;
    updateTotal()
})
storageMoreIncrease.addEventListener('click', function () {
    updateStorageCost.innerText = 180;
    updateTotal()
})

// for delivery

const deliveryZero = document.getElementById('delivery-input');
const deliveryIncrese = document.getElementById('delivery-inputincrease');

const updateDelivery = document.getElementById('delivery-total');

deliveryZero.addEventListener('click', function () {
    updateDelivery.innerText = 0;
    updateTotal()

})
deliveryIncrese.addEventListener('click', function () {
    updateDelivery.innerText = 20;
    updateTotal()

})
// Update Total-Price
const totalPrice = document.getElementById('total');

const updateGrandTotal = document.getElementById('update-total');




function updateTotal() {
    const memoryCost = parseInt(updateStorageCost.innerText);
    const storageCost = parseInt(updateStorageCost.innerText);
    const deliveryCost = parseInt(updateDelivery.innerText);

    const grandTotal = parseFloat(memoryCost + storageCost + deliveryCost) + 1299;
    totalPrice.innerText = grandTotal;
    updateGrandTotal.innerText = grandTotal;
}

// apply-button

document.getElementById('apply-button').addEventListener('click', function () {
    const applyPin = document.getElementById('pincode');
    const forDiscount = applyPin.value;
    if (forDiscount == stevekaku) {
        grandTotal = (grandTotal - 20) / 100;
    }
    else {
        grandTotal;
    }
})






