angular.module('listaTelefonica')
  .factory('listaTelefonicaService', ($http, configService) => {

    const getContatos = () => (
      $http.get(configService.baseUrl + '/contatos')
    );

    const saveContato = contato => (
      $http.post(configService.baseUrl + '/contatos', contato)
    );

    const deleteContato = id => (
      $http.delete(configService.baseUrl + '/contatos/' + id)
    );

    return {
      getContatos, 
      saveContato, 
      deleteContato
    }
  });