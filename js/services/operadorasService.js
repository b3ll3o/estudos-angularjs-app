angular.module('listaTelefonica')
  .service('operadorasService', function($http, configService){

    this.getOperadoras = () => (
      $http.get(configService.baseUrl + '/operadoras')
    );
  });