angular.module('listaTelefonica')
  .factory('TimeStampInterceptor', () => ({
    request: config => {
      const { url } = config;
      const timeStamp = new Date().getTime();
      if(url.indexOf('view') > -1)
        return config;
      config.url = url + '?timestamp=' + timeStamp;
      return config;
    }
  }));