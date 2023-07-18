import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface TestStore {
  testValue: string;
  setTestValue: (newValue: string) => void;
}

export const useTestStore = create<TestStore>()(
  persist(
    (set, get) => ({
      testValue: '',
      setTestValue: (newValue: string) => set(() => ({ testValue: newValue })),
    }),
    {
      name: 'user-store',
      partialize: (state) => ({
        testValue: state.testValue,
      }),
    }
  )
);
