$(document).ready(function () {

	//Focused on Arrival Date
	$("#arrival_date").focus();

	//Expression for email validation
	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

	//Submit Button Handler
	$("#submit").click(function () {

		//checking arrival date
		if ($("#arrival_date").val() == "") {
			$("#arrival_dateError").text("Enter arrival date");
			return false;

		}

		else if ($("#nights").val() == "") {
			$("#nightsError").text("Enter nights");
			return false;
		}

		else if (isNaN($("#nights").val())) {
			$("#nightsError").text("Enter numeric nights");

			//don't allow form to submit
			return false;

		}

		//Loop to check if the name is entered
		else if ($("#name").val() == "") {
			$("#nameError").text("Enter name");
			return false;
		}

		//Loop to check if the email is valid
		else if ($("#email").val() == "") {
			$("#emailError").text("Enter email");
			return false;
		}

		//Checking if the email is valid
		else if (!emailPattern.test($("#email").val())) {
			$("#emailError").text("Must be valid email address");
			return false;

		}

		//checking if the phone number field is filled
		else if ($("#phone").val() == "") {
			$("#phoneError").text("This field is required");
			return false;
		}

		else {
			return true;
		}
	});
});