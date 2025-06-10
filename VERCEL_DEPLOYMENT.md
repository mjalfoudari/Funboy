# FunboyKW Vercel Deployment Guide

## Prerequisites

1. A Vercel account
2. Your repository pushed to GitHub/GitLab/Bitbucket

## Deployment Steps

### 1. Setup Vercel Postgres

The application has been configured to use Vercel Postgres. You need to:

1. Go to the Vercel dashboard
2. Create a new project or select your existing FunboyKW project
3. Navigate to Storage > Create > Postgres Database
4. Follow the prompts to create a new Postgres database
5. Vercel will automatically add the required environment variables to your project:
   - `POSTGRES_PRISMA_URL`
   - `POSTGRES_URL_NON_POOLING`
   - `POSTGRES_USER`
   - `POSTGRES_HOST`
   - `POSTGRES_PASSWORD`
   - `POSTGRES_DATABASE`

### 2. Migrate Your Data

Since the application was previously using SQLite, you'll need to migrate your data:

1. Export data from SQLite (locally)
2. Import data into Postgres (on Vercel)

For data migration, you can use Prisma migrations or a custom script.

### 3. Deploy Your Application

You can deploy the application using:

1. **Vercel Dashboard**: Connect your repository and deploy
2. **Vercel CLI**: Use `vercel --prod` from your terminal

### 4. Environment Variables

Ensure these environment variables are set in your Vercel project settings:

- `POSTGRES_PRISMA_URL` (added automatically when creating Vercel Postgres)
- `POSTGRES_URL_NON_POOLING` (added automatically when creating Vercel Postgres)
- `NEXTAUTH_SECRET` (add a secure random string)
- `NEXTAUTH_URL` (set to your deployment URL)

### 5. Post-Deployment

After successful deployment:

1. Test the site functionality
2. Check that product images load correctly
3. Verify that database queries work properly

## Troubleshooting

If you encounter issues:

1. Check Vercel logs in the dashboard or using `vercel logs [deployment-url]`
2. Ensure all environment variables are correctly set
3. Verify that Postgres connection is working
4. Check that Next.js is configured correctly for Vercel deployment

For local development, continue using SQLite by setting `DATABASE_URL="file:./prisma/dev.db"` in your local `.env` file. 