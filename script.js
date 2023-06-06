const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider(){
    slider.forEach(item=>item.classList.remove('on'))
}

function showSlider(){
    slider[currentSlide].classList.add('on')
}

function nextSlider(){
    hideSlider()
    if(currentSlide == slider.length -1){
        currentSlide = 0;
    }else{
        currentSlide++
    }
    showSlider();
}

function prevSlider(){
    hideSlider()
    if(currentSlide == 0){
        currentSlide = slider.length -1;
    }else{
        currentSlide--
    }
    showSlider();
}

btnNext.addEventListener('click', nextSlider);
btnPrev.addEventListener('click', prevSlider);

currentSlide = currentSlide + 1;
currentSlide = currentSlide - 1;

// Funcao para padronizar o tamanho das divs de acordo com o conteudo
function getMaxHeight() {
    var boxes = document.getElementsByClassName('card');
    var maxHeight = 0;
  
    for (var i = 0; i < boxes.length; i++) {
      var boxHeight = boxes[i].offsetHeight;
      if (boxHeight > maxHeight) {
        maxHeight = boxHeight;
      }
    }
  
    return maxHeight;
  }
  
  // Aplicar a altura máxima a todas as divs
  function setEqualHeight() {
    var boxes = document.getElementsByClassName('card');
    var maxHeight = getMaxHeight();
  
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].style.height = maxHeight + 'px';
    }
  }
  
  // Chamar a função quando a página for carregada
  window.onload = setEqualHeight;


  window.sr = ScrollReveal({reset: true});
  ScrollReveal().reveal('.texto-ligacao', {duration: 1500});
  ScrollReveal().reveal('.texto-ligacao-clientes', {duration: 1500});
  ScrollReveal().reveal('.card', {duration: 1500});