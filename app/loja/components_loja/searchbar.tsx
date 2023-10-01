'use client'

function Searchbar(): React.JSX.Element {
return(
    <>
    <div style={{height:'25px'}}> </div>

    <div className="flex flex-row flex-wrap ml-6">
    <input type="text" className="rounded-l-lg"/>
    <button className="bg-indigo-200 text-center w-32 rounded-r-lg"> Pesquisar </button>
    </div>
    </>
)
 }

 export { Searchbar }