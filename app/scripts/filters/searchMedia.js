'use strict';

angular.module('mobile').filter('searchMedia', function ($filter) {
  return function(collection, term) {
    var newCollection = [];
    if (collection !== undefined && term !== undefined && term !== '') {
      angular.forEach(collection, function (media) {
        var date = $filter('date')(new Date(media.time*1000), 'yyyy');
        if (date.match(new RegExp(term), 'i') !== null || media.message.match(new RegExp(term), 'i') !== null
            || (term.match(/vidéo|video/) !==null && media.category_id === '2')
            || (term.match(/photo/) !==null && media.category_id === '1')
            || (term.match(/gazette/) !==null && media.category_id === '10')
            || (term.match(/podcast/) !==null && media.category_id === '4')
            || (term.match(/journal|journaux/) !==null && media.category_id === '3')) {
          newCollection.push(media);
        }
      });
      return newCollection;
    }
    return collection;
  };
});