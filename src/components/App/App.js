//css-стили
import './App.scss';
import '../../fonts/fonts.scss';
//не мои компоненты
import { Routes, Route } from "react-router-dom";
//компоненты
import Header from '../Header/Header.jsx';
import Intro from '../Intro/Intro';
import Areas from '../Areas/Areas';
import House from '../House/House';

function App() {
  return (
    <>
    {/* <Routes>
      <Route path="/" element={<Header/> } />
    </Routes> */}
    <Header />
    <Intro />
    <Areas />
    <House />
    </>
  );
}

export default App;
