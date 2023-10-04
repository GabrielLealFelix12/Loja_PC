

import { Searchbar } from './searchbar'

import { Searchsect } from "./search_specifics"

import { Shoppingcart } from "./shoppingcart"

function Sidebar (): React.JSX.Element {
return(
    <>
    <div className="flex flex-col bg-indigo-400 space-y-4 w-fit items-center">
     <Searchbar/>
     <Searchsect peca={"Processador"} marca={'placeholder'} selectdesc={'Escolha um processador'}/>
     <Searchsect peca={"Monitor"} marca={'placeholder'} selectdesc={'Escolha um monitor'}/>
     <Searchsect peca={"Acessório"} marca={'placeholder'} selectdesc={'Escolha um acessório'}/>
     <Searchsect peca={"Memória"} marca={'placeholder'} selectdesc={'Escolha uma memória RAM'}/>     
     <Shoppingcart/>
    </div>
    </>
)
}

export{Sidebar}