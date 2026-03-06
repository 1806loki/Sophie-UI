export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

export interface Connector {
  id: string;
  name: string;
  type: ConnectorType;
  status: "connected" | "disconnected" | "pending";
  icon: string;
  description: string;
}

export type ConnectorType =
  | "notion"
  | "obsidian"
  | "google-docs"
  | "google-drive"
  | "whatsapp";

export interface GraphNode {
  id: string;
  label: string;
  type: string;
  color?: string;
}

export interface GraphLink {
  source: string;
  target: string;
  label?: string;
}

export interface KnowledgeGraph {
  nodes: GraphNode[];
  links: GraphLink[];
}
