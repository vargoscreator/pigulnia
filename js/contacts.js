const contactsBtn = document.querySelector('.contacts__btn');
const contactsPopup = document.querySelector('.contactsPopup');
const contactsPopupInner = document.querySelector('.contactsPopup__inner');
const contactsPopupClose = document.querySelector('.contactsPopup__close');
function togglePopup() {
    contactsPopup.classList.toggle('active');
}
contactsBtn.addEventListener('click', () => {togglePopup();});
contactsPopupClose.addEventListener('click', () => {togglePopup();});
document.addEventListener('click', (e) => {
    if (!contactsPopupInner.contains(e.target) && !contactsPopupClose.contains(e.target) && !contactsBtn.contains(e.target)) {
        contactsPopup.classList.remove('active');
    }
});
