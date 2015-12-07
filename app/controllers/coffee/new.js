import Ember from 'ember';

export default Ember.Controller.extend({
	isValid: Ember.computed(
		'model.name',
		'model.address',
		function() {
			return !Ember.isEmpty(this.get('model.name')) && !Ember.isEmpty(this.get('model.address'))
		}
	),

	actions: {
		save: function() {
			if (this.get('isValid')) {
			var _this = this;
			this.get('model').save().then(function(coffee) {
				_this.transitionToRoute('coffee.show', coffee);
			});
		} else {
			this.set('errorMessage', 'You have to fill in all the inputs');
		}

		return false;
		}, 

		cancel: function() {
			this.transitionToRoute('coffee');
			return false;
		}
	}
});
