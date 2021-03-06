// Usage: see github readme.md
var uoptoc = ( function x() {
    "use strict";

    // all methods are defined as vars and are thus private,
    // only those returned at the end become public

    var //... note the use of commas at the end of each function def
        // so that only one var is used.

    /**
     * A given node is checked to see if it has an ID attribute and
     * if none is found, one is added.  The ID generated is based
     * on the content of the first H1 element within the node or
     * if there is no H1 elemenet, the nodes text content.
     * Uniqueness of new IDs ensured by appending underscores.
     */
    ensureNodeHasId = function (document, node) {
        var firstHeading, text;
        if (node.id === "") {
            firstHeading = node.querySelector("h1");
            text = firstHeading ? firstHeading.innerHTML: node.innerHTML;
            text = text.substring(0,40).replace(/[^a-z]+/gi,"").toLowerCase();
            text = text.substring(0,20);
            while (document.getElementById(text)) {
                text += "_";
            }
            node.id = text;
        }
    },
    
    /*
     * Look within the DOM any sections that contain elements with both
     * input and output classes
     */
    treewalk = function(document, node, cont) {
        var i, localheadings, ul, li, a;

        if (cont && node.children) {
            ul = document.createElement('ul');
            cont.appendChild(ul);
            for (i = 0; i < node.children.length; ++i) {
                ensureNodeHasId(document, node.children[i]);
                if (node.children[i].nodeName.toLowerCase() === "section" ) {
                     
                    a = document.createElement('a');
                    localheadings = node.children[i].querySelectorAll("h1");
                    if (localheadings[0]) {
                        a.innerHTML = localheadings[0].innerHTML;
                        a.href= "#"+node.children[i].id;
                        li = document.createElement('li');
                        li.appendChild(a);
                        ul.appendChild(li);
                        treewalk(document, node.children[i], li);
                    }
                }
            }
        }
        return cont;
    },

    /*
     * Look within the DOM any sections that contain elements with both
     * input and output classes
     */
    gen = function(document, startNode) {
        if (startNode) {
            //console.log("starting gen");
            var nav = document.createElement("nav");
            //console.log("created nav", nav);
            nav.setAttribute("class", "toc");
			nav.setAttribute("id", "toc");
            //console.log("set class of ", nav);
            return treewalk(document, startNode, nav );
        }
        throw "startNode not defined";
    },

    /*
     * Look within the DOM any sections that contain elements with both
     * input and output classes
     */
    genPop = function(document, startNode, destNode) {
        //console.log("starting genpop");
        var tree = gen(document, startNode);
        if (destNode) {
            destNode.appendChild( tree );
            return tree;
        }
        throw "destNode not defined";
    },

    genPopSelector = function(document, startSelector, destSelector) {
        //console.log("starting genpopselector");
        return genPop(
            document,
            document.querySelector(startSelector),
            document.querySelector(destSelector)
        );
    };


    /* return methods that should be public */
    return {
        gen: gen,
        genPop: genPop,
        genPopSelector: genPopSelector
    };

} ());

module.exports = uoptoc;