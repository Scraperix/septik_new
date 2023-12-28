$(function() {	var Accordion = function(el, multiple) {		this.el = el || {};		this.multiple = multiple || false;		// Variables privadas		var links = this.el.find('.link');		// Evento		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)	}	Accordion.prototype.dropdown = function(e) {		var $el = e.data.el;			$this = $(this),			$next = $this.next();		$next.slideToggle();		$this.parent().toggleClass('open');		if (!e.data.multiple) {			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');		};	}		var accordion = new Accordion($('#accordion'), false);});var swiperMain = new Swiper(".swiper-main-banner", {      spaceBetween: 30,      loop: true,      effect: "fade",      centeredSlides: true,      autoplay: {        delay: 5000,        disableOnInteraction: false,      },      pagination: {        el: ".swiper-pagination",        clickable: true,      },      navigation: {        nextEl: ".swiper-button-next",        prevEl: ".swiper-button-prev",      },    });var swiperBannerEconom = new Swiper(".swiper-banner-econom", {      spaceBetween: 30,      loop: true,      effect: "fade",      centeredSlides: true,      autoplay: {        delay: 5000,        disableOnInteraction: false,      },      pagination: {        el: ".swiper-pagination",        clickable: true,      },      navigation: {        nextEl: ".swiper-button-next",        prevEl: ".swiper-button-prev",      },    });var septikTypesSwiper = new Swiper(".septik-types-swiper", {  slidesPerView: 3,  // centeredSlides: true,  // spaceBetween: 30,  loop: true,  // grabCursor: true,  navigation: {        nextEl: '.swiper-button-next',        prevEl: '.swiper-button-prev',      },  pagination: {    el: ".swiper-pagination",    clickable: true,  },  breakpoints: {        640: {          slidesPerView: 1,          spaceBetween: 20,        },        768: {          slidesPerView: 2,          spaceBetween: 0,        },        1200: {          slidesPerView: 3,          spaceBetween: 20,        },      },});$('.quiz-question__text-hint-text').click(function (e) {     e.preventDefault(); });//quizlet total = 0;$('.quiz-question').each(function(indexInArray, valueOfElement) {    let questionBlock = indexInArray + 1    $(this).attr('data-q', questionBlock);    // $(this).find('input').attr('name', 'q-' + questionBlock)    // $('.quiz-question__number-input').each(function (indexInArray) {     //      $(this).attr('name', 'q-2-' + indexInArray )    // });    total = total + 1;});let quizScroll;if ($(window).width() < 600) {    quizScroll = $(".quiz-wrap").offset().top} else {    quizScroll = $(".quiz-wrap").offset().top}let questionNumber = 1;let inputNumber;let elem = $('.quiz-form').find("input");$('.quiz-question__number-plus, .quiz-question__number-minus').click(function (e) {     $('.quiz-btn__next').removeAttr('disabled');    });$(elem).on('change', function() {    $('.quiz-btn__next').removeAttr('disabled');});let valid = {};$('.quiz-btn__next, .quiz-question input[type="radio"]').click(function() {    // $('.quiz-hint').hide();    $('.quiz-btn__prev').css('display', 'flex');    if (questionNumber < total) {        setTimeout(() => {            questionNumber++;            $('.quiz-btn__next').attr('disabled', 'true')            validNumber = questionNumber - 1            valid['quiestion-' + validNumber] = true;            // console.log(valid)            if (valid['quiestion-' + questionNumber] == true) {                $('.quiz-btn__next').removeAttr('disabled');            }            $('.quiz-question.active').hide();            $('.quiz-question.active').removeClass('active');            $('.quiz-question[data-q=' + questionNumber + ']').fadeIn('slow')            $('.quiz-question[data-q=' + questionNumber + ']').addClass('active');            // $('html, body').animate({            //     scrollTop: quizScroll            // }, 0);            lineWidth()        }, 500);    } else {        setTimeout(() => {            // $('html, body').animate({            //     scrollTop: quizScroll            // }, 0);            $('.quiz-wrap').hide();            $('.quiz-load').css('display', 'flex');            $('.quiz-load').addClass('active');            setTimeout(() => {                $('.quiz-load').hide();                $('.quiz-load').removeClass('active');                $('.quiz-result').show();                $('.quiz-result').addClass('active');            }, 1000);            timer()        }, 500);    }});$('.quiz-btn__prev').click(function() {    if (questionNumber > 2) {        questionNumber--;        if (valid['quiestion-' + questionNumber] == true) {            $('.quiz-btn__next').removeAttr('disabled');            // console.log('valid')        }        $('.quiz-question.active').hide();        $('.quiz-question.active').removeClass('active');        $('.quiz-question[data-q=' + questionNumber + ']').fadeIn('slow')        $('.quiz-question[data-q=' + questionNumber + ']').addClass('active');        $('html, body').animate({            scrollTop: quizScroll        }, 0);    } else if (questionNumber == 2) {        $('html, body').animate({            scrollTop: quizScroll        }, 0);        questionNumber--;        $('.quiz-btn__next').removeAttr('disabled');        $('.quiz-question.active').hide();        $('.quiz-question.active').removeClass('active');        $('.quiz-question[data-q=' + questionNumber + ']').fadeIn('slow')        $('.quiz-question[data-q=' + questionNumber + ']').addClass('active');        // $('.quiz-hint').css('display', 'flex');        $('.quiz-btn__prev').hide();    }    lineWidth()});let lineStep = 100 / total;let line;function lineWidth() {    line = lineStep * (questionNumber-1);    $('.quiz-line__percent').text(Math.round(line));    line = 'calc(' + line + '% - 10rem)';    $('.quiz-line__bg').css('width', line)}