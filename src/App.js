import logo from './logo.svg';
import './App.css';
import Addpost from './component/Addpost';
import Searchpost from './component/Searchpost';
import Deletepost from './component/Deletepost';
import Viewpost from './component/Viewpost';
import NavigationBar from './component/NavigationBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   
   <Routes>

<Route path="/" element= { <Addpost/> }/>
<Route path="/Searchpost" element= { <Searchpost/> }/>
<Route path="/Deletepost" element= { <Deletepost/> }/>
<Route path="/Viewpost" element= { <Viewpost/> }/>








   </Routes>
   
   
   
   
   
   
   </BrowserRouter>
  );
}

export default App;
