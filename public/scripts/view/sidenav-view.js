var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var router = require('../routes.js');
var sidenavTemp = require('../templates/navbar-template.js');


module.exports = Backbone.View.extend({
	el:$('#app'),
	initialize: function(){
		this.render();
	},

	render: function() {
		var template = _.template(sidenavTemp,{});
		this.$el.html(template);
		/*this.$el.html( $('<p>In login</p>') );*/
		return this;
	},

	/*events: {
		"click button" : "gotoHome"
	},*/

	/*gotoHome: function(e){
		var username  = $('#username').val();
		var password = $('#password').val();
		console.log(this.model);
		this.model.set({email:username,password:password});
		var check=app.user.isValid();
		if(!check){
			this.$('.control-label').text(app.error);
			e.preventDefault();
		}
		else{
			console.log("sad");
			app.router.navigate("/home", {trigger: true, replace: true});
		}
	}*/

	// logout: function() {
	// 	this.model.set({
	// 		email: '',
	// 		password: '',
	// 		isLoggedIn: false
	// 	})
	// }
});