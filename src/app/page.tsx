import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageSquare, Network, Plug, Sparkles } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "AI Chat",
    description: "Have intelligent conversations with your knowledge base",
  },
  {
    icon: Network,
    title: "Knowledge Graph",
    description: "Visualize connections between your ideas and documents",
  },
  {
    icon: Plug,
    title: "Connectors",
    description: "Connect Notion, Obsidian, Google Docs, and more",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <nav className="border-b border-border/40 bg-background/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <span className="text-2xl font-bold gradient-text">Sophie</span>
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="ghost">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-24 text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <Sparkles className="h-4 w-4" />
            AI-Powered Knowledge Assistant
          </div>
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Your Second Brain,{" "}
            <span className="gradient-text">Supercharged</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Connect your data sources, visualize knowledge graphs, and chat with
            AI to unlock insights from your personal knowledge base.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Link href="/signup">
              <Button size="lg" className="glow-primary">
                Start Free
              </Button>
            </Link>
            <Link href="/chat">
              <Button size="lg" variant="outline">
                Try Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border/40 bg-card p-6 transition-all hover:border-primary/40 hover:glow-primary"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border/40 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Sophie. Built with Next.js and AI.</p>
        </div>
      </footer>
    </main>
  );
}
