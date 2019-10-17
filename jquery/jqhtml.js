// changing and manipulating HTML elements and attributes.

$(document).ready(function(){
	$("button").click(function(){

		alert($("#chk").text());                    // get text only, ignoring all tags (if written within selected elem).
		$("#disp").text("<b>hello</b>");           // set text, tags are considered as a text too.

		
		alert($("#chk").html());                  // get html code, with tags (if written within selected elem).
		$("#disp").html("<b>Hello in bold</b>");  // set html code
		
		                                          // get text nodes, comment nodes, HTML elements which are immediate children in the resulting jQuery object
		                                          // whereas .children() gets only HTML elements which are immediate children in the resulting jQuery object
		                                          // .contents() returns the elements, thus moving them if used inside  eg: append
		                                          // .html() returns a string, thus copying the elements if used inside eg: append
		$("#frameDemo").contents().find("a").css("background-color", "#BADA55");
		$("#frameDemo").contents().wrap("<b></b>");

		
	        $("#test3").val();                       // get value of form elems
	        $("#test3").val("Value set");           // set value of form elems

		
	        $("#chk").attr("href");                // get value of attribute
		$("#w3s").attr({
                    "href" : "https://www.w3schools.com/jquery/",  // set value of attribute (here multiple attribs are dealt with)
                    "title" : "W3Schools jQuery Tutorial"});
		$("#w3s").attr("href", function(i, origValue)      // Callback Function for attr() , the index of current element in list of elements selected and original (old) attribute value.
                     { return origValue + "/jquery/"; });
		$("form :input").removeAttr("title");             // Remove Attribute
		$("p, #tag1").removeAttr("id class");             // Remove several attributes from the selected elements


	         $("ol").append("<li>Appended item</li>");     // inserts content AT THE END of the selected HTML elements , making it a child of selected elem
		 $("<li>Appended item</li>").appendTo("ol");
		 $(".class1").append($(".class2"));            // the element (".class2") is appended by being moved from its old location, not by being cloned.
		
		
	         $("ol").prepend("<li>Prepended item</li>");   // inserts content AT THE BEGINNING of the selected HTML elements , making it a child of selected elem
		 $("<li>Prepended item</li>").prependTo("ol");	    

	         
		 var txt1 = "<p>Text.</p>";               // Create element with HTML
		 var txt2 = $("<p></p>").text("Text.");   // Create with jQuery
		 var txt3 = document.createElement("p");  // Create with DOM
		 txt3.innerHTML = "Text.";
		 $("body").append(txt1, txt2, txt3);      // Append the new elements
		
		
	         $("img").after("Some text after img");           // insert elem/text after selected elem
                 $("<i>After</i>").insertAfter("img");
		
		
		 $("img").before("Some text before img");        // insert elem/text before selected elem
		 $("Some text before img").insertBefore("img");
		
		
		 var txt1 = "<b>I </b>";                    // Create element with HTML
		 var txt2 = $("<i></i>").text("love ");     // Create with jQuery
		 var txt3 = document.createElement("b");    // Create with DOM
		 txt3.innerHTML = "jQuery!";
		 $("img").after(txt1, txt2, txt3);          // Insert new elements after <img>


		 $("#div1").detach();                      // removes matched elem plus child elems, but retains JQuery data, events, CSS props associated with removed elem.
		 var x;
		    $("#btn1").click(function(){
			 x = $("p").detach(); });          // keeps all data + events + CSS of detached element 
		    $("#btn2").click(function(){
			    $("body").prepend(x); });      // prepended just once (x) even if clicked multiple times on #btn2
		
		
		 $("#div1").remove();                      // removes the selected element(s) and its child elements, along with associated events
		 $("p").remove(".test, .demo");           // filter applied (removes all <p> elements with class="test" or class="demo")
		
		
		 $("#div1").empty();                       // removes the child elements of the selected element(s)

                                                            // The .replaceAll() or .replaceWith() method removes all data and event handlers associated with the removed nodes
		 $("<b>New Content</b>").replaceAll("p");   // Replace occurrence of "p" tag and it's content with content "<b>New Content</b>"
		 $(".newclass").replaceAll(".oldclass");    // select an element to use as the replacement  
		 $(".oldclass").replaceWith(".newclass");   // the selected element replaces the target by being moved from its old location, not by being cloned.
		
		 
		 $(".classnaam").clone().appendTo("p");   // clone(withDataAndEvents, deepWithDataAndEvents)
		                                          // withDataAndEvents : events handlers should be copied. default is false
		                                          // deepWithDataAndEvents : events handlers should be copied for all child elements. default is false

	});
});
