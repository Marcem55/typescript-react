import React, { useState } from "react";

interface User {
    name: string;
    email: string;
}

interface Props {
    user: User;
    onUpdate: (user: User) => void;
}

function UserProfileEditor(props: Props) {
    const [name, setName] = useState<string>(props.user.name);
    const [email, setEmail] = useState<string>(props.user.email);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onUpdate({ ...props.user, name, email });
    }

    return (

    )