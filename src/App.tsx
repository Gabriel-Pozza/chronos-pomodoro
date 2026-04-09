import { Heading } from './components/Heading'

import './styles/theme.css'
import './styles/Global.css'
import { TimerIcon } from 'lucide-react'


export function App(){

    return (

        <div>
            <Heading>Ola mundoaasasa
                <button>
                    <TimerIcon/>
                </button>
            </Heading>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat mollitia doloremque, beatae consequuntur aliquam hic autem praesentium cupiditate accusantium molestias saepe enim, tempore veritatis obcaecati facere, iusto ipsum animi consequatur.</p>
        </div>
    )



}