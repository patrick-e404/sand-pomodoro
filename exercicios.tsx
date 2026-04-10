const buscarUsuarios = async () => {
  try {
    const resposta = await fetch(
      'https://jsonplaceholder.typicode.com/users/1',
    );
    const dados = await resposta.json();
    const { name, email } = dados;
    console.log(`Nome: ${name} | Email: ${email}`);
  } catch (erro) {
    console.log('Erro ao buscar usuário', erro);
  }
};

buscarUsuarios();
