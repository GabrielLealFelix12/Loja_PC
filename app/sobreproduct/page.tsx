import { Metadata } from 'next'
import {Headerbar_SobreProduct} from './components_sobreproduct/headerbat_sobreproduct'
import {Info_Prod} from './components_sobreproduct/productdisplay_sobreproduct'
import { Info_Avaliacoes } from './components_sobreproduct/avaliacoes_sobreproduct'
export const metadata: Metadata = {
    title: 'Sobre o produto'
  }

  export default function Page() {
    
return(
    <>
    <Headerbar_SobreProduct/>
    <Info_Prod/>
    <Info_Avaliacoes/>
    <link rel="stylesheet" href="/stylesheet.css"/>  
    </>
)
}