# Home Server Website

This is a personal website hosted on a **TrueNAS home server**, currently built with **React** and planned to migrate to **Next.js** in the future.

## Tech Stack

- **Frontend:** React
- **Planned Upgrade:** Next.js (for SSR, routing, and performance improvements)
- **Server:** TrueNAS Home Server
- **Deployment:** Self-hosted

## Purpose

- Personal/home server dashboard or website
- Learning and experimentation with modern web technologies
- Self-hosted infrastructure using TrueNAS

## Running Locally

```bash
npm install
npm start
```

## Deployment Workflow

### Step 1: Code formatting (Prettier)

```bash
npm run format
```

### Step 2: Save changes

```bash
git add .
git commit -m "Beschreibe hier kurz, was du geändert hast"
```

### Step 3: Increment version number

```bash
npm version patch -> styling fixes, bugfixes ...
# 1.0.0 -> 1.0.1

npm version minor -> new feature
# 1.0.1 -> 1.1.0
```

### Step 4: Push it!

```bash
git push --follow-tag
```
