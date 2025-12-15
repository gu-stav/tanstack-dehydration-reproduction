# TanStack Query Dehydration with React Router

This repository demonstrates how to use React Router in Framework mode with TanStack Query dehydration and HydrationBoundary.

## Setup

Install dependencies:
```bash
npm install
```

## Development

Start the development server:
```bash
npm run dev
```

Visit http://localhost:5173/ to see the application.

## Build

Build for production:
```bash
npm run build
```

## Key Features

- **React Router Framework Mode**: Using React Router v7 with SSR support
- **TanStack Query**: Integrated with dehydration for server-side data prefetching
- **HydrationBoundary**: Properly hydrates server-prefetched queries on the client
- **TypeScript**: Full TypeScript support

## Project Structure

```
app/
├── root.tsx              # Root layout with QueryClientProvider
├── routes.ts             # Route configuration
└── routes/
    └── home.tsx          # Example route with dehydrated query
```

## How It Works

1. The `loader` function in `app/routes/home.tsx` creates a QueryClient, prefetches data, and returns the dehydrated state
2. The component receives the dehydrated state via `loaderData`
3. The `HydrationBoundary` component wraps the route content and hydrates the queries on the client
4. The `QueryClientProvider` in `root.tsx` provides the query client to all routes