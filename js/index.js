// Grnerate items and display them to the Dom

import items from "./items.js";

const productContainer = document.querySelector(".product-container");


function getItems(arg) {
    for(let i = 0; i < items.length; i++){

        productContainer.innerHTML += `
            <div class="product-card">
                        <a href="product.html?id=${items[i].id}">
                            <div class="product-image">
                                <img src="${items[i].image}" alt="" loading="eager">
                            </div>    
                        </a>
                        <div class="product-title">
                                <p>${items[i].title}</p>
                            </div>
                            <div class="product-price">
                                <div class="price">
                                    <p>${items[i].Price} kr</p>
                                </div>
                            </div>
                    </div>
        `;
        console.log(items[i])
    }
}

getItems(items)
