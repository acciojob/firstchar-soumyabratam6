function firstChar(text) {
  // your code here
	let testTrim =  text.Trim();
	return testTrim.charAt(0);
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
