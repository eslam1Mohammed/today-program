var dt =new Date().getDay();
console,console.log(dt);
let ss=document.querySelector(".span2");
let tdText;
if(dt==0)
{
    tdText="sunday"
}
else if(dt==1)
{
    tdText="Monday"
}
else if(dt==2)
{
    tdText="Tuesday"
}
else if(dt==3)
{
    tdText="Wednesday"
}
else if(dt==4)
{
    tdText="Thursday"
}
else if(dt==5)
{
    tdText="Friday"
}
else if(dt==6)
{
    tdText="Saturday"
}
let tdText2=document.createTextNode(tdText);
ss.appendChild(tdText2);

