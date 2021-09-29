import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

export const formProfile = document.querySelector('#popup__buy-form');
export const popupCloseButton = document.querySelector('.popup__close-button_profile');

export const formValidatorProfile = new FormValidator({
  inputSelector: '.popup__input-text',
  submitButtonSelector: '.popup__save-button_profile',
  inputErrorClass: 'popup__input-text_type_error',
  inputErrorTextClass: 'popup__input-error_active'
}, formProfile)

const items = [
  {
    title:'Парикмахерское кресло "Норм" гидравлическое',
    image:'https://wallytally.ru/upload/iblock/de1/de1fa37da355f7697215a9ee38accaa6.jpg',
    price: '9 900'
  },
  {
    title:'Парикмахерское кресло "Норм" гидравлическое',
    image:'https://wallytally.ru/upload/iblock/de1/de1fa37da355f7697215a9ee38accaa6.jpg',
    price: '9 900'
  },
  {
    title:'Парикмахерское кресло "Норм" гидравлическое',
    image:'https://wallytally.ru/upload/iblock/de1/de1fa37da355f7697215a9ee38accaa6.jpg',
    price: '9 900'
  },
  {
    title:'Парикмахерское кресло "Норм" гидравлическое',
    image:'https://wallytally.ru/upload/iblock/de1/de1fa37da355f7697215a9ee38accaa6.jpg',
    price: '9 900'
  }
];

formValidatorProfile.enableValidation();

items.forEach((item) => {
  const card = new Card(item.title, item.image, item.price);
  const cardElement = card.generateCard(); 

  document.querySelector('.content__products').append(cardElement);
});