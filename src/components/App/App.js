//css-стили
import './App.scss';
import '../../fonts/fonts.scss';
//не мои компоненты
import { Routes, Route } from "react-router-dom";
//компоненты
import Header from '../Header/Header.jsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Header/> } />
    </Routes>
  );
}

export default App;
