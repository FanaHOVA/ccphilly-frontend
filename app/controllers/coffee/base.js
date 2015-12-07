export default Ember.controller.extend({
	hasAddress: Ember.computed.notEmpty('model.address'),
	hasName: Ember.computed.notEmpty('model.name'),
	isValid: Ember.computed.and(
		'hasAddress',
		'hasName'
	)

})