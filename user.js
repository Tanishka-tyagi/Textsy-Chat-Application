let arr=document.getElementsByClassName("user");
for(let i=0;i<arr.length;i++)
{
    arr[i].addEventListener('click',userdiv);
}

function updatediv(key)
{
    let divi=document.createElement('div');
    divi.setAttribute('id',`user${key}`);
     divi.setAttribute('class','chatty');
    document.getElementById('message-content').appendChild(divi);
}

function userdiv()
{
    let key=this.id;
    let x=0;
    let check=document.getElementById('message-content').children;
    if(check.length===0)
    { 
        updatediv(key);
    } 
    for(let i=0;i<check.length;i++)
    {
        check[i].style.display="none";
        if(check[i].id===`user${key}`)
        {
            x=1;
        }
    }
    if(x==0)
    {
        updatediv(key);
    }
}
