const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const navMenu = document.querySelector(".nav-menu");


// Function to toggle the visibility of the menu

function toggleMenu() {
    navMenu.classList.toggle("active");
}

// Function to handle menu icon click

function handleMenuClick() {
    toggleMenu();
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
}


// Function to handle close icon click
function handleCloseClick() {
    toggleMenu();
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
}

menuIcon.addEventListener("click", handleMenuClick);
closeIcon.addEventListener("click", handleCloseClick);




// Grnerate items and display them to the Dom

import items from "./items.js";

const productContainer = document.querySelector(".sale-container");


function getItems(arg) {
    for(let i = 0; i < items.length; i++){

        productContainer.innerHTML += `
            <div class="sale-card">
                        <a href="product.html?id">
                            <div class="sale-image">
                                <img src="${items[i].image}" alt="" loading="eager">
                                <div class="sale-lable">Sale</div>
                            </div>    
                        </a>
                        <div class="sale-title">
                                <p>${items[i].title}</p>
                            </div>
                            <div class="sale-price">
                                <div class="old-price">
                                    <p>700 kr</p>
                                </div>
                                <div class="new-price">
                                    <p>550 kr</p>
                                </div>
                            </div>
                    </div>
        `;
        console.log(items[i])
    }
}

getItems(items)
