import { FinderLocation, FinderItem, locations } from "@/constants/constants";
import { create, StateCreator } from "zustand";
import { immer } from "zustand/middleware/immer";

const DEFAULT_LOCATION = locations.work;

interface LocationState {
  activeLocation: FinderLocation | FinderItem | null;
}

interface LocationActions {
  setActiveLocation: (location: FinderLocation | FinderItem | null) => void;
  resetActiveLocation: () => void;
}

type LocationStore = LocationState & LocationActions;

const useLocationStore = create<LocationStore>()(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,
    setActiveLocation: (location) =>
      set((state) => {
        state.activeLocation = location;
      }),
    resetActiveLocation: () =>
      set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
      }),
  })) as StateCreator<LocationStore>
);

export default useLocationStore;
