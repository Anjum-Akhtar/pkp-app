const img_path = "https://app.anjum.dev/images/";
const API_URL = "https://app.anjum.dev/";
/* ============================ Header ================================= */
function header(){
  $('.header').append(
    '<nav>\
      <ul class="nav justify-content-center py-2">\
          <li class="nav-item">\
              <a class="nav-link active" aria-current="page" href="/">\
                  <i class="fa-solid fa-house"></i>\
                  Home\
              </a>\
          </li>\
          <li class="nav-item">\
              <a class="nav-link cat-menu" href="#">\
                  <i class="fa-solid fa-rectangle-list"></i>\
                  Categories\
              </a>\
          </li>\
          <li class="nav-item cart-bag">\
              <a class="nav-link cart-icon" href="/add-to-cart.html">\
                  <i class="fa-solid fa-bag-shopping"></i>\
              </a>\
          </li> \
          <li class="nav-item">\
              <a class="nav-link" href="#">\
                  <i class="fa-solid fa-heart"></i>\
                  Wishlist\
              </a>\
          </li> \
          <li class="nav-item loginMenu">\
          </li> \
      </ul> \
    </nav>\
    <header class="px-4 py-3">\
        <div class="row">\
            <div class="col-2">\
                <img class="w-50 open-menu" src="images/bars-solid.svg" alt="Icon">\
            </div>\
            <div class="col-8">\
                <a href="/">\
                    <img class="w-50" src="images/theme-logo.png" alt="Logo">\
                </a>\
            </div>\
            <div class="col-2">\
                <i class="fa fa-search search-open"></i>\
                <i class="fa fa-remove search-close"></i>\
            </div>\
        </div>\
        <form class="row search-box" method="GET" action="search.html">\
          <div class="col-12 shadow d-flex p-3 mt-2 border bg-white">\
              <input type="text" name="searchItem" class="w-100 border border-secondary shadow-none" required>\
              <button class="btn searchBtn" type="submit" name="submit"><i class="fa fa-search"></i></button>\
          </div>\
        </form>\
    </header>\
    <div class="menu-toggle position-fixed" style="left:-90%">\
        <div class="row">\
            <div class="col-6">\
                <a href="/" class="ps-2">\
                    <img class="w-50" src="images/theme-logo.png" alt="Logo">\
                </a>\
            </div>\
            <div class="col-6 pe-4 text-end">\
                <!-- <a href="" class="close-menu">\
                    <i class="fa-solid fa-xmark"></i>\
                </a> -->\
            </div>\
            <div class="col-12 pt-3 mobile-side-menu">\
                <ul class="list-unstyled px-2 menu-items">\
                    <li>\
                        <a href="/">Home</a>\
                    </li>\
                    <li>\
                        <a href="/products.html">Products</a>\
                    </li>\
                    <li>\
                        <a href="">FAQ</a>\
                    </li>\
                    <li>\
                        <a href="">Return & Exchange</a>\
                    </li>\
                    <li>\
                        <a href="">Shipping</a>\
                    </li>\
                    <li>\
                        <a href="">Size Chart</a>\
                    </li>\
                    <li>\
                        <a href="">Cookies Policy</a>\
                    </li>\
                    <li>\
                        <a href="">Terms & Conditions</a>\
                    </li>\
                    <li>\
                        <a href="">Privacy Policy</a>\
                    </li>\
                    <li>\
                        <a href="">About Us</a>\
                    </li>\
                    <li>\
                        <a href="">Contact Us</a>\
                    </li>\
                </ul>\
                <div class="info p-2 px-2">\
                    <h3 class="fw-bold">Contact</h3>\
                    <ul class="list-group list-group-horizontal list-unstyled">\
                        <li class="list-group-item"><i class="fa-solid fa-location-dot"></i></li>\
                        <li class="list-group-item"><a href="">House : 25, Road No: 2, Block A, Mirpur-1, Dhaka 1216</a></li>\
                    </ul>\
                    <ul class="list-group list-group-horizontal list-unstyled">\
                        <li class="list-group-item"><i class="fa-solid fa-envelope"></i></li>\
                        <li class="list-group-item"><a href="mailto:info@inilabs.net">info@inilabs.net</a></li> \
                    </ul>\
                    <ul class="list-group list-group-horizontal list-unstyled">\
                        <li class="list-group-item"><i class="fa-solid fa-phone"></i></li>\
                        <li class="list-group-item"><a href="tel:13333846282">13333846282</a></li> \
                    </ul>\
                </div>\
                <div class="follow-us p-2 px-2">\
                    <h3 class="fw-bold">Follow Us</h3>\
                    <a href="">\
                        <i class="fa-brands fa-facebook"></i>\
                    </a>\
                    <a href="">\
                        <i class="fa-brands fa-square-twitter"></i>\
                    </a>\
                    <a href="">\
                        <i class="fa-brands fa-square-instagram"></i>\
                    </a>\
                    <a href="">\
                        <i class="fa-brands fa-youtube"></i>\
                    </a>\
                </div>\
                <div class="copyright p-2 px-2">\
                    <p><small>© ShopKing by iNiLabs 2024, All Rights Reserved</small></p>\
                </div>\
            </div>\
            <div class="col-12 pt-3 cat-side-menu"> \
                <div class="d-flex align-items-start">\
                  <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">\
                    <button class="btn nav-link active" id="soft-tab" data-bs-toggle="pill" data-bs-target="#soft" type="button" role="tab" aria-controls="soft" aria-selected="true">Soft Furnishing</button>\
                    <button class="nav-link" id="vases-tab" data-bs-toggle="pill" data-bs-target="#vases" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Vases</button>\
                    <button class="nav-link" id="wall-tab" data-bs-toggle="pill" data-bs-target="#home-essentials" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Home Essentials</button>\
                    <button class="nav-link" id="combos-tab" data-bs-toggle="pill" data-bs-target="#tabletop" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Table Top Decor</button>\
                  </div>\
                  <div class="tab-content" id="v-pills-tabContent">\
                    <div class="row tab-pane fade show active" id="soft" role="tabpanel" aria-labelledby="soft-tab" tabindex="0"></div>\
                    <div class="row tab-pane fade" id="vases" role="tabpanel" aria-labelledby="vases-tab" tabindex="0"></div>\
                    <div class="row tab-pane fade" id="home-essentials" role="tabpanel" aria-labelledby="wall-tab" tabindex="0"></div>\
                    <div class="row tab-pane fade" id="tabletop" role="tabpanel" aria-labelledby="combos-tab" tabindex="0"></div>\
                  </div>\
                </div>\
            </div>\
            <div class="col-12 pt-3 open-profile">\
              <ul class="list-unstyled px-2 menu-items">\
                <li>\
                    <a class="logout" href="/">logout</a>\
                </li>\
                <li>\
                    <a href="show-address.html">Addresses</a>\
                </li>\
              </ul>\
            </div>\
        </div>\
    </div>\
    <div class="cart-toggle position-fixed p-4" style="right:-100%">\
        <div class="row">\
            <div class="col-6">\
                <h2>Shopping Cart</h2>\
            </div>\
            <div class="col-6 text-end">\
                <a href="" class="close-menu">\
                    <i class="fa-solid fa-xmark"></i>\
                </a>\
            </div>\
            <div class="col-12">\
              <form>\
                <ul class="cart-page list-unstyled mt-4">\
                </ul> \
                <div class="d-flex justify-content-between border-top pt-4">\
                    <p><strong>Subtotal</strong></p>\
                    <p><strong>&#8377;1200.00</strong></p>\
                </div>\
                <a href="checkout.html" class="w-100 btn" type="submit">Process to Checkout</a>\
              </form>\
            </div>\
        </div>\
    </div>\
    <div class="menu-overlay"></div>'
  );
}
/* ============================ Home slider ================================= */
const swiper = new Swiper(".swiper-slider", {
  // Optional parameters
    // centeredSlides: true,
    slidesPerView: 4,
    grabCursor: true,
    freeMode: false,
    loop: true,
    mousewheel: false,
    // keyboard: {
      //   enabled: true
      // },
  
    // Enabled autoplay mode
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },
      
      // If we need pagination
      // pagination: {
    //   el: ".swiper-pagination",
    //   dynamicBullets: false,
    //   clickable: true
    // },
    
    // If we need navigation
    // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev"
    // },
  
    // Responsive breakpoints
    // breakpoints: {
      //   640: {
    //     slidesPerView: 1.25,
    //     spaceBetween: 20
    //   },
    //   1024: {
      //     slidesPerView: 2,
      //     spaceBetween: 20
      //   }
      // }
    });
  
  // const winter_swiper = new Swiper(".winter-slider", {
  //   // Optional parameters
  //   // centeredSlides: true,
  //   slidesPerView: 1,
  //   grabCursor: true,
  //   freeMode: false,
  //   loop: true,
  //   mousewheel: false
  // });
  

  /* ============================ Mobile Menu / Category Menu / Cart Menu ============================== */
    $('body').on('click','.open-menu',function(e){ 
      e.preventDefault();
      $('.menu-toggle').css("left", "0%"); 
      $('.menu-overlay').css("display", "block"); 
      $('.cat-side-menu').css("display", "none");
      $('.open-profile').css("display", "none");
    });
    $('body').on('click','.menu-overlay',function(e){
      e.preventDefault();
      $('.menu-toggle').css("left", "-90%"); 
      $('.menu-overlay').css("display", "none");
      $('.cat-side-menu').css("display", "block");
      $('.mobile-side-menu').css("display", "block");
      $('.open-profile').css("display", "block");
    });
  /******************* Category Menu *******************/
    $('body').on('click','.cat-menu',function(e){ 
      e.preventDefault();
      $('.menu-toggle').css("left", "0%"); 
      $('.menu-overlay').css("display", "block"); 
      $('.mobile-side-menu').css("display", "none"); 
      $('.open-profile').css("display", "none"); 
    });

  /******************* Profile Menu *******************/
    $('body').on('click','.open-profile',function(e){ 
      e.preventDefault();
      $('.menu-toggle').css("left", "0%"); 
      $('.menu-overlay').css("display", "block"); 
      $('.mobile-side-menu').css("display", "none"); 
      $('.cat-side-menu').css("display", "none");
    });

  /******************* Cart Menu *******************/
    // $('body').on('click','.cart-icon',function(e){ 
    //   e.preventDefault();
    //   $('.cart-toggle').css("right", "0%");  
    //   $('.menu-overlay').css("display", "block"); 
    // });

    // $('body').on('click','.menu-overlay,.close-menu',function(e){
    //   e.preventDefault();
    //   $('.cart-toggle').css("right", "-100%"); 
    //   $('.menu-overlay').css("display", "none"); 
    // });

/* ================================= Get Category Home =================================== */
$(function() {  
  var data = {request_type:"getCategories"}
  var json_str = JSON.stringify(data);
  $.ajax({  
      url: API_URL+'getCategories.php',   
      method:'POST',   
      data:json_str,
      contentType: 'application/json',
      success: function(data) {    
          var res_data =  JSON.parse(data);  
          $.each(res_data.data,function(index,item){   
            // console.log("res_data.data",res_data.data);
            $('#all-cat').append(
              '<div class="swiper-slide">\
                <a href="category.html?cat-name='+item.cat_title+'">\
                    <img class="w-100" src="images/men-thumb.png" alt="Swiper">\
                    <span class="text">'+item.cat_title+'</span>\
                </a>\
              </div>'
            );  
            $('.allCatDropdown').append(
              '<li class="d-block"><a class="dropdown-item w-100" href="products.html?cat-name='+item.cat_title+'" data_cat-url='+item.cat_url+'>'+item.cat_title+'</a></li>'
            );
          })  
      },  
      error: function(xhr, textStatus, errorThrown) {  
          console.log('Error in Database');  
      }  
  });  
});  

/* ================================= Get Products Base on category =================================== */
$(function() {    
  var urlParams = new URLSearchParams(window.location.search);
  var cat_name = urlParams.get('cat-name');
  // console.log("cat name",cat_name);
  var pro_detail = {
          request_type:"getProducts", 
          cat_name:cat_name     
      }
  var json_str = JSON.stringify(pro_detail); 
  $.ajax({  
      url: API_URL+'getProducts.php',   
      method:'POST',   
      data:json_str,
      contentType: 'application/json',
      success: function(data) {   
        var res_data =  JSON.parse(data);
        if(res_data.status == 200){ 
          $.each(res_data.data,function(index,item){  
            if(item.regular_price > 0 && item.sale_price > 0){
              $('#all-product').append(
                  '<li class="col-6 my-3">\
                      <div class="img-box">\
                          <img class="wishlist-icon" src="images/heart-regular.svg" alt="Icon">\
                          <a href="product-detail.html?pro-id='+item.product_id+'">\
                          <img class="w-100" src="'+img_path+item.product_img1+'" alt="Image">\
                          </a>\
                      </div>\
                      <div class="text-box">\
                          <a href="product-detail.html?pro-id='+item.product_id+'">\
                            <p>'+item.product_name+'</p>\
                          </a>\
                          <p class="mt-3"><b>Cat:</b> '+item.categories+'</p>\
                          <span class="sale">&#8377; '+item.regular_price+'</span>\
                          <span>&#8377; '+item.sale_price+'</span>\
                      </div>\
                  </li>'
              ); 
            } 
          })
        } else {
          $('.noRecord').append('No Product Found!');
        }
      },  
      error: function(xhr, textStatus, errorThrown) {  
          console.log('Error in Database');  
      }  
  });  
});  
/* ================================= Get Products Home =================================== */
$(function() {  
  var data = {request_type:"getProducts"}
  var json_str = JSON.stringify(data);
  $.ajax({  
      url: API_URL+'getProducts.php',   
      method:'POST',   
      data:json_str,
      contentType: 'application/json',
      success: function(data) {   
        var res_data =  JSON.parse(data);  
        $.each(res_data.data,function(index,item){   
              if(item.regular_price > 0){
                  $('#all').append(
                    '<div class="col-6 my-3">\
                      <div class="img-box">\
                        <img class="wishlist-icon" src="images/heart-regular.svg" alt="Icon">\
                        <a href="product-detail.html?pro-id='+item.product_id+'">\
                          <img class="w-100" src="'+img_path+item.product_img1+'" alt="Image">\
                        </a>\
                      </div>\
                      <div class="text-box">\
                        <a href="product-detail.html?pro-id='+item.product_id+'">\
                          <p>'+item.product_name+'</p>\
                        </a>\
                        <span class="sale">&#8377; '+item.regular_price+'</span>\
                        <span>&#8377; '+item.sale_price+'</span>\
                      </div>\
                    </div>'
                  );

                  if(item.categories == 'soft furnishing'){
                    $('#soft').append(
                      '<div class="col-6 mb-3">\
                        <div class="shadow border p-1">\
                          <div class="img-box">\
                            <a href="product-detail.html?pro-id='+item.product_id+'">\
                              <img class="w-100" src="'+img_path+item.product_img1+'" alt="Image">\
                            </a>\
                          </div>\
                          <div class="text-box p-2">\
                            <a href="product-detail.html?pro-id='+item.product_id+'">\
                              <p>'+item.product_name.substring(0, 8)+'...</p>\
                            </a>\
                          </div>\
                        </div>\
                      </div>'
                    );
                  }
                  if(item.categories == 'vases'){
                    $('#vases').append(
                      '<div class="col-6 mb-3">\
                        <div class="shadow border p-1">\
                          <div class="img-box">\
                            <a href="product-detail.html?pro-id='+item.product_id+'">\
                              <img class="w-100" src="'+img_path+item.product_img1+'" alt="Image">\
                            </a>\
                          </div>\
                          <div class="text-box p-2">\
                            <a href="product-detail.html?pro-id='+item.product_id+'">\
                              <p>'+item.product_name.substring(0, 8)+'...</p>\
                            </a>\
                          </div>\
                        </div>\
                      </div>'
                    );
                  }
                  if(item.categories == 'home essentials'){
                    $('#home-essentials').append(
                      '<div class="col-6 mb-3">\
                        <div class="shadow border p-1">\
                          <div class="img-box">\
                            <a href="product-detail.html?pro-id='+item.product_id+'">\
                              <img class="w-100" src="'+img_path+item.product_img1+'" alt="Image">\
                            </a>\
                          </div>\
                          <div class="text-box p-2">\
                            <a href="product-detail.html?pro-id='+item.product_id+'">\
                              <p>'+item.product_name.substring(0, 8)+'...</p>\
                            </a>\
                          </div>\
                        </div>\
                      </div>'
                    );
                  }
                  if(item.categories == 'table top decor'){
                    $('#tabletop').append(
                      '<div class="col-6 mb-3">\
                        <div class="shadow border p-1">\
                          <div class="img-box">\
                            <a href="product-detail.html?pro-id='+item.product_id+'">\
                              <img class="w-100" src="'+img_path+item.product_img1+'" alt="Image">\
                            </a>\
                          </div>\
                          <div class="text-box p-2">\
                            <a href="product-detail.html?pro-id='+item.product_id+'">\
                              <p>'+item.product_name.substring(0, 8)+'...</p>\
                            </a>\
                          </div>\
                        </div>\
                      </div>'
                    );
                  }
              } 

            })  
      },  
      error: function(xhr, textStatus, errorThrown) {  
          console.log('Error in Database');  
        }  
      });  
    });  


/* ================================= Search Box =================================== */
$('body').on('click','.search-open',function(){ 
  $('.search-box').css('display','block');
  $('.search-close').css('display','block');
  $('.search-open').css('display','none');
})
$('body').on('click','.search-close',function(){ 
  $('.search-box').css('display','none');
  $('.search-close').css('display','none');
  $('.search-open').css('display','block');
})

 /* ================================= Cart Quantity =================================== */ 
 $('body').on('click','.minus',function () {  
  // console.log("minus");
  var input = $(this).parent().find('input');
  var count = parseInt(input.val()) - 1;
  count = count < 1 ? 1 : count;
  input.val(count);
  input.change();
  return false;
});

$('body').on('click','.plus',function () {
  // console.log("plus");
  var input = $(this).parent().find('input');
  input.val(parseInt(input.val()) + 1);
  input.change();
  return false;
});

/* ================================= Login =================================== */
$(function() {
  var userData1 = JSON.parse(localStorage.getItem('user_data')); 
  if(userData1 !== '' && userData1 !== null){ 
    // console.log(userData1);
    $('.loginMenu').append(
      '<a class="nav-link open-profile" href=""><i class="fa-solid fa-user"></i>Profile</a>'
    );
  }else{ 
    // console.log("jb");
    $('.loginMenu').append(
      '<a class="nav-link" href="/login.html"><i class="fa-solid fa-user"></i>Login</a>'
    );
  }
});
/* ================================= Logout =================================== */
$('body').on('click','.logout',function(){
  localStorage.removeItem("user_data");
  window.location.href = "/login.html";
})

/* ================================= Cart Page =================================== */
getCartDetails();
function getCartDetails(){
  var userData = JSON.parse(localStorage.getItem('user_data'));
  var data = {
      request_type:"getCartValues",
      uemail: userData.email
  }
  $.ajax({  
      url: API_URL+'addToCart.php',   
      method:'POST',   
      data:JSON.stringify(data),
      header:{ 
      "Content-Type": "application/json"
      },
      success: function(data) {   
          var res_data =  JSON.parse(data);  
          if(res_data.data){
            $.each(res_data.data,function(index,item){  
              var price;
              if(item.sale_price != ''){
                price = item.sale_price;
              } else {
                price = item.regular_price;
              }
                $('.cart-page').append(
                '<li>\
                    <div class="row cart-box border-top py-4">\
                        <div class="col-4">\
                            <img class="rounded" src="'+img_path+item.product_img1+'" alt="Cart Image">\
                        </div>\
                        <div class="col-8">\
                            <h3><b>'+item.product_name+'</b></h3>\
                            <p class="m-0">Black | S</p>\
                            <p><b>&#8377;'+price+'</b></p>\
                            <div class="row">\
                                <div class="col-8">\
                                    <div class="number">\
                                        <span class="minus" data-minus_pro_id="'+item.pro_id+'" data-uemail="'+userData.email+'"><i class="fa fa-minus"></i></span>\
                                        <input class="text-center qty_val" name="qty" type="text" value="'+item.qty+'"/>\
                                        <span class="plus" data-plus_pro_id="'+item.pro_id+'" data-uemail="'+userData.email+'"><i class="fa fa-plus"></i></span>\
                                    </div>\
                                </div>\
                                <div class="col-4 text-end dlt-cart" data-pro_id="'+item.pro_id+'">\
                                    <i class="fa fa-trash"></i>\
                                </div>\
                            </div>\
                        </div> \
                    </div>\
                </li>'
              );  
            });
            $('.subtotal').append(
                '<strong>&#8377;'+res_data.total_price+'</strong>'
            );
          }else{
            $('.result').html("<h1 class='text-center'>Your cart is empty!</h1>");
            $('.cart-toggle .carthead').hide();
            $('.cart-toggle .cartsub').hide();
          }
         
      },  
      error: function(xhr, textStatus, errorThrown) {  
          console.log('Error in Database');  
      }
  });  
}

/* ================================= Cart Qty Plus =================================== */
$('body').on('click','.number .plus',function(){
  $('.loaderDiv').show();
	var plus_pro_id = $(this).attr('data-plus_pro_id');
	var uemail = $(this).attr('data-uemail'); 
  var data = {
    request_type : "CartPlus", 
    uemail : uemail,
    pro_id : plus_pro_id
  } 
  var json_str = JSON.stringify(data);
  $.ajax({  
      url: API_URL+'addToCart.php',   
      method:'POST',   
      data:json_str,
      contentType: 'application/json',
      success: function(data) {   
          var res_data =  JSON.parse(data);   
          if(res_data.status == 200){
            $('.loaderDiv').hide();
            getCartDetails();
            $(".cart-toggle").load(window.location.href  +  " .cart-toggle > *");
          }else{
              $('.result').html('<p class="text-danger">Something wents wrong!</p>');
          }
      },
      error: function(xhr, textStatus, errorThrown) {
          console.log('Error in Database');
      }  
  }); 
});
/* ================================= Cart Qty Minus =================================== */
$('body').on('click','.number .minus',function(){
  $('.loaderDiv').show();
	var minus_pro_id = $(this).attr('data-minus_pro_id');
	var uemail = $(this).attr('data-uemail'); 
	// var qty = $('.number input[name="qty"]').val(); 
  // if(qty == 1){

  // }else{
    var data = {
      request_type : "CartMinus", 
      uemail : uemail,
      pro_id : minus_pro_id
    } 
    var json_str = JSON.stringify(data);
    $.ajax({  
        url: API_URL+'addToCart.php',   
        method:'POST',   
        data:json_str,
        contentType: 'application/json',
        success: function(data) {   
            var res_data =  JSON.parse(data);   
            if(res_data.status == 200){
              $('.loaderDiv').hide();
              getCartDetails();
              $(".cart-toggle").load(window.location.href  +  " .cart-toggle > *");
            }else{
                $('.result').html('<p class="text-danger">Something wents wrong!</p>');
            }
        },
        error: function(xhr, textStatus, errorThrown) {
            console.log('Error in Database');
        }  
    }); 
  // }
});


/* ================================= Cart Delate Item =================================== */
$('body').on('click','.dlt-cart',function (e) {  
  e.preventDefault();
  $('.loaderDiv').show();
  var userData = JSON.parse(localStorage.getItem('user_data'));
  var cart_pro_id = $(this).attr('data-pro_id');
  var cart_remove_item = {
      request_type: "deleteCart", 
      addtocart_pro_id: cart_pro_id,
      uemail: userData.email
  } 
  var json_str = JSON.stringify(cart_remove_item);
  $.ajax({  
      url: API_URL+'addToCart.php',   
      method:'POST',   
      data:json_str,
      contentType: 'application/json',
      success: function(data) {   
          var res_data =  JSON.parse(data);   
          if(res_data.status == 200){
            $('.loaderDiv').hide();
            getCartDetails();
            $(".cart-toggle").load(window.location.href  +  " .cart-toggle > *");
          }else{
              $('.result').html('<p class="text-danger">Something wents wrong!</p>');
          }
      },
      error: function(xhr, textStatus, errorThrown) {
          console.log('Error in Database');
      }  
  }); 
});


/* ================================= Select Address =================================== */
$(document).ready(function () {
  $('body').on('click','.radio-input',function(){
    if($(this).hasClass('checked')){
      $(this).removeClass('checked');
    }else{
      $(this).addClass('checked');
    }
  });
});