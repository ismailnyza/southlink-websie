# cPanel Setup Guide for Southlink Travels

This guide will walk you through setting up automatic deployment from GitHub to your cPanel hosting.

## Prerequisites

- Access to your cPanel account
- Your domain is already pointing to this cPanel hosting
- GitHub repository access (ismailnyza/southlink-websie)

---

## Step 1: Get FTP Credentials from cPanel

### 1.1 Log into cPanel
- Go to your cPanel login URL (usually `https://yourdomain.com/cpanel` or provided by your host)
- Enter your username and password

### 1.2 Find FTP Accounts Section
- In cPanel, search for **"FTP Accounts"** in the search bar at the top
- Click on **"FTP Accounts"**

### 1.3 Create or Use Existing FTP Account
**Option A: Use Main FTP Account**
- Scroll down to **"Special FTP Accounts"** section
- You'll see your main FTP account listed
- Note down:
  - **Server**: Usually `ftp.yourdomain.com` or your server IP
  - **Username**: Your cPanel username (usually the same as your main account)
  - **Password**: Your cPanel password (or FTP password if different)

**Option B: Create Dedicated FTP Account (Recommended)**
- Scroll to **"Add FTP Account"** section
- **Login**: Enter a name like `github-deploy` (this will create `github-deploy@yourdomain.com`)
- **Password**: Generate a strong password (click "Password Generator")
- **Directory**: Leave as `/` (root access) or set to `/public_html` for security
- Click **"Create FTP Account"**
- Note down the credentials shown

### 1.4 Find Your FTP Server Address
- In the FTP Accounts section, look for **"FTP Server"** or **"Hostname"**
- Common formats:
  - `ftp.yourdomain.com`
  - `yourdomain.com`
  - Your server IP address (e.g., `123.456.789.0`)
- **Note this down** - this is your `FTP_SERVER`

---

## Step 2: Determine Your Deployment Directory

### 2.1 Check Your Domain's Document Root
- In cPanel, go to **"File Manager"**
- Navigate to your domain's root directory:
  - Usually `public_html/` for main domain
  - Or `public_html/subdomain/` for subdomains
- **Note the full path** - this is your `FTP_REMOTE_DIR`

**Common paths:**
- Main domain: `public_html`
- Subdomain: `public_html/subdomain`
- Addon domain: `public_html/addondomain.com`

### 2.2 Verify Directory Structure
- Make sure the directory exists and is writable
- You can test by uploading a test file via File Manager

---

## Step 3: Set Up GitHub Secrets

### 3.1 Go to Your GitHub Repository
- Navigate to: `https://github.com/ismailnyza/southlink-websie`
- Make sure you're logged in and have admin access

### 3.2 Access Repository Settings
- Click on **"Settings"** tab (top menu)
- In the left sidebar, click **"Secrets and variables"** → **"Actions"**

### 3.3 Add Required Secrets

Click **"New repository secret"** for each of the following:

#### Secret 1: FTP_SERVER
- **Name**: `FTP_SERVER`
- **Value**: Your FTP server address from Step 1.4
  - Example: `ftp.yourdomain.com` or `123.456.789.0`
- Click **"Add secret"**

#### Secret 2: FTP_USERNAME
- **Name**: `FTP_USERNAME`
- **Value**: Your FTP username from Step 1.3
  - Example: `github-deploy@yourdomain.com` or your cPanel username
- Click **"Add secret"**

#### Secret 3: FTP_PASSWORD
- **Name**: `FTP_PASSWORD`
- **Value**: Your FTP password from Step 1.3
  - **Important**: Copy the exact password (no spaces)
- Click **"Add secret"**

#### Secret 4: FTP_REMOTE_DIR
- **Name**: `FTP_REMOTE_DIR`
- **Value**: Your deployment directory from Step 2.1
  - Example: `public_html` or `public_html/subdomain`
- Click **"Add secret"**

#### Secret 5: DISCORD_WEBHOOK (Optional)
- **Name**: `DISCORD_WEBHOOK`
- **Value**: Your Discord webhook URL (if you want build failure notifications)
  - To create: Discord Server → Server Settings → Integrations → Webhooks → New Webhook
- Click **"Add secret"**

---

## Step 4: Test the Deployment

### 4.1 Trigger Manual Deployment
- Go to your GitHub repository
- Click on **"Actions"** tab
- Click **"Deploy to cPanel"** workflow (left sidebar)
- Click **"Run workflow"** button (top right)
- Select branch: `main`
- Click **"Run workflow"**

### 4.2 Monitor the Build
- Click on the running workflow to see live logs
- Wait for it to complete (usually 2-5 minutes)
- Check for any errors

### 4.3 Verify Deployment
- Visit your website: `https://yourdomain.com`
- Check that the site loads correctly
- Test a few pages to ensure everything works

---

## Step 5: Verify Automatic Deployment

### 5.1 Make a Test Change
- Edit any file in your repository (or upload an image via admin panel)
- Commit and push to `main` branch

### 5.2 Check GitHub Actions
- Go to **"Actions"** tab
- You should see a new workflow run automatically triggered
- Wait for it to complete

### 5.3 Verify on Your Site
- Refresh your website
- Your changes should be live!

---

## Troubleshooting

### Issue: "FTP connection failed"
**Solutions:**
- Verify FTP server address is correct
- Check if your hosting provider requires passive FTP mode
- Ensure FTP port 21 is not blocked
- Try using your server IP instead of domain name

### Issue: "Permission denied" or "Directory not found"
**Solutions:**
- Verify `FTP_REMOTE_DIR` path is correct
- Ensure the FTP account has write permissions
- Check if directory exists in cPanel File Manager
- Try using absolute path: `/home/username/public_html`

### Issue: "Build succeeds but site doesn't update"
**Solutions:**
- Clear browser cache (Ctrl+Shift+R)
- Check if files were uploaded to correct directory
- Verify domain is pointing to correct directory
- Check cPanel error logs

### Issue: "Authentication failed"
**Solutions:**
- Double-check FTP username and password
- Ensure no extra spaces in secrets
- Try regenerating FTP password in cPanel
- Verify FTP account is active

---

## Security Best Practices

1. **Use Dedicated FTP Account**: Create a separate FTP account just for deployments (not your main cPanel account)

2. **Limit FTP Access**: If possible, restrict FTP account to only `public_html` directory

3. **Strong Password**: Use a randomly generated strong password

4. **Regular Updates**: Keep your dependencies updated (`npm audit`)

5. **Monitor Deployments**: Check GitHub Actions logs regularly

---

## Next Steps

Once deployment is working:

1. **Test Admin Panel**: Visit `https://yourdomain.com/admin` and verify Decap CMS works
2. **Upload Test Image**: Try uploading an image via admin panel to test full workflow
3. **Monitor First Deployment**: Watch the first automatic deployment after content change
4. **Set Up Domain**: Ensure your domain DNS is properly configured

---

## Quick Reference

**Required GitHub Secrets:**
- `FTP_SERVER`: Your FTP server address
- `FTP_USERNAME`: FTP username
- `FTP_PASSWORD`: FTP password  
- `FTP_REMOTE_DIR`: Deployment directory (usually `public_html`)
- `DISCORD_WEBHOOK`: (Optional) Discord webhook URL

**Common cPanel Paths:**
- Main domain: `public_html`
- Subdomain: `public_html/subdomain`
- Addon domain: `public_html/addondomain.com`

**Workflow File:**
- Located at: `.github/workflows/deploy.yml`
- Triggers: Push to `main` branch or manual trigger

---

## Support

If you encounter issues:
1. Check GitHub Actions logs for error messages
2. Verify all secrets are set correctly
3. Test FTP connection manually using FileZilla or similar
4. Contact your hosting provider if FTP access issues persist
