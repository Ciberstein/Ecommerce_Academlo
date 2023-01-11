let trucks = [
    {
        id: "5",
        rarity: 1,
        variant: 1,
        name: "Mail truck",
        price: 1400,
        stock: 8
    },
    {
        id: "6",
        rarity: 1,
        variant: 2,
        name: "Item truck",
        price: 1400,
        stock: 8
    },
    {
        id: "7",
        rarity: 1,
        variant: 3,
        name: "Mini truck",
        price: 1400,
        stock: 8
    },
    {
        id: "8",
        rarity: 1,
        variant: 4,
        name: "DHL truck",
        price: 1400,
        stock: 8
    },
    {
        id: "9",
        rarity: 1,
        variant: 5,
        name: "Rock truck",
        price: 1400,
        stock: 8
    },
    {
        id: "10",
        rarity: 1,
        variant: 6,
        name: "Party truck",
        price: 1400,
        stock: 8
    },
    {
        id: "11",
        rarity: 1,
        variant: 7,
        name: "Purple truck",
        price: 1400,
        stock: 8
    },
    {
        id: "12",
        rarity: 1,
        variant: 8,
        name: "Hell truck",
        price: 1400,
        stock: 8
    },
    {
        id: "13",
        rarity: 1,
        variant: 9,
        name: "Blue truck",
        price: 1400,
        stock: 8
    },
    {
        id: "14",
        rarity: 2,
        variant: 1,
        name: "Simple truck",
        price: 1400,
        stock: 8
    },
    {
        id: "15",
        rarity: 2,
        variant: 2,
        name: "Compact truck",
        price: 1400,
        stock: 8
    },
    {
        id: "16",
        rarity: 2,
        variant: 3,
        name: "Charge truck",
        price: 1400,
        stock: 8
    },
    {
        id: "17",
        rarity: 2,
        variant: 4,
        name: "Furgon truck",
        price: 1400,
        stock: 8
    },
    {
        id: "18",
        rarity: 2,
        variant: 5,
        name: "Charge cover truck",
        price: 1400,
        stock: 8
    },
    {
        id: "19",
        rarity: 2,
        variant: 6,
        name: "Green furgon truck",
        price: 1400,
        stock: 8
    },
    {
        id: "20",
        rarity: 2,
        variant: 7,
        name: "Pink furgon truck",
        price: 1400,
        stock: 8
    },
    {
        id: "21",
        rarity: 2,
        variant: 8,
        name: "Red furgon truck",
        price: 1400,
        stock: 8
    },
    {
        id: "22",
        rarity: 2,
        variant: 9,
        name: "Yogu furgon truck",
        price: 1400,
        stock: 8
    },
    {
        id: "23",
        rarity: 2,
        variant: 10,
        name: "DHL furgon truck",
        price: 1400,
        stock: 8
    },
    {
        id: "24",
        rarity: 2,
        variant: 11,
        name: "Black furgon",
        price: 1400,
        stock: 8
    },
    {
        id: "23",
        rarity: 3,
        variant: 1,
        name: "White van",
        price: 1400,
        stock: 8
    },
    {
        id: "24",
        rarity: 3,
        variant: 2,
        name: "DHL van",
        price: 1400,
        stock: 8
    },
    {
        id: "25",
        rarity: 3,
        variant: 3,
        name: "Yogu van",
        price: 1400,
        stock: 8
    },
    {
        id: "26",
        rarity: 4,
        variant: 1,
        name: "Meat truck",
        price: 1400,
        stock: 8
    },
    {
        id: "27",
        rarity: 4,
        variant: 2,
        name: "Ground truck",
        price: 1400,
        stock: 8
    },
    {
        id: "28",
        rarity: 4,
        variant: 3,
        name: "Sprite truck",
        price: 1400,
        stock: 8
    },
    {
        id: "29",
        rarity: 4,
        variant: 4,
        name: "Coca cola truck",
        price: 1400,
        stock: 8
    },  
    {
        id: "30",
        rarity: 4,
        variant: 5,
        name: "Sushi truck",
        price: 1400,
        stock: 8
    },
    {
        id: "31",
        rarity: 4,
        variant: 5,
        name: "Pool truck",
        price: 1400,
        stock: 8
    },
    {
        id: "32",
        rarity: 4,
        variant: 7,
        name: "Star truck",
        price: 1400,
        stock: 8
    },
    {
        id: "33",
        rarity: 4,
        variant: 8,
        name: "DHL sub truck",
        price: 1400,
        stock: 8
    },
    {
        id: "34",
        rarity: 4,
        variant: 9,
        name: "Emergency truck",
        price: 1400,
        stock: 8
    },  
    {
        id: "35",
        rarity: 4,
        variant: 10,
        name: "Fruit truck",
        price: 1400,
        stock: 8
    },
    {
        id: "36",
        rarity: 5,
        variant: 1,
        name: "Black mega truck",
        price: 1400,
        stock: 8
    },
    {
        id: "37",
        rarity: 5,
        variant: 2,
        name: "Cyan mega truck",
        price: 1400,
        stock: 8
    },  
    {
        id: "38",
        rarity: 5,
        variant: 3,
        name: "Green mega truck",
        price: 1400,
        stock: 8
    },
];

const products = document.querySelector(".products");
const cartItems = document.querySelector(".cartItems");
const cartCount = document.querySelector(".cartFooter");
const amountCart = document.querySelector(".amountCart");
const btnReset = document.querySelector(".Reset");


trucks  = JSON.parse(localStorage.getItem("trucks"))  || trucks;
let objCart = JSON.parse(localStorage.getItem("objCart")) || {};

function verifyAddToCart(findProduct, id) {
    if (findProduct.stock === objCart[id].amount) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Out of stock!'
        });
    } else {
        objCart[id].amount++;
    }
}

function CartCountCheck() {
    const arrayCart = Object.values(objCart);

    if (!arrayCart.length) {
        cartCount.innerHTML = `
            <h3>You cart is empty</h3>
        `;

        return;
    }

    let sum = 0;

    arrayCart.forEach(function ({ amount, price }) {
        sum += amount * price;
    });

    cartCount.innerHTML = `
        <h3>Total amount $ ${sum}</h3>
        <button class="btn btn-primary w-100 btn__buy">Buy</button>
    `;
}

function findProductFunction(id) {
    return trucks.find(function (res) {
        return res.id === id;
    });
}

function removeProduct(id) {
    /*
    Swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    
    }).then((result) => {
        if (result.isConfirmed) {

            Swal.fire(
              'Deleted!',
              'Te item has been removed from cart.',
              'success'
            );
            delete objCart[id];
        }
    });
   */
    const res = confirm("Are you sure?");
    if (res) delete objCart[id];
}

function deployAmountCart() {
    let sum = 0;

    const arrayCart = Object.values(objCart);

    if (!arrayCart.length) {
        amountCart.style.display = "none";
        return;
    }

    amountCart.style.display = "inline-block";

    arrayCart.forEach(function ({ amount }) {
        sum += amount;
    });

    amountCart.textContent = sum;
}

function deployProductsInCart() {
    let html = "";

    const cart = Object.values(objCart);

    cart.forEach(function ({ id, name, price, stock, rarity, variant, amount }) {
        html += `
            <div class="col-md-12 card bg-secondary mb-3 p-3">
                <div class="row">
                    <div class="col-md-4">
                        <img src="./assets/img/products/${rarity + '/' + variant + '.png'}" alt="${name}" class="w-100 card bg__product rounded-0" style="background-image: url(./assets/img/products/bg/${rarity}.png);">                 
                    </div>
                    <div class="col-md-8">
                        <div class="p-2 w-100 text-center">
                            <span class="h5 mb-0 p-2 ">${name}</span>
                            <br>
                            <span class="h6 mb-0 p-2 ">Price: $ ${price}</span>
                            <br>
                            <span class="h6 mb-0 p-2 ">Rarity: ${rarity}</span>
                        </div>
                    </div>
                    <div class="input-group w-100 mt-3" id="${id}">
                        <label class="input-group-text w-25">Qty: ${amount}</label>
                        <button class="w-25 btn btn-sm btn-primary cart__min"> <i class="fas fa-minus-circle"></i> </button>
                        <button class="w-25 btn btn-sm btn-warning cart__max"> <i class="fas fa-plus-circle"></i> </button>
                        <button class="w-25 btn btn-sm btn-danger cart__trash"> <i class="fas fa-trash"></i> </button>
                    </div>
                </div>
            </div>

        `;
    });

    cartItems.innerHTML = html;
}

function deployProducts() {
    
    let html = "";

    trucks.forEach(function ({ id, name, price, stock, rarity, variant }) {

        const btn = stock
            ? '<button class="btn btn-success"><i class="fas fa-cart-plus"></i> Add to cart</button>'
            : '<button class="btn btn-danger">Out of stock</button>';

        html += `
            <div class="col">
                <div class="card shadow-sm">
                    <img src="./assets/img/products/${rarity + '/' + variant + '.png'}" alt="${name}" class="w-100 bg__product" style="background-image: url(./assets/img/products/bg/${rarity}.png);">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group" id="${id}">
                                ${btn}
                                <span class="btn btn-secondary disabled">${stock}</span>
                            </div>
                            <span><i class="fas fa-sack-dollar"></i> ${price}</span>
                        </div>
                    </div>
                </div>
            </div>

        `;
    });

    products.innerHTML = html;
}

products.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn-success")) {
        const id = e.target.parentElement.id;
        let findProduct = findProductFunction(id);

        if (findProduct.stock === 0) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Out of stock!'
            });
        }
        if (objCart[id]) {
            verifyAddToCart(findProduct, id);
        } else {
            objCart[id] = {
                ...findProduct,
                amount: 1,
            };
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Product added to cart',
                showConfirmButton: false,
                timer: 1500
            })
        }

        localStorage.setItem("objCart", JSON.stringify(objCart));
    }

    deployProductsInCart();
    CartCountCheck();
    deployAmountCart();
});

cartItems.addEventListener("click", function (e) {
    if (e.target.classList.contains("cart__min")) {
        const id = e.target.parentElement.id;

        if (objCart[id].amount === 1) {
            removeProduct(id);
        } else {
            objCart[id].amount--;
        }
    }

    if (e.target.classList.contains("cart__max")) {
        const id = e.target.parentElement.id;
        let findProduct = findProductFunction(id);
        verifyAddToCart(findProduct, id);
    }

    if (e.target.classList.contains("cart__trash")) {
        const id = e.target.parentElement.id;
        removeProduct(id);
    }

    localStorage.setItem("objCart", JSON.stringify(objCart));

    deployProductsInCart();
    CartCountCheck();
    deployAmountCart();
});

cartCount.addEventListener("click", function (e) {

    if (e.target.classList.contains("btn__buy")) {

        Swal.fire({
            title: 'Are you sure?',
            text: "You want buy the cart items!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, i want!'

        }).then((result) => {

            if (result.isConfirmed) {

                let newArray = [];

                trucks.forEach(function (trucks) {
                    if (trucks.id === objCart[trucks.id]?.id) {
                        newArray.push({
                            ...trucks,
                            stock: trucks.stock - objCart[trucks.id].amount,
                        });
                    } else {
                        newArray.push(trucks);
                    }
                });

                trucks = newArray;
                objCart = {};

                localStorage.setItem("objCart", JSON.stringify(objCart));
                localStorage.setItem("trucks", JSON.stringify(trucks));

                deployProducts();
                CartCountCheck();
                deployProductsInCart();
                deployAmountCart();

                Swal.fire(
                    'Done!',
                    'Thanks for your purchase.',
                    'success'
                );
            }
            else return;
        });
    }
});

btnReset.addEventListener("click", function () {
    localStorage.clear();
    window.location.reload();
});

deployProducts();
CartCountCheck();
deployProductsInCart();
deployAmountCart();