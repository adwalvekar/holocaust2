$(document).ready(function() {

	$('.verify').on("click",function() {
		    var url= "/verify/"+ this.id; 
		    $.ajax({
		      url: url,
		      success: function(data){
		           $('.container').html(data);
		      }
		    });
		});

		var id;
		$('.view').on("click",function() {
			id = this.id;
		    var url= "/view/" + id;
		    $.ajax({
		      url: url,
		      success: function(data){
		           $('.container').html(data);
		           $('.title').html(id);
		          
		      }
		    });
		});
	    $('#tabs').tab();
});