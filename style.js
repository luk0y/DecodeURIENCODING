function u_escape() {
	try {
		var clean_data = document.getElementById("encoded_data").value;

	   var clean_data = decodeURIComponent(clean_data.replace(/(\r\n|\n|\r)/gm,""))
		document.getElementById("demo").innerHTML = clean_data;
	} catch (err) {
		alert("Malformed URI")
	}

}

function myFunction() {
	var copyText = document.getElementById("demo");
	copyText.select();
	document.execCommand("copy");
	alert("Copied!");
}
