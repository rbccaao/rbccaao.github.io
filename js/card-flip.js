var card = document.querySelector('.flipbox');
var buttonFront = document.querySelector('.flipboxbuttonfront');
var buttonBack = document.querySelector('.flipboxbuttonback');
buttonFront.addEventListener('click', function() {
    card.classList.add('flipped');
    card.classList.remove('unflipped')
});
buttonBack.addEventListener('click', function() {
  card.classList.add('unflipped');
  card.classList.remove('flipped')
}
);
