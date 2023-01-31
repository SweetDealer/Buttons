document.querySelectorAll('.button-group--right, .menu-dropdown li').forEach((button) => {
    button.addEventListener('click', () => {
        button.closest('.button-with-dropdown').classList.toggle('button-group--open')
        console.log(1)
    });
});
