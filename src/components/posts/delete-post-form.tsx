'use client';

import { useFormState } from 'react-dom';
import DeleteButton from '../common/delete-button';
import * as actions from '@/actions';
import { useRouter } from 'next/router';

interface DeletePostFormProps {
  postId: string;
  previousUrl: string;
}

export default function DeletePostForm({
  postId,
  previousUrl,
}: DeletePostFormProps) {
  const [formState, action] = useFormState(
    actions.deletePost.bind(null, postId, previousUrl),
    { errors: {} }
  );

  return (
    <form className='flex justify-end w-full my-2' action={action}>
      <DeleteButton>Delete Post</DeleteButton>
    </form>
  );
}
