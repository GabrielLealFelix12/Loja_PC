'use client'
import { useState } from "react";

function Searchsect({peca, marca, selectdesc}){
    
const [valueprice, setValueprice] = useState(1);

    return(
    <>
    <div className="bg-white max-w-fit rounded ml-6">
        <div className="border-b border-b-blue-950">
        <label htmlFor={peca}> {peca} </label>
        <input type="checkbox" name={peca} id={peca}/>
        </div>
        <div>
            <select name="Marca" id="Marca" defaultValue={''}>
            <option value="" disabled> {selectdesc} </option>
            <option value={marca}> {marca} </option>
            
            </select>
        </div>
        <div>
         <input className="w-full" type="range" min="1" max="10000" value={valueprice} onChange={(e) => {setValueprice(parseInt(e.target.value))}}/>
         <div>
         <label htmlFor="valorprice"> R$ </label>
         <input type="number" id="valorprice" name="valorprice" min="1" max="10000" value={valueprice} className="bg-indigo-200 w-3/4 rounded" onChange={(e) => {setValueprice(parseInt(e.target.value))}}/>
         </div>
        </div>
    </div>
    </>
)

}

export { Searchsect }