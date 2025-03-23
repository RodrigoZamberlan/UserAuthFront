import { useState } from "react";
import Form from "../../../shared/components/form/Form";
import { TUser } from "../types/User";
import { usersService } from "../services/usersService";

const emptyUserData: TUser = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    role: "default",
    active: true
}

const CreateUserView: React.FC = () => {
  const [userData, setUserData] = useState<TUser>(emptyUserData);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setUserData(prev => ({...prev, [name]: value}));
  };

  const submitUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    try {
      setLoading(true);
      const user: TUser = await usersService.create(userData);
      console.log(user);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Fail to create the user");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div id="createUserView">
      <Form onSubmitHandler={submitUser}>
        <input name="firstname" onChange={handleChange} value={userData.firstname} placeholder="Type here your first name" required/>
        <input name="lastname" onChange={handleChange} value={userData.lastname} placeholder="Type here your last name" required/>
        <input name="email" onChange={handleChange} value={userData.email} placeholder="Type here your email" required/>
        <input name="password" onChange={handleChange} value={userData.password} placeholder="Type here your password" required/>
        <select name="role" onChange={handleChange} value={userData.role || "default"}>
            <option value="default">Default</option>
            <option value="admin">Admin</option>
        </select>

        <button type="submit" disabled={loading}>{loading ? "loading" : "Submit"}</button>
      </Form>
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
};

export default CreateUserView;
