"use client";

import { useCallback, useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { GraphNode, GraphLink } from "@/types";

const ForceGraph2D = dynamic(() => import("react-force-graph-2d"), {
  ssr: false,
});

interface KnowledgeGraphProps {
  nodes: GraphNode[];
  links: GraphLink[];
  onNodeClick?: (node: GraphNode) => void;
}

const nodeColors: Record<string, string> = {
  document: "#6366f1",
  concept: "#06b6d4",
  person: "#10b981",
  topic: "#f59e0b",
  default: "#94a3b8",
};

export function KnowledgeGraph({ nodes, links, onNodeClick }: KnowledgeGraphProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const handleNodeClick = useCallback(
    (node: { id?: string | number; label?: string; type?: string }) => {
      if (onNodeClick && node.id) {
        onNodeClick({
          id: String(node.id),
          label: node.label || "",
          type: node.type || "default",
        });
      }
    },
    [onNodeClick]
  );

  const graphData = {
    nodes: nodes.map((n) => ({
      ...n,
      color: nodeColors[n.type] || nodeColors.default,
    })),
    links: links.map((l) => ({
      source: l.source,
      target: l.target,
      label: l.label,
    })),
  };

  return (
    <div ref={containerRef} className="h-full w-full rounded-lg bg-muted/20">
      <ForceGraph2D
        width={dimensions.width}
        height={dimensions.height}
        graphData={graphData}
        nodeLabel="label"
        nodeColor="color"
        nodeRelSize={8}
        linkColor={() => "rgba(148, 163, 184, 0.3)"}
        linkWidth={1.5}
        linkDirectionalParticles={2}
        linkDirectionalParticleSpeed={0.005}
        linkDirectionalParticleColor={() => "#6366f1"}
        backgroundColor="transparent"
        onNodeClick={handleNodeClick}
        nodeCanvasObject={(node, ctx, globalScale) => {
          const label = (node as { label?: string }).label || "";
          const fontSize = 12 / globalScale;
          ctx.font = `${fontSize}px Inter, sans-serif`;
          const nodeColor = (node as { color?: string }).color || nodeColors.default;

          ctx.beginPath();
          ctx.arc(node.x!, node.y!, 8, 0, 2 * Math.PI);
          ctx.fillStyle = nodeColor;
          ctx.fill();
          ctx.strokeStyle = "rgba(255,255,255,0.2)";
          ctx.lineWidth = 1;
          ctx.stroke();

          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#f8fafc";
          ctx.fillText(label, node.x!, node.y! + 16);
        }}
      />
    </div>
  );
}
