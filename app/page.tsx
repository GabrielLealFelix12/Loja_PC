import {Headerbar} from './components/headerbar'
import {Maincontent} from './components/maincontent'
import {Renderproductcard} from './components/cardcontent'
import { Todisplayinfo } from './components/infodisplayprod'
import { Metadata } from 'next'
import { Infocompany } from './components/infocompany'
import { Companyfooter } from './components/zefooter'

export const metadata: Metadata = {
  title: 'Minha loja'
}

export default function Page() {
    return ( 
    <>
    <Headerbar/>         
    <Maincontent/>
    <Renderproductcard/>
    <Todisplayinfo/> 
    <Infocompany/>
    <Companyfooter/>
    <link rel="stylesheet" href="/stylesheet.css"/> 
    </>
    )
  }