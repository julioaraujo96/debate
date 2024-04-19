import { notFound } from 'next/navigation';
import { db } from '@/db';
import { Button } from '@nextui-org/react';
import DeleteIcon from '../common/delete-icon';

interface PostShowProps {
  postId: string;
}

export default async function PostShow({ postId }: PostShowProps) {
  const post = await db.post.findFirst({
    where: { id: postId },
  });

  if (!post) {
    notFound();
  }

  return (
    <div className='m-4'>
      <h1 className='text-2xl font-bold my-2'>{post.title}</h1>
      <p className='p-4 border rounded'>{post.content}</p>
      <Button
        color='danger'
        variant='bordered'
        size='sm'
        startContent={<DeleteIcon />}
      >
        Delete user
      </Button>
    </div>
  );
}
