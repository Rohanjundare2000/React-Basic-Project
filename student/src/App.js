import { BrowserRouter, Routes,Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigationbar } from "./Navigationbar"; // Assuming Navigationbar is imported correctly
 



function App() {
  return (
    <BrowserRouter>
      <Navigationbar />
      <Routes>
        <Route path={BASE_ROUTE} element={<HomeComponent />} />
        <Route path={REGISTRATION_ROUTE} element={<AboutComponent />} />
        <Route path={STUDENT_LIST_ROUTE} element={<ContactComponent />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
