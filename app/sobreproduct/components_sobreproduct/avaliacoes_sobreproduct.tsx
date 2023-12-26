'use client'

import Image from 'next/image'
import { useState } from 'react'

function Stylez(){
    const stylecomponents_props_global = `
    
    /* componente Info_Avaliacoes() */
    .avaliacoes {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        min-height: 50vh;
        background-color: #000080;
    } 
    
    .avaliacoes_big {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        min-height: 90%;
        background-color: #FFE4B5;
        justify-content: center;
        align-items: center;
    } 
    .avaliacoes_big_text{
        font-size:10vw;
    }

    .avaliacoes_comments_section{
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
    }
    /* ------------------------------------------- */
    
    
    /* componente Comments() */

    .comments {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        width: 175px;
        height: 125px;
        border-radius: 10px;
        background-color: #008076;
        margin-left: 10px;
        margin-top: 10px;
    } 

    .comments_user {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        border-bottom-style: solid;
        border-bottom-width: 1px;
    }
    .comments_content {
        min-height: 50%;
    }

    .comments_notafinal {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        border-top-style: solid;
        border-top-width: 1px;
    }
    
    /* ------------------------------------------- */

    `

return (<>
<style>
   {stylecomponents_props_global}
</style>
</>)
}

function Comments_Zoom({styletailwind, changestyletailwind}){
    return(
      <>
  <div className={styletailwind} onClick={changestyletailwind}>
     <div className='bg-white max-w-[75%] max-h-[75%]'>
        Comentário completo
     </div>
  </div>
      </>
  
      )                                                                                    
  }

function Comments({ShowMe}){

return (<>
<div className='comments'>
    
    <div className='comments_user'>
    <img src="img_girl.jpg"/>
    
        <p> nome </p>
    </div>
    
    <div className='comments_content' onClick={ShowMe}>
        comentário
        + Leia Mais
    </div>

    <div className='comments_notafinal'>
        Nota final: 0.00
    </div>

</div>

</>)
}


function Info_Avaliacoes(){
    
    
        let styletailwind : string = 'fixed hidden w-full h-full inset-x-0 inset-y-0 bg-[rgba(0,0,0,0.5)] z-10 flex flex-col justify-center items-center' 
    
        let [styletailwindparent, setStyleTail] = useState(styletailwind);
        let [styletailwindparent_lestate, setStyletailState] = useState (false)
    
       function changeStyle(){
        setStyletailState(styletailwindparent_lestate = !styletailwindparent_lestate)
          if(!styletailwindparent_lestate){
            setStyleTail( styletailwindparent = 'fixed w-full h-full inset-x-0 inset-y-0 bg-[rgba(0,0,0,0.5)] z-10 flex flex-col justify-center items-center')         
          }else{
            setStyleTail( styletailwindparent = 'fixed hidden w-full h-full inset-x-0 inset-y-0 bg-[rgba(0,0,0,0.5)] z-10 flex flex-col justify-center items-center' )
       
          }           
       }
    


return(
    <>
    <div className='avaliacoes'>
        <div className='avaliacoes_big'>           
            <div>
             <h1 className='text-4xl'> AVALIAÇÃO (0.00)</h1>
            </div>           
            
            <div>
                ruim/meia-boca/bom/muito-bom/excelente
            </div>
        </div>
        
        <div className='avaliacoes_comments_section'>
          <Comments ShowMe={changeStyle}/>
          <Comments ShowMe={changeStyle}/>
          <Comments ShowMe={changeStyle}/>
          <Comments ShowMe={changeStyle}/>

        </div>
    </div>
    <Comments_Zoom styletailwind={styletailwindparent} changestyletailwind={changeStyle}/>
    <Stylez/>
    </>
)

}



export {Info_Avaliacoes}