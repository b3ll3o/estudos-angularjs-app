angular.module('listaTelefonica')
  .factory('LoadingInterceptor', ($q, $rootScope, $timeout) => ({
    
    request: config => {
      $rootScope.loading = true;
      return config;
    }, 

    requestError: ($q, rejection) => (
      $q.reject(rejection)
    ), 

    response: response => {
      $timeout(() => {
        $rootScope.loading = false;
      }, 2000);
      return response
    }, 

    responseError: ($q, rejection) => (
      $q.reject(rejection)
    )
  }));