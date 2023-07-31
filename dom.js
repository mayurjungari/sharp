
//console.log(document.getElementById('header-title'))
// var k=document.getElementById('header-title');
// k.style.borderBottom='8px solid black'
// var p=document.getElementById('aditem')
// p.style.color='green';
// p.style.fontWeight='bold';
//k.style.backgroundColor='red'
var item=document.getElementsByClassName('list-group-item');
item[2].style.backgroundColor='green';
for(var p=0;p<item.length;p++)
{
    item[p].style.fontWeight='bold';
}


