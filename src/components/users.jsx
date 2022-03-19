import {User} from './user';

export const Users = ({users}) => {
    return(
        <div>

        {users.map((e)=> (
            <User 
            id = {e.id} 
            name={e.name}
            username = {e.username}
            email = {e.email}
            />
        ))}
            </div>
    );
}