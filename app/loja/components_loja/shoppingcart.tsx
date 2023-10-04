'use client'
import Image from 'next/image'

function Shoppingcart() : React.JSX.Element{
return(
    <>
    
    <div className='flex w-[35%]'>
      
      <div className='flex rounded-full bg-white w-full justify-center p-8'> 
        <Image src="/shopping_cart.png" alt="me" width='60' height='60' className='object-contain'/>
       <div className='bg-red-600 h-fit rounded-lg'>
          <h1 className='text-2xl text-white text-center'> !</h1>
        </div>
      </div>
      
    
    </div>
    
    </>
)
}

export { Shoppingcart }