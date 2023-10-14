'use client'


function ProductInfo({styletailwind, changestyletailwind}){
  return(
    <>
<div className={styletailwind} onClick={changestyletailwind}>
   <div className='bg-white max-w-[75%] max-h-[75%]'>
      image / description + preco + button (confirmar compra)
   
   <div> 
       comments
   </div>

   </div>
</div>
    </>

	)                                                                                    
}

export{ProductInfo}