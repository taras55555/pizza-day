import { createContext, useMemo, useState } from 'react'

export const UserNameContext = createContext(null);

const UserNameContextProvider = ({ children }) => {
    const [userName, setUserName] = useState(null);

    const value = useMemo(() => ({ userName, setUserName }), [userName]);

    return (
        <UserNameContext.Provider value={value}>
            {children}
        </UserNameContext.Provider>
    )
}

export default UserNameContextProvider;