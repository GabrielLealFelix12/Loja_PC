import Image from 'next/image'

function Displayedinfo({imgpath, infotext}){
return(
    <>
    <div className='flex flex-col justify-center justify-items-center content-center place-content-center'>
        <div className='flex justify-center justify-items-center content-center'>
        <Image src={imgpath} alt="me" width="150" height="150" className='max-w-full h-auto'/>
        </div>
        <div className='flex flex-wrap justify-center justify-items-center content-center text-center'>
            <h2 className='text-2xl text-center'> {infotext} </h2>
        </div>
    </div>
    </>
)
}

function Todisplayinfo(){
return(
    <>
    <div style={{height:'50px'}} className='bg-indigo-500'></div>
    
    <div className="flex flex-row flex-wrap justify-evenly w-full bg-indigo-500">
    <Displayedinfo imgpath={"/info_computerparts/chip-processador.png"} infotext={'Processadores de ultima geração'}/>
    <Displayedinfo imgpath={"/info_computerparts/ram-card.png"} infotext={'Memórias ram de todos os tamanhos'}/>
    <Displayedinfo imgpath={"/info_computerparts/monitor.png"} infotext={'Monitores de altíssima resolução'}/>
    <Displayedinfo imgpath={"/info_computerparts/teclado.png"} infotext={'Acessórios de altíssima qualidade'}/>
    </div>

    <div style={{height:'50px'}} className='bg-indigo-500'></div>

    </>
)
}

export{Todisplayinfo}