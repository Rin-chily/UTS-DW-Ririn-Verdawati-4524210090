console.log("Script berhasil dijalankan!");

const fruitName = document.querySelector('#fruitName');
const fruitPrice = document.querySelector('#fruitPrice');
const fruitStock = document.querySelector('#fruitStock');
const addFruit = document.querySelector('#addFruit');
const fruitList = document.querySelector('#fruitList');

addFruit.addEventListener("click", function(){ 
    const nama = fruitName.value.trim();
    const harga = fruitPrice.value.trim();
    const stok = fruitStock.value.trim();

    if (nama === "" || harga === "" || stok === "") {
        alert("Semua data herus diisi terlebih dahulu");
        return;
    }

    const item = document.createElement("li");
    item.textContent = `${nama} - Rp ${parseInt(harga).toLocaleString('id-ID')} - Stok: ${stok}kg`;
    fruitList.appendChild(item);

    fruitName.value = "";
    fruitPrice.value = "";
    fruitStock.value = "";
});