import React, { useContext } from "react";

import { useForm } from 'react-hook-form'
import { Button, Form, FormLabel } from 'react-bootstrap'
import { IPost } from "../../types/types";
import { MyContext } from "../../context/MyContext";

export const AddPost: React.FC = React.memo(({ }): JSX.Element => {
    const { createNewPost, posts, categories } = useContext(MyContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm<IPost>()
    const save = (data: IPost): void => {
        createNewPost({ ...data, id: Date.now() })
        reset()
    }

    return (
        <div className="border border-3">
            <h2>Add Post</h2>
            <Form onSubmit={handleSubmit(save)}>
                <br />
                <FormLabel>Title</FormLabel>
                <Form.Control type="text" placeholder="title" {...register('title', { required: "Invalid titile" })}></Form.Control>
                {errors.title && errors.title.message}
                <br />
                <FormLabel>Body</FormLabel>
                <Form.Control type="text" placeholder="body" {...register('body', { required: "Invalid body" })}></Form.Control>
                {errors.body && errors.body.message}
                <br />
                <Form.Select multiple {...register('categories', { required: "Invalid categories " })}>
                    {
                        categories.map((elm, id) => {
                            return (
                                <option key={id} value={elm}>
                                    {elm}
                                </option>
                            )
                        })
                    }
                </Form.Select>
                {errors.categories && errors.categories.message}
                <br />
                <Button type="submit">Save</Button>
            </Form>
        </div>
    )
})