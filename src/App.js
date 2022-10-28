import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home'
import Counter from './pages/Counter';

function App() {  
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/counter" element={<Counter />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
