import { useRef, useState } from "react";
import { authService } from "../services/authService";
import { tokenService } from "../services/tokenService";

const LoginView = () => {
    const emailInput = useRef<HTMLInputElement>(null);
    const passwordInput = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const submitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const email = emailInput.current!.value.trim();
        const password = passwordInput.current!.value.trim();

        if (!email || !password) {
            setErrorMessage("Please provide the email and password");
            return;
        }
        

        try {
            setLoading(true);
            const loginReponseData = await authService.login({email, password});
            tokenService.setToken(loginReponseData.token);
            setErrorMessage(null);
        } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : "Fail the connect to the api");
        } finally {
            setLoading(false);
        }
    }
    
    return <form onSubmit={submitLogin}>
        <input name="email" ref={emailInput} placeholder="Type your email here" required />
        <input name="password" ref={passwordInput} type="password" placeholder="Type your password here" required />
        <button disabled={loading} type="submit">{ loading ? "Loading": "Login" }</button>
        {errorMessage && <div>{errorMessage}</div>}
    </form>
}

export default LoginView;