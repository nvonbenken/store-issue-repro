import { useTestStore } from '@test-store/store';

export const TestPage = () => {
  const { testValue } = useTestStore();

  return <p>Remote A Store Value: {testValue}</p>;
};
