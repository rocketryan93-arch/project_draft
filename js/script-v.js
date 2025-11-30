function hover(){
	const cards = document.querySelectorAll('.card-space');
	cards.forEach(card => {
    card.addEventListener('mouseover', () => {
      card.style.transform = 'scale(1.1)';
      card.style.transition = 'transform 0.3s';
    });

    card.addEventListener('mouseout', () => {
      card.style.transform = 'scale(1)';
    });
  });
}
hover();

function newTab() {
  const cardLinks = document.querySelectorAll('.card .link');

  cardLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      window.open(this.href, '_blank');
    });
  });
}

newTab();

function msg(){
	alert("Thank you for letting us know! Your feedback is very important for us!");
}