angular.module('listaTelefonica')
  .service('operadorasService', function($http, configService){

    this.getOperadoras = () => (
      $http.get('http://localhost:3000/api/operadoras')
    );
  });