angular.module('serialGenerator')
  .config(serialGenerationProvider => {
    serialGenerationProvider.setLength(5)
  });