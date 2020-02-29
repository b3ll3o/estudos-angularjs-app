angular.module('listaTelefonica')
  .service('operadorasService', function($http){

    this.getOperadoras = () => (
      $http.get('http://localhost:3000/api/operadoras')
        .then(res => res.data)
    );
  });