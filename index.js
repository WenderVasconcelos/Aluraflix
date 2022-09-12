var arrayLivros = ["https://images-na.ssl-images-amazon.com/images/I/61jgm6ooXzL.jpg", "https://images-na.ssl-images-amazon.com/images/I/71NsVQ5MlwL.jpg", "https://images-na.ssl-images-amazon.com/images/I/81QnqHwRiUL.jpg", "https://images-na.ssl-images-amazon.com/images/I/8172dLr8Z7L.jpg", "https://images-na.ssl-images-amazon.com/images/I/81RI+iGwPGL.jpg", "https://images-na.ssl-images-amazon.com/images/I/81yFIh1yoZL.jpg", "https://images-na.ssl-images-amazon.com/images/I/81rvO7xcJOL.jpg"];


  //arrayLivros.push();
  for (var i = 0; i < arrayLivros.length; i++){
    document.write(listarLivrosNaTela((arrayLivros[i])));
  }

function adicionarLivro() {
  //PEGA A VARIAVEL DO HTML
    var livroFavorito = document.getElementById("livro").value;
  //SE O FINAL DO TEXTO INSERIDO FOR .JPG
    if (livroFavorito.endsWith(".jpg")) {
  //RETORNA O LINK PARA A FUNÇAO QUE IRA RETORNAR EM TELA
    listarLivrosNaTela(livroFavorito);
  //SENAO RETORNA ALERTA
    } else {
      alert("Endereço de livro inválido, insira um link de imagem .jpg");
    }
  //RESETA O PLACEHOLDER DO INPUT
    document.getElementById("livro").value = "";
  }
  
  function listarLivrosNaTela(livroFavorito) {
  //INSERE O TEXTO DENTRO DE UMA TAG IMG
    var elementoLivroFavorito = "<img src=" + livroFavorito + ">";
  //DECLARA ONDE SERÁ MOSTRADO EM TELA
  var elementoListaLivros = document.getElementById("listaLivros");
  //INFORMA QUE DEVE SER ADICIONADO UM NOVO LINK NO CODIGO SEM APAGAR OS DEMAIS
    elementoListaLivros.innerHTML = elementoListaLivros.innerHTML + elementoLivroFavorito;
  }
  