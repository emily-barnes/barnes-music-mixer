(() => {
	// put variables (connections to the web page / DOM) at the top
	// constant -> something that will never change / can't be redefined
	const // puzzleSelectors = document.querySelectorAll("#buttonHolder img"),
		  dropZoneContainer = document.querySelector(".mixer-board"),
		  dragImages = document.querySelectorAll(".puzzle-image"),
		  dropZones = document.querySelectorAll(".drop-zone");

	// functions go in the middle
	function dragStart(event) {
		console.log('started draggin');
		// take the dragged image and move it into the drop zone
		// move it from the left container to the drop zone (reparent it)
		event.dataTransfer.setData("savedID", this.id);
	}

	function draggedOver(event) {
		event.preventDefault();
		console.log('dragged over me');

		// allow an element to be dragged over and then dropped
	}


	function dropped(event) {
		// override the browser / element's default behaviour, and do what I say
		event.preventDefault();
		console.log('dropped something on me');

		let targetID = event.dataTransfer.getData("savedID", this.id);
		console.log("I dragged this image:", targetID);
		// put the dragged image into this container
		event.target.appendChild(document.querySelector(`#${targetID}`));
	}


	// this function runs when the bottom nav buttons are clicked
	// it changes the background image of the drop zone div using the style property
	// function changeBGImage() {
		// get the custom data attribute from the clicked button
		//let imageRef = this.dataset.imageref;


		// `` is NOT a quote, it's a JavaScript template string
		// dropZoneContainer.style.backgroundImage = `url(images/drop-zone-background.jpg)`;




		// this is an intermediate way to do the same something
		// dropZoneContainer.style.backgroundImage = `url(images/background${this.dataset.imageref}.jpg)`;
		// debugger;
	//}


	// event handling at the bottom
	// puzzleSelectors.forEach(button => button.addEventListener("click", changeBGImage));

	dragImages.forEach(piece => piece.addEventListener("dragstart", dragStart));

	dropZones.forEach(zone => {
		zone.addEventListener("dragover", draggedOver);
		zone.addEventListener("drop", dropped);
	})

	document.getElementsByTagName("audio")[0].load();
	document.getElementsByTagName("audio")[0].play();

	
	// emulate a click on the first bottom button and run the background image function
	// changeBGImage.call(puzzleSelectors[0]);
	
})();
