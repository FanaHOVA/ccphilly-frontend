import DS from 'ember-data';

export default DS.Model.extend({
  city: DS.attr('string'),
  host: DS.attr('string'),
  url: DS.attr('string')
});
