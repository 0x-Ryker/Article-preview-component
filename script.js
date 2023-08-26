function share() {
    const btn = document.querySelector('button');
    const shareBg = document.querySelector('.share-bg');
  
    btn.addEventListener('click', () => {
      shareBg.classList.toggle('ativo');
    });
  }
  share();