
// var ltr = document.getElementById('ltrInput').value;
var reverse = document.getElementById('reverse');
var alphabit = document.getElementById('alphabit');
var palindrome = document.getElementById('palindrome');
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
alphabit.addEventListener("click",function(){console.log("alphabit btn clicked!")});
function alphabits() {

} 
palindrome.addEventListener("click",function(){console.log("palindrome btn clicked!")});
function palindrome() {

}
 var testString = "Donkey Kong";
 //reversal(testString);
// alphabits(testString);
// palindrome(testString);