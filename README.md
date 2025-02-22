# Git-Course
Almost Complate WepSite 
# There are some small problems in Java Script and a few simple issues in CSS when the max-width : 1100px 
i put comment on them I couldnt fix them 

## And Problem With a cart in the Cheakout.html
 ### ##المشكلة الثانيه 
جميع المنتجات تظهر في السلة لكن في صفحة ال cheakout .html لا تظهر المنتجات الذي اضيفها مع انه نفس اكواد الذي في الصفحة الرسميه هذه اول مشكلة 
                                                  
                     المفروض ايضا ان تاتي العناصر الذي في السلة داخل Order Summary ويستطيع الاضافة والحذف   وحذف العنصر ليس فقط من السلة 
المفروض عندما اضغط على الاسهم الذي فوق المنتجات ان تتتحرك حسب اتجاه السهم لكن يكتب لي ان swiper ليس كونستركتر  مع انه يوجد نفسه يعمل في تحريك الصورتين في داخل   <div class="slider"> اسمه 
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
                                                         
                                                             ####  ###المشكلة الثالثه  
                                               وعناصر ال header لا تتحرك بل شكل المطلوب عند التصغير 
                                                 لا يظهر عنصر open_menu and close_menu d ولا يحدث المطلوب ان يحدث في الاكواد 
                                                             @media (max-width:1100px) {
    body{
        padding-top: 240px;
    }
    header .top-header .container{
        flex-wrap: wrap;
    }
    header .top-header .search-box{
        order: 3;
        width: 80%;
        margin: 20px auto 0;
    }
    header .top-header .logo{
        width: 140px;
    }
    header .top-header .search-box select{
        width: 200px;
    }
    header .top-header .search-box input{
        width: calc(100% -200px);
    }
    /* header .button-header .nav-links{
        position: fixed;
        top: 0;
        left: -400px;
        bottom: 0;
        background:white;
        width: 400px;
        flex-direction: column;
        align-items: center;
        padding-top: 100px;
        border: 1px solid #b5b5b5;
        transition: 0.3s ease-in-out;
    } */
    header .button-header .nav-links li{
        font-size: 18px;
        height: auto;
        
    }
    header .button-header .nav-links.active{
        left: 0;
    }

    /* هذه العناصر لا تظهر في الصفحة  */

    /* .close_menu {
        display: block;
        position: absolute;
        top: 30px;
        right: 30px;
        font-size: 30px;
    } 

    .close_menu .fa-regular{
        color: #e26e02; 
    } 
    .open_menu{
      display: block;
      position: absolute;
      font-size: 25px;
    } 
    .open_menu .fa-solid{
         color:var(--main_color);
         border: 1px solid var(--main_color);
         height: 40px;
         width: 40px;
         text-align: center;
         line-height: 40px;
         border-radius: 3px;
    } */
    header .button-header .category-nav{
        width: auto;
    }
    header .button-header .category-nav .category-btn p{
        font-size: 13px;
        max-width: 0 10px;
    }
    header .button-header nav{
        gap: 20ox;
    }

    .banners_4 .container{
        flex-wrap: wrap;
    }
    .banners_4 .container .box{
        width: 49%;
        margin-bottom: 20px;
        justify-content: space-between;
    }
}
                                                            
                                                          
