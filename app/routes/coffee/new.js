import Ember from 'ember';

export default Ember.Route.extend({

	model: function() {
		return this.store.createRecord('coffee');
	},

	deactivate: function() {
		var model = this.modelFor('coffee/new');

		if (model.get('isNew')) {
			model.destroyRecord();
		}
	}
});
