TD.Views.NewTaskView = Backbone.View.extend({
	events: {
		"click button.submit": "submit"
	},
	
	render: function() {
		var that = this;
		
		var renderedContent = JST["tasks/new"]();
		that.$el.html(renderedContent);
		return that;
	},
	
	submit: function(event) {
		var that = this;
		
		
		var formData = $(event.currentTarget).parent().serializeJSON(); // calling event.currentTarget only gets the submit button, but we want the entire form
		var task = new TD.Models.Task(formData.task);
		
		that.collection.add(task);
		task.save();
		
		Backbone.history.navigate("#/");
	}
});