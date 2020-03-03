angular.module('listaTelefonica')
  .config($httpProvider => {
    $httpProvider.interceptors.push('TimeStampInterceptor');
    $httpProvider.interceptors.push('ErrorInterceptor');
    $httpProvider.interceptors.push('LoadingInterceptor');
  });