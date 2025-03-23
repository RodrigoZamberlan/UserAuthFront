const API_URL = "http://localhost:5297/api/auth";

interface ILoginData {
    email: string,
    password: string
}

interface ILoginResponse {
    token: string
}

export const authService = {
    login: async (loginData: ILoginData): Promise<ILoginResponse> => {
        const response = await fetch(`${API_URL}/login`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(loginData)
        });

        if (!response.ok) {
            const errorText = await response.text(); 
            throw new Error(errorText || "Invalid email and password");
        }

        return response.json();
    }
}