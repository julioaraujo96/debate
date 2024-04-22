'use client';

import { useFormState } from "react-dom";
import DeleteButton from "../common/delete-form-button";
import * as actions from "@/actions";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "@nextui-org/react";
import { useState } from "react";

interface DeletePostFormProps {
  postId: string;
  previousUrl: string;
}

export default function DeletePostForm({ postId, previousUrl }: DeletePostFormProps) {

    const [isOpen, setOpen] = useState(false);

    const [formState, action] = useFormState(actions.deletePost.bind(null, postId, previousUrl), { errors: {} })

    return <div >
        <Button onClick={() => setOpen(!isOpen)}>
            Delete
        </Button>
        <Modal isOpen={isOpen}>
            <ModalHeader>

            </ModalHeader>
            <ModalBody>
                <p>Are you sure you want to delete this post?</p>
            </ModalBody>
            <ModalFooter>
                <form action={action}>
                    <DeleteButton>
                        Delete Post
                    </DeleteButton>
                </form>
            </ModalFooter>
        </Modal>
    </div>
}