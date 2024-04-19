import type { PostWithData } from '@/db/queries/posts';
import Link from 'next/link';
import paths from '@/paths';
interface PostListProps {
  fetchData: () => Promise<PostWithData[]>;
  isProfilePage: boolean;
}

export default async function PostList({
  fetchData,
  isProfilePage,
}: PostListProps) {
  const posts = await fetchData();
  const renderedPosts = posts.map((post) => {
    const topicSlug = post.topic.slug;

    if (!topicSlug) {
      throw new Error('Need a slug to link to a post');
    }

    return (
      <div key={post.id} className='border rounded p-2'>
        <Link href={paths.postShow(topicSlug, post.id)}>
          <h3 className='text-lg font-bold'>{post.title}</h3>
        </Link>
        <div className='flex justify-between'>
          <div className='flex flex-row gap-8'>
            {isProfilePage ? (
              <p className='text-xs text-gray-400'>By {post.user.name}</p>
            ) : (
              <Link
                href={paths.userPostShow(post.user.name || '')}
                className='text-xs text-gray-400 hover:text-blue-500'
              >
                By {post.user.name}
              </Link>
            )}

            <p className='text-xs text-gray-400'>
              {post._count.comments} comments
            </p>
          </div>
        </div>
      </div>
    );
  });

  return <div className='space-y-2'>{renderedPosts}</div>;
}
