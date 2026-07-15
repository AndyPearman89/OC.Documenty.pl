#!/bin/bash

# Self-hosted deployment setup for OC.Documenty.pl
# Run this on a fresh Linux server (Ubuntu 22.04+)

set -e

echo "🚀 Setting up OC.Documenty.pl self-hosted deployment..."

# Update system
sudo apt-get update
sudo apt-get upgrade -y

# Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 globally
sudo npm install -g pm2

# Create app directory
sudo mkdir -p /var/www/oc-documenty-pl
sudo chown $USER:$USER /var/www/oc-documenty-pl

# Clone repository
cd /var/www/oc-documenty-pl
git clone https://github.com/your-username/oc-documenty-pl.git .

# Install dependencies
npm ci --omit=dev

# Build application
npm run build

# Create PM2 ecosystem config
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [
    {
      name: 'oc-documenty-pl',
      script: 'npm',
      args: 'start',
      instances: 'max',
      exec_mode: 'cluster',
      error_file: './logs/error.log',
      out_file: './logs/out.log',
      merge_logs: true,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    }
  ]
};
EOF

# Create logs directory
mkdir -p logs

# Start with PM2
pm2 start ecosystem.config.js
pm2 save
pm2 startup

# Install Nginx
sudo apt-get install -y nginx

# Create Nginx config
sudo tee /etc/nginx/sites-available/oc-documenty-pl > /dev/null << 'EOF'
upstream oc_documenty {
  server 127.0.0.1:3000;
  keepalive 64;
}

server {
  listen 80;
  listen [::]:80;
  server_name oc.documenty.pl;

  client_max_body_size 10M;

  location / {
    proxy_pass http://oc_documenty;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
    proxy_connect_timeout 60s;
    proxy_send_timeout 60s;
    proxy_read_timeout 60s;
  }
}
EOF

# Enable Nginx site
sudo ln -sf /etc/nginx/sites-available/oc-documenty-pl /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Test Nginx config
sudo nginx -t

# Start Nginx
sudo systemctl restart nginx
sudo systemctl enable nginx

# Install SSL certificate (Let's Encrypt)
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d oc.documenty.pl --non-interactive --agree-tos --email mrandypearman@icloud.com

# Setup firewall
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable

# Setup log rotation
sudo tee /etc/logrotate.d/oc-documenty-pl > /dev/null << 'EOF'
/var/www/oc-documenty-pl/logs/*.log {
  daily
  rotate 14
  compress
  delaycompress
  notifempty
  create 0640 nobody adm
  sharedscripts
}
EOF

# Setup monitoring
sudo apt-get install -y htop

echo "✅ Setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Update GitHub secrets in your repository:"
echo "   - DEPLOY_HOST: your.server.com"
echo "   - DEPLOY_USER: deploy user"
echo "   - DEPLOY_KEY: SSH private key"
echo "   - DEPLOY_PORT: 22"
echo ""
echo "2. Push to main branch to trigger deployment"
echo ""
echo "3. Monitor logs:"
echo "   pm2 logs"
echo ""
echo "4. SSL certificate will auto-renew via certbot"
