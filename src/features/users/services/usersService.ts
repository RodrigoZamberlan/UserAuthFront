import { verifyResponse } from "../../../shared/utils/verifyResponse";
import { TUser } from "../types/User";

const API_URL = "http://localhost:5297/api/users";

export const usersService = {
    create: async (user: TUser): Promise<TUser> => {
        const response = await fetch(API_URL, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(user)
        });

        verifyResponse(response, "Fail to create the user");
        return response.json();
    },
    getAll: async (): Promise<TUser[]> => {
        const response = await fetch(API_URL);
        verifyResponse(response, "Fail to get the list of users");
        return response.json();
    }
}