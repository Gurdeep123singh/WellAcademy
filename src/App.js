import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import List from "./pages/List/List";
import Teacher from "./pages/Teacher/Teacher";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/teachers" element={<List/>}/>
      <Route path="/teachers/:id" element={<Teacher/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
