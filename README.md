This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
If you want to use this project, don't forget to rename .env.example files to .env , run npm install, run the npx prisma generate command.

I've built this project to understand server actions. A small social media, that you can debate about different topics. In order to do this i used:

- Zod to validate the form data. 
- Next Auth for the github provider.
- Next UI.
- Framer Motion just for the small darkmode switch.
- Next Themes to easily switch.
- Prisma ORM.
- Supabase, for the postgres database.
- Vercel because of the easily integrated deployments NextJS.
- Skeleton loading to wait for the post contents.

In addition, also learned how to manage the cache system in Next, deal with client and server components, set up github auth, supabase and vercel. It was a interesting project to add functionality after finishing the udemy course on Next 14.

To improve in the future: 
- Add testing (wasn't the focus of this small project) , same for the responsiveness, it's not suited to mobile devices.
- Maybe add analytics page or extra info other than top posts.
- Add pagination to the posts show page. 
