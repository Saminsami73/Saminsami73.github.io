$(document).ready(function () {
  //mobile menu action
  $('.main-menu-button').on('click', function () {
    $(this).toggleClass('open').parents('body').toggleClass('mobile-menu-open')
  });

  //disclaimer toggle
  $('.disclaimer-more').on('click', function () {
    $('.disclaimer-wr').toggleClass('more')
  })

  // get access
  $('.features-box .r-side .button-box a.button.button-green').on('click', function() {
    var gaData = getPrepareGaData(this);
    ga('send', 'event', 'Demo Content', 'gotoPrice', gaData.current);
  });
  // buy now
  $('a.buy-now-button').on('click', function() {
    var gaData = getPrepareGaData(this);
    ga('send', 'event', 'Menu Top Demo', 'gotoPrice', gaData.current);
  });
  // mobile-menu
  $('.mobile-menu a').on('click', function() {
    var gaData = getPrepareGaData(this);
    if (gaData.new != '') {
      ga('send', 'event', 'Menu Top Demo', gaData.new, gaData.current);
    }
  });
  // menu
  $('.aside-box .inner a').on('click', function () {
    var gaData = getPrepareGaData(this);
    ga('send', 'event', 'Menu Side Demo', gaData.new, gaData.current);
  });
  // footer menu
  $('.wr .t-side .col a').on('click', function() {
    var gaData = getPrepareGaData(this);
    ga('send', 'event', 'Menu Bottom Demo', gaData.new, gaData.current);
  });
  // social link
  $('.social-links a').on('click', function() {

    var gaData = getPrepareGaData(this);

    var socialNetworkName = '';
    if (gaData.new.indexOf('facebook.com') != -1) {
      socialNetworkName = 'facebook';
    }
    if (gaData.new.indexOf('twitter.com') != -1) {
      socialNetworkName = 'twitter';
    }
    if (gaData.new.indexOf('plus.google.com') != -1) {
      socialNetworkName = 'google-plus';
    }
    if (gaData.new.indexOf('instagram.com') != -1) {
      socialNetworkName = 'instagram';
    }
    if (gaData.new.indexOf('youtube.com') != -1) {
      socialNetworkName = 'youtube';
    }

    ga('send', 'event', 'Social', socialNetworkName, gaData.current);
  });
  // login link
  $('a.login-box').on('click', function() {
    var gaData = getPrepareGaData(this);
    ga('send', 'event', 'Login', 'gotoMspyonline', gaData.current);
  });

  function getPrepareGaData(a) {

    var newPage = '';
    if (typeof $(a).attr('href') != 'undefined') {
      newPage = $(a).attr('href').replace('/', '');
    }
    return {'current': location.href.split('/')[3], 'new': newPage};
  }
})