"use client";

import { useState } from "react";
import { ConnectorGrid } from "@/components/connectors";
import { Connector } from "@/types";
import { Input } from "@/components/ui/input";
import { Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const initialConnectors: Connector[] = [
  {
    id: "notion",
    name: "Notion",
    type: "notion",
    status: "disconnected",
    icon: "📝",
    description: "Sync your Notion pages, databases, and wikis",
  },
  {
    id: "obsidian",
    name: "Obsidian",
    type: "obsidian",
    status: "disconnected",
    icon: "💎",
    description: "Import your Obsidian vault and markdown notes",
  },
  {
    id: "google-docs",
    name: "Google Docs",
    type: "google-docs",
    status: "connected",
    icon: "📄",
    description: "Access your Google Docs and documents",
  },
  {
    id: "google-drive",
    name: "Google Drive",
    type: "google-drive",
    status: "connected",
    icon: "📁",
    description: "Sync files and folders from Google Drive",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    type: "whatsapp",
    status: "disconnected",
    icon: "💬",
    description: "Import chat history and shared media",
  },
  {
    id: "slack",
    name: "Slack",
    type: "notion",
    status: "disconnected",
    icon: "💼",
    description: "Connect your Slack workspace messages",
  },
  {
    id: "evernote",
    name: "Evernote",
    type: "notion",
    status: "disconnected",
    icon: "🐘",
    description: "Import notes from Evernote",
  },
  {
    id: "dropbox",
    name: "Dropbox",
    type: "google-drive",
    status: "disconnected",
    icon: "📦",
    description: "Sync files from your Dropbox account",
  },
];

export default function ConnectorsPage() {
  const [connectors, setConnectors] = useState<Connector[]>(initialConnectors);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredConnectors = connectors.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const connectedCount = connectors.filter(
    (c) => c.status === "connected"
  ).length;

  const handleConnect = (id: string) => {
    setConnectors((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: "pending" } : c))
    );

    setTimeout(() => {
      setConnectors((prev) =>
        prev.map((c) => (c.id === id ? { ...c, status: "connected" } : c))
      );
    }, 2000);
  };

  const handleDisconnect = (id: string) => {
    setConnectors((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: "disconnected" } : c))
    );
  };

  const handleConfigure = (id: string) => {
    console.log("Configure connector:", id);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Connectors</h1>
          <p className="text-sm text-muted-foreground">
            {connectedCount} of {connectors.length} connectors active
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Request Integration
        </Button>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search connectors..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <ConnectorGrid
        connectors={filteredConnectors}
        onConnect={handleConnect}
        onDisconnect={handleDisconnect}
        onConfigure={handleConfigure}
      />
    </div>
  );
}
