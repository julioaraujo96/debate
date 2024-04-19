import { db } from '@/db';

export default function findUserByUsername(username: string) {
  return db.user.findFirst({
    where: {
      name: username,
    },
  });
}
