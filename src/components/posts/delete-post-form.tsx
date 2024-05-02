'use client';

import { useFormState } from 'react-dom';
import DeleteFormButton from '../common/delete-form-button';
import * as actions from '@/actions';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import { useState } from 'react';
import DeleteIcon from '../common/delete-icon';

interface DeletePostFormProps {
  postId: string;
  previousUrl: string;
}

export default function DeletePostForm({
  postId,
  previousUrl,
}: DeletePostFormProps) {
  const [isOpen, setOpen] = useState(false);

  const [formState, action] = useFormState(
    actions.deletePost.bind(null, postId, previousUrl),
    { errors: {} }
  );

  return (
    <div className='flex w-full justify-end my-2'>
      <Button
        onClick={() => setOpen(!isOpen)}
        type='submit'
        color='danger'
        variant='solid'
        size='sm'
        startContent={<DeleteIcon />}
      >
        Delete
      </Button>
      <Modal isOpen={isOpen} onClose={() => setOpen(!isOpen)}>
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalBody>
            <p>Are you sure you want to delete this post?</p>
          </ModalBody>
          <ModalFooter>
            <form action={action}>
              <DeleteFormButton>Delete post</DeleteFormButton>
            </form>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
