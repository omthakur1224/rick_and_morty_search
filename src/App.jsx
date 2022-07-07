import logo from './logo.svg';
import './App.css';
import BasicUserCard from './components/BasicUserCard';
import DetailsUserCard from './components/DetailsUserCard';
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      {/* <BasicUserCard/> */}
      <Routes>
        <Route path={'/'} element={<BasicUserCard/>}/>
        <Route path={'/'} element={<DetailsUserCard/>} />
      </Routes>
    </div>
  );
}

export default App;
