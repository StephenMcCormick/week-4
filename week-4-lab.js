	/* Stephen McCormick
	Week 4 Lab  */
		/* this is the JSON object that will hold all the data*/
		var userdata = {
		'emailInput' : "",
		'nameInput' : "",
		'screenSizeH' : 0,
		'screenSizeW' : 0,
		'browserInfo' : "",
		'pageTitle' : "",
		'mouseX' : [],
		'mouseY' : []
		};
		
		/*this is the function that will output the data collected to the console*/
		function showResults() {
			console.clear();
			console.log(userdata);
		}
		
		/*this will get the info that the user put into the email input box*/
		function inputEmail(){
			userdata.emailInput = getEmail.value;		
		}
		
		/*this will get the info that the user put into the name input box*/
		function inputName(){
			userdata.nameInput =getName.value;
		}
		
		/*this will get the screen size browser info and page title on loading the page*/
		function browserAndScreen(){
			userdata.screenSizeH = window.innerHeight;
			userdata.screenSizeW = window.innerWidth;
			userdata.browserInfo = window.navigator.userAgent;
			userdata.pageTitle = document.title;
		}
		
		/* this is the function with an if statment to log the first 100 mouse movments on the X plane*/
		function onMouseMoveX(e){
			userdata.mouseX.push(e.clientX);
		
			if ( userdata.mouseX.length >= 100 ) {
				document.removeEventListener('mousemove', onMouseMoveX); /*this will remove the event if the array is holding 100 values*/
			}
		}
		/* this is the function with an if statment to log the first 100 mouse movments on the Y plane*/
		function onMouseMoveY(e){
			userdata.mouseY.push(e.clientX);
		
			if ( userdata.mouseY.length >= 100 ) {
				document.removeEventListener('mousemove', onMouseMoveY); /*this will remove the event if the array is holding 100 values*/
			}
		}
		
		document.addEventListener('mousemove', onMouseMoveX); /*this will call the function to log the mouse movment*/
		document.addEventListener('mousemove', onMouseMoveY); /*this will call the function to log the mouse movment*/
		
		window.addEventListener("load", browserAndScreen); /*when the page loads it will call the browserAndScreen function*/
		
		var getEmail = document.getElementById('email');
		getEmail.addEventListener("blur", inputEmail); /*this will call the inputEmail function when the user moves away from the email input box*/
		
		var getName = document.getElementById('fullname');
		getName.addEventListener("blur", inputName); /*this will call the inputName function when the user moves away from the name input box*/
		
		var results = document.getElementById('showResults');
		results.addEventListener("click", showResults); /*this calls the function to output all the data to the console log*/
		
				
