angular.module('listaTelefonica')
  .controller('DetalhesController', function($scope, contato){
    
    $scope.contato = contato;
  });