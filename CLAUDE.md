# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

The main application is in the `react-email-starter/` directory. All commands should be run from that directory:

```bash
cd react-email-starter
```

### Core Commands
- `npm run dev` or `yarn dev` - Start the development server with live preview at localhost:3000
- `npm run build` or `yarn build` - Build the email templates
- `npm run export` or `yarn export` - Export email templates

### Package Management
- `npm install` or `yarn` - Install dependencies (uses pnpm-lock.yaml, so pnpm is likely preferred)

## Architecture Overview

This is a React Email project for creating and previewing email templates:

### Project Structure
- `react-email-starter/` - Main React Email application
  - `emails/` - Email template components (.tsx files)
    - Individual email templates (notion-magic-link.tsx, plaid-verify-identity.tsx, stripe-welcome.tsx, vercel-invite-user.tsx)
    - `static/` - Static assets (images, logos)
  - `package.json` - Dependencies and scripts
  - `tsconfig.json` - TypeScript configuration

### Key Technologies
- **React Email**: Framework for building email templates with React components
- **TypeScript**: Strict configuration with jsx: "react-jsx"
- **React 19**: Latest React version for component development

### Email Template Structure
Each email template:
- Uses `@react-email/components` for email-safe HTML components
- Follows a consistent pattern with Props interface, baseUrl configuration, and styled components
- Includes preview text and responsive styling
- Uses static assets from the `static/` directory

### Development Workflow
1. Run `npm run dev` to start the preview server
2. Edit templates in the `emails/` directory
3. View changes live at localhost:3000
4. Build with `npm run build` when ready
5. Export with `npm run export` for production use