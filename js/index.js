$('document').ready(function() {
	var cityNames = [ "NYC", "SF", "LA", "ATX", "SYD"]
	
	/*
	var cityName = [
	    {
	        name: "Los Angeles",
	        code: "la"
	    },
	    {
	        name: "Sydney",
	        code: "syd"
	        
	    },
	    {
	        name: "San Fransisco",
	        code: "SF"
	    },
	    {
	        name: "Austin",
	        code: "ATX"
	    },
	    {
	        name: "New York",
	        code: "NYC"
	    }
	]
	
	*/
	
	cityNames.forEach(function(element, index) {
    	$('#city-type').append('<option value= "' + element + '" > ' + element + ' </option>');
    });
	
    
	
/* Ok, so now I have the drop down menu in place. Now I need to get the background to change IF the user selects option X from the drop down menu.
    
SO;
IF user selects x THEN background changes.

BUT x is a class. NOT an object in an array.

If I use switch, that will allow me to check for classes?? Or would it check for certain strings??


*/
	   $('#city-type').change(function() {
	       var userInput = $('#city-type').val();
	        $('body').attr("class", userInput.toLowerCase()); //What is happening here, is I am chaging the class of the BODY div, not the object tag. So I change the attribute, which adds a class "name", then the appropriate string to fill the class is userInput. However userInput is capitals, when the CSS classes are lowercase.
	   });
	    
	
	    
});