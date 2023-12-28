'use client'

import Image from 'next/image'


function redirect() : any {
    window.location.pathname = '/loja/';
}

function redirect_login() : any {
    window.location.pathname = '/login/';
}

function Headerbarloja(){

    return(
        <>
        <div className="flex flex-row flex-wrap items-stretch bg-indigo-400">
            <div className="basis-3/5 flex flex-row justify-center items-center">    
                <div className='flex flex-row items-center space-x-6'>
                <Image src="/pc.png" alt="me" width="64" height="64"/>
                <h1 className="text-4xl"> My company logo </h1>
                <Image src="/pc.png" alt="me" width="64" height="64"/>
                </div>
            </div>
            
            <div onClick={redirect} className="basis-1/5 flex justify-center items-center bg-indigo-300 hover:bg-indigo-400">
                <h1 className="text-4xl"> Loja </h1>
            </div>
            
            <div onClick={redirect_login}  className="basis-1/5 flex justify-center items-center bg-indigo-200 hover:bg-indigo-400">
            <h1 className="text-4xl"> Login </h1>
            </div>
        </div>
        </>
    )
}

export{Headerbarloja}
