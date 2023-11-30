const hamButton = document.querySelector('.toggle');
const navigation = document.querySelectorAll('.item');

hamButton.addEventListener('click', () => {
    hamButton.classList.toggle('open');

    navigation.forEach(item => {

        item.classList.toggle('open');
    });
});
