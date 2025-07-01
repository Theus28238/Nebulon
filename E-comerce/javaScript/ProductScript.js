document.addEventListener('DOMContentLoaded', () => {
  // Trocar imagem principal ao clicar nas miniaturas
  const thumbnails = document.querySelectorAll('.thumb');
  const mainImage = document.getElementById('mainImage');

  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumbnails.forEach(t => t.classList.remove('selected'));
      thumb.classList.add('selected');
      mainImage.src = thumb.dataset.full;
    });
  });

  // Controle de quantidade
  const decreaseBtn = document.getElementById('decreaseQty');
  const increaseBtn = document.getElementById('increaseQty');
  const qtyInput = document.getElementById('qtyInput');

  decreaseBtn.addEventListener('click', () => {
    let current = parseInt(qtyInput.value);
    if (current > 1) qtyInput.value = current - 1;
  });

  increaseBtn.addEventListener('click', () => {
    let current = parseInt(qtyInput.value);
    if (current < 10) qtyInput.value = current + 1;
  });

  // Seleção do tamanho (fix no seletor)
  const sizeButtons = document.querySelectorAll('.size-btn');

  sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
      sizeButtons.forEach(btn => btn.classList.remove('selected'));
      button.classList.add('selected');
    });
  });

  // Menu hamburguer toggle
  const menuToggle = document.getElementById('menuToggle');
  const navList = document.getElementById('navList');

  if (menuToggle && navList) {
    menuToggle.addEventListener('click', () => {
      navList.classList.toggle('open');
    });
  }
});
