import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	model: function(params) {
		return this.store.findAll('coffee');
	},

	setupController: function(controller, coffees) {
    	controller.set('coffees', this.store.findAll('coffee'));
  	}, 

  	actions: {
		delete: function(coffee) {
			coffee.destroyRecord();
		}
	}
});
