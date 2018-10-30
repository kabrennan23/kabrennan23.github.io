 /*
	
	Add .click() handlers for each of the boxes:

	A) Boxes #a10, #a20, and #a30 should each add 10, 20, and 30, respectively, to the value in the center box, #out

	B) Boxes #m10, #m20, and #m30 should each subtract 10, 20, and 30, respectively, from the value in the center box, #out

	C) #red and #blue should change the background color of #out to red and blue, respectively
	
	D) #out should change the background of #out to white, and set the value back to zero

	HINT: define a variable, var count = 0 outside of any functions. Use this variable to keep track of what to display inside of #out
	Ex: when the user clicks #a10, add 10 to the "count" and then reflect this change in the HTML

	jQuery Methods Needed:
	- .click()
	- .html()
	- .css()

*/
var total = 0;

function resetCenter() {
	total = 0
	$('#out').html(total)
	$('#out').css('background','white')
}
$('#out').click(resetCenter)

function addTen() {
	total = total + 10
	$('#out').html(total)
}
$('#a10').click(addTen)

function addTwenty() {
	total = total + 20
	$('#out').html(total)
}
$('#a20').click(addTwenty)

function addThirty() {
	total = total + 30
	$('#out').html(total)
}
$('#a30').click(addThirty)

function subtractTen() {
	total = total - 10
	$('#out').html(total)
}
$('#m10').click(subtractTen)

function subtractTwenty() {
	total = total - 20
	$('#out').html(total)
}
$('#m20').click(subtractTwenty)

function subtractThirty() {
	total = total - 30
	$('#out').html(total)
}
$('#m30').click(subtractTwenty)

function changeColorRed() {
	$('#out').css('background','red')
}
$('#red').click(changeColorRed)

function changeColorBlue() {
	$('#out').css('background','blue')
}
$('#blue').click(changeColorBlue)
