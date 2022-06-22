import { memo } from 'react';

const ErrorView = memo(({ error }) => {
  return (
    <div>
      <h1>Error!</h1>
      <p>{`message: ${error.message}`}</p>
      <p>{`code: ${error.code}`}</p>
    </div>
  );
});

export default ErrorView;
