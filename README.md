Outliner
========

A tool for creating a document-outline based on HTML5 `section`s and sub`section`s within an `article`.  Older documents that use `h1`-`h6` are not catered for.

Installation
============

`npm install outliner --save-dev`

Usage
=====

* Get a handle on the module, e.g. `var uoptoc = require("outliner")`
* Call `uoptoc.gen(startNode)` passing in a DOM node and it will search the descendant tree for all sections and subsections.  Each section is given a unique ID if it does not already have one.  A nested unordered lists that reflects the structure is returned containing a link to each section.  
* `uoptoc.genPop(startNode, destNode)` works as `uoptoc.gen(startNode)` except that the resulting UL is appended to the document's `destNode` element that is passed.
* `genPopSelector` works as `uoptoc.genPop(startNode, destNode)` but css selectors for the start and destination nodes are passed.

Dependencies
============
It uses the JSDOM module, so pass-in JSDOM module objects.
