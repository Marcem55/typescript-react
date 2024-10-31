import React, { useState } from "react";
import { UserContext } from "./UserContextProvider";

export interface UserProps {
  name: string;
  age: number;
  isMarried: boolean;
  country: Countries;
}

export enum Countries {
  Brazil = "Brazil",
  Argentina = "Argentina",
  France = "France",
  India = "India",
  UnitedStates = "United States",
}

export const User = (props: UserProps) => {
  const [isShowInfo, setIsShowInfo] = useState<boolean>(false);
  const [userBio, setUserBio] = useState<string | null>(null);

  const { users, addUser, updateUser, deleteUser } = React.useContext(UserContext);

  const toggleInfo = () => {
    setIsShowInfo((prev) => !prev);
  };

  const handleBioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserBio(e.target.value);
  };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Submitted");
//   }

  return (
    <div>
      {isShowInfo && (
        <>
          <p>Name: {props.name}</p>
          <p>Age: {props.age}</p>
          <p>This User {props.isMarried ? "is married" : "is single"}</p>
          <p>{props.name} Bio: {!userBio ? "No Bio Available" : userBio} </p>
          <p>Country of Origin: {props.country}</p>
          <input type="text" onChange={handleBioChange} />
        </>
      )}
      <button onClick={toggleInfo}>Toggle info</button>
    </div>
  );
};
