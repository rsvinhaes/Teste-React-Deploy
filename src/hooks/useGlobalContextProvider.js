import { useState } from 'react';
import { useLocalStorage } from 'react-use';

function useGlobalContextProvider() {
    const [detailProduct, setDetailProduct] = useState('');
    const [token, setToken, removeToken] = useLocalStorage('token', '');
    const [user, setUser, removeUser] = useLocalStorage('user', '');



    return {
        detailProduct,
        setDetailProduct,
        user,
        setUser,
        removeUser,
        token,
        setToken,
        removeToken
    }
}

export default useGlobalContextProvider;