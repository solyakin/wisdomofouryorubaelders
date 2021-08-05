// Wow js start
new WOW().init();

//onscroll animation


// Smooth scroll to anchor links
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top-60
        }, 1500, 'easeInOutExpo');
        return false;
      }
    }
  });
});

// hamburger menu icons
  $('.navbar-toggler').on('click', function(){
     $(this).toggleClass('active');
  });

// Toggle Mobile Navbar
  $('.navbar-collapse a').click(function(){
      $(".navbar-collapse").collapse('hide');
      $('.navbar-toggler').removeClass('active');
  });

$('body').scrollspy({ target: '.navbar-custom', offset: 100 })

$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})


/*------Contact form-----*/
$('#contact-form').bootstrapValidator({
  feedbackIcons: {
        valid: 'fas fa-check',
        invalid: 'fas fa-times',
        validating: 'fas fa-refresh'
      },
  fields: {            
    fullName: {
      validators: {
        notEmpty: {
          message: 'Name is required. Please enter name.'
        }
      }
    },
    message: {
      validators: {
        notEmpty: {
          message: 'Message is required. Please enter some message.'
        }
      }
    },
    phoneNo: {
      validators: {
        notEmpty: {
          message: 'Phone No is required. Please enter.'
        }
      }
    },
    email: {
      validators: {
        notEmpty: {
          message: 'Email is required. Please enter email.'
        },
        email: {
          message: 'Please enter a correct email address.'
        }
      }
    }

  }
})

.on('success.form.bv', function(e) {
  var data = $('#contact-form').serialize();

  $.ajax({
      type: "POST",
      url: "php/mail-process.php",         
      data: $('#contact-form').serialize(),
      success: function(msg){           
        $('.form-message').html(msg);
        $('.form-message').show();
        // window.setTimeout(function(){
        // window.location.reload();
        // //      window.location ="index.html";
        //   resetForm($('#contact-form'));
        //       }, 4000);     
        
        let username = document.getElementById('user');
        const navLink = username.disburt(currentGage)

      },
      error: function(msg){           
        $('.form-message').html(msg);
        $('.form-message').show();
        resetForm($('#contact-form'));
      }
   });
  return false;
});
function resetForm($form) {
  $form.find('input:text, input:password, input, input:file, select, textarea').val('');
  $form.find('input:radio, input:checkbox').removeAttr('checked').removeAttr('selected');
  $form.find('.form-control-feedback').css('display', 'none');
}


//sharing URL via social media
const fb = document.querySelector('.facebook');
const image = document.querySelector('#image');
const url = "http://wisdomofouryorubaelders.com/";
const params = "menubar=no,toolbar=no,status=no,width=570,height=570,top=";

function shareToFacebook(){
  let imageSource = image.src;
  let imageTitle = image.alt;
  let shareLink = `http://www.facebook.com/sharer/sharer.php?u=${imageSource}&t=${imageTitle}`;
  window.open(shareLink, "NewWindow", params)
  
}
if(fb != null){
  fb.addEventListener('click', () => {
    shareToFacebook(); 
  })
}

//Twitter
// var pageUrl = encodeURIComponent(document.URL);
// var tweet = encodeURIComponent(jQuery("meta[property='og:description']").attr("content"));
// const Twitter = document.querySelector('.twitter');

// function shareToTwitter(){
//   let imageSource = image.src;
//   let imageTitle = image.alt;
//   let shareUrl = `https://twitter.com/intent/tweet?url=${imageSource}&text=${imageTitle}`;
//   window.open(shareUrl, "NewWindow", params)
// }
// if(Twitter != null){
// Twitter.addEventListener('click', () =>{
//   shareToTwitter();
// })
// }

//Whatsapp
const share = () =>{
  let whatsappImage = image.src;
  let shareImage = encodeURIComponent(whatsappImage);
  let shareUrl = "whatsapp://send?text=" + whatsappImage;
  window.open(shareUrl, "NewWindow", params)
}

//PAYMENT FORM
const submitBtn = document.querySelector('#submit-btn');
const paymentDetail = document.querySelector('.payment-detail');
const buyNow = document.querySelector('.buy-now');
const checkOut = document.querySelector('.checkout');
const userName = document.querySelector('.name');
const email = document.querySelector('.email');
const phone = document.querySelector('.number');
const option = document.querySelector('select');
const amount = document.querySelector('.amount');
const payment = document.querySelector('#make-payment');
const softCopy = document.querySelector('#soft');
const hardCopy = document.querySelector('#hard');

// (key.SECRET_KEY)


if(submitBtn){
  submitBtn.addEventListener('click', () => {
  if(soft.checked){
    let rate_value = softCopy.value;
    payment.addEventListener('click', makePayment(rate_value))
  } else if(hard.checked){
    let rate_value = hardCopy.value;
    payment.addEventListener('click', makePayment(rate_value))
  }

  //FLUTTERWAVE PAYMENT GATEWAY
  function makePayment(value) {
    FlutterwaveCheckout({
      public_key: APIKEY,
      tx_ref: "RX1",
      amount: value,
      currency: "NGN",
      country: "NG",
      payment_options: " ",
      redirect_url: // specified redirect URL
        "http://wisdomofouryorubaelders.com/checkoutpage.html",
      meta: {
        consumer_id: 23,
        consumer_mac: "92a3-912ba-1192a",
      },
      customer: {
        email: email.value,
        phone_number: phone.value,
        name: userName.value,
      },
      callback: function (data) {
        console.log(data);
      },
      onclose: function() {
        // close modal
      },
      customizations: {
        title: "Words of our Yoruba Elders",
        description: "Payment for items in cart",
        logo: "https://res.cloudinary.com/dfauupezh/image/upload/v1624902704/favicon_q8y8n3.jpg",
      },
    });
  }
})
}
  

