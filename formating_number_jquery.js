<script>
var 	bilangan = 23456789;
		
var	reverse = bilangan.toString().split('').reverse().join(''),
	ribuan 	= reverse.match(/\d{1,3}/g);
	ribuan	= ribuan.join('.').split('').reverse().join('');
  console.log(rubuan);
</script>
