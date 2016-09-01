
// var ltr = document.getElementById('ltrInput').value;
var reverse = document.getElementById('reverse');
// var out = document.getElementById('output');

reverse.addEventListener("click", reversal);
function reversal() {
	var arr = document.getElementById('ltrInput').value.split(' ');
	console.log(arr);
	var revArr = arr.reverse();
	// console.log(revArr);
	// console.log(revArr.join(' '));
	document.getElementById('output').innerHTML += `<li>${revArr.join(' ')}</li>`;
};




function alphabits() {

} 
function palindrome() {

}
 var testString = "It's on like Donkey Kong";
 //reversal(testString);
alphabits(testString);
palindrome(testString);