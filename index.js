const app=document.getElementById('typewriter')
;

const typewriter = new Typewriter (app,{
    loop:true,
    delay:75
});

typewriter
.typeString ('Avenida Colon 1249')
.pauseFor (200)
.start ();