import { create } from "zustand";
import { Connector } from "@/types";

interface ConnectorState {
  connectors: Connector[];
  setConnectors: (connectors: Connector[]) => void;
  updateConnector: (id: string, updates: Partial<Connector>) => void;
}

export const useConnectorStore = create<ConnectorState>((set) => ({
  connectors: [],
  setConnectors: (connectors) => set({ connectors }),
  updateConnector: (id, updates) =>
    set((state) => ({
      connectors: state.connectors.map((c) =>
        c.id === id ? { ...c, ...updates } : c
      ),
    })),
}));
