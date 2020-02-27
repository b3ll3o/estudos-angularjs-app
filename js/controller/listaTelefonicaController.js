angular.module('listaTelefonica')
  .controller('listaTelefonicaController', ($scope, listaTelefonicaService, operadorasService, serialGeneration) => {
    
    $scope.app = 'Lista Telefonica';
    $scope.operadoras = [];
    $scope.contatos = [];

    $scope.adicionarContato = contato => {
      
      contato.serial = serialGeneration.generate();
      listaTelefonicaService.saveContato(contato)
        .then(res => res.data)
        .then(data => {
          $scope.contatoForm.$setPristine();
          delete $scope.contato;
          $scope.contatos = data
        });
      }

    $scope.apagarContatos = contatos => {
      $scope.contatos = contatos.filter(c => {
        if(c.selecionado){
          listaTelefonicaService.deleteContato(c.id)
          return '';
        }
        return c
      });
    }

    $scope.isContatosSelecionados = contatos => {
      return contatos.some(contato => (
        contato.selecionado
      ));
    }

    $scope.ordenarPor = campo => {
      $scope.criterioOrdenacao = campo;
      $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
    }

    const carregaContatos = () => {
      listaTelefonicaService.getContatos()
        .then(res => res.data)
        .then(data => $scope.contatos = data)
        .catch(err => {
          $scope.error = 'Não foi possivel carregar os contatos.'
        }) 
    };

    const carregaOperadoras = () => {
      operadorasService.getOperadoras()
        .then(res => res.data)
        .then(data => $scope.operadoras = data);
    }

    carregaContatos();
    carregaOperadoras();
  });