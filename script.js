"use strict";
let cart_list = [];
let wish_list = [];
const current_items = [
    {
        data_id: "001",
        img: "1",
        price: "29.99 Naira",
        name: "Shoe",
    },
    {
        data_id: "002",
        img: "2",
        price: "29.99 Naira",
        name: "Shoe",
    },
    {
        data_id: "003",
        img: "3",
        price: "29.99 Naira",
        name: "Shoe",
    },
    {
        data_id: "004",
        img: "4",
        price: "29.99 Naira",
        name: "Shoe",
    },
    {
        data_id: "005",
        img: "5",
        price: "29.99 Naira",
        name: "Shoe",
    },
    {
        data_id: "006",
        img: "6",
        price: "29.99 Naira",
        name: "Shoe",
    },
];
const fashion_link = document.querySelector("#fashion_link");
const register = document.querySelector("#Register");
const wish_lists_link = document.querySelector("#wish_list_link");
const cart_section = document.querySelector("#cart_link");
const fashion_items_section = document.querySelector(".fashion_items");
const wish_list_section = document.querySelector("#wish_items");
const wish_container = document.querySelector("#wish_list_section");
const cart_items_section = document.querySelector("#cart_items");
const cart_container = document.querySelector("#cart_section");
const fashion_container = document.querySelector("#fashion_section");
const reg_container = document.querySelector("#register");
let wish_lbutton;
let cart_lbutton;
let remove_lbutton;

//functions

(function () {
    wish_container.style.display = "none";
    cart_container.style.display = "none";
    reg_container.style.display = "none";
})();

fashion_link.addEventListener("click", function () {
    fashion_container.style.display = "block";
    wish_container.style.display = "none";
    cart_container.style.display = "none";
    reg_container.style.display = "none";
});
wish_lists_link.addEventListener("click", function () {
    wish_container.style.display = "block";
    fashion_container.style.display = "none";
    cart_container.style.display = "none";
    reg_container.style.display = "none";
});
cart_section.addEventListener("click", function () {
    wish_container.style.display = "none";
    fashion_container.style.display = "none";
    cart_container.style.display = "block";
    reg_container.style.display = "none";
});
register.addEventListener("click", function () {
    wish_container.style.display = "none";
    fashion_container.style.display = "none";
    cart_container.style.display = "none";
    reg_container.style.display = "block";
});
const renderItems = function (items_array) {
    items_array.forEach((element) => {
        const html = `
        <li class="fashion_item" data-id="${element.data_id}">
                    <img src="img-${element.img}.jpg" alt="item_img" />
                    <div class="item_description"  id="item_description">
                        <h4 class="item_name_tag">
                            Item Name
                            <span class="item_name" id="item_name">Shoe</span>
                        </h4>
                        <h5 class="item_cost_tag">
                            Price
                            <span class="item_price" id="item_price"
                                >29.99USD</span
                            >
                        </h5>
                        
                    </div>
                    <button class="addButton" id="addToWishList">
                        Add to wish-list</button
                    ><br />
                    <button class="addButton" id="addToCartList">
                        Add to cart
                    </button>
                </li>`;
        fashion_items_section.insertAdjacentHTML("beforeend", html);
    });
    wish_lbutton = document.querySelectorAll("#addToWishList");
    cart_lbutton = document.querySelectorAll("#addToCartList");
};

const renderCartList = function (cart_list) {
    cart_items_section.textContent = " ";
    cart_list.forEach((element) => {
        const html = `
        <li class="fashion_item" data-id="${element.data_id}">
                    <img src="img-${element.img}.jpg" alt="item_img" />
                    <div class="item_description"  id="item_description">
                        <h4 class="item_name_tag">
                            Item Name
                            <span class="item_name" id="item_name">Shoe</span>
                        </h4>
                        <h5 class="item_cost_tag">
                            Price
                            <span class="item_price" id="item_price"
                                >29.99USD</span
                            >
                        </h5>
                        
                    </div>
                    <button class="addButton" id="removeFromcart">
                        Remove from cart
                    </button>
                </li>`;
        cart_items_section.insertAdjacentHTML("beforeend", html);
    });
    console.log(wish_lbutton);
    cart_lbutton = document.querySelectorAll("#removeFromcart");

    cart_lbutton.forEach((e) => {
        e.addEventListener("click", function name(e) {
            const item = e.target.closest(".fashion_item");
            removeFromCartList(item);
        });
    });
    cart_list = [];
};
const renderWishList = function (wish_list) {
    wish_list_section.textContent = " ";
    wish_list.forEach((element) => {
        const html = `
        <li class="fashion_item" data-id="${element.data_id}">
                    <img src="img-${element.img}.jpg" alt="item_img" />
                    <div class="item_description"  id="item_description">
                        <h4 class="item_name_tag">
                            Item Name
                            <span class="item_name" id="item_name">Shoe</span>
                        </h4>
                        <h5 class="item_cost_tag">
                            Price
                            <span class="item_price" id="item_price"
                                >29.99USD</span
                            >
                        </h5>
                        
                    </div>
                    <button class="addButton" id="remove_item">
                        Remove from wish-list</button
                    ><br />
                </li>`;
        wish_list_section.insertAdjacentHTML("beforeend", html);
    });
    remove_lbutton = document.querySelectorAll("#remove_item");

    remove_lbutton.forEach((e) => {
        e.addEventListener("click", function name(e) {
            const item = e.target.closest(".fashion_item");
            removeFromWhishList(item);
        });
    });
    wish_list = [];
};
const addToWhishList = function (item) {
    const itemID = item.dataset.id;
    const d = current_items.find((e) => e.data_id === itemID);
    wish_list.push(d);
    renderWishList(wish_list);
};
const addToCart = function (item) {
    const itemID = item.dataset.id;
    const d = current_items.find((e) => e.data_id === itemID);
    cart_list.push(d);
    renderCartList(cart_list);
};

const removeFromWhishList = function (item) {
    const itemID = item.dataset.id;
    const d = current_items.find((e) => e.data_id === itemID);
    wish_list.indexOf(d);
    wish_list = wish_list.filter(
        (e) => wish_list.indexOf(e) !== wish_list.indexOf(d)
    );
    renderWishList(wish_list);
};

const removeFromCartList = function (item) {
    const itemID = item.dataset.id;
    const d = current_items.find((e) => e.data_id === itemID);
    cart_list = cart_list.filter(
        (e) => cart_list.indexOf(e) !== cart_list.indexOf(d)
    );
    renderCartList(cart_list);
};

//application
renderItems(current_items);

wish_lbutton.forEach((e) => {
    e.addEventListener("click", function name(e) {
        const item = e.target.closest(".fashion_item");
        addToWhishList(item);
        console.log("hi");
    });
});
cart_lbutton.forEach((e) => {
    e.addEventListener("click", function name(e) {
        const item = e.target.closest(".fashion_item");
        addToCart(item);
    });
});

// const addToWhishList = function (item_id) {
//     fashion_item.forEach((e) => {
//         e.addEventListener("click", function name(e) {
//             const item = e.target.closest(".fashion_item");
//             console.log(item.dataset.id);
//             console.log(item);
//         });
//     });
// };
