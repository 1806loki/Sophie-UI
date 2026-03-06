"use client";

import { GraphNode } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ExternalLink, FileText, Link2 } from "lucide-react";

interface NodeDetailsProps {
  node: GraphNode | null;
  onClose: () => void;
}

const nodeTypeIcons: Record<string, typeof FileText> = {
  document: FileText,
  concept: Link2,
  default: FileText,
};

export function NodeDetails({ node, onClose }: NodeDetailsProps) {
  if (!node) return null;

  const Icon = nodeTypeIcons[node.type] || nodeTypeIcons.default;

  return (
    <Card className="absolute right-4 top-4 w-80 border-border/40 bg-card/95 backdrop-blur">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Icon className="h-5 w-5 text-primary" />
          {node.label}
        </CardTitle>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <span className="text-xs font-medium uppercase text-muted-foreground">
            Type
          </span>
          <p className="mt-1 text-sm capitalize">{node.type}</p>
        </div>
        <div>
          <span className="text-xs font-medium uppercase text-muted-foreground">
            Node ID
          </span>
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            {node.id}
          </p>
        </div>
        <div className="flex gap-2">
          <Button size="sm" className="flex-1">
            <ExternalLink className="mr-2 h-4 w-4" />
            Open
          </Button>
          <Button size="sm" variant="outline" className="flex-1">
            <Link2 className="mr-2 h-4 w-4" />
            Expand
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
