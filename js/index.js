
// Grnerate items and display them to the Dom

import homeItems from "./productItems/homeItems.js";
const productContainer = document.querySelector(".product-container");


function getItems() {
    for (let i = 0; i < homeItems.length; i++) {
      productContainer.innerHTML += `
            <div class="product-card">
                        <a href="product.html?id=${homeItems[i].id}">
                            <div class="product-image">
                                <img src="${homeItems[i].image}" alt="" loading="eager">
                            </div>    
                        </a>
                        <div class="product-title">
                                <p>${homeItems[i].title}</p>
                            </div>
                            <div class="product-price">
                                <div class="price">
                                    <p>${homeItems[i].price} kr</p>
                                </div>
                            </div>
                    </div>
        `;
      console.log(homeItems[i]);
    }
}

getItems(homeItems);
