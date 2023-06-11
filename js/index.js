// Grnerate items and display them to the Dom
const postHtml = document.querySelector(".product-container");
const url ="";

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
                                <img src="${post.featured_image}" alt="" loading="eager">
                            </div>    
                        </a>
                        <div class="product-title">
                                <p>${post.title.rendered}</p>
                            </div>
                            <div class="product-price">
                                <div class="price">
                                    <p>${post.Price} kr</p>
                                </div>
                            </div>
                    </div>`;
    });
    postHtml.innerHTML = postContent;
  };
  createPosts(post);
}

fetchPoata();
