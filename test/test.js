var uoptoc = (uoptoc ? uoptoc : true);

test("gen", 15, function() {
    "use strict";
	var parent = document.querySelector("article");
	var tree = uoptoc.gen(parent);

	ok( tree , "The gen function should return a tree: " + tree );
	equal( typeof tree, "object", "The gen function returns an object." );

	var anchors = tree.querySelectorAll("a");
	equal( anchors.length, 6, "There should be six anchors." );

	// nb a turkey is a thing that gets stuffed.  in this case with
	// properies whose name we want to check for uniqueness.  Note the
	// use of the double negative !! which casts the object to a negative
	// boolean truthy value then back.
	var turkey = {};
	for (var i = anchors.length - 1; i >= 0; i--) {
		var a = anchors.item(i);
		notEqual( !!turkey[a], true, "The element "+a+", is not yet present." );
		turkey[a] = "irrelevant";
		equal( !!turkey[a], true, "The element "+a+", is now present." );
	}

});

test("genPop", 15, function() {
    "use strict";
	var parent = document.querySelector("article");
	var dest = document.querySelector("#qunit-fixture");
	var tree = uoptoc.genPop(parent, dest);

	ok( tree , "The gen function should return a tree: " + tree );
	equal( typeof tree, "object", "The gen function returns an object." );

	// note the use of dest here to check the content is in the page
	var anchors = dest.querySelectorAll("a");
	equal( anchors.length, 6, "There should be six anchors." );

	// nb a turkey is a thing that gets stuffed.  in this case with
	// properies whose name we want to check for uniqueness.  Note the
	// use of the double negative !! which casts the object to a negative
	// boolean truthy value then back.
	var turkey = {};
	for (var i = anchors.length - 1; i >= 0; i--) {
		var a = anchors.item(i);
		notEqual( !!turkey[a], true, "The element "+a+", is not yet present." );
		turkey[a] = "irrelevant";
		equal( !!turkey[a], true, "The element "+a+", is now present." );
	}

});

test("genPopSelector", 15, function() {
    "use strict";
	var tree = uoptoc.genPopSelector("article", "#qunit-fixture");

	ok( tree , "The gen function should return a tree: " + tree );
	equal( typeof tree, "object", "The gen function returns an object." );

	// note the use of dest here to check the content is in the page
	var anchors = tree.querySelectorAll("a");
	equal( anchors.length, 6, "There should be six anchors." );

	// nb a turkey is a thing that gets stuffed.  in this case with
	// properies whose name we want to check for uniqueness.  Note the
	// use of the double negative !! which casts the object to a negative
	// boolean truthy value then back.
	var turkey = {};
	for (var i = anchors.length - 1; i >= 0; i--) {
		var a = anchors.item(i);
		notEqual( !!turkey[a], true, "The element "+a+", is not yet present." );
		turkey[a] = "irrelevant";
		equal( !!turkey[a], true, "The element "+a+", is now present." );
	}

});