(() => {
	// put variables (connections to the web page / DOM) at the top
	// constant -> something that will never change / can't be redefined
	const puzzleSelectors = document.querySelectorAll("#buttonHolder img"),
		  dropZoneContainer = document.querySelector(".puzzle-board");

	// functions go in the middle

	// this function runs when the bottom nav buttons are clicked
	// it changes the background image of the drop zone div using the style property
	function changeBGImage() {
		// get the custom data attribute from the clicked button
		let imageRef = this.dataset.imageref;


		// `` is NOT a quote, it's a JavaScript template string
		dropZoneContainer.style.backgroundImage = `url(images/background${imageRef}.jpg)`;




		// this is an intermediate way to do the same something
		// dropZoneContainer.style.backgroundImage = `url(images/background${this.dataset.imageref}.jpg)`;
		// debugger;
	}


	// event handling at the bottom
	puzzleSelectors.forEach(button => button.addEventListener("click", changeBGImage));

	// emulate a click on the first bottom button and run the background image function
	changeBGImage.call(puzzleSelectors[0]);
	
})();
