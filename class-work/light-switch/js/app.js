/*
  Light Switch

  1. Start by defining a variable, lights, and set it equal to the string 'on'

  2. Next, define a function, flipTheSwitch

  3. flipTheSwitch should run when #light-switch is clicked

  Add the following if/else statement within the flipTheSwitch function:

  4. If the lights === 'on'

    - Set lights = 'off'
    - Add the CSS class 'dark' to both the <body> and <button> elements

  5. Else

    - Set lights = 'on'
    - Remove the CSS class 'dark' from both the <body> and <button> elements
*/

/*var isLightOn = true

function flipTheSwitch() {
  console.log('working')
  if(isLightOn){
    isLightOn = false
    $('body').addClass('dark')
    $('#light-switch').addClass('dark')
  }
  else{
    isLightOn = true
    $('body').removeClass('dark')
    $('#light-switch').removeClass('dark')
  }
}

$('#light-switch').click(flipTheSwitch)*/

var lightOn = 'on'

function flipTheSwitch() {
  if(lightOn==='on') {
    lightOn = 'off' 
    $('body, button').addClass('dark')
  }
  else {
    lightOn = 'on'
    $('body, button').removeClass('dark')
  }
}

$('#light-switch').click(flipTheSwitch)
