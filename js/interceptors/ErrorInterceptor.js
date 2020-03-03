angular.module('listaTelefonica')
  .factory('ErrorInterceptor', ($q, $location) => ({
    responseError: rejection => {
      if(rejection.status === 404)
        $location.path('/error')

      return $q.reject(rejection)
    }
  }));