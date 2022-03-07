import {Link} from 'react-router-dom'
import { Context } from '../contexts/Context'
import { useContext } from 'react'

export const ShowData = () => {
 const {state, dispatch} = useContext(Context)   
    return(
        <div>
            <h3>Tela Show Data</h3>

            {state.user.name && 
            <>
             Meu nome é : {state.user.name} <br/>
            Eu tenho {state.user.age} anos
            </>
            }

            {!state.user.name && 'Nao ha informacoes'}
           
            <Link to='/'>Voltar para SignUp</Link>
        </div>
    )
}