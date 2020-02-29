angular.module('listaTelefonica')
  .config(($routeProvider, $locationProvider)  => {
    
    $routeProvider
      .when("/contatos", {
        templateUrl : "view/contatos.html", 
        controller: 'listaTelefonicaController'
      })

      .when('/novoContato', {
        templateUrl: 'view/novoContato.html', 
        controller: 'novoContatoController', 
        resolve: {
          operadoras: operadorasService => (
            operadorasService.getOperadoras()
          )
        }
      })

      .otherwise({
        redirectTo: '/contatos'
      });

    $locationProvider
      .hashPrefix('');
  });