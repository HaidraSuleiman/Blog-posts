# Blog Posts

A Markdown-powered blog built with Next.js. Posts are written in Markdown, rendered with syntax-highlighted code blocks, and served as statically/server-rendered pages.

🔗 **Live site:** [blog-posts-sable.vercel.app](https://blog-posts-sable.vercel.app)

## Tech Stack

- **Next.js 13** (Pages Router) — React framework for routing, rendering, and API routes
- **React 18**
- **gray-matter** — parses Markdown frontmatter (title, date, metadata) from post files
- **react-markdown** — renders Markdown content as React components
- **react-syntax-highlighter** — syntax highlighting for code blocks within posts
- **MongoDB** — data storage (e.g. comments or post-related data)

## Project Structure

```
Blog-posts/
├── components/    # Reusable React components
├── lib/           # Data-fetching / helper logic (e.g. reading & parsing posts)
├── pages/         # Next.js pages and API routes
├── posts/         # Markdown blog post files
├── public/        # Static assets
├── styles/        # CSS/styling
├── next.config.js
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm or yarn
- A MongoDB connection string (if the app reads/writes data such as comments)

### Installation

```bash
git clone https://github.com/HaidraSuleiman/Blog-posts.git
cd Blog-posts
npm install
```

### Environment Variables

If the app connects to MongoDB, create a `.env.local` file in the project root:

```
MONGODB_URI=your-mongodb-connection-string
```

> Check `lib/` and `pages/api/` for the exact variable name(s) expected.

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Blog posts live as Markdown files in the `posts/` directory — add a new `.md` file there to publish a new post.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local development server |
| `npm run build` | Build the app for production |
| `npm run start` | Start the production server (after building) |

## Deployment

This project is deployed on [Vercel](https://vercel.com), the platform built by the creators of Next.js. Pushing to the main branch will trigger a new deployment if connected to a Vercel project.

## License

No license specified yet.
