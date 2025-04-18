const documento = document.documentElement;
const gerenciaTema = {
  lightDark: document.querySelector(`input[name="tema"][value="light-dark"]`),
  light: document.querySelector(`input[name="tema"][value="light"]`),
  dark: document.querySelector(`input[name="tema"][value="dark"]`),
  modal: document.getElementById(`modal-tema`),
  abrirModal: () => { gerenciaTema.modal.style.display = `block`; },
  fecharModal: () => { gerenciaTema.modal.style.display = `none`; },
  aplicarTema: (tema) => {
    documento.setAttribute(`data-theme`, tema);
    localStorage.setItem(`tema`, tema);
  },
  mudarTema: function () {
    if (this.lightDark.checked === true) {
      this.aplicarTema(`light-dark`);
    } else if (this.light.checked === true) {
      this.aplicarTema(`light`);
    } else if (this.dark.checked === true) {
      this.aplicarTema(`dark`);
    } else {
      this.aplicarTema(`light-dark`);
    }
  },
  recuperarTema: function () {
    const temaSalvo = localStorage.getItem(`tema`);
    switch (temaSalvo) {
      case `light-dark`:
        this.lightDark.checked = true;
        documento.setAttribute(`data-theme`, `light-dark`);
        break;
      case `light`:
        this.light.checked = true;
        documento.setAttribute(`data-theme`, `light`);
        break;
      case `dark`:
        this.dark.checked = true;
        documento.setAttribute(`data-theme`, `dark`);
        break;
      default:
        this.lightDark.checked = true;
        documento.setAttribute(`data-theme`, `light-dark`);
        break;
    }
  }
}
document.getElementById(`abrir-modal`).addEventListener(`click`, () => gerenciaTema.abrirModal());
document.getElementById(`fechar-modal`).addEventListener(`click`, () => gerenciaTema.fecharModal());
document.querySelectorAll(`input[name="tema"]`).forEach(input => input.addEventListener(`change`, () => gerenciaTema.mudarTema()));
gerenciaTema.recuperarTema();