import logo from './logo.svg';
import './App.css';
import BasicUserCard from './components/BasicUserCard';
import DetailsUserCard from './components/DetailsUserCard';
import {Routes,Route} from 'react-router-dom'
import Pagination from './components/Pagination';
function App() {
  return (
    <div className="App">
      <Pagination/>
      <BasicUserCard/>
    </div>
  );
}

export default App;
