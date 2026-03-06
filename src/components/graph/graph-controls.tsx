"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ZoomIn,
  ZoomOut,
  Maximize2,
  Search,
  Filter,
  Download,
} from "lucide-react";

interface GraphControlsProps {
  onSearch?: (query: string) => void;
  onZoomIn?: () => void;
  onZoomOut?: () => void;
  onFitView?: () => void;
  onExport?: () => void;
}

export function GraphControls({
  onSearch,
  onZoomIn,
  onZoomOut,
  onFitView,
  onExport,
}: GraphControlsProps) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border border-border/40 bg-card/50 p-3 backdrop-blur">
      <div className="relative flex-1 max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search nodes..."
          className="pl-10"
          onChange={(e) => onSearch?.(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon" onClick={onZoomIn}>
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={onZoomOut}>
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={onFitView}>
          <Maximize2 className="h-4 w-4" />
        </Button>
        <div className="mx-2 h-6 w-px bg-border" />
        <Button variant="ghost" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={onExport}>
          <Download className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
