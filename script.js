var ul = document.getElementById("list")
var li;
var x=document.getElementById('two');
x.addEventListener('click',(event)=>{
    var input=document.getElementById("one")
    var item=input.value;
    ul = document.getElementById("list")
    var textnode=document.createTextNode(item)
    if(item ==='')
    {
    	

    	
        return false;
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
    	li.appendChild(label)
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

