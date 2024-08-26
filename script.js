const shareButtons = document.querySelectorAll('button');
const shareContainer = document.querySelector('.share-content');
const userContent = document.querySelector('.user-content');
const mainForm = document.querySelectorAll('.main-form');
const textContent = document.querySelector('.text-content');

for (const shareButton of shareButtons) {

    shareButton.addEventListener('click', () => {
        if (window.screen.width < 501) {
            userContent.classList.toggle('hidden');
            mainForm[1].classList.toggle('hidden');
            return
        }
        shareButton.classList.toggle('active-btn');
        shareContainer.classList.toggle('hidden');

    })
}