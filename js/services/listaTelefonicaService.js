angular.module('listaTelefonica')
  .factory('listaTelefonicaService', $http => ({

    getContatos: () => (
      $http.get('http://localhost:3000/api/contatos')
    ),

    getContato: id => (
      $http.get('http://localhost:3000/api/contatos/' + id)
        .then(res => res.data)
    ),

    saveContato: contato => (
      $http.post('http://localhost:3000/api/contatos', contato)
    ),

    deleteContato: id => (
      $http.delete('http://localhost:3000/api/contatos/' + id)
    )
  }));