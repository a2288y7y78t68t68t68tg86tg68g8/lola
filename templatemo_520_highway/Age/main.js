// Some comments to help you understand the code.
// bd = birth date
// bM = birth month
// bY = birth year
// td = today's date
// tdM = today's date month
// tdY = today's date year


// Change the span value when sliding the range.
function change() {
	var bd = document.getElementById('date');
	var bM = document.getElementById('month');
	var bY = document.getElementById('year');
	var d_val = document.getElementById("d-val");
	var m_val = document.getElementById("m-val");
	var y_val = document.getElementById("y-val");
	d_val.innerHTML = bd.value;
	m_val.innerHTML = bM.value;
	y_val.innerHTML = bY.value;
}
setInterval(change, 10);


// Calculate age by clicking the button.
function age() {
	var bd = document.getElementById('date').value;
	var bM = document.getElementById('month').value;
	var bY = document.getElementById('year').value;
	// Getting today's date from the new date method
	var date = new Date();
	var td = date.getDate();
	// In JavaScript, months start at 0 and end at 11, so we add 1 to count from 1 to 12.
	var tdM = 1 + date.getMonth();
	var tdY = date.getFullYear();
	// Every month in terms of their days
	var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	// If you don't understand these functions, write your dates by following this function on notepad and try to understand.
	if (bd > td) {
		td = td + month[tdM - 1];
		tdM = tdM - 1;
	}
	if (bM > tdM) {
		tdM = tdM + 12;
		tdY = tdY - 1;
	}
	// Get your age 
	var d = td - bd;
	var m = tdM - bM;
	var y = tdY - bY;
	document.getElementById('age').innerHTML = ' عمرك هو ' + y + ' سنة و' + m + ' شهر و  ' + d + ' يوم';
}


// Clear all values ​​by clicking the Clear button.  
var clr = document.querySelector(".btn2");
clr.addEventListener("click", () => {
	document.getElementById('age').innerHTML = '';
	var bd = document.getElementById('date').value = 1;
	var bM = document.getElementById('month').value = 1;
	var bY = document.getElementById('year').value = 2000;
})