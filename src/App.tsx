import { Route, Routes } from "react-router-dom";
import LoginView from "./features/auth/views/LoginView";
import CreateUserView from "./features/users/views/CreateUserView";
import UsersManagerView from "./features/users/views/UsersManagerView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginView />} />
      <Route path="/create-new-user" element={<CreateUserView />} />
      <Route path="/admin" element={<UsersManagerView/>} />
    </Routes>
  );
}

export default App;
