"use client";

import { useState } from "react";
import { useChatStore } from "@/stores/chat-store";
import api from "@/lib/api";
import { Message } from "@/types";

export function useChat() {
  const { messages, addMessage, setLoading, isLoading } = useChatStore();
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: "user",
      timestamp: new Date(),
    };

    addMessage(userMessage);
    setLoading(true);
    setError(null);

    try {
      const response = await api.post("/chat", { message: content });
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response.data.response,
        role: "assistant",
        timestamp: new Date(),
      };
      addMessage(assistantMessage);
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return {
    messages,
    sendMessage,
    isLoading,
    error,
  };
}
