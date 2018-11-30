(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });
    
    document.getElementById('go').addEventListener('click', start);
    
    function start() {
        document.getElementById('go').removeEventListener('click', start);
        promise.then(() => engine.toText('呵呵嘻嘻'))
        .then(() => engine.shake())
		.then(() => engine.toText('☼'))
        .then(() => engine.shake())
		.then(() => engine.toText('l'))
        .then(() => engine.shake())
		.then(() => engine.toText('o'))
        .then(() => engine.shake())
		.then(() => engine.toText('v'))
        .then(() => engine.shake())
		.then(() => engine.toText('e'))
        .then(() => engine.shake())
		.then(() => engine.toText('U'))
        .then(() => engine.shake())
        .then(() => engine.clear())
        .then(() => document.getElementById('go').addEventListener('click', start));
    }
})();
