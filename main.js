const vanever =  document.querySelector(".van__mod");
const toever = document.querySelector(".to__mod");
const  moding3 = document.querySelector(".mod3") ;
const  moding4 = document.querySelector(".mod4");
const  moding5 = document.querySelector(".mod5");
const  moding6 = document.querySelector(".mod6");
const  moding7 = document.querySelector(".mod7");

function change() {
const van__modSrc = vanever.getAttribute('src')
const to__modSrc = toever.getAttribute('src')


vanever.setAttribute('src' , to__modSrc)
toever.setAttribute('src' , van__modSrc);
};
function change2(){
    const van__modSrc = vanever.getAttribute('src')
    const mod3Src = moding3.getAttribute('src')

    vanever.setAttribute('src' , mod3Src)
moding3.setAttribute('src' , van__modSrc)
}



function change3(){
    const van__modSrc = vanever.getAttribute('src')
    const mod4Src = moding4.getAttribute('src')

    vanever.setAttribute('src' , mod4Src)
moding4.setAttribute('src' , van__modSrc)
}




function change4(){
    const van__modSrc = vanever.getAttribute('src')
    const mod5Src = moding5.getAttribute('src')

    vanever.setAttribute('src' , mod5Src)
moding5.setAttribute('src' , van__modSrc)
}



function change5(){
    const van__modSrc = vanever.getAttribute('src')
    const mod6Src = moding6.getAttribute('src')

    vanever.setAttribute('src' , mod6Src)
moding6.setAttribute('src' , van__modSrc)
}

function change6(){
    const van__modSrc = vanever.getAttribute('src')
    const mod7Src = moding7.getAttribute('src')

    vanever.setAttribute('src' , mod7Src)
moding7.setAttribute('src' , van__modSrc)
}





toever.onclick = change
moding3.onclick = change2
moding4.onclick = change3
moding5.onclick = change4
moding6.onclick = change5
moding7.onclick = change6