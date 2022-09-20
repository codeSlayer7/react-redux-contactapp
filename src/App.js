import './App.css';
import Header from './components/header/header';
import SearchPanel from './components/search-panel/search-panel';
import {BrowserRouter} from 'react-router-dom'





function App() {
  return (
    <BrowserRouter>
     <div className="App">

       <Header/>
      
       <main className='main'>
        <SearchPanel />
       </main>
     
     </div>
    </BrowserRouter>
  );
}

export default App;
