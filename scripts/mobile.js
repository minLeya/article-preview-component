const button = document.querySelector('#button-1');
const authorInfo = document.querySelector('.author-info');
const activeState = document.querySelector('.active-state');
const shareIconContainer = document.querySelector('#button-2');

button.addEventListener('click', function() {
    console.log('you clicked me');
    authorInfo.style.display = 'none';
    activeState.classList.add('active');
    shareIconContainer.classList.add('active');
})