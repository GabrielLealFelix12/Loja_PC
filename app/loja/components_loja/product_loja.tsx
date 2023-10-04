'use client'

import Image from 'next/image'
import {ProductInfo} from './productcontent'
import { useState } from 'react';

function redirect_prod() : any {
    window.location.pathname = '/comprafinal/';
}

function ProductcardLoja() {
    return(
        <>
        
        <div className="flex flex-col bg-indigo-200 border-4 h-min w-min p-4 m-8">
            
            <div>
            <Image src="/imagenotfound.jpg" alt="me" width="250" height="250"/>
            </div>
            
            <div className="flex flex-row flex-wrap justify-center">
                <h2 className='text-3xl'> Descrição </h2>
            </div>
            
            <div className="flex flex-row flex-wrap justify-center">
                <h2 className='text-2xl'> R$ 0,00 </h2>
            </div>
            
            <div className="flex flex-col flex-wrap justify-center space-y-1.5">
                <button className="transition ease-in-out delay-150 bg-indigo-300 w-full	 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400 duration-200 ...">  <h2 className='text-xl'> Comprar </h2> </button>
                <button className="transition ease-in-out delay-150 bg-indigo-300 w-full  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400 duration-200 ..." onClick={redirect_prod}>  <h2 className='text-xl'> Saiba mais </h2> </button>
            </div>
        
        </div>
        </>
    )
}

function RenderproductcardLoja(){
    let styletailwind : string = 'fixed w-full h-full inset-x-0 inset-y-0 bg-[rgba(0,0,0,0.5)] z-10 flex flex-col justify-center items-center' 

    let [styletailwindparent, setStyleTail] = useState(styletailwind);

   function changeStyle(){
       setStyleTail( styletailwindparent = 'fixed hidden w-full h-full inset-x-0 inset-y-0 bg-[rgba(0,0,0,0.5)] z-10 flex flex-col justify-center items-center' )
   }


return(
    <>
<ProductInfo styletailwind={styletailwindparent} changestyletailwind={changeStyle}/>
    <div className="flex flex-row flex-wrap justify-evenly w-fit bg-indigo-400">
        <ProductcardLoja/>
        <ProductcardLoja/>
        <ProductcardLoja/>
        <ProductcardLoja/>
        <ProductcardLoja/>
        <ProductcardLoja/>
        <ProductcardLoja/>
        <ProductcardLoja/>
        <ProductcardLoja/>
        <ProductcardLoja/>
        <ProductcardLoja/>
        <ProductcardLoja/>
    </div>

    </>
)
}

export {RenderproductcardLoja}