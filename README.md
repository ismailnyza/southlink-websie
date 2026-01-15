# Southlink Travels 2.0

Premium travel agency website built with Gatsby, Tailwind CSS, and Decap CMS.

## Features

- Static site generation with Gatsby
- Tailwind CSS for styling
- Decap CMS for content management
- Smart WhatsApp integration
- Interactive maps (Sri Lanka & World)
- CI/CD pipeline with GitHub Actions

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure Decap CMS:
   - Update `static/admin/config.yml` with your GitHub repository details
   - Register a GitHub OAuth App and add the `app_id` to the config

3. Configure GitHub Secrets:
   - `FTP_SERVER`: Your cPanel FTP server address
   - `FTP_USERNAME`: FTP username
   - `FTP_PASSWORD`: FTP password
   - `FTP_REMOTE_DIR`: Remote directory (usually `public_html`)
   - `DISCORD_WEBHOOK`: Discord webhook URL for build failure notifications

4. Run development server:
```bash
npm run develop
```

5. Build for production:
```bash
npm run build
```

## Project Structure

- `content/`: JSON data files (tours, flights, settings)
- `src/components/`: React components
- `src/pages/`: Page components
- `src/templates/`: Page templates for dynamic routes
- `static/`: Static files including Decap CMS config
- `.github/workflows/`: CI/CD pipeline configuration

## Content Management

Access the CMS at `/admin` after configuring GitHub OAuth.
