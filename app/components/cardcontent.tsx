import Image from 'next/image'

function Productcard() {
    return(
        <>
        <div className="flex flex-col bg-indigo-200 box-content h-100 w-100 p-4 border-4">
            
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
                <button className="transition ease-in-out delay-150 bg-indigo-300 w-1/2	 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400 duration-200 ...">  <h2 className='text-xl'>  Saiba mais </h2> </button>
            </div>
        
        </div>
        </>
    )
}

function Renderproductcard(){
return(
    <>
    <div style={{height:'100px'}} className='bg-indigo-900 flex flex-row flex-wrap justify-center content-center'>
    <h1 className="text-2xl text-white"> Novidades </h1>
    </div>

    <div className="flex flex-row flex-wrap justify-around  bg-indigo-900">
        <Productcard/>
        <Productcard/>
        <Productcard/>
        <Productcard/>
    </div>
    <div style={{height:'50px'}} className='bg-indigo-900'></div>
    </>
)
}

export {Renderproductcard}