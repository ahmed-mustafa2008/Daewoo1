let productsInCarts = localStorage.getItem("ProductsInCarts");
var allProducts2 = document.querySelector(".container2");
if(productsInCarts){
    let item = JSON.parse(productsInCarts);
    drawItemsCart(item);
};
function drawItemsCart(products) {
    var y = products.map((item , index) => {
        let quantity = localStorage.getItem(`productQty_${index}`) || 1;
        return `<div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
                    <div class="col-11 m-auto bg-white rounded-3 overflow-hidden" style="transform: scaleY(1);">
                        <div class="icons text-dark text-center d-flex align-items-center justify-content-between px-4">
                            <span class="numPlusNeg2">${quantity}</span>
                            <button class="btn btn-danger text-light border-0 btnRemoveCart" onClick="removeItemFromCart(${index})" data-id="${item.name}">Remove</button>
                        </div>
                        <div class="d-img2">
                            <img src="${item.imageUrl}" style="height: 240px;" alt="">
                        </div>
                        <div class="text1 position-relative">
                            <h6 class="px-2 mt-3 text-secondary" style="height: 60px;">${item.name}</h6>
                            <div class="row justify-content-center pe-4 mt-3">
                                <p class="col-9 fs-5 text-danger">Prise: ${item.price}</p>
                                <p class="col-2 fs-5 text-secondary"><del>${item.instead}</del> </p>
                            </div>
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-primary w-75 btn-shop mb-4" onclick="redirectToProductDetail(${item.id})">Shop</button>
                            </div>
                        </div>
                    </div>
                </div>`
    });
    allProducts2.innerHTML = y.join('');
};
var btnGoHome = document.querySelector(".btnGoHome")
btnGoHome.addEventListener("click" , function(e){
    e.preventDefault();
    window.location = "index.html"
});

function removeItemFromCart(index) {
    let productsInCart = localStorage.getItem("ProductsInCarts");
    if (productsInCart) {
      let items = JSON.parse(productsInCart);
      items.splice(index, 1);
      localStorage.setItem("ProductsInCarts", JSON.stringify(items));
      drawItemsCart(items);
      location.reload();
    };
  };
  var btnRemoveProductCart = document.querySelector(".btnRemoveProductCart");
  btnRemoveProductCart.addEventListener("click" , function(){
    localStorage.removeItem("ProductsInCarts")
    location.reload()
  })
  const shopButtons = document.querySelectorAll(".btn-shop");
shopButtons.forEach((button, idx) => {
    button.addEventListener("click", function () {
        const productId = products[idx].id;
        window.location.href = `product-detail.html?id=${productId}`;
    });
});

