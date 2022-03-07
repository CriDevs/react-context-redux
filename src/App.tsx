import {FC} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {SignUp} from './pages/SignUp'
import {ShowData} from './pages/ShowData'
import { Context } from './contexts/Context';
import { useContext } from 'react';

const App:FC = () =>{
  const {state,dispatch} = useContext(Context)

  const handleChangeTheme = () =>{
    if(state.theme.status === 'light'){
      dispatch({
        type : 'CHANGE_STATUS',
        payload : {
          status: 'dark'
        }
      })
    } else {
      dispatch({
        type : 'CHANGE_STATUS',
        payload : {
          status: 'light'
        }
    })
    
  }
 
}
return(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignUp/>}/>
      <Route path='/exibir' element={<ShowData/>}/>
    </Routes>
  </BrowserRouter>
)
}
export default App;