import { Button } from '@nextui-org/react';
import * as actions from '@/actions';
import { auth } from '@/auth';
import Profile from '@/components/profile';

export default async function Home() {
  const session = await auth();
  return (
    <main>
      <form action={actions.signIn}>
        <Button type='submit'>
          Sign in with Github
        </Button>
      </form>
      <form action={actions.signOut}>
        <Button type='submit'>
          Sign out
        </Button>
      </form>

      {
        session?.user ? <div>{JSON.stringify(session.user)}</div> : <div> Signed out</div>
      }
      <Profile />
    </main>
  );
}
