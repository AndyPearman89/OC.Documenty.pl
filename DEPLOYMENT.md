# Self-Hosted Deployment Guide

OC.Documenty.pl is production-ready for self-hosted deployment on Linux servers.

## Quick Start (Automated)

### 1. Prepare Server
- Ubuntu 22.04+ or Debian 12+
- 2+ CPU cores, 2GB+ RAM
- 20GB+ disk space
- SSH access

### 2. Run Setup Script
```bash
ssh user@your-server.com
curl -fsSL https://raw.githubusercontent.com/your-username/oc-documenty-pl/main/scripts/setup-server.sh | bash
```

This automatically:
- ✅ Installs Node.js 20
- ✅ Sets up PM2 process manager
- ✅ Configures Nginx reverse proxy
- ✅ Obtains SSL certificate (Let's Encrypt)
- ✅ Enables auto-restart & monitoring

### 3. Configure GitHub Deployment
Add secrets to GitHub Actions:
```
DEPLOY_HOST=your.server.com
DEPLOY_USER=deploy
DEPLOY_KEY=<your-ssh-private-key>
DEPLOY_PORT=22
```

### 4. Deploy
Push to `main` branch:
```bash
git push origin main
```

GitHub Actions will automatically build and deploy.

---

## Manual Deployment

### 1. Server Setup
```bash
# SSH into server
ssh user@your-server.com

# Clone repository
git clone https://github.com/your-username/oc-documenty-pl.git
cd oc-documenty-pl

# Install dependencies
npm ci --omit=dev

# Build
npm run build
```

### 2. Process Management (PM2)
```bash
# Install PM2
npm install -g pm2

# Start application
pm2 start "npm start" --name oc-documenty-pl

# Save configuration
pm2 save
pm2 startup
```

### 3. Reverse Proxy (Nginx)
```bash
# Install Nginx
sudo apt-get install nginx

# Create config
sudo nano /etc/nginx/sites-available/oc-documenty-pl
```

Example config:
```nginx
upstream oc_documenty {
  server 127.0.0.1:3000;
}

server {
  listen 80;
  server_name oc.documenty.pl;

  location / {
    proxy_pass http://oc_documenty;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

Enable and restart:
```bash
sudo ln -s /etc/nginx/sites-available/oc-documenty-pl /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 4. SSL Certificate (Let's Encrypt)
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d oc.documenty.pl
```

---

## Docker Deployment

### Build Image
```bash
docker build -t oc-documenty-pl .
```

### Run Container
```bash
docker run -d \
  --name oc-documenty-pl \
  -p 3000:3000 \
  -e NODE_ENV=production \
  oc-documenty-pl
```

### With Docker Compose
```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      NODE_ENV: production
    restart: always

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./certs:/etc/nginx/certs
    depends_on:
      - app
```

---

## Monitoring

### View Logs
```bash
# PM2 logs
pm2 logs oc-documenty-pl

# Nginx logs
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log
```

### Health Check
```bash
curl https://oc.documenty.pl/
```

### Performance Monitoring
```bash
# CPU, Memory usage
pm2 monit

# Server resources
htop
```

---

## Troubleshooting

### Application won't start
```bash
pm2 logs oc-documenty-pl
npm run build  # Verify build
npm start      # Test locally
```

### Nginx connection refused
```bash
curl localhost:3000     # Check if app is running
sudo nginx -t          # Verify Nginx config
ps aux | grep node     # Check Node process
```

### SSL certificate issues
```bash
sudo certbot renew --dry-run
sudo certbot renew
```

### Out of memory
```bash
pm2 stop oc-documenty-pl
pm2 delete oc-documenty-pl
npm ci --omit=dev
npm run build
pm2 start "npm start" --name oc-documenty-pl -i max
```

---

## Performance Tuning

### Increase Node instances
```bash
pm2 start "npm start" --name oc-documenty-pl -i max
```

### Nginx caching
```nginx
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=app_cache:10m;

location / {
  proxy_cache app_cache;
  proxy_cache_valid 200 10m;
  proxy_pass http://oc_documenty;
}
```

### Gzip compression
```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript;
```

---

## Backup & Recovery

### Database-less Backup
Since OC.Documenty.pl is client-side only, backup the codebase:
```bash
cd /var/www/oc-documenty-pl
git bundle create ../oc-documenty-pl.backup.bundle --all
```

### Recovery
```bash
git clone oc-documenty-pl.backup.bundle
npm ci --omit=dev
npm run build
pm2 start "npm start" --name oc-documenty-pl
```

---

## Updates

### Automatic (GitHub Actions)
Just push to main branch - CI/CD handles everything.

### Manual
```bash
cd /var/www/oc-documenty-pl
git pull origin main
npm ci --omit=dev
npm run build
pm2 restart oc-documenty-pl
```

---

## Support

For issues:
1. Check logs: `pm2 logs`
2. Verify build: `npm run build`
3. Test locally: `npm start`
4. Check GitHub Actions workflow
