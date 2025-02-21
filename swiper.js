fetch('products.json')
.then(response => response.json())
.then(data =>
{
    const cart = JSON.parse(localStorage.getItem('cart')) || []

    const swiper_item_sale = document.getElementById("swiper_item_sale");
    const swiper_elctronics = document.getElementById("swiper_elctronics");
    const swiper_Appliances = document.getElementById("swiper_Appliances");
     const swiper_Mobile = document.getElementById("swiper_Mobile");
    data.forEach(product => {
        if(product.old_price){
            const isInCart = cart.some(cartItem => cartItem.id === product.id) 
            const percent = Math.floor ((product.old_price - product.price) / product.old_price  *  100 );
            swiper_item_sale.innerHTML += `
            <div class="swiper_slide product">
                            <span class="sale_present">%${percent}</span>


                            <div class="img_product">
                                <a href="#"><img src="${product.img}" alt=""></a>
                            </div>

                            <div class="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <p class="name_product"><a href="#">${product.name}</a></p>
                                 <div class="price">
                                    <p><span>${product.price}</span></p>
                                    <p class="old_price">${product.old_price}</p>
                                 </div>
                                 <div class="icons-s">
                                    <span class="btn_add_card ${isInCart ? 'active' : ''}" data-id="${product.id}">
                                        <i class="fa-solid fa-cart-shopping"></i> ${isInCart ? 'Item in cart' : 'add to cart'}
                                    </span>
                                    <span class="icon_product">
                                        <i class="fa-regular fa-heart"></i>
                                    </span>
                                </div>
                                
                        </div>`
        };
    })
    data.forEach(product => {
        if(product.catetory  ==  "electronics"){
            const isInCart = cart.some(cartItem => cartItem.id === product.id) 

            const old_price_Pargraph = product.old_price ? `<p class="old_price">${product.old_price}</p>` : "";
            const old_disc_div = product.old_price ? `<span class="sale_present">%${Math.floor ((product.old_price - product.price) / product.old_price  *  100 )}</span>` : "";
            swiper_elctronics.innerHTML += `
            <div class="swiper_slide product">
                        ${old_disc_div}
                            <div class="img_product">
                                <a href="#"><img src="${product.img}" alt=""></a>
                            </div>

                            <div class="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <p class="name_product"><a href="#">${product.name}</a></p>
                                 <div class="price">
                                    <p><span>${product.price}</span></p>
                                    ${old_price_Pargraph}
                                 </div>
                                 <div class="icons-s">
                                   <span class="btn_add_card ${isInCart ? 'active' : ''}" data-id="${product.id}">
                                        <i class="fa-solid fa-cart-shopping"></i> ${isInCart ? 'Item in cart' : 'add to cart'}
                                    </span>
                                    <span class="icon_product">
                                        <i class="fa-regular fa-heart"></i>
                                    </span>
                                </div>
                                
                        </div>`
        }
    })
    data.forEach(product => {
        if(product.catetory  == "appliances"){
            const isInCart = cart.some(cartItem => cartItem.id === product.id) 

            const old_price_Pargraph = product.old_price ? `<p class="old_price">${product.old_price}</p>` : "";
            const old_disc_div = product.old_price ? `<span class="sale_present">%${Math.floor ((product.old_price - product.price) / product.old_price  *  100 )}</span>` : "";
            swiper_Appliances.innerHTML += `
            <div class="swiper_slide product">
                        ${old_disc_div}
                            <div class="img_product">
                                <a href="#"><img src="${product.img}" alt=""></a>
                            </div>

                            <div class="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <p class="name_product"><a href="#">${product.name}</a></p>
                                 <div class="price">
                                    <p><span>${product.price}</span></p>
                                    ${old_price_Pargraph}
                                 </div>
                                 <div class="icons-s">
                                     <span class="btn_add_card ${isInCart ? 'active' : ''}" data-id="${product.id}">
                                        <i class="fa-solid fa-cart-shopping"></i> ${isInCart ? 'Item in cart' : 'add to cart'}
                                    </span>
                                    <span class="icon_product">
                                        <i class="fa-regular fa-heart"></i>
                                    </span>
                                </div>
                                
                        </div>`
        }
    })
    data.forEach(product => {
        if(product.catetory == "mobiles"){
            const isInCart = cart.some(cartItem => cartItem.id === product.id) 

            const old_price_Pargraph = product.old_price ? `<p class="old_price">${product.old_price}</p>` : "";
            const old_disc_div = product.old_price ? `<span class="sale_present">%${Math.floor ((product.old_price - product.price) / product.old_price  *  100 )}</span>` : "";
            swiper_Mobile.innerHTML += `
            <div class="swiper_slide product">
                        ${old_disc_div}
                            <div class="img_product">
                                <a href="#"><img src="${product.img}" alt=""></a>
                            </div>

                            <div class="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <p class="name_product"><a href="#">${product.name}</a></p>
                                 <div class="price">
                                    <p><span>${product.price}</span></p>
                                    ${old_price_Pargraph}
                                 </div>
                                 <div class="icons-s">
                                     <span class="btn_add_card ${isInCart ? 'active' : ''}" data-id="${product.id}">
                                        <i class="fa-solid fa-cart-shopping"></i> ${isInCart ? 'Item in cart' : 'add to cart'}
                                    </span>
                                    <span class="icon_product">
                                        <i class="fa-regular fa-heart"></i>
                                    </span>
                                </div>
                                
                        </div>`
        }
    })
    })










