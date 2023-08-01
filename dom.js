
// console.log(document.getElementById('header-title'))
// var k=document.getElementById('header-title');
// k.style.borderBottom='8px solid black'
// var p=document.getElementById('aditem')
// p.style.color='green';
// p.style.fontWeight='bold';
// k.style.backgroundColor='red'
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


// ==========querySelectorAll============================================================================

// var ok=document.querySelectorAll(' li')[1];
// //ok.style.backgroundColor='green';
// var odd=document.querySelectorAll('li:nth-child(odd)');
// for(var i=0;i<odd.length;i++)
// {
// odd[i].style.backgroundColor='green'
// }
// ===================================================================================================================================
var itemlist=document.querySelector('#items');
console.log(itemlist);
//=========ParentNode============================================================================

console.log(itemlist.parentNode);

//==========parentElement==========================================
console.log(itemlist.parentElement);
//==========lastchild=======
console.log(itemlist.lastChild);
//==========lastElementchild=======
console.log(itemlist.lastElementChild)
//==========firstChild=======
console.log(itemlist.firstChild);
//==========firsttElementchild=======

console.log(itemlist.firstElementChild)
//=========child and children
 console.log(itemlist.childNodes[3])
 console.log(itemlist.children[0])

 //-------------next sibling-----
 console.log(itemlist.nextSibling)
 //-------------next Element sibling-----
 console.log(itemlist.nextElementSibling)
  //-------------previous sibling-----
  console.log(itemlist.previousSibling)
  //-------------previous Element sibling-----
  console.log(itemlist.previousElementSibling)
  //--------------create new div

  var newdiv=document.createElement('div')
  console.log(newdiv);
  newdiv.className='clS'
  newdiv.id='idd'
  newdiv.setAttribute('title', 'hello world')
  
   //create text node
   var text=document.createTextNode('hello ')
   //adding text node ito div
   newdiv.appendChild(text)
      //---put our div conteent in container class before h2 tag
   var container=document.querySelector('header .container');
  var h1=document.querySelector('h1')
 

 // insert text node inside container and befoee h1
 container.insertBefore(newdiv,h1)
 console.log(container)
 //----------------------------------
 var newd=document.createElement('div')
 var ntext=document.createTextNode('hello ')
 newd.appendChild(ntext)
 console.log(newd)
 var main=document.querySelector('#main')
main.insertBefore(newd,itemlist)
 
 
 





