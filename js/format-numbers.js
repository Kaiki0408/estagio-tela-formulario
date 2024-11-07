// Função para aplicar máscara ao CPF
function mascaraCPF(input) {
  let cpf = input.value;

  // Remove tudo que não for número
  cpf = cpf.replace(/\D/g, "");

  // Formata o CPF conforme o usuário digita
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

  input.value = cpf;
}

// Função para aplicar máscara ao CNPJ
function mascaraCNPJ(input) {
  let cnpj = input.value;

  // Remove tudo que não for número
  cnpj = cnpj.replace(/\D/g, "");

  // Formata o cnpj conforme o usuário digita
  cnpj = cnpj.replace(/(\d{2})(\d)/, "$1.$2");
  cnpj = cnpj.replace(/(\d{3})(\d)/, "$1.$2");
  cnpj = cnpj.replace(/(\d{3})(\d)/, "$1/$2");
  cnpj = cnpj.replace(/(\d{4})(\d{1,2})$/, "$1-$2");

  input.value = cnpj;
}

// Função para aplicar máscara ao Telefone
function mascaraTelefone(input) {
  let telefone = input.value;

  // Remove tudo que não for número
  telefone = telefone.replace(/\D/g, "");

  // Formata o telefone conforme o usuário digita
  telefone = telefone.replace(/(\d{2})(\d)/, "($1) $2");
  telefone = telefone.replace(/(\d{5})(\d)/, "$1-$2");

  input.value = telefone;
}
