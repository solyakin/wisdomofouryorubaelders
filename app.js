function socialWindow(url) {
    var left = (screen.width - 570) / 2;
    var top = (screen.height - 570) / 2;
    var params = "menubar=no,toolbar=no,status=no,width=570,height=570,top=" + top + ",left=" + left;
    window.open(url,"NewWindow",params);
}

function setShareLinks() {
    var pageUrl = encodeURIComponent(document.URL);
    var tweet = encodeURIComponent(jQuery("meta[property='og:description']").attr("content"));
    
    jQuery(".social-share.facebook").on("click", function() {
        alert("click")
        // url = "https://www.facebook.com/sharer.php?u=" + pageUrl;
        // socialWindow(url);
    });

    jQuery(".social-share.twitter").on("click", function() {
        url = "https://twitter.com/intent/tweet?url=" + pageUrl + "&text=" + tweet;
        socialWindow(url);
    });

    jQuery(".social-share.linkedin").on("click", function() {
        url = "https://www.linkedin.com/shareArticle?mini=true&url=" + pageUrl;
        socialWindow(url);
    })
}

const fbr = document.querySelector('.facebook');
fbr.addEventListener('click', () => {
    alert("click")
  })