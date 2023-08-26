function share() {
    const btn = document.querySelector('button');
    const shareBg = document.querySelector('.tooltip-items');
  
    btn.addEventListener('click', () => {
      shareBg.classList.toggle('ativo');
    });
  }
  share();