import { Route, Routes } from 'react-router-dom'
import { GlobalStyle } from './globalStyle'
import Navbar from './components/Navbar/Navbar';
import { Home, About } from './components/pages/index'
import CustomCursor from './components/customCursor/CustomCursor';
import Preloader from './components/preloader/Preloader';

function App() {
  return (
    <>
      <GlobalStyle />
      <CustomCursor />
      <Preloader />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
      </Routes>
    </>
  );
}

export default App;
