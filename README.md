Outliner
========

A tool for creting a document outline based on the HTML5 sections and subsections approach.  Older documents thzt use H1-H6 are not catered for.

Usage
=====

* Call `uoptoc.gen(startNode)` passing in a DOM node and it will search the descendant tree for all sections and subsections.  Each section is given a unique ID if it does not already have one.  A nested unordered lists that reflects the structure is returned containing a link to each section.  
* `uoptoc.genPop(startNode, destNode)` works as `uoptoc.gen(startNode)` except that the resulting UL is appended to the document's `destNode` element that is passed.
* `genPopSelector` works as `uoptoc.genPop(startNode, destNode)` but css selectors for the start and destination nodes are passed.
