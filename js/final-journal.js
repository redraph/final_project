
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
var _journal = new Journal();


$( document ).ready( function () {
	$( "#clickme" ).click( function() {
		$('#entry').hide();
		$( "#journal-form" ).fadeIn( "slow", function() {
   		// Animation complete
  		});
	});

	//trying to capture the values of the form and connect it with the stand-alone journal example we had in class
	$( "#journal-form" ).submit(function( event ) {
	  event.preventDefault();
	  var frm = $(this);
	  var date = frm.find('input[name="date"]').val();
	  var title = frm.find('input[name="title"]').val();
	  var content = frm.find('textarea[name="content"]').val();

	  var entry = new Entry(date, title, content);
	  _journal.addEntry(entry);
	});
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
	this.entryPage = $('#entry');

	// adds an Entry with the given info
	this.addEntry = function(entry) {
		var _this = this;
		// add it to the array
		this.entries.push(entry);
		var index = this.entries.length - 1;
		$('#table-of-contents').append('<li data-index="'+index+'">'+entry.title+'</li>');
		
		$('#table-of-contents li').unbind('click');
		$('#table-of-contents li').click(function(){
			var index = $(this).attr('data-index');
			_this.displayEntries(index);
	    });

	    this.saveJournal();

	    //$('#table-of-contents li').click(function(){_journal.displayEntries()})
	}

	// Displays an array of Entry objects
	this.displayEntries = function(index) {
		$('#journal-form').hide();
		$('#entry').fadeIn('slow');
		var entry = this.entries[index];

		this.entryPage.find('[name="title"]').html(entry.title);
		this.entryPage.find('[name="content"]').html(entry.content);
		this.entryPage.find('[name="date"]').html(entry.date);
	}

	// show next entry in the array
		this.nextEntry = function() {
	    i = i + 1; // increase i by one
	    i = i % entries.length; 
	    return entries[i]; 
	}

	// show previous entry in the array
	this.previousEntry = function() {
	    if (i === 0) { // i would become 0
	        i = entries.length; // so put it at the other end of the array
	    }
	    i = i - 1; // decrease by one
	    return entries[i]; // give us back the item of where we are now
	}

	// Displays all entries in the Journal
	this.displayAllEntries = function() {
		console.log(this.entries);
	}

	this.saveJournal = function(){
		var _this = this;
		localStorage.setItem('myEntries',JSON.stringify(_this.entries));
	}

	this.initJournal = function(){
		var _this = this;
		if(localStorage.getItem('myEntries') != '' && localStorage.getItem('myEntries') != null){
			this.entries = $.parseJSON(localStorage.getItem('myEntries'));
			for(index in this.entries){
				$('#table-of-contents').append('<li data-index="'+index+'">'+this.entries[index].title+'</li>');
			}


			$('#table-of-contents li').click(function(){
				var index = $(this).attr('data-index');
				_this.displayEntries(index);
	    	});	
		}
		else{
			this.entries = [];
		}
	}

	this.initJournal();

}




function Entry(date, title, content) {
	this.date = date;
	this.title = title;
	this.content = content;
	
}

/////