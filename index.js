const className = document.querySelector('.nome');
const btnGerar = document.querySelector('.btn-gerar');
const inputName = document.querySelector('.imput-name');

btnGerar.addEventListener('click', () => { 
  const inputNameValue = inputName.value;
  className.textContent = inputNameValue
  inputName.value = '';

});
