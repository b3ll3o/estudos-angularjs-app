angular.module('listaTelefonica')
  .directive('uiAlert', () => ({
    templateUrl: 'view/alert.html', 
    replace: true, 
    restrict: 'E', 
    scope: {
      title: '@', 
      message: '='
    }
  }));