
"use strict";
(function() {
    // Get the search link anchor by id
    var searchLink = document.getElementById("search-link");

    // Does an element have an attribute?
    console.log(searchLink.hasAttribute("href")); // Prints true
    console.log(searchLink.hasAttribute("class")); // Prints false

    // Get an attribute value
    console.log(searchLink.getAttribute("href")); // Prints "http://www.yahoo.com"

    // Add or modify an attribute
    searchLink.setAttribute("class", "btn btn-default");
    // Adds the attribute class and sets it to "btn btn-default"

    searchLink.setAttribute("href", "http://google.com");
    // Changes the href attribute to "http://google.com"

    // Remove an attribute
    searchLink.removeAttribute("class"); // Remove the class attribute
})();
