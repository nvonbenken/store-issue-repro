import { useTestStore } from '@test-store/store';
import { nanoid } from 'nanoid';

export const TestPage = () => {
  const { testValue, setTestValue } = useTestStore();

  const handleClick = () => {
    setTestValue(nanoid());
  };

  return (
    <>
      <p>Host Store Value: {testValue}</p>
      <button onClick={handleClick}>Set new state value</button>
    </>
  );
};
