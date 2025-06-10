# FunboyKW Vercel Deployment Guide

## Overview

This guide explains how to deploy the FunboyKW website to Vercel using the Vercel dashboard, which is more reliable than the CLI approach.

## Deployment Steps

### 1. Push Your Code to GitHub

Ensure your code is pushed to GitHub (or another Git provider supported by Vercel):

```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### 2. Deploy Using Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on "Add New..." > "Project"
3. Import your Git repository from the list
4. Select the FunboyKW repository

### 3. Configure Environment Variables (Optional)

For the in-memory SQLite approach, no environment variables are needed, but you can set:

- `DATABASE_URL`: If you have a specific database URL to use

### 4. Deploy

Click "Deploy" and wait for the build to complete.

## Technical Information

### Database

- The application uses SQLite for local development
- On Vercel, it uses an in-memory SQLite database with auto-seeding
- When deployed, the app will automatically create a minimal dataset if none exists

### Limitations

Since we're using an in-memory database on Vercel:

1. Data will be reset when the Vercel instance restarts
2. Only minimal data will be available (basic categories)
3. This is suitable for demonstration purposes only

For a production application, you would want to use:

- Vercel Postgres
- Vercel KV Store
- Or another external database service

## Troubleshooting

If deployment fails:

1. Check the build logs in the Vercel dashboard
2. Ensure your codebase successfully builds locally with `npm run build`
3. Check that the in-memory database configuration is working correctly 