import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('coffee', function() {
  	this.route('index', { path: '/'});
    this.route('new');
    this.route('show', { path: ':coffee_id'});
    this.route('map');
  });
  this.route('login');
  this.route('admin');
  this.route('cclist');
  this.route('about');
});

export default Router;
