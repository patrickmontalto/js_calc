var my_max = function(arr) {
  return(Math.max(...arr));
};

console.log(my_max([3,9,12,4]));
// 12

var vowel_count = function(str) {
	str = str.toUpperCase();
	var count = 0;
	for (i = 0; i < str.length; i++) {
		switch (str[i]) {
			case "A":
			case "E":
			case "I":
			case "O":
			case "U":
				count += 1;
			default:
				count = count;
		}
	}
}

console.log(vowel_count("anamoly"));

var reverse = function(str) {
	var reversed_string = "";
	for (i = str.length; i >= 0; i--) {
		reversed_string += str[i]
	}
	return reversed_string
}

console.log(reverse("Hello there!"));