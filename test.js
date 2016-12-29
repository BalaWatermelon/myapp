var assert=require('assert')

function add(a,b){
	return a+b;
}

var expected=add(1,2)
assert(expected!=4,'預期不等於4')
assert.ok(expected!=4,'預期不等於4')
assert.notEqual(expected,3,'預期等於3')