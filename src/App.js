import { useSelector } from 'react-redux';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Dashboard from './Containers/Pages/Dashboard/Dashboard';
import Authenticated from './Containers/Routes/Authenticated';
import UnAuthenticated from './Containers/Routes/UnAuthenticated';

function App() {
  const userFound = useSelector((state) => state?.Auth.user);
  // const token =  localStorage.getItem('token')
  // if(token != undefined){
  //   dispatch(loginHandler(token))
  // }else{
  //   dispatch(logoutHandler)
  // }

  return (
    <div className='App w-full'>
      {userFound ? <Authenticated /> : <UnAuthenticated />}
    </div>
  );
}

export default App;
