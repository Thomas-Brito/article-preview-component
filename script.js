class Modal {
  constructor(modal, abrir, fechar) {
    this.modal = modal;
    this.abrir = abrir;
    this.fechar = fechar;
  }
}

const modalTema = new Modal();

modalTema.modal = document.getElementById(`minha-modal`);

modalTema.abrir = document.getElementById(`abrir-modal`).addEventListener(`click`, function() {
  modalTema.modal.style.display = `block`;
});

modalTema.fechar = document.getElementById(`fechar-modal`).addEventListener(`click`, function() {
  modalTema.modal.style.display = `none`;
});

modalTema.mudarTema = function(evento) {
  const temaAtual = evento.target.value;
  document.documentElement.setAttribute(`data-theme`, temaAtual);
  localStorage.setItem(`tema`, temaAtual);
};

modalTema.botoes = document.querySelectorAll(`input[name="tema"]`);

modalTema.botoes.forEach((botao) => {
  botao.addEventListener(`change`, modalTema.mudarTema);
});

let temaSalvo = localStorage.getItem(`tema`);

switch (temaSalvo) {
  case `light-dark`:
    document.querySelector(`input[name="tema"][value="light-dark"]`).checked = true;
    document.documentElement.setAttribute(`data-theme`, `light-dark`);
    break;
  case `light`:
    document.querySelector(`input[name="tema"][value="light"]`).checked = true;
    document.documentElement.setAttribute(`data-theme`, `light`);
    break;
  case `dark`:
    document.querySelector(`input[name="tema"][value="dark"]`).checked = true;
    document.documentElement.setAttribute(`data-theme`, `dark`);
    break;
  default:
    document.querySelector(`input[name="tema"][value="light-dark"]`).checked = true;
    document.documentElement.setAttribute(`data-theme`, `light-dark`);
    break;
}