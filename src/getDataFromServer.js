export async function getProducts() {
    const getResult = await fetch("http://localhost:3000/api/products");
    const productsResult = await getResult.json();

    return productsResult.products;
}

export async function getLastProduct() {
    const getResult = await fetch("http://localhost:3000/api/products/last");
    const lastProduct = await getResult.json();
    return lastProduct;
}

export async function getCategories() {
    const getResult = await fetch("http://localhost:3000/api/products");
    const categoriesResult = await getResult.json();

    return categoriesResult.countByCategory;
}

export async function getTotalUsers() {
    const getResult = await fetch("http://localhost:3000/api/users");
    const usersResult = await getResult.json();

    return usersResult.totalUsers;
}

export async function getProductsPage(page) {
    const getResult = await fetch(page);
    const productsPageResult = await getResult.json();

    return productsPageResult;
}
