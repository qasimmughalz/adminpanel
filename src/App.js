import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </div>
  );
}

export default App;
