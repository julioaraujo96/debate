import PostCreateForm from '@/components/posts/post-create-form';
import PostList from '@/components/posts/post-list';
import { db } from '@/db';
import { fetchPostsByTopicSlug } from '@/db/queries/posts';
import { Divider } from '@nextui-org/react';
import { Topic } from '@prisma/client';
import { notFound, redirect } from 'next/navigation';

interface TopicShowPageProps {
  params: {
    slug: string;
  };
}

export default async function TopicShowPage({ params }: TopicShowPageProps) {
  const { slug } = params;

  if (!slug) {
    redirect('/');
  }

  const topic: Topic | null = await db.topic.findFirst({
    where: { slug: slug },
  });

  if (!topic) {
    notFound();
  }

  return (
    <div className='grid grid-cols-4 gap-4 p-4'>
      <div className='col-span-3'>
        <h1 className='text-2xl font-bold mb-8'>#{topic.slug}</h1>
        <PostList
          fetchData={() => fetchPostsByTopicSlug(topic.slug)}
          isProfilePage={false}
        />
      </div>
      <div className='border shadow py-3 px-4'>
        <PostCreateForm slug={topic.slug} />
        <Divider className='my-2' />
        <h3 className='text-lg py-2'>Description</h3>
        <div className='flex flex-row flex-wrap gap-2 text-sm text-gray-400'>
          {topic?.description}
        </div>
      </div>
    </div>
  );
}
