'use server';

import { auth } from '@/auth';
import { db } from '@/db';
import { Post } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
interface DeletePostFormState {
  errors: {
    _form?: string[];
  };
}

export async function deletePost(
  postId: string,
  previousUrl: string,
  formState: DeletePostFormState
): Promise<DeletePostFormState> {
  const session = await auth();

  if (!session || !session.user) {
    return {
      errors: {
        _form: ['You must be signed in to delete a post'],
      },
    };
  }

  const post = await db.post.findFirst({
    where: { id: postId },
  });

  if (!post) {
    return {
      errors: {
        _form: ['Post not found'],
      },
    };
  }

  if (post.userId !== session.user.id) {
    return {
      errors: {
        _form: ['Unauthorized'],
      },
    };
  }

  await db.post.delete({
    where: {
      id: post.id,
      userId: session.user.id,
    },
  });

  revalidatePath(previousUrl);
  revalidatePath('/');
  redirect(previousUrl);
}
