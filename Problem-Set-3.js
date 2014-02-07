var palindrome = function(str) {
	var x = str.split("").reverse().join("");
	if (str===x) {
		return true;
	}
	else {
		return false;
	}
};

var dashInsert = function(num) {
	var x = [];
	var y = [];
	var strNum = num.toString();
	for (var i = 0; i < strNum.length; i+=1) {
		x.push(+strNum.charAt(i));
	}
	console.log(x);
	for (var j = 0; j < x.length; j++) {
		if (x[j]%2 !== 0 && x[j+1]%2 !== 0) {
			y.push(x[j]+"-");
		}
		else {
			y.push(x[j]);
		}
	}
	var z = y.join("");
	console.log(z);
};

var caesar = function(input) {
	var x = [];
	var y = [];
	for (var i = 0; i < input.length; i++) {
		x.push(input.charCodeAt(i)+2);
	}
	console.log(x);
	for (var j = 0; j < x.length; j++) {
		y.push(String.fromCharCode(x[j]));
	}
	console.log(y);
	var z = y.join();
	console.log(z);
};
