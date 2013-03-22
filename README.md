angular-directives
==================

Some directives helpers for angular

##editable

Provides a simple directive for "edit in place" models

###Getting started :

- Insert editable.js in your page dependencies
- In your global Controller add the following
	
```
    $(document).click(function(ev){
        $scope.$broadcast('event:outOfFocus');
    });

```
For example :

```
angular.module('yourAppName')
  .controller('SiteCtrl', function($scope, $location) {
    $(document).click(function(ev){
        $scope.$broadcast('event:outOfFocus');
    });
});

```

###Usage

```
<div editable default-mode="0" template-url="views/editables/text" ng-model="item"></div>
```	
Were "views/editables/text" 

```
<div>
	<div class="editable" ng-hide="editMode" ng-click="editMode=1">{{localModel}}</div>
	<input class="input-large" ng-show="editMode" ng-model="localModel">
</div>
```	

