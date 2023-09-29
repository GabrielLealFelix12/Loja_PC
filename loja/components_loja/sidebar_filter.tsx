
import { Searchbar } from "./searchbar"
import { Searchsect } from "./search_specifics"
function Sidebar (): React.JSX.Element {
return(
    <>
    <div className="bg-indigo-400">
        Loja
    
     <Searchbar/>   
     <Searchsect peca={"peca"} manifacture={'placeholder'}/>
    </div>
    </>
)
}

export{Sidebar}