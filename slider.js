
function show(info){
         
    let arro= document.getElementsByClassName("outer"),
    
        arrd= document.getElementsByClassName("topic"),
        arrp =document.getElementsByClassName("txt"),
        click= document.getElementById(info);

    for(let a=0;a<arrd.length;a++){
        // if(click.innerText === arrd[a].innerText)
            if(info === arrd[a].id)
            {
            // arrp[a].style = "display:block;transition:all 1s;"
            arro[a].style = "height:250px;transition:all 1s;"
            document.getElementsByTagName("i")[a].style = "transform: rotate(180deg);"
        }else{
            // arrp[a].style = "display:hidden;transition:all 1s;"
            arro[a].style = "height:60px;transition:all 1s;"
            document.getElementsByTagName("i")[a].style = "transform: rotate(0deg)"

            
        }
    }
}



// console.log(document.getElementsByClassName("topic")[0].innerText)
// console.log(document.getElementById(info).innerText)
// console.log(document.getElementsByTagName("i")[0])