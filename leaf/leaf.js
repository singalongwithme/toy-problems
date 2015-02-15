/* function that, given any arbitrary numbers of arrays, returns
an array in contingent order
e.g. [1], [2, 3], [4, 5, 6] -> [1, 2, 4, 3, 5, 6]
*/

function leaf() {
	// if no args are passed in, return null
	if( !arguments.length ){
		return null;
	}

	var result = [], args = [], largest = 0;
	// get arguments passed in
	for( var key in arguments ){
		if( arguments[key].length > largest ){
			largest = arguments[key].length;
		}
		args.push(arguments[key]);
	}

	for( var i = 0; i < largest; i++ ){
		for( var j = 0; j < args.length; j++ ){
			if( args[j][i] != undefined ) result.push(args[j][i]);
		}
	}
	return result;
}