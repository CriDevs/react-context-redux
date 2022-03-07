import { useContext,useState } from 'react'
import {Link} from 'react-router-dom'
import { Context } from '../contexts/Context'

export const SignUp = () => {

const {state,dispatch} = useContext(Context)    
const [nameInput, setNameInput] = useState('')
const [ageInput,setAgeInput] = useState(0)

const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value)
}

const handleChangeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgeInput(parseInt(e.target.value))
}


const handleSave = () => {
    dispatch({
        type: 'CHANGE_NAME',
        payload: {
            name: nameInput
        }
    })
    dispatch({
        type: 'CHANGE_AGE',
        payload: {
            age: ageInput
        }
    })
}
    return(
        <div>
           <h3> Tela SignUp {{theme: state.theme.status}}</h3>
            <input
                type= 'text'
                placeholder='Digite um nome'
                value={nameInput}
                onChange={handleChangeName}
            />
            <input
                type= 'text'
                placeholder='Digite a sua idade'
                value={ageInput}
                onChange={handleChangeAge}
            />
            
                <button onClick={handleSave}>Salvar</button>

        <Link to='/exibir'>Ir pra ShowData</Link>
        </div>
    )
}