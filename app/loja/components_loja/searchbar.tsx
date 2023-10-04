'use client'

function Searchbar(): React.JSX.Element {
return(
    <>
    <div style={{height:'25px'}} className="bg-indigo-400"> </div>

    <div className="flex flex-row flex-wrap ml-12 bg-indigo-400">
    <input type="text" className="rounded-l-lg max-w-[50%]"/>
    <button className="bg-indigo-200 text-center w-32 rounded-r-lg"> Pesquisar </button>
    </div>
    </>
)
 }

 export { Searchbar }