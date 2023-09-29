import { Metadata } from 'next'
import { Sidebar } from './components_loja/sidebar_filter'

export const metadata: Metadata = {
    title: 'Loja'
  }

  export default function Page() {
return(
    <>
    <Sidebar/>
    <link rel="stylesheet" href="/stylesheet.css"/> 
    </>
)
}