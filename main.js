'use strict';

document.querySelectorAll('.btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
    let dots = btn.parentNode.querySelector('.dots');
    let more = btn.parentNode.querySelector('.more');
    

     if(dots.style.display === 'none') {
      dots.style.display = 'inline';
      more.style.display = 'none';
      btn.textContent = 'Подробнее';
    } else {
      //Иначе показать текст и скрыть точки
      dots.style.display = 'none';
      more.style.display = 'inline';
      btn.textContent = 'Скрыть';
    }
    });
});
