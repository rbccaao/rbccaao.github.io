const shareData = {
    title: 'Rebecca Ao | Web Developer',
    text: 'Contact info of Rebecca Ao.',
    url: 'https://rbccaao.github.io/welcome'
  }

  const btn = document.getElementById('qr-code');
  const resultPara = document.querySelector('.result');

  // Share must be triggered by "user activation"
  btn.addEventListener('click', async () => {
    try {
      await navigator.share(shareData)
      resultPara.textContent = 'Link shared successfully'
    } catch(err) {
      resultPara.textContent = 'Error: ' + err
    }
  });
