import Image from 'next/image'

function Infocompany(){
return(
<>
<div style={{height:'25px'}} className='bg-indigo-300'></div>

<div className='flex flex-row justify-around bg-indigo-300'>
    <div>
       <Image src="/pc.png" alt="me" width="250" height="250"/>
       <h1 className="text-4xl"> My company logo </h1>
    </div>
    
    <div className='space-y-6'>
        <div>
         <h1 className="text-4xl"> Atendimento </h1>
         <h2 className="text-2xl"> Segunda a sexta: 08:00 - 19:00 </h2>
       </div>
       <div>
         <h1 className="text-4xl"> Localização </h1>
         <h2 className="text-2xl"> Avenida de lugar nenhum, numero 0 </h2>
       </div>
       <div>
         <h1 className="text-4xl"> Ligue </h1>
         <h2 className="text-2xl"> (92) 90000 - 0000 </h2>
       </div>
    </div>    

</div>
<div style={{height:'25px'}} className='bg-indigo-300'></div>

</>
)
}

export {Infocompany}