export async function getCategories(id) {
    const getResult = await fetch("http://localhost:3000/api/categories/"+id);
    const categoriesResult = await getResult.json();

    return categoriesResult;
}

export async function getProducts(id) {
    const getResult = await fetch("http://localhost:3000/api/products/"+id);
    const productsResult = await getResult.json();

    return productsResult;
}

export async function getProductDetail(id) {
    const getResult = await fetch("http://localhost:3000/api/products/detail/"+id);
    const productsResult = await getResult.json();

    return productsResult;
}

export async function getSubcategory(id) {
    const getResult = await fetch("http://localhost:3000/api/subcategories/"+id);
    const subcategoriesResult = await getResult.json();

    return subcategoriesResult;
}

// export async function getLastProduct() {
//     const getResult = await fetch("http://localhost:3000/api/products/last");
//     const lastProduct = await getResult.json();
//     return lastProduct;
// }



// export async function getTotalUsers() {
//     const getResult = await fetch("http://localhost:3000/api/users");
//     const usersResult = await getResult.json();

//     return usersResult.totalUsers;
// }

// export async function getProductsPage(page) {
//     const getResult = await fetch(page);
//     const productsPageResult = await getResult.json();

//     return productsPageResult;
// }
