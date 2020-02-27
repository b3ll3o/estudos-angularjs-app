angular.module('listaTelefonica')
  .config((serialGenerationProvider) => {
    serialGenerationProvider.setLength(20)
  });