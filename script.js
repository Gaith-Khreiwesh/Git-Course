let category_nav_list = document.querySelector(".category_nav_list");
function Open(){
    category_nav_list.classList.toggle("active")
}
var Swiper = new Swiper(".slide-swp", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    autoplay: {
        delay: 2500,
    },
    loop: true,
}); 
//  var Swiper = new window.Swiper('.slide-product', {
//     slidesPerView:5,
//     spaceBetween:20,
//     navigation:{
//         nextEl:".swiper-button-next",
//         prevEl:".swiper-button-prev",
//     },
//     loop: true,
//     breakpoints:{
//         1200:{
//             slidesPerView: 5,
//             spaceBetween: 20,
//         },
//         1000:{
//             slidesPerView: 4,
//             spaceBetween: 20,
//         },
//         700:{
//             slidesPerView: 3,
//             spaceBetween: 15,
//         },
//         0:{
//             slidesPerView: 2,
//             spaceBetween: 10,
//         }
//     }
// }); 



var cart = document.querySelector(".cart");
function Open_close_cart(){
    var cart = document.querySelector(".cart");
    cart.classList.toggle("active")
}




let Nav_links = document.querySelector(".nav_links")

function Open_Menu(){
    Nav_links.classList.toggle("active")
}
fetch('products.json')
.then(response => response.json())
.then(data => {
    document.addEventListener("click", (event) => {
        if(event.target.classList.contains("btn_add_card")){
            const productId = event.target.getAttribute("data-id");
            const selectedProduct = data.find(product => product.id == productId);
            if(selectedProduct){
                addToCart(selectedProduct);
                const  allMatchingButtons = document.querySelectorAll(`.btn_add_card[data-id ="${productId}"]`)
                allMatchingButtons.forEach(btn => {
                    btn.classList.add("active")
                    btn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>item in card`
                })
            }
            else{
                console.error("Product Not Found");

            }
        }
    })
    console.log("Find Product Is Sucssecsful",data)
})
.catch(error => console.error("Problem in data", error))



function addToCart(product){
    let cartData = localStorage.getItem('cart')
    let cart = cartData ? JSON.parse(cartData) : []

    cart.push({...product , quantity : 1})

    localStorage.setItem('cart',JSON.stringify(cart))
    let storedCart = JSON.parse(localStorage.getItem('cart'));
    
    updatecart()

 }

function updatecart(){
    const cartitemsContainer = document.getElementById("cart_iteams")
    if(!cartitemsContainer){
        console.error("غيرموجودة");
        return;
    }
    const cart = JSON.parse(localStorage.getItem('cart')) || []

    
    const checkout_items = document.getElementById("cheakout_items")

        let items_input = document.getElementById("items")
        let total_Price_input = document.getElementById("total_Price")
        let count_items_input = document.getElementById("count_items")

    if(checkout_items){

         checkout_items.innerHTML = "";


        const subtotal_checkout = document.querySelector(".subtotal_checkout")
        const total_checkout = document.querySelector(".subtotal_checkout")

        checkout_items.innerHTML = `$ ${total_Price}`;
        checkout_items.innerHTML = `$ ${total_Price + 20}`;
        items_input.innerHTML = "";
        total_Price_input.innerHTML = "";
        count_items_input.innerHTML = "";

    }

    var total_Price = 0
    var total_count = 0

    cartitemsContainer.innerHTML = ""
    cart.forEach((item, index) => {
        let total_Price_item = item.price * item.quantity;

        total_Price += total_Price_item
        total_count += item.quantity

        if(checkout_items){
        items_input.value +=  item.name + "   ---   " + "price :"  + 
        total_Price_item + "   ---   " + "count : " + item.quantity +"\n";

        total_Price_input.value = total_Price + 20
        count_items_input.value = total_Price
        }

        cartitemsContainer.innerHTML +=
        `<div class="iteam_cart">
                    <img src="${item.img}" alt="">
                    <div class="content">
                        <h4>${item.name}</h4>
                        <p class="price_cart">$${total_Price_item}</p>
                        <div class="quantity_control">
                            <button class="decrase_quantity" data-index=${index}>-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="Incrase_quantity" data-index=${index}>+</button>
                        </div>
                    </div>
                    <button class="delete_item" data-index="${index}"><i class="fa-solid fa-trash-alt"></i></button>
                    </div>`


            if(checkout_items){
                checkout_items.innerHTML += `
                <div class="item_cart">


                                <div class="image_name">
                                    <img src="${item.img}" alt="">

                                    <div class="contant">
                                        <h4>${item.name}</h4>
                                        <p class="price_cart">$${total_Price_item}</p>
                                        <div class="quantity_control">
                                            <button class="decrease_quantity" data-index=${index}>-</button>
                                            <span class="quantity">${item.quantity}</span>
                                            <button class="increase_quantity" data-index=${index}>+</button>
                                        </div>

                                    </div>
                                </div>

                                <button class="delete_item" data-index="${index}"><i class="fa-solid fa-trash-can"></i></button>


                            </div>
                `

            }
    })
    const price_cart_total = document.querySelector('.price_cart_toral')

    const count_item_cart = document.querySelector('.Count_iteam_cart')

    const count_cart_header = document.querySelector('.count_item_header')

    price_cart_total.innerHTML = `$ ${total_Price}`

    count_item_cart.innerHTML = total_count

    count_cart_header.innerHTML = total_count


    const increaseButtons = document.querySelectorAll(".Incrase_quantity")
    const decraseButtons = document.querySelectorAll(".decrase_quantity")

    increaseButtons.forEach(button => {
        button.addEventListener("click" , (event) => {
            const itemIndex = event.target.getAttribute("data-index")
            increaseQuantity(itemIndex)
        })
    })

    decraseButtons.forEach(button => {
        button.addEventListener("click" , (event) => {
            const itemIndex = event.target.getAttribute("data-index")
            decraseQuantity(itemIndex)
        })
    })




    const delteButtons = document.querySelectorAll('.delete_item')
    delteButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const itemIndex = event.target.closest('button').getAttribute('data-index')
            removeFromCart(itemIndex)
        })
    })
}

function increaseQuantity(index){
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart[index].quantity += 1
    localStorage.setItem('cart' , JSON.stringify(cart))
    updatecart()
}

function decraseQuantity(index){
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    if(cart[index].quantity > 1){
    cart[index].quantity -= 1
    }
    localStorage.setItem('cart' , JSON.stringify(cart))
    updatecart()
}



function removeFromCart(index){
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const removeProduct = cart.splice(index , 1)[0]
    localStorage.setItem('cart',JSON.stringify(cart))
    updatecart()
    updateButoonsState(removeProduct.id)
}
function updateButoonsState(productId){
   const allMatchingButtons = document.querySelectorAll(`.btn_add_card[data-id ="${productId}"]`)
   allMatchingButtons.forEach(button => {
    button.classList.remove('active');
    button.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>add to cart`
    
   })
}
updatecart()




//المنتجات تظهر في سلة صفحة index لكن لا تظهر في صفحة cheakout.html 



