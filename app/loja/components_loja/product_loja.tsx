import Image from 'next/image'

function ProductcardLoja() {
    return(
        <>
        <div className="flex flex-col bg-indigo-200 border-4 h-min w-min p-4 m-8">
            
            <div>
            <Image src="/imagenotfound.jpg" alt="me" width="250" height="250"/>
            </div>
            
            <div className="flex flex-row flex-wrap justify-center">
                <h2 className='text-3xl'> Descrição </h2>
            </div>
            
            <div className="flex flex-row flex-wrap justify-center">
                <h2 className='text-2xl'> R$ 0,00 </h2>
            </div>
            
            <div className="flex flex-row flex-wrap justify-center">
                <button className="transition ease-in-out delay-150 bg-indigo-300 w-1/2	 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400 duration-200 ...">  <h2 className='text-xl'> Comprar </h2> </button>
            </div>
        
        </div>
        </>
    )
}

function RenderproductcardLoja(){
return(
    <>

    <div className="flex flex-row flex-wrap justify-evenly w-fit bg-indigo-400">
        <ProductcardLoja/>
        <ProductcardLoja/>
        <ProductcardLoja/>
        <ProductcardLoja/>
        <ProductcardLoja/>
        <ProductcardLoja/>
        <ProductcardLoja/>
        <ProductcardLoja/>
        <ProductcardLoja/>
        <ProductcardLoja/>
        <ProductcardLoja/>
        <ProductcardLoja/>
    </div>

    </>
)
}

export {RenderproductcardLoja}