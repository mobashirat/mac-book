
// function updateExtraMemory(updating) {

//     const memoryInput = document.getElementById('memory-increase');
//     const memoryNumber = memoryInput.innerText;
//     if (updating == true) {
//         memoryInput.innerText = 180;

//     }
//     else {
//         memoryInput.innerText = 0;
//     }

// }

// // for storage
// function updateExtraStorage(updatingStorage) {

//     const storageInput = document.getElementById('storage-increase');
//     const storageNumber = storageInput.innerText;
//     if (updatingStorage == true) {
//         storageInput.innerText = 100;

//     }
//     else {
//         storageInput.innerText = 180;
//     }

// }

// // for delivery 
// function updateExtraDelivery(updatingDelivery) {

//     const deliveryInput = document.getElementById('delivery-total');
//     const deliveryNumber = deliveryInput.innerText;
//     if (updatingDelivery == true) {
//         deliveryInput.innerText = 20;

//     }
//     else {
//         deliveryInput.innerText = 0;
//     }

// }

// function getInputValue 






// // for memory

// document.getElementById('memorycost-changed').addEventListener('click', function () {
//     updateExtraMemory(true);
// })



// document.getElementById('memorycost-notchanged').addEventListener('click', function () {
//     updateExtraMemory(false);

// })

// // for storage


// document.getElementById('storage-input').addEventListener('click', function () {
//     updateExtraStorage(true);

// })
// document.getElementById('storage-input-two').addEventListener('click', function () {
//     updateExtraStorage(false);

// })


// // for delivery

// document.getElementById('delivery-input').addEventListener('click', function () {
//     updateExtraDelivery(true);

// })
// document.getElementById('delivery-inputnot').addEventListener('click', function () {
//     updateExtraDelivery(false);


// })


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

const storageMoreIn = document.getElementById('storage-input-morein');


const updateStorageCost = document.getElementById('storage-increase');



storageZero.addEventListener('click', function () {

    updateStorageCost.innerText = 0;
    updateTotal()

})
storageincrese.addEventListener('click', function () {
    updateStorageCost.innerText = 100;
    updateTotal()
})
storageMoreIn.addEventListener('click', function () {
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

const totalPrice = document.getElementById('total');

function updateTotal() {
    const memoryCost = parseInt(updateStorageCost.innerText);
    const storageCost = parseInt(updateStorageCost.innerText);
    const deliveryCost = parseInt(updateDelivery.innerText);
    const grandTotal = parseFloat(memoryCost + storageCost + deliveryCost);
    totalPrice.innerText = grandTotal;
}