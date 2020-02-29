angular.module('listaTelefonica')
  .controller('novoContatoController', 
    function($scope, listaTelefonicaService, serialGeneration, operadoras){
    
      $scope.app = 'Adiciona Contato';
      $scope.operadoras = operadoras;
      
      $scope.adicionarContato = contato => {
        
        contato.serial = serialGeneration.generate();

        listaTelefonicaService.saveContato(contato)
          .then(res => res.data)
          .then(data => {
            $scope.contatoForm.$setPristine();
            delete $scope.contato;
          });
        }
  });