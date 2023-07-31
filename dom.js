
//console.log(document.getElementById('header-title'))
// var k=document.getElementById('header-title');
// k.style.borderBottom='8px solid black'
// var p=document.getElementById('aditem')
// p.style.color='green';
// p.style.fontWeight='bold';
//k.style.backgroundColor='red'
// var item=document.getElementsByClassName('list-group-item');
// item[2].style.backgroundColor='green';
// for(var p=0;p<item.length;p++)
// {
//     item[p].style.fontWeight='bold';
// }
// var item=document.getElementsByClassName('list-group-item')
// item[0].style.backgroundColor='yellow'
// item[3].style.fontWeight='bold'

// ///// GetElementByTagNAme

// var li=document.getElementsByTagName('li')
// li[0].style.backgroundColor='blue';
// li[0].style.fontWeight='bold';
// for( var h=0;h<li.length;h++)
// {
//     li[h].style.backgroundColor='red'
// }

// ============================querySelector====================================================================
// var q=document.querySelector('li:nth-child(2)')
// //q.style.backgroundColor='green'
// var k=document.querySelector('li:nth-child(3)')
// k.style.display='none';


//==========querySelectorAll============================================================================

var ok=document.querySelectorAll(' li')[1];
//ok.style.backgroundColor='green';
var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++)
{
odd[i].style.backgroundColor='green'
}

