
/*The ability to navigate your journal entries by clicking a next and previous button.


The first page of your journal should be a table of contents that allows you to jump to any entry in your journal.
--- would this entire product be one page?
--- need to display an entry from the journal array


Each entry should have a delete button on it somewhere such that clicking delete will remove the entry from the journal.
---so the page I show my journal entry on would also have a delete button linked to that entry


Each journal should have an edit button so that clicking the button allows you to edit the title or content of the specific entry. 
---so the page I show my journal entry on would also have a delete button linked to that entry

*/

//form fade in (not working?)
$( document ).ready( function () {
	$( "#clickme" ).click( function() {
		$( "#form.register" ).fadeIn( "slow", function() {
   		// Animation complete
  		});
	});
});


//trying to capture the values of the form and connect it with the stand-alone journal example we had in class
$( "#journal-form" ).submit(function( event ) {
  console.log( $( this ).serializeArray() );
  event.preventDefault();
});

//event listener for previous & next button

$('prev_button').click(function( event ){
	$('journal-form').text(prevItem());
    }
);

$('next_button').click(function( event ){
	$('journal-form').text(nextItem());
	} 
);

////////// (below) from journal example with tag functions removed & 

function Journal() {

	this.entries = [];

	// adds an Entry with the given info
	this.addEntry = function addIt(date, title, content) {

		// create the Entry object
		var entry = new Entry(date, title, content);
		// add it to the array
		this.entries.push(entry);
	}

	// Displays an Entry object
	this.displayEntry = function showEntry(entry) {
		console.log("------------------------------");
		console.log("\t" + entry.title + "\n");
		console.log("\t" + "By: " + entry.author);
		console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
		console.log(entry.content);	
	}
	//not sure what is happenieng above here? - need to update to the latest array parameters (date, title, content)



	// Displays an array of Entry objects
	this.displayEntries = function showEntries(entryArray) {
		for (var i = 0; i < entryArray.length; i++) {	
			this.displayEntry(entryArray[i]); // display the entry
			console.log(); // adds a new line
		}
	}

	// show next entry in the array
		this.nextEntry = function nextItem() {
	    i = i + 1; // increase i by one
	    i = i % entries.length; 
	    return entries[i]; 
	}

	// show previous entry in the array
	this.previousEntry = function prevItem() {
	    if (i === 0) { // i would become 0
	        i = entries.length; // so put it at the other end of the array
	    }
	    i = i - 1; // decrease by one
	    return entries[i]; // give us back the item of where we are now
	}


	


	// Displays all entries in the Journal
	this.displayAllEntries = function showAllEntries() {
		this.displayEntries(this.entries);
	}


}

function Entry(date, title, content) {
	this.date = date;
	this.title = title;
	this.content = content;
	
}

/////