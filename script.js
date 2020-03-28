var ul = document.getElementById("list")
var li;
var x=document.getElementById('two');
x.addEventListener('click',(event)=>{
    var input=document.getElementById("one")
    var item=one.value;
    ul = document.getElementById("list")
    var textnode=document.createTextNode(item)
    if(item==='')
    {
    	
    	let k=document.createElement('h2')
       document.querySelector('body').appendChild(k)
        k.textContent='Please enter your todo'
    }
    else
    {
    	li=document.createElement('li');
    	var myinput=document.createElement('input')
    	myinput.type="checkbox";
    	myinput.setAttribute('Id','list1')
    	var label=document.createElement('label');
    	ul.appendChild(label)
    	li.appendChild(myinput)
    	label.appendChild(textnode)
    	li.append(label)
    	ul.insertBefore(li,ul.childNodes[0])
    	input.value='';
	}
})	


var y=document.getElementById("three");
y.addEventListener('click',()=>{
	li=ul.children
	for (var i=0;i<li.length;i++)
	{
		while (li[i] && li[i].children[0].checked) {
			ul.removeChild(li[i])
		}
	}
})