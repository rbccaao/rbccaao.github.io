var card = document.querySelector('.flipbox');
card.addEventListener( 'click', function() {
  if (card.classList.contains('unflipped')) {
    card.classList.add('flipped');
    card.classList.remove('unflipped')
  } else {
    card.classList.add('unflipped');
    card.classList.remove('flipped')
  }
});
