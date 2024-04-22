import PostShowLoading from '@/app/topics/[slug]/posts/post-show-loading';
import CommentCreateForm from '@/components/comments/comment-create-form';
import CommentList from '@/components/comments/comment-list';
import PostShow from '@/components/posts/post-show';
import { fetchCommentsByPostId } from '@/db/queries/comments';
import paths from '@/paths';
import Link from 'next/link';
import { Suspense } from 'react';

interface UserPostShowPageProps {
  params: {
    username: string;
    postId: string;
  };
}

export default function UserPostShowPage({ params }: UserPostShowPageProps) {
  const { username, postId } = params;

  const pageUrl = paths.userProfileShow(username);

  return (
    <div className='space-y-3'>
      <Link className='underline decoration-solid' href={pageUrl}>
        {'< '}Back to {username} profile
      </Link>
      <Suspense fallback={<PostShowLoading />}>
        <PostShow postId={postId} previousUrl={pageUrl} />
      </Suspense>
      <CommentCreateForm postId={postId} startOpen />
      <CommentList fetchData={() => fetchCommentsByPostId(postId)} />
    </div>
  );
  return <div>User post show</div>;
}
