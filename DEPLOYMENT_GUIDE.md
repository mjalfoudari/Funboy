# Vercel Deployment Guide for FunboyKW

This guide will help you deploy your FunboyKW application to Vercel using the web dashboard, which offers more flexibility with environment variables and deployment settings.

## Prerequisites

- A GitHub, GitLab, or Bitbucket account with your code repository
- A Vercel account (you can sign up at https://vercel.com)

## Step 1: Push Your Code to GitHub

Ensure your code is pushed to GitHub (or another Git provider) and is up to date:

```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

## Step 2: Deploy Using Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on "Add New..." > "Project"
3. Import your Git repository from the list
4. Select the FunboyKW repository

## Step 3: Configure Environment Variables

Before deploying, add the necessary environment variables:

1. Scroll down to the "Environment Variables" section
2. Add the following variables:
   - `DATABASE_URL`: `file:./prisma/dev.db` (for local testing only - see step 6 for production)
   - `NEXTAUTH_SECRET`: Generate a secure random string (e.g., using `openssl rand -base64 32`)
   - `NEXTAUTH_URL`: This will be your deployment URL (e.g., `https://funboykw.vercel.app`)

## Step 4: Configure Build Settings

1. Expand the "Build and Output Settings" section
2. Set the build command to: `prisma generate && next build`
3. Leave the output directory as default (`.next`)

## Step 5: Deploy

1. Click the "Deploy" button
2. Wait for the build and deployment to complete
3. Vercel will provide you with a deployment URL when finished

## Step 6: Using a Production Database (Recommended)

For production, SQLite isn't recommended as Vercel has a read-only filesystem. Consider:

1. Setting up a PostgreSQL database with [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)
2. Or using another database provider like [Supabase](https://supabase.com) or [PlanetScale](https://planetscale.com)
3. Update your schema.prisma file to use PostgreSQL instead of SQLite
4. Add the production database connection string to your environment variables

## Step 7: Verify Deployment

1. Visit your deployment URL to ensure everything is working correctly
2. Check the logs in the Vercel dashboard if you encounter any issues

## Step 8: Set Up Custom Domain (Optional)

1. In the Vercel dashboard, go to your project settings
2. Click on "Domains"
3. Add your custom domain and follow the instructions to configure DNS settings

## Troubleshooting

- **Build Failures**: Check build logs in the Vercel dashboard for specific errors
- **Database Issues**: Ensure your database is accessible from Vercel's servers
- **Image Loading Issues**: Verify that your Next.js config has the correct image domains configured

## Helpful Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Prisma with Vercel Guide](https://www.prisma.io/docs/guides/deployment/deployment-guides/deploying-to-vercel) 