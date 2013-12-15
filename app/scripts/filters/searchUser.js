'use strict';

angular.module('mobile').filter('searchUser', function () {
  return function(collection, term) {
    var newCollection = [];
    if (collection !== undefined && term !== undefined && term !== '') {
      angular.forEach(collection, function (user) {
        if (user.firstname.match(new RegExp(term), 'i') !== null || user.lastname.match(new RegExp(term), 'i') !== null || user.student_number.match(new RegExp(term), 'i') !== null || user.promo.match(new RegExp(term), 'i') !== null || (user.firstname + ' ' + user.lastname).match(new RegExp(term, 'i')) !== null) {
          newCollection.push(user);
        }
      });
      return newCollection;
    }
    return collection;
  };
});