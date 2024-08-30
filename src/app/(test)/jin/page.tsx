'use client';

import FloatingButton from '@/components/Floating/FloatingButton';

export default function App() {
  return (
    <div>
      <h1>Test Page</h1>
      <FloatingButton
        type="ask"
        className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
      />
    </div>
  );
}
