let getListOfProductsElement = document.querySelector(".list-of-products");

/**
 * Hàm join() trong JavaScript được sử dụng để nối tất cả các phần tử của một mảng thành một chuỗi, 
 * với một ký tự phân cách tùy chọn giữa các phần tử. 
 * Nếu không cung cấp ký tự phân cách, mặc định sẽ là dấu phẩy ,
 * 
 * const array = [1, 2, 3, 4, 5];
const result = array.join();
console.log(result); // "1,2,3,4,5"

 * const array = [1, 2, 3, 4, 5];
const result = array.join(' - ');
console.log(result); // "1 - 2 - 3 - 4 - 5"

 * const array = [1, 2, 3, 4, 5];
const result = array.join('');
console.log(result); // "12345"
 */

function renderProducts(getProducts) {
    getListOfProductsElement.innerHTML = getProducts
        .map((singleProductItem) => `<p>${singleProductItem.title}</p>`)
        .join(" ");
}

async function fetchListOfProducts() {
    try {
        const apiResponse = await fetch("https://dummyjson.com/products", {
            method: 'GET',
        });

        const result = await apiResponse.json();

        // console.log(result);

        if(result?.products?.length > 0 ){
            renderProducts(result?.products);
        }
    }
    catch(error) {
        console.log(error);
    }
}

fetchListOfProducts()
