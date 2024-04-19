import PostList from '@/components/posts/post-list';
import { fetchPostsByUsername } from '@/db/queries/posts';
import findUserByUsername from '@/db/queries/user';
import { notFound } from 'next/navigation';

interface UserShowPageParams {
  params: {
    username: string;
  };
  searchParams: {
    modal: string;
  };
}

export default async function UserShowPage({ params }: UserShowPageParams) {
  const { username } = params;

  const user = await findUserByUsername(username);
  if (!user) {
    notFound();
  }
  return (
    <div>
      <h1 className='text-xl m-2'>{`${username}'s posts`}</h1>
      <PostList
        fetchData={() => fetchPostsByUsername(user.name!)}
        isProfilePage={true}
      />
    </div>
  );
}
