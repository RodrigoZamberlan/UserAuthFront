import { useRef } from "react";
import { authService } from "../services/authService";

const LoginView: React.FC = () => {
    const emailInput = useRef<HTMLInputElement>(null);
    const passwordInput = useRef<HTMLInputElement>(null);

    const login = (): void => {
        const email = emailInput.current!.value;
        const password = passwordInput.current!.value;

        const response = authService.login({email, password});
        console.log(response);
    }

    return <>
        <div >
            <input name="email" ref={emailInput} placeholder="Type your email"/>
            <input name="password" ref={passwordInput} placeholder="Type your password" type="password"/>
            <button onClick={login} type="submit">Login</button>
        </div>
    </>
}

export default LoginView;