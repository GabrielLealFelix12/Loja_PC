'use client'


function Searchsect({peca,manifacture}){
return(
    <>
    <div>
        <div>
        <input type="checkbox" name={peca} id={peca}/>
        <label> I have a bike</label>
        </div>
        <div>
            <select name="Marca" id="Marca">
                <option value={manifacture}> {manifacture} </option>
            </select>
        </div>
        <div>
            Sidescroll Valor
        </div>
    </div>
    </>
)

}

export { Searchsect }