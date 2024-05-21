import { createContext, useState } from 'react'

export const UserNameContext = createContext(null);

const UserNameContextProvider = ({ children }) => {
    const [userName, setUserName] = useState(null);

    return (
        <UserNameContext.Provider value={{ userName, setUserName }}>
            {children}
        </UserNameContext.Provider>
    )
}

export default UserNameContextProvider;