angular.module('listaTelefonica')
  .filter('ellipsisFilter', () => (
    (input, size) => {
      if(input.length <= size)
        return input;
      let output = input.substring(0,(size || 2)) + '...';
      return output;
    }
  ))