angular.module('listaTelefonica')
  .filter('nameFilter', () => (
    input => {
      const listaNomes = input.split(' ');
      const listaNomesPrimeiraMaiuscula = listaNomes.map(nome => 
        nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase()
      )
      return listaNomesPrimeiraMaiuscula.join(' ');
    }
  ))