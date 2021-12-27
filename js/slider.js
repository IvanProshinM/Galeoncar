$(document).ready(function () {
    $('.main-part__slider').slick({
        arrows: true,
        dots: false,           /*точечки внизу (видно/не видно)*/
        adaptiveHeight: true, /*подстройка высоты изображения под размер блока*/
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        easing: 'ease',        /*тип анимации при смене слайда linear - default*/
        infinite: true,       /* бесконечно листать слайды или нет*/
        initialSlide: 1,       /* с какого слайда начинать*/
        autoplay: false,        /* автоматическое пролистывание*/
        autoplaySpeed: 1500,  /* скорость автоматического пролистывания*/
        pauseOnFocus: true,    /* пауза, когда слайдер активен*/
        pauseOnHover: true,    /* пауза, когда наводишь курсор на слайдер*/
        pauseOnDotsHover: true,/* пауза, когда наводишь курсор на точки*/
        draggable: true,       /*пролистывание мышкой вкл/выкл*/
        swipe: true,           /*пролистывание пальцем на телефоне вкл/выкл*/
        touchThreshold: 5,     /*расстояние, которое надо преодолеть для перелистывания слайдера на телефоне*/
        touchMove: true,       /*двишать слайдер мышкой вкл/выкл*/
        waitForAnimate: true,   /*ожидание окончания анимации перед следующим переключением слайда*/
        centerMode: true,
        variableWidth: true,     /*подстройка ширины блока под размер изображения*/
        rows: 1,               /*ряды слайдера*/
        slidesPerRow: false,  /*количество рядов слайдера*/
        vertical: false,        /*вертикальный слайдер (поменяй в css flex в классе, где у тебя слайдер!)*/
        verticalSwiping: false  /*очевидно же...*/

    });
})
$(document).ready(function () {
    $('.auto-park__slider').slick({
        arrows: true,
        dots: true,           /*точечки внизу (видно/не видно)*/
        adaptiveHeight: false, /*подстройка высоты изображения под размер блока*/
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        easing: 'ease',        /*тип анимации при смене слайда linear - default*/
        infinite: true,       /* бесконечно листать слайды или нет*/
        initialSlide: 1,       /* с какого слайда начинать*/
        autoplay: false,        /* автоматическое пролистывание*/
        autoplaySpeed: 1500,  /* скорость автоматического пролистывания*/
        pauseOnFocus: true,    /* пауза, когда слайдер активен*/
        pauseOnHover: true,    /* пауза, когда наводишь курсор на слайдер*/
        pauseOnDotsHover: true,/* пауза, когда наводишь курсор на точки*/
        draggable: true,       /*пролистывание мышкой вкл/выкл*/
        swipe: true,           /*пролистывание пальцем на телефоне вкл/выкл*/
        touchThreshold: 5,     /*расстояние, которое надо преодолеть для перелистывания слайдера на телефоне*/
        touchMove: true,       /*двишать слайдер мышкой вкл/выкл*/
        waitForAnimate: true,   /*ожидание окончания анимации перед следующим переключением слайда*/
        centerMode: true,
        variableWidth: true,     /*подстройка ширины блока под размер изображения*/
        rows: 1,               /*ряды слайдера*/
        slidesPerRow: false,  /*количество рядов слайдера*/
        vertical: false,        /*вертикальный слайдер (поменяй в css flex в классе, где у тебя слайдер!)*/
        verticalSwiping: false  /*очевидно же...*/

    });
})
/*$(".arrow").click(function() {
    $(this).toggleClass("open");
});*/
/*$(document).ready(function() {
    $('.conditions-part__link').click(function (event) {
      $(this).toggleClass('active').next().slideToggle(300).toggleClass("open")

    });
});*/

$(document).ready(function() {
    $('.conditions-part__link').click(function (event) {
        $(this).next().slideToggle(300)
        $(this).find('.arrow').toggleClass("open")
    });

});
$(document).ready(function () {
    $('.reviews-part__slider').slick({
        arrows: true,
        dots: true,           /*точечки внизу (видно/не видно)*/
        adaptiveHeight: false, /*подстройка высоты изображения под размер блока*/
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        easing: 'ease',        /*тип анимации при смене слайда linear - default*/
        infinite: true,       /* бесконечно листать слайды или нет*/
        initialSlide: 1,       /* с какого слайда начинать*/
        autoplay: false,        /* автоматическое пролистывание*/
        autoplaySpeed: 1500,  /* скорость автоматического пролистывания*/
        pauseOnFocus: true,    /* пауза, когда слайдер активен*/
        pauseOnHover: true,    /* пауза, когда наводишь курсор на слайдер*/
        pauseOnDotsHover: true,/* пауза, когда наводишь курсор на точки*/
        draggable: true,       /*пролистывание мышкой вкл/выкл*/
        swipe: true,           /*пролистывание пальцем на телефоне вкл/выкл*/
        touchThreshold: 5,     /*расстояние, которое надо преодолеть для перелистывания слайдера на телефоне*/
        touchMove: true,       /*двишать слайдер мышкой вкл/выкл*/
        waitForAnimate: true,   /*ожидание окончания анимации перед следующим переключением слайда*/
        centerMode: true,
        variableWidth: false,     /*подстройка ширины блока под размер изображения*/
        rows: 1,               /*ряды слайдера*/
        slidesPerRow: false,  /*количество рядов слайдера*/
        vertical: false,        /*вертикальный слайдер (поменяй в css flex в классе, где у тебя слайдер!)*/
        verticalSwiping: false  /*очевидно же...*/

    });
})
