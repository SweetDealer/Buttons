document.querySelectorAll('.button-split__right, .button-split__dropdown a').forEach((button) => {
    button.addEventListener('click', () => {
        button.closest('.button-split').classList.toggle('button-split--open')
        console.log(1)
    });
});
