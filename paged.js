'use strict';

angular.module('paged',['ui.bootstrap'])
  .filter('pages',function(){
    return function(a,pager) {
      if (typeof a ==='undefined') return []; 
      if (typeof pager === 'undefined') return  [];
     
      if (typeof pager.currentPage === 'undefined') pager.currentPage = 1;
      if (typeof pager.pageSize === 'undefined') pager.pageSize = 8;
      pager.numPages = Math.max(1,Math.ceil(a.length / pager.pageSize));

      return a.slice((pager.currentPage-1)*(pager.pageSize),(pager.currentPage)*(pager.pageSize));
    };
 });
