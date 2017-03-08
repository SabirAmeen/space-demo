var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var tmpl = require('../templates/training_template.js');
var list = require('../templates/trainings.js');
// var trainingCollection = require('../collection/training_collection.js');
module.exports = Backbone.View.extend({
	el:$('#app'),
	initialize:function(){
		this.collection.fetch({reset:true,async:false})
		this.render();
	},
	render: function() {
		var template = _.template(tmpl);
		var trainList = _.template(list);
		this.$el.append( template );
		_.each(this.collection.toJSON(),function(se){
			$('.train-data').append(trainList({trainingName: se.trainingName,
						name: se.name,
						time: se.time,
						location: se.location,
						seatsNo: se.seatsNo,
						status: se.status
			}));
		})
    return this;
	}

});
		


	
