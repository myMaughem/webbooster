import { formValidatorProfile } from "./script.js"
import { formProfile, popupCloseButton } from "./script.js"

export default class Card {
  constructor(title, image, price) {
    this._title = title;
    this._image = image;
    this._price = price;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector('.horizontal-card')
      .content
      .querySelector('.content__product')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.content__image').style.backgroundImage = `url(${this._image})`;
    this._element.querySelector('.content__text').textContent = this._title;
    this._element.querySelector('.content__price').textContent = this._price;

    return this._element;
  }

  _handleOpenPopup() {
    document.getElementById('client-name').value = "";
    document.getElementById('client-phone').value = "";
    document.getElementById('client-email').value = "";
    document.getElementById('product-name').value = "";
    formValidatorProfile.hideInputErrors();
    formProfile.classList.add('popup_opened');
  }

  _handleClosePopup() {
    formProfile.classList.remove('popup_opened');
  }

  _setEventListeners() {

    const openPopupBtn = this._element.querySelector('.content__btn_buy');
    openPopupBtn.addEventListener('click', this._handleOpenPopup)

    popupCloseButton.addEventListener('click', () => {
      this._handleClosePopup()
    });

  }
}