// Grnerate items and display them to the Dom
const postHtml = document.querySelector(".product-container");
const url = "http://localhost:8888/threadco/wp-json/wc/store/products";

async function fetchPoata() {
  const response = await fetch(url);
  const post = await response.json();

  console.log(post);

  const createPosts = (posts) => {
    const postContent = posts.map((post) => {
      return `
                    <div class="product-card">
                        <a href="product.html?id">
                            <div class="product-image">
                                <img src="${post.images[0].src}" alt="" loading="eager">
                            </div>    
                        </a>
                        <div class="product-title">
                                <p>${post.name}</p>
                            </div>
                            <div class="product-price">
                                <div class="price">
                                    <p>${post.prices.price} kr</p>
                                </div>
                            </div>
                    </div>`;
    });
    postHtml.innerHTML = postContent;
  };
  createPosts(post);
}

fetchPoata();
