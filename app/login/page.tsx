

import { Metadata } from 'next'
import { Render_Form_login } from './components_login/login_form'

export const metadata: Metadata = {
    title: 'Login'
  }

  export default function Page() {

return(
    <>
    <Render_Form_login/>    
    <link rel="stylesheet" href="/stylesheet.css"/>  
    </>
)
}