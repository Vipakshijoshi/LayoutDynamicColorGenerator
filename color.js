console.log('hello')
let leftcolor='#76543a';
let rightcolor='#2346fd';
let code="0123456789abcdef"

const colors=()=>{
    let newColor="#"
    // console.log(' button')
    for(let i=0;i<6;i++){
        let colorCode=code[(Math.floor(Math.random()*16))]
        newColor+=colorCode
    }
    return newColor
}

let copyCode=document.querySelector('.des')
const handleright=()=> {
   rightcolor=colors()
   console.log(rightcolor)
   document.getElementById('rightbtn').innerHTML=`${rightcolor}`
   document.getElementById('center').style.backgroundImage=`linear-gradient(to right,${rightcolor},${leftcolor})`
   document.getElementById('rightbtn').style.backgroundColor=`${rightcolor}`
   copyCode.innerHTML=  `your generated color codes are ${rightcolor} and ${leftcolor}`
}
const handleleft=()=> {
    leftcolor=colors()
    console.log(leftcolor)
    document.getElementById('leftbtn').innerHTML=`${leftcolor}`
    document.getElementById('center').style.backgroundImage=`linear-gradient(to right,${rightcolor},${leftcolor})`
    document.getElementById('leftbtn').style.backgroundColor=`${leftcolor}`
    copyCode.innerHTML=  `your generated color codes are ${rightcolor} and ${leftcolor}`
 }
const copyText=()=>{
    console.log(copyCode.innerText)
    navigator.clipboard.writeText(copyCode.innerText);
    alert("copied text is:"+copyCode.innerText)
}