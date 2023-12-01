let userscore = parseInt(localStorage.getItem('us')) || 0;
let compscore = parseInt(localStorage.getItem('cs')) || 0;


document.addEventListener('DOMContentLoaded', function()
{
    document.getElementById('us').textContent=userscore;
    document.getElementById('cs').textContent=compscore;
})

function randomchoice()
{
    const choices=['ro','pap','sci'];
    const index=Math.floor(Math.random()*choices.length);
    return choices[index];
}

function winner(userch,compch)
{
    if(userch===compch)
    return "tie";
    else if(userch==="ro" &&  compch==="sci")
    return "use";
    else if(userch==="sci" && compch==="pap")
    return "use";
    else if(userch==="pap" && compch==="ro")
    return "use";
    else if(compch==="ro" &&  userch==="sci")
    return "com";
    else if(compch==="sci" && userch==="pap")
    return "com";
    else if(compch==="pap" && userch==="ro")
    return "com";
}

function update(ans)
{
    if(ans==="use")
    userscore++;
    if(ans==="com")
    compscore++;
    localStorage.setItem('userscore', userscore);
    localStorage.setItem('compscore', compscore);
    document.getElementById('us').textContent=userscore;
    document.getElementById('cs').textContent=compscore;
}

function display(ans,user,comp)
{
    
    
    if(user==="ro")
    document.getElementById("keyr").style.display="block";
    else if(user==="pap")
    document.getElementById("keyp").style.display="block";
    else if(user==="sci")
    document.getElementById("keys").style.display="block";

    if(comp==="ro")
    document.getElementById("keyr").style.display="block";
    else if(comp==="pap")
    document.getElementById("keyp").style.display="block";
    else if(comp==="sci")
    document.getElementById("keys").style.display="block";

    var desElements = document.getElementsByClassName('options');
    for (var i = 0; i < desElements.length; i++) 
    {
        
        desElements[i].style.display = 'none';
    }
    
    document.getElementById('again').style.display='block';
    
    if(ans==="use")
    {
        document.getElementById('result').innerHTML="YOU WIN \n AGAINST PC";

        document.getElementById('nx').style.display='block';
    }
    else if(ans==="com")
    document.getElementById('result').textContent="YOU LOST \n AGAINST PC";
    else
    document.getElementById('result').textContent="TIE UP";
}

function play(user)
{
    const comp = randomchoice();
    const ans=winner(user,comp);
    update(ans);
    display(ans,user,comp);
}

function pa()
{
    localStorage.setItem('us', userscore);
    localStorage.setItem('cs', compscore);
   location.href='index.html';
}

function next()
{
    localStorage.setItem('us', userscore);
    localStorage.setItem('cs', compscore);
    location.href='index2.html';
}

function inst() 
{
    var desElements = document.getElementsByClassName('des');
    for (var i = 0; i < desElements.length; i++) {
        desElements[i].style.display = 'block';
    }
    document.getElementById('btn').style.display = 'block';
}


function close() {
    var parentContainer = document.getElementById('parent');
   
        parentContainer.style.display = 'none';
    
}




