"use client";

import { Connector } from "@/types";
import { ConnectorCard } from "./connector-card";

interface ConnectorGridProps {
  connectors: Connector[];
  onConnect: (id: string) => void;
  onDisconnect: (id: string) => void;
  onConfigure: (id: string) => void;
}

export function ConnectorGrid({
  connectors,
  onConnect,
  onDisconnect,
  onConfigure,
}: ConnectorGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {connectors.map((connector) => (
        <ConnectorCard
          key={connector.id}
          connector={connector}
          onConnect={onConnect}
          onDisconnect={onDisconnect}
          onConfigure={onConfigure}
        />
      ))}
    </div>
  );
}
