angular.module('listaTelefonica')
  .factory('listaTelefonicaService', ($http, configService) => {

    const getContatos = () => (
      $http.get('http://localhost:3000/api/contatos')
    );

    const saveContato = contato => (
      $http.post('http://localhost:3000/api/contatos', contato)
    );

    const deleteContato = id => (
      $http.delete('http://localhost:3000/api/contatos/' + id)
    );

    return {
      getContatos, 
      saveContato, 
      deleteContato
    }
  });