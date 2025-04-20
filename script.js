const documento = document.documentElement;
const gerenciaTema = {
  tema: document.querySelectorAll(`input[name="tema"]`),
  modal: document.getElementById(`modal-tema`),
  abrirModal: function () { this.modal.style.display = `block`; },
  fecharModal: function () { this.modal.style.display = `none`; },
  aplicarTema: (tema) => {
    documento.setAttribute(`data-theme`, tema);
    localStorage.setItem(`tema`, tema);
  },
  recuperarTema: function () {
    const temaSalvo = localStorage.getItem(`tema`);
    const temasValidos = Array.from(this.tema).map(input => input.value);
    const temaAtual = temasValidos.includes(temaSalvo) ? temaSalvo : this.tema[0].value;
    this.tema.forEach(tema => {
      if (tema.value === temaAtual) {
        tema.checked = true;
        documento.setAttribute(`data-theme`, temaAtual);
      }
    });
    localStorage.setItem(`tema`, temaAtual);
  }
}
document.getElementById(`abrir-modal`).addEventListener(`click`, () => gerenciaTema.abrirModal());
document.getElementById(`fechar-modal`).addEventListener(`click`, () => gerenciaTema.fecharModal());
gerenciaTema.tema.forEach(input => input.addEventListener(`change`, (evento) => gerenciaTema.aplicarTema(evento.target.value)));
gerenciaTema.recuperarTema();