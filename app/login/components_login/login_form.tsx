
'use client'
import Image from 'next/image'

function redirect_pagina_principal(){
    window.location.pathname = '/';
}


function Render_Form_login(){
    let style_css = `
    .form_show{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
    }

    .form_senha_usario_parent{
        display: flex;
        flex-direction: column;
        max-width: 50%;
    }
    `
return(
    <>
    <div onClick={redirect_pagina_principal} className='bg-indigo-100'>
         <p className="text-xl"> Retornar a pagina principal </p> 
    </div>
    <div className="form_show bg-indigo-400">
    <Image src="/pc.png" alt="me" width="64" height="64"/>
        <div className="form_senha_usario_parent my-4">
        <label htmlFor="usuario"> Usuário: </label>
          <input type="text" name="usuario" id='usuario'/>
        <label htmlFor="senha"> Senha: </label>
          <input type="password" name="senha" id='senha'/>
        </div>
        <div className="my-4">
            <button type='submit'> Entrar </button>
        </div>
    </div>
<style>{style_css}</style>
    </>
)
}

export{Render_Form_login}