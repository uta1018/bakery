// これまでのコードを貼り付けて制作を進めましょう
'use strict';

{
  //sp-menu
  const menuBtn = document.querySelector('.menu-button');
  const overlay = document.querySelector('.overlay');
  const menuItems = document.querySelectorAll('.menu-item');

  menuBtn.addEventListener('click', () => {
    overlay.classList.toggle('show');
    menuBtn.classList.toggle('active');
  });

  menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', () => {
      overlay.classList.toggle('show');
      menuBtn.classList.toggle('active');
    });
  });
  
  
  
  //titleの表示
  
  const titles = document.querySelectorAll('.title');

  window.addEventListener('scroll', () => {
		
		titles.forEach((title) => {
		  let targetPosition = title.getBoundingClientRect().top;
		  if (targetPosition <= window.innerHeight) {
				title.classList.add('slideIn');
			}
		});
		
	});
	
	
	
	
	//decoの画像表示
  
  const decos = document.querySelectorAll('.deco li');

  window.addEventListener('scroll', () => {
		
		decos.forEach((deco) => {
		  let targetPosition = deco.getBoundingClientRect().bottom;
		  if (targetPosition <= window.innerHeight) {
				deco.classList.add('popIn');
			}
		});
		
	});
	
	
	
	//cardの画像表示
  
  const cards = document.querySelectorAll('.card img');

  window.addEventListener('scroll', () => {
		
		cards.forEach((card) => {
		  let targetPosition = card.getBoundingClientRect().top;
		  if (targetPosition <= window.innerHeight) {
				card.classList.add('fadeIn');
			}
		});
		
	});
}
