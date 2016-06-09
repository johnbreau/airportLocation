angular.module('airportLocation').directive('dropMe', function() {
  return {
    restrict: 'A',
    link: function(scope,element,attrs){
      //This makes an element Droppable
      element.droppable({
        drop:function(event,ui) {
          var dragIndex = angular.element(ui.draggable).data('index'),
              reject = angular.element(ui.draggable).data('reject'),
              dragEl = angular.element(ui.draggable).parent(),
              dropEl = angular.element(this);

          if (dragEl.hasClass('clickClass') && reject !== true) {
            alert('that hit the spot');
            scope.list2.push(scope.list1[dragIndex]);
            scope.list1.splice(dragIndex, 1);
          } else if (dragEl.hasClass('list2') && !dropEl.hasClass('list2') && reject !== true) {
            scope.list1.push(scope.list2[dragIndex]);
            scope.list2.splice(dragIndex, 1);
          }
          scope.$apply();
        }
      });
    }
  };
});
