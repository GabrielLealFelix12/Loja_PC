'use client'

import Image from 'next/image'


function Info_Prod(){

    const stylecomponents_props = `
        
    /* seção - info sobre o produto */
       .image_prod {
         background-color:brown;
         min-width: 50vw;
         min-height: 50vh;
        }
       
        .sobre_prod{
            background-color:cadetblue;
            min-width: 50vw;
            min-height: 50vh;
        }
        /*------------------------------------------------*/

        /* seção - imagens do produto */
        
        .image_prod_details {
            min-width: 25vw;
            background-color: coral;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }

        
        .image_prod_details_actualcontent {
          height: 100px;
          width: 100px;
          max-width: 100%;
        }
        
        /*------------------------------------------------*/

        /* seção - imagens do produto - GRANDE */
        
        .image_big_prod_details {
            min-width: 75vw;
            background-color: cyan;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .image_big_prod_details_actualcontent {
            height: 350px;
            width: 350px;
            max-width: 100%;
        }
      /*------------------------------------------------*/
    `

const css_searchbar = {backgroundColor: 'blue'};


    return(
        
        <>
        
         <div className='flex flex-row bg-orange-700'>
         <div className='image_prod'> 
            <img src='empty.png'/> 
         </div>
        
         <div className='sobre_prod'> 
            sobre 
         </div>

         </div>
         
        
         <div className='flex flex-row bg-orange-700'>
            <div className='image_prod_details'> 
            Fotos  
            
            <div>
               <img src='empty.png' className='image_prod_details_actualcontent'/> 
            </div>
            
            <div>
              <img src='empty.png' className='image_prod_details_actualcontent'/> 
            </div>
            
            <div>
               <img src='empty.png' className='image_prod_details_actualcontent'/> 
            </div>
            
            </div>
         
         <div className='image_big_prod_details'>   
           <img src='empty.png' className='image_big_prod_details_actualcontent'/>  
         </div>
        
        </div>
         
         
         <style>
         {stylecomponents_props}
         </style>
        </>
    )
}

export{Info_Prod}
