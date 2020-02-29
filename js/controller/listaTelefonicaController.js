angular.module('listaTelefonica')
  .controller('listaTelefonicaController', function($scope, listaTelefonicaService){
    
    $scope.app = 'Lista Telefonica';
    $scope.contatos = [];

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

    carregaContatos();
  });