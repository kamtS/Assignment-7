$('document').ready(function() {

	var cityNames = [
	    {
	        name: "Los Angeles",
	        code: "la"
	    },
	    {
	        name: "Sydney",
	        code: "sydney"
	        
	    },
	    {
	        name: "San Fransisco",
	        code: "SF"
	    },
	    {
	        name: "Austin",
	        code: "austin"
	    },
	    {
	        name: "New York",
	        code: "NYC"
	    }
	]

	cityNames.forEach(function(element, index) {
    	$('#city-type').append('<option value= "' + element.code + '" > ' + element.name + ' </option>');
    });
	
	   $('#city-type').change(function() {
	       var userInput = $('#city-type').val();
	        $('body').attr("class", userInput.toLowerCase()); 
	   });
	    
});