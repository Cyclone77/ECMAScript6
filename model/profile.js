// export var firstName = 'Michael';
// export var lastName = 'Jackson';
// export var year = 1958;

var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

export { firstName, lastName, year };

function add(x, y) {
    return x + y;
}

export {
    add as addArg2
}

export var foo = 'bar';
setTimeout(() => foo = 'baz', 500);