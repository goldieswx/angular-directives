angular-directives
==================

Some directives helpers for angular

##paging

Provides a paging functionality as a filter (for ng-repeat) integrates with
bootstrap pagination via bootstrap.ui (http://angular-ui.github.com/bootstrap/).

###Getting started :

- Insert paged.js in your page dependencies
- Define the pager in the controller
- Use the 'pages:pager' filter


###Usage

In the view, it will look like the following

```
<div ng-controller="CtrlPaginated">
	<ul>
		<li ng-repeat="item in data.list | pages:pager">{{item}}</li>
	</ul>
	
	<pagination 
		boundary-links="true" 
		num-pages="pager.numPages" 
		current-page="pager.currentPage" 
		max-size="5">
	</pagination>
</div>

```

Define the pager in the controller (minimum is the page size).


```
function CtrlPaginated($scope)  {

	$scope.list = ['one','two','three','four','five','six'];
	$scope.pager = {
		pageSize: 3  // 3 items per page
	};
}

```


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
Where "views/editables/text" 

```
<div>
	<div class="editable" ng-hide="editMode" ng-click="editMode=1">{{localModel}}</div>
	<input class="input-large" ng-show="editMode" ng-model="localModel">
</div>
```	

