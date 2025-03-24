import { useQuery } from "@tanstack/react-query";
import { usersService } from "../services/usersService";

export const useUsersQuery = () => {
    return useQuery({
        queryKey: ["users"],
        queryFn: usersService.getAll,
        staleTime: (1000 * 60) * 5, //Cache the user data for 5 minutes
        retry: 1 //Retry once on error
    });
}