// Event listeners for number buttons (0-9):
$(document).ready(function() {

	var eq = ""
	var operand = ""
	var result = 0
	var set_sign = function() {
		var number = $(".display-value").html();
		if (number.substring(0,1) != "-" ){
			number = "-" + number;
		} else {
			number = number.substring(1);
		}
		$(".display-value").html(number);
	}
	var reset_operand = function() {
		operand = ""
	}
	var set_operand = function(value) {
		operand = value
	}

	$(".button").click(function() {
		var value = $( this ).html();
	
		if ( $( this ).hasClass( "num" )) {
			if ($(".display-value").html() === "0") { $(".display-value").html(""); }
			if (operand != "" ) { $(".display-value").html(""); }
			$(".display-value").append(value);
			// if operand != null, add operand first:
			eq += operand + value
			// reset operand:
			reset_operand();
		} else if ( $( this ).hasClass( "c")) {
			$(".display-value").fadeIn(100).fadeOut(100).fadeIn(100);
			$(".display-value").html(0);
			eq = ""
		} else if ( $( this ).hasClass("plus")) {
			// make display blink
			$(".display-value").fadeIn(100).fadeOut(100).fadeIn(100);
			// set operand:
			set_operand(value)
			console.log(operand)
		} else if ( $( this ).hasClass("minus")) {
			$(".display-value").fadeIn(100).fadeOut(100).fadeIn(100);
			set_operand(value)
		} else if ( $( this ).hasClass("divide")) {
			$(".display-value").fadeIn(100).fadeOut(100).fadeIn(100);
			set_operand(value)
		} else if ( $( this ).hasClass("multiply")) {
			$(".display-value").fadeIn(100).fadeOut(100).fadeIn(100);
			set_operand("*")
		} else if ( $( this ).hasClass("dot")) {
			$(".display-value").append(value);
			eq += value
		} else if ( $( this ).hasClass("plus-minus")) {
			set_sign();
			eq = $(".display-value").html();
		} else if ($ (this ).hasClass("equals")) {
			reset_operand();
			if (eq.substring(0,1) === "/") {
				eq = "0" + eq;
			}
			result = eval(eq);
			$(".display-value").html(result.toString().substring(0,6));
		}

	});


});
