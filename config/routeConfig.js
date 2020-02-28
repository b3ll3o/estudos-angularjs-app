angular.module('listaTelefonica')
  .config($routeProvider => {
    
    $routeProvider
      .when("/contatos", {
        templateUrl : "view/contatos.html"
      });
  });