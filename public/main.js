/*jslint evil: true */

/*members create, error, message, name, prototype, stringify, toSource,
    toString, write
*/

/*global JSON, make_parse, parse, source, tree */

// Transform a token object into an exception object and throw it.

/*Object.prototype.error = function (message, t) {
    t = t || this;
    t.name = "SyntaxError";
    t.message = message;
    throw t;
};*/


function main() {
    var parse = make_parse();

    var source = INPUT.value;
    var string, tree;
    try {
        tree = parse(source);
        //string = JSON.stringify(tree, ['type', 'value', 'from', 'to'],  4);
        string = JSON.stringify(tree, ['key', 'name', 'message',
             'value', 'arity', 'first', 'second', 'third', 'fourth'], 4);
    } catch (e) {
        string = JSON.stringify(e, ['name', 'message', 'from', 'to', 'key',
                'value', 'arity', 'first', 'second', 'third', 'fourth'], 4);
    }
    
    OUTPUT.innerHTML = string.replace(/&/g, '&amp;').replace(/[<]/g, '&lt;');
	if (window.localStorage) {
	  localStorage.INPUT = source;
	  localStorage.OUTPUT = OUTPUT.innerHTML;
	}
	//localStorage.clear();
};

window.onload = function() {
  PARSE.onclick = main;
    if (window.localStorage && localStorage.INPUT && localStorage.OUTPUT) {
    document.getElementById("INPUT").innerHTML = localStorage.INPUT;
    document.getElementById("OUTPUT").innerHTML = localStorage.OUTPUT;
  }
}
