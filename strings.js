
var ltr = document.getElementById('ltrInput').value;
var btn = document.getElementById('btn');

btn.addEventListener("click", reversal);

function reversal() {
	var arr = ltr.split(' ');
	var revStr = arr.reverse();
	document.getElementById('output').innerHTML += revStr.join(' ');
	
}


function alphabits() {

} 
function palindrome() {

}
var testString = "";
reversal(testString);
alphabits(testString);
palindrome(testString);