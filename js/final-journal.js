
/*The ability to navigate your journal entries by clicking a next and previous button.
The first page of your journal should be a table of contents that allows you to jump to any entry in your journal.
Each entry should have a delete button on it somewhere such that clicking delete will remove the entry from the journal.
Each journal should have an edit button so that clicking the button allows you to edit the title or content of the specific entry. 
*/

$( "#journal-form" ).submit(function( event ) {
  event.preventDefault();
  event.val();
  console.log(event);
});

function Journal()
{
	this.entries = [];

	// adds an Entry with the given info
	this.addEntry = function addIt(title, content, author) {
//What is addEntry? Is it related to "var entry"

		// create the Entry object
		var entry = new Entry(title, content, author);
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

	// Displays an array of Entry objects
	this.displayEntries = function showEntries(entryArray) {
		for (var i = 0; i < entryArray.length; i++) {	
			this.displayEntry(entryArray[i]); // display the entry
			console.log(); // adds a new line
		}
	}

	// Displays all entries in the Journal
	this.displayAllEntries = function showAllEntries() {
		this.displayEntries(this.entries);
	}


}

function Entry(title, content, author) {
	this.title = title;
	this.content = content;
	this.author = author;

}

