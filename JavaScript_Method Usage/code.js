var array=[
	{id: 1, value: 1020},
	{id: 2, value: 900},
	{id: 3, value: 350},
	{id: 4, value: 1568},
	{id: 5, value: 1234},
	{id: 6, value: 752},
	{id: 7, value: 452},
	{id: 8, value: 12},
	{id: 9, value: 3300},
	{id: 10, value: 753},
];
function check(array)
{
    return array.value>1000;
}
function test(array){
    return array.id==8;
}
    //function test1(total,arra){
      //  return total.value-arra.value;
    //}

console.log(array.filter(check));
console.log(array.findIndex(test));
console.log(array.reduce((accumulator, currentvalue) => accumulator + currentvalue.value, 0));
console.log(array.map(array=>array.value+100));