# Hosting IHSAN with AT Protocol Personal Data Server (PDS)

This document provides information about hosting the IHSAN app using a Personal Data Server (PDS) with the AT Protocol.

## What is a Personal Data Server (PDS)?

A Personal Data Server (PDS) is a component of the AT Protocol (Authenticated Transfer Protocol) infrastructure that stores user data and handles the user's identity in the decentralized network. Each user can host their own PDS or use one hosted by a provider.

## AT Protocol Architecture

The AT Protocol consists of several key components:

1. **Personal Data Server (PDS)** - Stores user data and hosts the user's repository
2. **Relay** - Aggregates data from multiple PDSs
3. **App View** - Provides the application-level views and feeds
4. **Identity System** - Manages DIDs (Decentralized Identifiers) and handles

## Setting Up a Personal Data Server

### Option 1: Self-Hosting a PDS

To self-host a PDS for IHSAN, you can use the official PDS implementation:

#### Prerequisites
- A server with Docker installed
- A domain name
- SSL/TLS certificate (can use Let's Encrypt)
- At least 2GB RAM and 20GB storage

#### Installation Steps

1. **Clone the PDS repository:**
```bash
git clone https://github.com/bluesky-social/pds.git
cd pds
```

2. **Configure your PDS:**
Create a `.env` file with your configuration:
```bash
PDS_HOSTNAME=your-domain.com
PDS_ADMIN_PASSWORD=your-secure-password
PDS_JWT_SECRET=generate-a-secure-secret
PDS_DID_PLC_URL=https://plc.directory
PDS_BSKY_APP_VIEW_URL=https://api.bsky.app
PDS_BSKY_APP_VIEW_DID=did:web:api.bsky.app
PDS_CRAWLERS=https://bsky.network
```

3. **Run the PDS:**
```bash
docker compose up -d
```

4. **Configure your domain:**
Set up DNS records pointing to your server and configure SSL/TLS using Caddy or Nginx.

### Option 2: Using a Hosted PDS Provider

If you don't want to self-host, you can use a PDS hosting provider:

- **Bluesky's Official PDS** - `bsky.social` (default)
- **Community Providers** - Check the AT Protocol community for other hosting options

## Configuring IHSAN to Use Your PDS

### Environment Configuration

Update your `.env` file to point to your PDS:

```bash
# Default AT Protocol service endpoint
EXPO_PUBLIC_BSKY_SERVICE=https://your-pds-domain.com

# For local development
LOCAL_DEV_SERVICE=http://localhost:2583
```

### Service Configuration

The IHSAN app uses the AT Protocol client to connect to PDS instances. The default configuration is in `src/lib/constants.ts`:

```typescript
export const BSKY_SERVICE = 'https://bsky.social'  // Change to your PDS
export const DEFAULT_SERVICE = BSKY_SERVICE
```

## Data Storage and Federation

When using a personal PDS:

1. **User Data** - All user posts, likes, follows, etc., are stored on your PDS
2. **Federation** - Your PDS federates with other PDS instances via the relay network
3. **Portability** - Users can migrate their data between PDS instances while keeping their identity

## Security Considerations

When hosting a PDS:

1. **Use HTTPS** - Always use SSL/TLS certificates
2. **Regular Backups** - Back up your data regularly
3. **Security Updates** - Keep your PDS software up to date
4. **Access Control** - Implement proper authentication and authorization
5. **Rate Limiting** - Protect against abuse

## Resources

- [AT Protocol Documentation](https://atproto.com/)
- [AT Protocol GitHub Repository](https://github.com/bluesky-social/atproto)
- [PDS Setup Guide](https://github.com/bluesky-social/pds)
- [AT Protocol Specifications](https://atproto.com/specs/atp)
- [Bluesky Developer Discord](https://discord.gg/bluesky)

## Costs and Requirements

### Self-Hosting Costs (Monthly Estimates)
- **VPS/Cloud Server** - $5-20 (e.g., DigitalOcean, Linode, AWS)
- **Domain Name** - $10-15/year
- **Storage** - Depends on usage, starts free with basic plans
- **SSL Certificate** - Free with Let's Encrypt

### Resource Requirements
- **Minimum**: 1 vCPU, 2GB RAM, 20GB storage
- **Recommended**: 2 vCPU, 4GB RAM, 50GB+ storage
- **Bandwidth**: Depends on number of users and activity

## Community and Support

For help with AT Protocol and PDS hosting:

- Join the [Bluesky Developer Discord](https://discord.gg/bluesky)
- Visit [AT Protocol GitHub Discussions](https://github.com/bluesky-social/atproto/discussions)
- Check the [AT Protocol Community Forum](https://github.com/bluesky-social/atproto/discussions)

## Next Steps

1. Decide whether to self-host or use a hosted PDS provider
2. Set up your PDS following the installation steps
3. Configure IHSAN to connect to your PDS
4. Test the integration with a development build
5. Deploy your customized IHSAN app with your PDS backend

## Troubleshooting

Common issues and solutions:

- **Connection Errors**: Check DNS records and SSL certificate configuration
- **Authentication Issues**: Verify JWT secret and admin credentials
- **Performance Problems**: Consider upgrading server resources
- **Federation Issues**: Check relay configuration and network connectivity

For more specific issues, consult the AT Protocol documentation or community forums.
