import { Route, Routes } from "react-router-dom";
import LoginView from "./features/auth/views/LoginView";
import CreateUserView from "./features/users/views/CreateUserView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginView />} />
      <Route path="/create-new-user" element={<CreateUserView />} />
    </Routes>
  );
}

export default App;
