# Home Server Website

This is a personal website hosted on a **TrueNAS home server**, built with **React**.

## Tech Stack

- **Frontend:** React, TailwindCSS
- **Server:** TrueNAS Home Server - DXP2800
- **Deployment:** Self-hosted

## Purpose

- Personal/home server dashboard and website
- Learning and experimentation with modern web technologies
- Self-hosted infrastructure using TrueNAS

## Deployment Workflow

### Step 1: Code formatting (Prettier)

```bash
npm run format
```

### Step 2: Save changes

```bash
git add .
git commit -m "Docs: README"
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
