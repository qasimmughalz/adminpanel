import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Dashboard from './Containers/Pages/Dashboard/Dashboard';
import Authenticated from './Containers/Routes/Authenticated';
import UnAuthenticated from './Containers/Routes/UnAuthenticated';


function App() {

  const token = true

  return (
    <div className="App w-full">
        
        {token ? <Authenticated/> : <UnAuthenticated/>}
    </div>
  );
}

export default App;
