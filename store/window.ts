import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "@/constants/constants";
import { create, StateCreator } from "zustand";
import { immer } from "zustand/middleware/immer";

export type WindowKey = keyof typeof WINDOW_CONFIG;

interface WindowItem {
  isOpen: boolean;
  zIndex: number;
  data: unknown;
}

interface WindowState {
  windows: Record<WindowKey, WindowItem>;
  nextZIndex: number;
}

interface WindowActions {
  openWindow: (key: WindowKey, data?: unknown) => void;
  closeWindow: (key: WindowKey) => void;
  focusWindow: (key: WindowKey) => void;
}

type WindowStore = WindowState & WindowActions;

const useWindowStore = create<WindowStore>()(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (key, data = null) =>
      set((state) => {
        if (!(key in state.windows)) return;
        const win = state.windows[key];
        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        win.data = data ?? win.data;
        state.nextZIndex += 1;
      }),

    closeWindow: (key) =>
      set((state) => {
        if (!(key in state.windows)) return;
        const win = state.windows[key];
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
      }),

    focusWindow: (key) =>
      set((state) => {
        if (!(key in state.windows)) return;
        const win = state.windows[key];
        if (win.isOpen) {
          state.nextZIndex += 1;
          win.zIndex = state.nextZIndex;
        }
      }),
  })) as StateCreator<WindowStore>
);

export default useWindowStore;
