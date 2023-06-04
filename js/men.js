import mensItems from "./productItems/mensItems.js";
const mensProducts = document.querySelector(".product-container");


function getMensItems(){
    for(let i = 0; i < mensItems.length; i++){
        mensProducts.innerHTML += `
            <div class="product-card">
                <a href="/product.html">
                    <div class="product-image">
                        <img src="${mensItems[i].image}" alt="" loading="eager">
                    </div>    
                </a>
                <div class="sale-title">
                    <p>${mensItems[i].title}</p>
                </div>
                <div class="product-price">
                    <div class="new-price">
                        <p>550 kr</p>
                    </div>
                </div>
            </div>
        `;
    }
}
getMensItems();
