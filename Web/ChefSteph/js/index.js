document.addEventListener('DOMContentLoaded', () => {
  let btn = document.querySelector('.navbar-toggle');
  let menu = document.querySelector('#navbarMenu');

  btn.addEventListener('click', () => {    
    menu.classList.toggle('active');

    if (menu.classList.contains('active')) {
      let h = menu.scrollHeight;
      menu.style.height = h + 'px';
    } else {
      menu.style.height = '';
    }
  }, false);
}, false);