var chop = function(int, arr) {
	for (var i = 0; i< arr.length; i++) {
		if (int === arr[i]) {
			return i;
		};
	};
	return -1;
} ;

  // console.log(chop(3, []));
  // console.log(chop(3, [1]));
  // console.log(chop(1, [1]));
  
  // console.log(chop(1, [1, 3, 5]));
  // console.log(chop(3, [1, 3, 5]));
  // console.log(chop(5, [1, 3, 5]));
  // console.log(chop(0, [1, 3, 5]));
  // console.log(chop(2, [1, 3, 5]));
  // console.log(chop(4, [1, 3, 5]));
  // console.log(chop(6, [1, 3, 5]));
  
  // console.log(chop(1, [1, 3, 5, 7]));
  // console.log(chop(3, [1, 3, 5, 7]));
  // console.log(chop(5, [1, 3, 5, 7]));
  // console.log(chop(7, [1, 3, 5, 7]));
  // console.log(chop(0, [1, 3, 5, 7]));
  // console.log(chop(2, [1, 3, 5, 7]));
  // console.log(chop(4, [1, 3, 5, 7]));
  // console.log(chop(6, [1, 3, 5, 7]));
  // console.log(chop(8, [1, 3, 5, 7]));