const API_URL = "http://localhost:5297/api/auth";

type TLoginData = {
    email: string,
    password: string
}

type TLoginResponse = {
    token: string,
}

export const authService = {
    login: async (loginData: TLoginData): Promise<TLoginResponse> => {
        const response = await fetch(`${API_URL}/login`, {
            method: "Post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(loginData)
        });

        return response.json();
    }
}