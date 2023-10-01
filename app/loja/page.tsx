import { Metadata } from 'next'
import { Headerbarloja } from "./components_loja/headerbarloja"
import { Sidebar } from './components_loja/sidebar_filter'

export const metadata: Metadata = {
    title: 'Loja'
  }

  export default function Page() {
return(
    <>
    <Headerbarloja/>
    <Sidebar/>
    <link rel="stylesheet" href="/stylesheet.css"/> 
    </>
)
}