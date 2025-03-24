import { useUsersQuery } from "../hooks/useUsersQuery";

const UsersManagerView: React.FC = () => {
    const {data: users, isLoading, isError, error} = useUsersQuery();

    return <div>
        {isLoading && <div>Loading...</div>}
        {users && users.length > 0 ? <ul>
            {users.map((user, index) => (
                <li key={index}>
                    <p>{user.firstname}</p>
                    <p>{user.email}</p>
                    <p>{user.password}</p>
                </li>
            ))}
        </ul> : <p>No user's yet</p>}
        {isError && <div>{error.message}</div>}
    </div>
}

export default UsersManagerView;