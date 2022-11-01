import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Dashboard from './Containers/Pages/Dashboard/Dashboard';
import Authenticated from './Containers/Routes/Authenticated';
import UnAuthenticated from './Containers/Routes/UnAuthenticated';
import {useSelector} from 'react-redux'
import AuthSlice, { loginHandler, logoutHandler } from './Containers/Redux/AuthSlice';
import { useDispatch }  from 'react-redux'


function App() {

  const dispatch = useDispatch()

    const token =  localStorage.getItem('token')
    if(token != undefined){
      dispatch(loginHandler(token))
    }else{
      dispatch(logoutHandler)
    }

    const userFound = useSelector(state=> state.AuthSlice.login)
    console.log('check', userFound)

  return (
    <div className="App w-full">
        {userFound ? <Authenticated/> : <UnAuthenticated/>}
    </div>
  );
}


export default App;
