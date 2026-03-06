# Sophie UI

A modern, futuristic AI knowledge management interface built with Next.js 14.

## Features

- **AI Chat** - Intelligent conversations with your knowledge base
- **Knowledge Graph** - Interactive visualization of connections between ideas
- **Connectors** - Integrate with Notion, Obsidian, Google Docs, Drive, WhatsApp, and more
- **Authentication** - Secure login/signup with NextAuth.js

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui
- **State Management**: Zustand + TanStack Query
- **Forms**: React Hook Form + Zod
- **Auth**: NextAuth.js
- **Graph Visualization**: react-force-graph-2d
- **Icons**: Lucide React

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── (auth)/          # Auth pages (login, signup)
│   ├── (dashboard)/     # Dashboard pages (chat, graph, connectors)
│   └── api/             # API routes
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── chat/            # Chat components
│   ├── graph/           # Knowledge graph components
│   ├── connectors/      # Connector components
│   └── layout/          # Navbar, Sidebar
├── lib/                 # Utilities, API client, auth config
├── hooks/               # Custom React hooks
├── stores/              # Zustand stores
└── types/               # TypeScript definitions
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_API_URL` | Python backend API URL |
| `NEXTAUTH_SECRET` | NextAuth.js secret key |
| `NEXTAUTH_URL` | Application URL |

## License

MIT
