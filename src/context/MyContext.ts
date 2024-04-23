import React from "react";
import { IPost } from "../types/types";

interface IData{
    posts: IPost[];
    categories: string[];
    deletePostById: Function;
    createNewPost: Function;
}

export const MyContext = React.createContext<IData>({} as IData)