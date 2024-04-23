import React, { useContext, useEffect, useState } from "react";
import { Button, Table } from 'react-bootstrap'
import { MyContext } from "../../context/MyContext";
import { IPost } from "../../types/types";

export const ShowPosts: React.FC = React.memo(({ }): JSX.Element => {
    const { deletePostById, categories, posts } = useContext(MyContext)
    const [clone, setClone] = useState<IPost[]>([...posts])
    
    useEffect(() => {
        setClone([...posts])
    }, [posts])


    return (
        <div className="border border-3">
            <h2>Show Posts </h2>
            <select className="form-control" onChange={(e)=>setClone([...posts.filter(elm=>elm.categories.includes(e.target.value))])}>
                {
                    categories.map((elm, id) => {
                        return (
                            <option key={id} value={elm}>
                                {elm}
                            </option>
                        )
                    })
                }
            </select>




            <br />
            <Table>
                <thead>
                    <tr>
                        <th>title</th>
                        <th>body</th>
                        <th>cat</th>
                        <th>&times;</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clone.map((elm) => {
                            return (
                                <tr key={elm.id}>
                                    <td>{elm.title}</td>
                                    <td>{elm.body}</td>
                                    <td>{elm.categories.join(', ')}</td>
                                    <td><Button onClick={() => deletePostById(elm.id)}>&times;</Button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
})