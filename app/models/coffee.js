import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  address: DS.attr('string'),
  wifi: DS.attr('string'),
  outlets: DS.attr('string'),
  atmosphere: DS.attr('string'),
  yelp: DS.attr('string'),
  mapslink: DS.attr('string')

});
