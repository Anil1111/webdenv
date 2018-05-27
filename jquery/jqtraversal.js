// An ancestor is a parent, grandparent, great-grandparent, and so on.
// methods for traversing up the DOM tree

$(document).ready(function(){

	 $("span").parent().css({"color": "red", "border": "2px solid red"});  // direct parent element of EACH selected element, a single level up the DOM tree

	 $("span").parents().css({"color": "red", "border": "2px solid red"}); // all ancestor elements of EACH selected element, all the way up to the document's root element (<html>).

	 $("span").parents("ul").css({"color": "red", "border": "2px solid red"}); // all ancestors of all selected elements that are filtered elements ("ul" here)

	 $("span").parentsUntil("div");                                           // all ancestors between given args (excluding both)

	 $(".classnaam").offsetParent();                                         // closest parent that is positioned, works with absolute, relative positions


// A descendant is a child, grandchild, great-grandchild, and so on.
// methods for traversing down the DOM tree

	 $("div").children();    // all direct children of the selected element, a single level down the DOM tree

	 $("div").children("p.first");   // optional parameter to filter the search for children (all p with class=first that are direct children of div).

	 $("div").find("span");         // all "span" that are descendants of div, down to the last descendant.

	 $("div").find("*");           // "*" : all descendants of selected element (<div>)

	 $("#idnaam").closest(".classnaam")  // traverses up hierarchy until find a match

	 $("li").each(function(){
            alert($(this).text())        // .each : specifies a function to run for each matched element
        });


// traverse sideways in the DOM tree to find siblings of an element (excluding element itself)
// Siblings share the same parent.

	 $("h2").siblings();       // all sibling elements of <h2>

	 $("h2").siblings("p");    // all sibling elements of <h2> that are <p> elements

	 $("h2").next().css({"color": "red", "border": "2px solid red"});  // returns the one next sibling element of EACH of selected element

	 $(".classnaam").next("p");     // next sibling (of 'classnaam' class) if it matches the selector specified ("p")

	 $("h2").nextAll().css({"color": "red", "border": "2px solid red"}); // all next sibling elements of EACH of selected element

	 $("h2").nextUntil("h6");     // all next sibling elements between two given arguments of EACH selected elem

	 $("h2").nextUntil("p", ".filterclass");  // filter used to get until p with classname='filtername'

	 $("h2").prev().css({"color": "red", "border": "2px solid red"});   // previous one sibling of EACH matched elem

	 $("h2").prev(".classname");

	 $("h2").prevAll().css({"color": "red", "border": "2px solid red"}); // all previous sibling elements of the selected element

	 $("h2").prevUntil("h6");     // all previous sibling elements between two given arguments

	 $("h2").prevUntil("p", ".filterclass");


// Filtering

	 $("div").first();         // first element of the specified elements

	 $("div").last();         // last element of the specified elements

	 $("p").eq(1);            // returns an element with a specific index number of the selected elements
	                          // index numbers start at 0, so the first element will have the index number 0, (this example returns second <p>)

	 $("p").filter(".intro");  //  filter() method specify a criteria.  (here class=intro)

	 $("p").not(".intro");     // not() method returns all elements that do not match the criteria   (here class not equal to intro)

});