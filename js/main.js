//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////

$( document ).ready(function() {
    var userInfo = {
        firstName: 'Jane',
        lastName: 'Doe'
    };
    var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
    };
    // Place all your Javascript code inside this "document ready" function so
    // it does not run until the DOM is ready for Javascript manipulation.

    // Handle clicking on the login form
	$("#login-form .btn").click(function() {
		// hide the login button
		$("#login-form").hide();
		// replace "First Last" with the data in userInfo
		$("span.user-fullname").text(userInfo.firstName + " " + userInfo.lastName);
		// Show the previously hidden data
		$("div.user-info").show();
	});


    // Select all elements with "view-details" class
	$(".view-details").click(function() {
		// Select the parent of the parent (every view-details is wrapped in a <p> before it gets to the
		// parent div we want) and then select the children whose class equals "details"
		// and toggle each of their visibilites
		$(this).parent().parent().children(".details").toggle();
		// Change the text of the button to "Hide Details"
		$(this).text("Hide Details");
	});

	$(".vote").click(function() {
		// Get the "data-vote" attribute
		var voteType = $(this).attr("data-vote");
		// If it's of type "great", increment the great cound
		if (voteType == "great") {
			voteCounts.great += 1;
		// Otherwise it must be of type greates, increment greatest count
		} else {
			voteCounts.greatest += 1;
		}
		// always increment the total votes count every time the button is clicked
		voteCounts.total += 1;
		
		// Calculate the percentage of page width for both the great and greatest bars
		var greatPercent = 100 * (voteCounts.great / voteCounts.total);
		var greatestPercent = 100 * (voteCounts.greatest / voteCounts.total);
		
		// Update the bar's style attribute to reflect the new percentage
		$(".great-progress").attr("style", "width: " + greatPercent + "%");
		$(".greatest-progress").attr("style", "width: " + greatestPercent + "%");
	});

});
