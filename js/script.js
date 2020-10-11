"use strict";

let menu = document.getElementById("menu");
let open = false;

function openMenu() {
    if (open === false) {
        menu.classList.add("open");
        open = true;
    } else {
        menu.classList.remove("open");
        open = false;
    }
}

(function openSort() {
    let boxSort = document.getElementsByClassName("sort-title__check");
    let boxSortLength = boxSort.length;
    for (let i = 0; i < boxSortLength; i++) {
        if (boxSort[i].checked) {
            boxSort[i].parentElement.classList.add("close");
        } else {
            boxSort[i].parentElement.classList.remove("close");
        }
    }
}());

let productInfoItem = document.getElementsByClassName("product-info__item");
let boxInfo = document.getElementById("info");
let boxSpecifications = document.getElementById("specifications");
let boxFeedback = document.getElementById("feedback");
let boxQuestions = document.getElementById("questions");

function boxInfoOpen() {
    for (let x = 0; x < 4; x++) {
        productInfoItem[x].classList.remove("current");
        productInfoItem[0].classList.add("current");
        boxSpecifications.classList.add("close");
        boxFeedback.classList.add("close");
        boxQuestions.classList.add("close");
        boxInfo.classList.remove("close");
    }
}

function boxSpecificationsOpen() {
    for (let x = 0; x < 4; x++) {
        productInfoItem[x].classList.remove("current");
        productInfoItem[1].classList.add("current");
        boxSpecifications.classList.remove("close");
        boxFeedback.classList.add("close");
        boxQuestions.classList.add("close");
        boxInfo.classList.add("close");
    }
}

function boxFeedbackOpen() {
    for (let x = 0; x < 4; x++) {
        productInfoItem[x].classList.remove("current");
        productInfoItem[2].classList.add("current");
        boxSpecifications.classList.add("close");
        boxFeedback.classList.remove("close");
        boxQuestions.classList.add("close");
        boxInfo.classList.add("close");
    }
}

function boxQuestionsOpen() {
    for (let x = 0; x < 4; x++) {
        productInfoItem[x].classList.remove("current");
        productInfoItem[3].classList.add("current");
        boxSpecifications.classList.add("close");
        boxFeedback.classList.add("close");
        boxQuestions.classList.remove("close");
        boxInfo.classList.add("close");
    }
}

let buyInClick = document.getElementById("buy-in-click");
let feedbackAdd = document.getElementById("feedback-add");
let questionsAdd = document.getElementById("questions-add");
let closeBuyInClick = true;
let closeFeedbackAdd = true;
let closeQuestionsAdd = true;

function openBuyInClick() {
    if (closeBuyInClick === true) {
        buyInClick.style.display = "flex";
        closeBuyInClick = false;
    } else {
        buyInClick.style.display = "none";
        closeBuyInClick = true;
    }
}

function openFeedbackAdd() {
    if (closeFeedbackAdd === true) {
        feedbackAdd.style.display = "flex";
        closeFeedbackAdd = false;
    } else {
        feedbackAdd.style.display = "none";
        closeFeedbackAdd = true;
    }
}

function openQuestionsAdd() {
    if (closeQuestionsAdd === true) {
        questionsAdd.style.display = "flex";
        closeQuestionsAdd = false;
    } else {
        questionsAdd.style.display = "none";
        closeQuestionsAdd = true;
    }
}

// function previewPagination() {
//     let paginationRadio = document.getElementsByClassName("preview-slider__pagination-radio");
//     let paginationRadioLength = paginationRadio.length;
//     let previewSlide = document.getElementsByClassName("preview__slide");
//     for (let i = 0; i < paginationRadioLength; i++) {
//         if (paginationRadio[i].checked) {
//             paginationRadio[i].parentElement.classList.add("current");
//             previewSlide[i].classList.add("current-slide");
//         } else {
//             paginationRadio[i].parentElement.classList.remove("current");
//             previewSlide[i].classList.remove("current-slide");
//         }
//     }
// }
//
// previewPagination();

$('.buy__button, .button-buy').click(function () {
   $(this).html('В корзине').addClass('click-button');
});

$('.favourites__button').click(function () {
    $(this).toggleClass('add-favorites');
});

$('.preview-slider').slick({
    slidesToShow: 1,
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
});

$('.price-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.section-price__arrow-left'),
    nextArrow: $('.section-price__arrow-right'),
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.slider-preview').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    asNavFor: '.slider__img-view',
    verticalSwiping: true,
    vertical: true,
    focusOnSelect: true,
    nextArrow: '<button type="button" class="slick-next button-bottom"></button>',
    prevArrow: '<button type="button" class="slick-next button-top"></button>',
    responsive: [
        {
            breakpoint: 480,
            settings: {
                verticalSwiping: false,
                vertical: false,
                slidesToShow: 2,
                dots: false,
                arrows: true,
                variableWidth: true,
            }
        }
    ]
});

$('.slider__img-view').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    fade: true,
    asNavFor: '.slider-preview',
});

$('.btn-search-mobile').on('click', function () {
   $('.header__form').fadeToggle();
});



$(window).on('load resize', function() {
    if ($(window).width() < 992) {
        $(document).mouseup(function (e) { // событие клика по веб-документу
            var div = $(".sort__wrap"); // тут указываем ID элемента
            var btn = $('.btn-filter, .btn-close');
            if (!div.is(e.target) // если клик был не по нашему блоку
                && !btn.is(e.target) && btn.has(e.target).length === 0
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.fadeOut(); // скрываем его
                // btn.removeClass('on');
            }
        });

    }

    if ($(window).width() < 768) {
        $(document).mouseup(function (e) { // событие клика по веб-документу
            var div = $(".header__form"); // тут указываем ID элемента
            var btn = $('.btn-search-mobile');
            if (!div.is(e.target) // если клик был не по нашему блоку
                && !btn.is(e.target) && btn.has(e.target).length === 0
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.fadeOut(); // скрываем его
            }
        });
    }
});
// slick active

$('.btn-burger').click(function () {
    $('.header__box-bottom').fadeToggle();
});

$('.btn-filter').click(function () {
    $('.sort__wrap').fadeToggle();
});

$(function(){
    $('.form-validate').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                minlength: 2
            },
            message: {
                required: true,
                minlength: 2
            }
        },
        messages: {
            name: {
                required: "Поле обязательно к заполнению",
                minlength: "Введите не менее 2-х символов"
            },
            email: {
                required: "Поле 'Email' обязательно к заполнению",
                email: "Необходим формат name@domain.com"
            },
            phone: {
                required: "Поле 'Телефон' обязательно к заполнению",
                phone: "Вы ввели не правильный формат"
            },
            message: {
                required: "Поле обязательно к заполнению",
                message: "Введите не менее 2-х символов"
            }
        }
    });
});

