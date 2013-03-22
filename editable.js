'use strict';

angular.module('tuioApp')
  .directive('editable',function() {

  return {
    restrict: 'A',
    scope: { editMode:"@defaultMode", tplUrl: "@templateUrl", localModel:"=ngModel" },
    link: function(scope, element, attrs) {
	  scope.$on('event:outOfFocus', function() {
	  	scope.editMode = 0;
	  	scope.$apply();
	  });
	  $(element).click(function(e){
	  	console.log(scope.tplUrl);
	  	e.stopPropagation();
	  });
	  scope.getTpl = function(){
	  	return scope.tplUrl;
	  }
    },
    template : '<div ng-include="getTpl()"></div>',
    replace: true
  }
});