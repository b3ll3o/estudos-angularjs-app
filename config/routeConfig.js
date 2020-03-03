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

      .when('/detalhesContato/:id', {
        templateUrl: 'view/detalhes.html', 
        controller: 'DetalhesController', 
        resolve: {
          contato: (listaTelefonicaService, $route) => (
            listaTelefonicaService.getContato($route.current.params.id)
          )
        }
      })

      .when('/error', {
        templateUrl: 'view/error.html', 
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