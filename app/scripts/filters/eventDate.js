'use strict';

angular.module('mobile').filter('eventDate', function ($filter) {
    return function(date_start, date_end) {
      var one_hour=1000*60*60;
      var date1_ms = new Date(date_start).getTime();
      var date2_ms = new Date(date_end).getTime();
      
      var difference_ms = date2_ms - date1_ms;

      if (difference_ms/one_hour < 24) {
        return $filter('date')(date1_ms, 'EEEE dd MMMM') + ' de ' + $filter('date')(date1_ms, 'HH:mm') + ' à ' + $filter('date')(date1_ms + difference_ms, 'HH:mm');
      }
      else{
        return ' Du ' + $filter('date')(date1_ms, 'EEEE dd MMMM à HH:mm') + ' au ' + $filter('date')(date2_ms, 'EEEE dd MMMM à HH:mm');
      }
    };
});


