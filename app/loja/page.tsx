import { Metadata } from 'next'
import { Headerbarloja } from "./components_loja/headerbarloja"
import { Sidebar } from './components_loja/sidebar_filter'
import { RenderproductcardLoja } from './components_loja/product_loja'

export const metadata: Metadata = {
    title: 'Loja'
  }

  export default function Page() {
    
return(
    <>
    <Headerbarloja/>    
    <div className='w-full h-screen flex flex-row flex-wrap bg-indigo-400'>
     
    <div className='w-1/4 bg-indigo-400'> 
      <Sidebar/>
    </div>
    
    <div className='w-3/4 bg-indigo-400'>
      <RenderproductcardLoja/>
    </div>
    
    </div>
    <link rel="stylesheet" href="/stylesheet.css"/> 
    </>
)
}