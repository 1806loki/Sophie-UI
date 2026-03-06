"use client";

import { Connector } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, Loader2, ExternalLink, Settings } from "lucide-react";

interface ConnectorCardProps {
  connector: Connector;
  onConnect: (id: string) => void;
  onDisconnect: (id: string) => void;
  onConfigure: (id: string) => void;
}

export function ConnectorCard({
  connector,
  onConnect,
  onDisconnect,
  onConfigure,
}: ConnectorCardProps) {
  const isConnected = connector.status === "connected";
  const isPending = connector.status === "pending";

  return (
    <Card
      className={cn(
        "group relative overflow-hidden border-border/40 transition-all hover:border-primary/40",
        isConnected && "border-green-500/40"
      )}
    >
      {isConnected && (
        <div className="absolute right-3 top-3">
          <div className="flex items-center gap-1 rounded-full bg-green-500/20 px-2 py-0.5 text-xs text-green-500">
            <Check className="h-3 w-3" />
            Connected
          </div>
        </div>
      )}
      <CardHeader>
        <div className="mb-2 text-4xl">{connector.icon}</div>
        <CardTitle className="text-lg">{connector.name}</CardTitle>
        <CardDescription>{connector.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          {isConnected ? (
            <>
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => onConfigure(connector.id)}
              >
                <Settings className="mr-2 h-4 w-4" />
                Configure
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-destructive hover:text-destructive"
                onClick={() => onDisconnect(connector.id)}
              >
                Disconnect
              </Button>
            </>
          ) : (
            <Button
              size="sm"
              className="w-full"
              onClick={() => onConnect(connector.id)}
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Connecting...
                </>
              ) : (
                <>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Connect
                </>
              )}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
