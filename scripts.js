let add_notes = document.getElementById("add");
add_notes.addEventListener("click", function(e) {
	let add_text = document.getElementById("addText");
	let notes = localStorage.getItem("notes");
	if (notes == null) {
		content = [];
	}
	else {
		content = JSON.parse(notes);
	}
	content.push(addText.value);
	localStorage.setItem("notes", JSON.stringify(content));
	addText.value = "";
	displayNotes();
});

function displayNotes() {
	let notes = localStorage.getItem("notes");
	if (notes == null) {
		content = [];
	}
	else {
		content = JSON.parse(notes);
	}
	let html = "";
	content.forEach(function(element, index) {
		html = `<div class = "noteCard my-2 mx-2 card" style = "width: 100%;">
			<div class = "card-body">
			<h5 class = "card-title"> Note ${index + 1} </h5>
			<p class = card-text"> ${element} </p>
			<button id = "${index}" onclick = "removeNote{this.id}" class = "btn btn-danger"> Delete Note </button>
			</div>
			</div>`;
	});
	let notes_element = document.getElementById("notes");
	if (content.length != 0) {
		notes_element.innerHTML = html;
	}
	else {
		notes_element.innerHTML = "Create your first note";
	}
}

function removeNote(index) {
	let notes = localStorage.getItem("notes");
	if (notes = null) {
		content = [];
	}
	else {
		content = JSON.parse(notes);
	}
	content.splice(index, 1);
	localStorage.setItem("notes", JSON.stringify(content));
	displayNotes();
}
displayNotes();
