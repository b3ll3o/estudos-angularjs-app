angular.module('serialGenerator', []);

angular.module('serialGenerator')
  .provider('serialGeneration', function(){

    let _length = 20;

    this.getLength = () => (
      _length
    );

    this.setLength = length => {
      _length = length;
    }

    this.$get = () => ({
      generate: () => {
        let serial = '';
        while(serial.length < _length){
          serial += String
            .fromCharCode(Math.floor(Math.random() * 64 + 32));
        }
        return serial;
      }
    });
  });