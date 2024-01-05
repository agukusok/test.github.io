var inputs = document.querySelectorAll("input.inpt");

for (var i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener("input", function () {
		var allValues = "";
		for (var j = 1; j <= 5; j++) {
			allValues += document.getElementById("" + j).getElementsByTagName("input")[0].value;
		}
		if (allValues === "ВИРУС" || allValues === "вирус") {
			for (var k = 1; k <= 5; k++) {
				document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "green";
			}
		} else {
			for (var k = 1; k <= 5; k++) {
				document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "red";
			}
		}
	});
}

for (var i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener("input", function () {
		var allValues = "";
		for (var j = 6; j <= 15; j++) {
			allValues += document.getElementById("" + j).getElementsByTagName("input")[0].value;
		}
		if (allValues === "АЗМНОЖЕНИЕ" || allValues === "азмножение") {
			for (var k = 6; k <= 15; k++) {
				document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "green";
			}
		} else {
			for (var k = 6; k <= 15; k++) {
				document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "red";
			}
		}
	});
}

for (var i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener("input", function () {
		var allValues = "";
		for (var j = 16; j <= 19; j++) {
			allValues += document.getElementById("" + j).getElementsByTagName("input")[0].value;
		}
		if (allValues === "ЧЕРВ" || allValues === "черв") {
			for (var k = 16; k <= 19; k++) {
				document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "green";
			}
		} else {
			for (var k = 16; k <= 19; k++) {
				document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "red";
			}
		}
	});
}

for (var i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener("input", function () {
		var allValues = "";
		for (var j = 20; j <= 29; j++) {
			allValues += document.getElementById("" + j).getElementsByTagName("input")[0].value;
		}
		if (allValues === "МАКОВИРСЫ" || allValues === "маковирусы") {
			for (var k = 20; k <= 29; k++) {
				document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "green";
			}
		} else {
			for (var k = 20; k <= 29; k++) {
				document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "red";
			}
		}
	});
}

for (var i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener("input", function () {
		var allValues = "";
		for (var j = 30; j <= 37; j++) {
			allValues += document.getElementById("" + j).getElementsByTagName("input")[0].value;
		}
		if (allValues === "ЕОПАСНЫЕ" || allValues === "еопасные") {
			for (var k = 30; k <= 37; k++) {
				document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "green";
			}
		} else {
			for (var k = 30; k <= 37; k++) {
				document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "red";
			}
		}
	});
}

for (var i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener("input", function () {
		var allValues = "";
		for (var j = 38; j <= 48; j++) {
			allValues += document.getElementById("" + j).getElementsByTagName("input")[0].value;
		}
		if (allValues === "НТИВИРУСНИК" || allValues === "нтивирусник") {
			for (var k = 38; k <= 48; k++) {
				document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "green";
			}
		} else {
			for (var k = 38; k <= 48; k++) {
				document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "red";
			}
		}
	});
}

for (var i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener("input", function () {
		var allValues = "";
		for (var j = 49; j <= 54; j++) {
			allValues += document.getElementById("" + j).getElementsByTagName("input")[0].value;
		}
		if (allValues === "ДКТОРА" || allValues === "дктора") {
			for (var k = 49; k <= 54; k++) {
				document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "green";
			}
		} else {
			for (var k = 49; k <= 54; k++) {
				document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "red";
			}
		}
	});
}