# Pure Platinum Cleaning - Next.js + Tailwind CSS

Production-ready Next.js website configured for GitHub and Vercel deployment.

## Local development

```bash
npm install
npm run dev
```

## Contact form email configuration

Set these environment variables locally in `.env.local` and in Vercel project settings:

```bash
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
SMTP_FROM=noreply@pureplatinumcleaning.com.au
```

Contact form submissions are sent to `peter@pureplatinumcleaning.com.au`.

## Quality checks

```bash
npm run lint
npm run build
```

## GitHub setup

1. Create a GitHub repo (or use existing): `codeCDM/pureplatinum-web`.
2. Verify remote:

```bash
git remote -v
```

3. Push changes:

```bash
git add .
git commit -m "Configure GitHub Actions and Vercel settings"
git push origin main
```

## Vercel setup

1. In Vercel, click **Add New Project**.
2. Import the GitHub repository.
3. Keep framework as **Next.js**.
4. Build settings are already defined in `vercel.json`:
   - Install command: `npm ci`
   - Build command: `npm run build`
5. Set Node.js version in Vercel Project Settings to `22.x` (recommended).
6. Add any required environment variables in Vercel Project Settings -> Environment Variables.
7. Deploy.

## CI

GitHub Actions workflow is in `.github/workflows/build.yml`.
It runs lint and build on pushes and pull requests to `main` using Node 20 and 22.
