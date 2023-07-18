import { useTestStore } from '@test-store/store';
import { nanoid } from 'nanoid';

export const TestPage = () => {
  const { testValue } = useTestStore();

  return <p>Remote B Store Value: {testValue}</p>;
};
