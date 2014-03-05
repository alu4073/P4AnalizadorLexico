var assert = chai.assert;

suite('Resultados de los tests: ', function() {
   test('Generación de la salida correcta para una asignación de variable', function() {
        INPUT.value = ' var nombre = "Antonio";';
        main();
		assert.equal(OUTPUT.innerHTML,'{\n    "value": "=",\n    "arity": "binary",\n    "first": {\n        "value": "nombre",\n        "arity": "name"\n    },\n    "second": {\n        "value": "Antonio",\n        "arity": "literal"\n    }\n}');
    });
    test('Generación de la salida correcta para una función', function() {
        INPUT.value = ' var miFuncion = function() { \n\n };';
        main();
		assert.equal(OUTPUT.innerHTML,'{\n    "value": "=",\n    "arity": "binary",\n    "first": {\n        "value": "miFuncion",\n        "arity": "name"\n    },\n    "second": {\n        "value": "function",\n        "arity": "function",\n        "first": [],\n        "second": null\n    }\n}');
    });
    test('Detección de una sentencia.', function() {
        INPUT.value = ' var miFuncion = function(x) { \n return x; \n };';
        main();
		assert.match(OUTPUT.innerHTML, /statement/);
    });
    test('Detección de una función.', function() {
        INPUT.value = ' var miFuncion = function(x) { \n\n };';
        main();
		assert.match(OUTPUT.innerHTML, /function/);
    });
    test('Detección de un identificador.', function() {
        INPUT.value = ' var edad = 5;';
        main();
		assert.match(OUTPUT.innerHTML, /name/);
    });
    test('Detección de un valor asignado a un identificador.', function() {
        INPUT.value = ' var edad = 5;';
        main();
		assert.match(OUTPUT.innerHTML, /literal/);
    });
    test('Detección de una asignación errónea', function() {
        INPUT.value = 'var Suma << 5 " 3;';
        main();
		assert.match(OUTPUT.innerHTML, /Syntax error/);
    });
    test('Detección de un operador erróneo', function() {
        INPUT.value = 'var Suma = 5 " 3;';
        main();
		assert.match(OUTPUT.innerHTML, /Syntax error/);
    });
    test('Detección de identificador erróneo', function() {
        INPUT.value = 'var a/&#@:_;!|! = "hello";';
        main();
        assert.match(OUTPUT.innerHTML, /Syntax error/);
    });


});
