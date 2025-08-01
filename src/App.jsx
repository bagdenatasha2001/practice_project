import SimpleWebsite from "./Components/SimpleWebsite";
import { Routes,Route } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import FaqPage from "./pages/FaqPage";
import AboutPage from "./pages/AboutPage";

function App() {
  

  return (
    <>
    
      <Routes>
      <Route path="/" element={<SimpleWebsite/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/faq" element={<FaqPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
   
    </>
  )
}

export default App;
