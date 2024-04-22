import { notFound } from 'next/navigation';
import { db } from '@/db';
import DeletePostForm from './delete-post-form';
import { auth } from '@/auth';

interface PostShowProps {
  postId: string;
  previousUrl: string;
}

export default async function PostShow({ postId, previousUrl }: PostShowProps) {
  const post = await db.post.findFirst({
    where: { id: postId },
  });

  if (!post) {
    notFound();
  }

  const session = await auth();

  const isOwner = post.userId === session?.user?.id;

  return (
    <div className='m-4'>
      <h1 className='text-2xl font-bold my-2'>{post.title}</h1>
      <p className='p-4 border rounded'>{post.content}</p>
      {isOwner && <DeletePostForm postId={post.id} previousUrl={previousUrl} />}
    </div>
  );
}
