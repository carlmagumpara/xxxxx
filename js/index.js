new Vue({
  el: '#app',
  data: {
    menu: true,
    original_nav_offset: ''
  },
  mounted: function() {
   window.addEventListener('resize', this.resizeHandler)
   window.addEventListener('scroll', this.scrollHandler)
   window.addEventListener('load', this.loadHandler)
  },
  methods: {
    openMenu(){
      $('.nav-container ul').slideToggle()
      if (this.menu) {
        $('.burger a').html('C')
        this.menu = false
      } else {
        $('.burger a').html('M')
        this.menu = true
      }
    },
    resizeHandler(){
      window_width = window.innerWidth
      if (window_width < 768) {
        $('.nav-container ul').css('display','none')
        $('.burger a').html('M')
        this.menu = true
      }
      else {
        $('.nav-container ul').css('display','block')
        $('.burger a').html('C')
        this.menu = false
      }
    },
    scrollHandler(){
      this.checkIfItsVisible()
      scroll = $(window).scrollTop();
      if (scroll >= this.original_nav_offset) {
        $('#main-nav').addClass('fixed-top');
        $('.top').fadeIn();
      } else {
        $('#main-nav').removeClass('fixed-top');
        $('.top').fadeOut();
      }
    },
    checkIfItsVisible(){
      pr_1 = $('.pr-1');
      if (pr_1.visible(true, false, 'both')) {
        width = pr_1.attr('progress-value');
        pr_1.css('width', width + '%');
      }
      pr_2 = $('.pr-2');
      if (pr_2.visible(true, false, 'both')) {
        width = pr_2.attr('progress-value');
        pr_2.css('width', width + '%');
      }
      pr_3 = $('.pr-3');
      if (pr_3.visible(true, false, 'both')) {
        width = pr_3.attr('progress-value');
        pr_3.css('width', width + '%');
      }
      pr_4 = $('.pr-4');
      if (pr_4.visible(true, false, 'both')) {
        width = pr_4.attr('progress-value');
        pr_4.css('width', width + '%');
      }
      pr_5 = $('.pr-5');
      if (pr_5.visible(true, false, 'both')) {
        width = pr_5.attr('progress-value');
        pr_5.css('width', width + '%');
      }
      pr_6 = $('.pr-6');
      if (pr_6.visible(true, false, 'both')) {
        width = pr_6.attr('progress-value');
        pr_6.css('width', width + '%');
      }
      pr_7 = $('.pr-7');
      if (pr_7.visible(true, false, 'both')) {
        width = pr_7.attr('progress-value');
        pr_7.css('width', width + '%');
      }
      pr_8 = $('.pr-8');
      if (pr_8.visible(true, false, 'both')) {
        width = pr_8.attr('progress-value');
        pr_8.css('width', width + '%');
      }
    },
    loadHandler(){
      $.when($('.loading').fadeOut(1000))
      .then($.when($('#app').slideDown(1000)).then(this.original_nav_offset = $('#main-nav').offset().top));
    }
  }
});