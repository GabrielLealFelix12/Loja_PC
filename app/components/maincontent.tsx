import Image from 'next/image'


function Maincontent(){
return(
<>
<div className="flex flex-row flex-wrap bg-indigo-900">

<div className='basis-3/6	flex flex-row flex-wrap justify-center'>
    <Image src="/gamingpc.png" alt="me" width="500" height="500"/>
</div>

<div className='basis-3/6	flex flex-row flex-wrap justify-center content-center'>
   <h1 className="text-4xl text-white"> Sobre sua loja aqui </h1>
</div>

</div>
</>
)
}
export {Maincontent}