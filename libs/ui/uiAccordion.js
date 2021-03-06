angular.module('ui', []);

angular.module('ui')
  .run($templateCache => {
    $templateCache
      .put('view/accordion.html', '<div class="ui-accordion-title" ng-click="open()">{{title}}</div><div class="ui-accordion-content" ng-transclude ng-if="isOpened"></div>');
  });

angular.module('ui')
  .directive('uiAccordions', () => ({
    controller: function($scope, $element, $attrs){
      let accordions = [];

      this.registerAccordion = accordion => {
        accordions.push(accordion);
      }

      this.closeAll = () => {
        accordions.forEach(accordion => {
          accordion.isOpened = false;
        });
      }
    }
  }))


angular.module('ui')
  .directive('uiAccordion', () => ({
    templateUrl: 'view/accordion.html', 
    transclude: true,
    scope: {
      title: '@'
    }, 
    require: '^uiAccordions',
    link: (scope, element, attrs, ctrl) => {
      ctrl.registerAccordion(scope);
      scope.open = () => {
        ctrl.closeAll();
        scope.isOpened = true;
      }
    }
  }));