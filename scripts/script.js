$( "#accordion" ).accordion();

new WOW({
    animateClass: 'animate__animated'
}).init();

$('.test-popup-link').magnificPopup({
    type: 'image'
});

$('.single-item').slick();

let indexInput = $('#index-input');


$('#formBtn').click( function (){
   let nameInput = $('#name-input');
   let surnameInput = $('#surname-input');
   let phoneInput = $('#phone-input');
   let countryInput = $('#country-input');
   let addressInput = $('#address-input');

   if (!nameInput.val()) {
       alert('Заполните поле: Имя');
       return;
   }
   if (!surnameInput.val()) {
       alert('Заполните поле: Фамилия');
       return;
   }
   if (!phoneInput.val()) {
       alert('Заполните поле: Телефон');
       return;
   }
   if (!countryInput.val()) {
       alert('Заполните поле: Страна');
       return;
   }
   if (!indexInput.val()) {
       alert('Заполните поле: Индекс');
       return;
   }
   if (!addressInput.val()) {
       alert('Заполните поле: Адрес');
       return;
   }

   alert('Спасибо за заказ');
   $('form').css('display', 'none');
   $('h2').html('Спасибо за заказ. Мы свяжемся с вами в ближайшее время!')
});

$(function() {
    $("#phone-input").mask("8(999) 999-9999");
    $("#index-input").mask("999999", {placeholder: "" });
});