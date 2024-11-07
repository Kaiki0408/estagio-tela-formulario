function selectTipoPessoa(element) {
  const cpf = document.getElementById("cpf-input");
  const cnpj = document.getElementById("cnpj-input");

  cpf.classList.add("hidden");
  cnpj.classList.add("hidden");

  if (element.value === "cpf") {
    cpf.classList.remove("hidden");
  } else if (element.value === "cnpj") {
    cnpj.classList.remove("hidden");
  }
}