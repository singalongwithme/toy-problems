/* function that takes in a string and returns an array sorted by
frequency then alphabetically
e.g. 'mississippi' -> [['i', 4], ['s', 4], ['p', 2], ['m', 1]];
*/

function characterFrequency(input) {
	var freq = {}, result = [];

	for( var i = 0; i < input.length; i++ ){
		var chr = input[i];
		if( !freq[chr] ){
			freq[chr] = 1;
		} else {
			freq[chr]++;
		}
	}

	for( var key in freq ){
		result.push([key, freq[key]]);
	}

	return result.sort(function(a,b){
		if( a[1] < b[1] ) return 1;
		if( a[1] > b[1] ) return -1;
		if( a[0] < b[0] ) return -1;
		if( a[0] > b[0] ) return 1;
	})
}