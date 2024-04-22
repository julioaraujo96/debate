'use client'

import { useFormState } from "react-dom";
import DeleteButton from "../common/delete-button";
import * as actions from "@/actions";

interface DeletePostFormProps{
    postId: string;
}

export default function DeletePostForm({ postId } : DeletePostFormProps) {

    const [formState, action] = useFormState(actions.deletePost.bind(null, postId), { errors: {}})

    return <form className="flex justify-end w-full my-2" action={action}>
    <DeleteButton>
      Delete Post
    </DeleteButton>
  </form>
}