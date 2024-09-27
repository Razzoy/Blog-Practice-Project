import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { LandingPage } from "./pages/LandingPage";

function App() {

  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<LandingPage/>} />
            </Route>
          </Routes>
        </Router>
    </>
  );
}

export default App;