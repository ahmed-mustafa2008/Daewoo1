var ProductsInVaforite = localStorage.getItem("ProductsInVaforite");
var container3 = document.querySelector(".container3");

if (ProductsInVaforite) {
    let items = JSON.parse(ProductsInVaforite);
    drawItemsVaforite(items);
}

function drawItemsVaforite(products) {
    var y = products.map((item, index) => {
        // تحديد الكمية المخزنة في localStorage باستخدام item.name
        // let quantity = localStorage.getItem(`productQty_${item.name}`) || 1; // القيمة الافتراضية 1 إذا كانت الكمية غير موجودة

        return `
        <div class="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
            <div class="col-11 m-auto bg-white rounded-3 overflow-hidden" style="transform: scaleY(1);">
                <div class="icons text-dark text-center d-flex align-items-center justify-content-between px-4">
                    
                    <button class="btn btn-danger text-light border-0 btnRemoveCart m-auto" onClick="removeItemFromFavorite(${index})" data-id="${item.name}">Remove</button>
                </div>
                <div class="d-img2">
                    <img src="${item.imageUrl}" style="height: 240px;" alt="${item.name}">
                </div>
                <div class="text1 position-relative">
                    <h6 class="px-2 mt-3 text-secondary" style="height: 60px;">${item.name}</h6>
                    <div class="row justify-content-center pe-4 mt-3">
                        <p class="col-9 fs-5 text-danger">Price: ${item.price}</p>
                        <p class="col-2 fs-5 text-secondary"><del>${item.instead}</del> </p>
                    </div>
                    <div class="d-flex justify-content-center">
                        
                    </div>
                </div>
            </div>
        </div>`;
    });

    // دمج جميع المنتجات و تعيينها كـ innerHTML
    container3.innerHTML = y.join('');
}

/**
 * إزالة منتج من المفضلة بناءً على الفهرس (index)
 * 
 */
function removeItemFromFavorite(index) {
    let productsInFavorite = JSON.parse(localStorage.getItem("ProductsInVaforite")) || [];

    // تحديث قائمة المنتجات بعد الإزالة باستخدام الفهرس
    productsInFavorite.splice(index, 1);

    // تحديث البيانات في localStorage
    localStorage.setItem("ProductsInVaforite", JSON.stringify(productsInFavorite));
    
    // إزالة الكمية المخزنة للمنتج المحذوف
    localStorage.removeItem(`productQty_${productsInFavorite[index]?.name}`);

    // إعادة رسم المفضلة بعد التعديل
    drawItemsVaforite(productsInFavorite);
}
var btnRemoveProductCart = document.querySelector(".btnRemoveProductCart");
btnRemoveProductCart.addEventListener("click", function () {
    localStorage.removeItem("ProductsInVaforite");
    location.reload();
});