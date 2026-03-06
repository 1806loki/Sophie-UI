"use client";

import { useState } from "react";
import { KnowledgeGraph, GraphControls, NodeDetails } from "@/components/graph";
import { GraphNode, GraphLink } from "@/types";

const sampleNodes: GraphNode[] = [
  { id: "1", label: "AI Research", type: "topic" },
  { id: "2", label: "Machine Learning", type: "concept" },
  { id: "3", label: "Neural Networks", type: "concept" },
  { id: "4", label: "Deep Learning Paper", type: "document" },
  { id: "5", label: "GPT Models", type: "concept" },
  { id: "6", label: "Transformers", type: "concept" },
  { id: "7", label: "Attention Mechanism", type: "concept" },
  { id: "8", label: "NLP Applications", type: "topic" },
  { id: "9", label: "Computer Vision", type: "topic" },
  { id: "10", label: "Research Notes", type: "document" },
];

const sampleLinks: GraphLink[] = [
  { source: "1", target: "2" },
  { source: "2", target: "3" },
  { source: "3", target: "4" },
  { source: "2", target: "5" },
  { source: "5", target: "6" },
  { source: "6", target: "7" },
  { source: "5", target: "8" },
  { source: "3", target: "9" },
  { source: "1", target: "10" },
  { source: "4", target: "10" },
];

export default function KnowledgeGraphPage() {
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);

  return (
    <div className="flex h-[calc(100vh-8rem)] flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Knowledge Graph</h1>
          <p className="text-sm text-muted-foreground">
            Visualize and explore connections in your knowledge base
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <span className="h-3 w-3 rounded-full bg-[#6366f1]" />
            Document
          </span>
          <span className="flex items-center gap-1">
            <span className="h-3 w-3 rounded-full bg-[#06b6d4]" />
            Concept
          </span>
          <span className="flex items-center gap-1">
            <span className="h-3 w-3 rounded-full bg-[#f59e0b]" />
            Topic
          </span>
        </div>
      </div>
      <GraphControls />
      <div className="relative flex-1 rounded-xl border border-border/40 bg-muted/10">
        <KnowledgeGraph
          nodes={sampleNodes}
          links={sampleLinks}
          onNodeClick={setSelectedNode}
        />
        <NodeDetails
          node={selectedNode}
          onClose={() => setSelectedNode(null)}
        />
      </div>
    </div>
  );
}
