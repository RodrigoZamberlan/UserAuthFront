import { Route, Routes } from "react-router-dom";
import LoginView from "./features/auth/views/LoginView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginView />} />
    </Routes>
  );
}

export default App;
