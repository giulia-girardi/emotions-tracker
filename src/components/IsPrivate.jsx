import { useContext } from 'react';
import { UserAuthContext } from '../contexts/user.auth.context';
import { Navigate } from 'react-router-dom';

function IsPrivate({children}) {

    const { isLoggedIn, isLoading } = useContext(UserAuthContext);

    if (isLoading) return <p>Loading ...</p>

    if (!isLoggedIn) {
        return <Navigate to="/login" />
    } else {
        return children
    }
}

export default IsPrivate