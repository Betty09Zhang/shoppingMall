var foo={n:1};
(function(foo){
	console.log('oo'+foo.n);
	foo.n=3;
	var foo={n:2};
	console.log('pp'+foo.n);

})(foo);
console.log('qq'+foo.n);