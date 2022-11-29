const buttonHeight = 300;
const buttonWidth = 600;

const maxWidth = window.innerWidth - buttonWidth;
const maxHeight = window.innerHeight - buttonHeight;

window.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('noBtn')

    noBtn.addEventListener('mouseover', () => {
        noBtn.style.left = Math.floor(Math.random () * (maxWidth + 1)) + 'px';
        noBtn.style.top = Math.floor(Math.random () * (maxHeight + 1)) + 'px';
    })

    const yesBtn = document.getElementById('yesBtn')
    yesBtn.addEventListener('click', () => alert('tnx'));
    
})
