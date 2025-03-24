import { tokenService } from "../../auth/services/tokenService";
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

        if (!response.ok) { 
            throw new Error("Fail to fetch the user's info");
        }

        return response.json();
    },
    getAll: async (): Promise<TUser[]> => {
        const response = await fetch(API_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${tokenService.getToken()}`
            }
        });
        
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Only admin user's have access for this area")
            }
            
            throw new Error("Fail to fetch the user's info");
        }

        return response.json();
    }
}