const product = document.querySelector(".product-section");
const moreProduct = document.querySelector(".more-product-container");
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");

import items from "./items.js";


console.log(id)





function getItem(){
    // accrssing the item with the matching ID
    const selectedItem = items.find(item => item.id === parseInt(id));

    if(selectedItem){
        product.innerHTML = `
            <div class="container">
                    <div class="product-grid">
                        <div class="product-image">
                            <img src="${selectedItem.image}" alt="">
                        </div>
                        <div class="product-purchase-column">
                            <div class="product-purchase-header">
                                <div class="product-item-type">${selectedItem.type}</div>
                                <h3 class="product-item-name">${selectedItem.title}</h3>
                                <div class="product-item-price">
                                    <h4 class="price">${selectedItem.Price}&nbsp;Kr</h4>
                                </div>
                            </div>
                            <div class="product-purchase-description">
                                <p>${selectedItem.description}</p>
                                <ul role="list">
                                    <li> - 100% Testing</li>
                                    <li> - Size small to extra-large</li>
                                    <li> - polyester</li>
                                </ul>
                            </div>
                            <div class="product-add-to-cart">
                                <form data-loading-text="Adding to cart">
                                    <label for="quantity" class="quantity-text">Quantity</label>
                                    <div class="add-qnt-to-cart">
                                        <input type="number" value="1" class="quantity-input" inputmode="numeric">
                                        <input type="submit" value="Add to Cart" data-loading-text="Adding to cart" class="quantity-btn">
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
    `;
    }
    else{
        product.innerHTML = `<p>Item not found</p>`;
    }

    console.log(selectedItem)
}
getItem(id)

function displayMoreProducts(){
    for(let i = 0; i < 4; i++){
        
        moreProduct.innerHTML += `
        <div class="m-product-items">
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
        </div>
        `;
    }
}
displayMoreProducts()