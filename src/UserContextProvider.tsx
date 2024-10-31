import React, { createContext, useEffect } from "react";

export  interface User {
    name: string;
    age: number;
    isMarried: boolean;
}

interface UserContextType {
    users: User[] | null;
    addUser: (user: User) => void;
    updateUser: (id: string) => void;
    deleteUser: (id: string) => void;
}

const contextInitialValues = {
    users: null,
    addUser: () => null,
    updateUser: () => null,
    deleteUser: () => null,
}

export const UserContext = createContext<UserContextType>(contextInitialValues);

interface Props {
    children: React.ReactNode;
}

export const UserProvider = (props: Props) => {
    const [users, setUsers] = React.useState<User[] | null>(null);

    useEffect(() => {
        console.log("Fetching users");
        setUsers([
            {name: "Juan", age: 27, isMarried: false},
            {name: "Alfredo", age: 47, isMarried: true},
        ]);
    }, []);

    const addUser = (user: User) => {
        console.log("Adding user", user);
    }

    const updateUser = (id: string) => {
        console.log("Updating user", id);
    }

    const deleteUser = (id: string) => {
        console.log("Deleting user", id);
    }

    return (
        <UserContext.Provider value={{users, addUser, updateUser, deleteUser}}>
            {props.children}
        </UserContext.Provider>
    )
}