import { create } from "zustand"
import type { Call } from "@/lib/types/call"

interface CallsStore {
  activeCalls: Call[]
  addCall: (call: Call) => void
  updateCall: (callId: string, updates: Partial<Call>) => void
  removeCall: (callId: string) => void
}

export const useCallsStore = create<CallsStore>((set) => ({
  activeCalls: [],
  addCall: (call) =>
    set((state) => ({
      activeCalls: [...state.activeCalls, call],
    })),
  updateCall: (callId, updates) =>
    set((state) => ({
      activeCalls: state.activeCalls.map((call) => (call.id === callId ? { ...call, ...updates } : call)),
    })),
  removeCall: (callId) =>
    set((state) => ({
      activeCalls: state.activeCalls.filter((call) => call.id !== callId),
    })),
}))

