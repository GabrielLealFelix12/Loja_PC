'use client'

function Searchbar(): React.JSX.Element {
return(
    <>
    <div className="flex flex-row flex-wrap">
    <input type="text" className="rounded-l-lg"/>
    <button className="bg-indigo-200 text-center w-32 rounded-r-lg"> Pesquisar </button>
    </div>
    </>
)
 }

 export { Searchbar }