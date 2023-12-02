import { createContext, useState } from 'react';

export const UserContext = createContext({
    userId: 1,
});

export const UserContextProvider= (props) => {
    const { children } = props;
    const [userId, setUserId] = useState(1);

    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <UserContext.Provider value={{ userId, changeUser: setUserId }}>
            {children}
        </UserContext.Provider>
    );
};
