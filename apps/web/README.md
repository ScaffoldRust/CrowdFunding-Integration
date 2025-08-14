# CrowdFunding Web App

This is the frontend application for the CrowdFunding-Integration project, built with [Next.js](https://nextjs.org) and designed for decentralized crowdfunding with Stellar blockchain integration.

## 🚀 Quick Start

### Development

```bash
# From the root directory
bun run dev:web

# Or from the web app directory
cd apps/web
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### Building for Production

```bash
# From the root directory
bun run build:web

# Or from the web app directory
cd apps/web
bun run build
```

## 🛠️ Tech Stack

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Turbopack** - Lightning-fast development builds

## 🎯 Features

This web application is designed to support:

- **Campaign Creation**: Create and manage crowdfunding campaigns
- **Stellar Integration**: Connect with Stellar blockchain for payments
- **Smart Contract Interaction**: Interface with Stellar smart contracts
- **User Dashboard**: Manage campaigns and contributions
- **Real-time Updates**: Live campaign progress tracking

## 📝 Development

### Code Quality

This project uses:
- **ESLint** - JavaScript/TypeScript linting
- **Biome** - Fast formatter and linter
- **TypeScript** - Type checking

### Available Scripts

| Command | Description |
|---------|-------------|
| `bun dev` | Start development server with Turbopack |
| `bun build` | Build for production |
| `bun start` | Start production server |
| `bun lint` | Run ESLint |

### Manual Deployment

```bash
bun run build
bun run start
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Stellar Documentation](https://developers.stellar.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🔗 Related

- [Main Project README](../README.md) - Overview of the entire crowdfunding platform
