function firstChar(text) {
  // your code here
	let testTrim =  text.trim();
	return testTrim.charAt(0);
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
