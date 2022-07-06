import React, { useState, createContext, memo, useCallback } from 'react';

const AuthContext = createContext({ id: '' });

const AuthContextProvider = memo(({ children }) => {
  const [id, setId] = useState('');

  const signin = useCallback(id => {
    localStorage.setItem('id', id);
    setId(() => id);
  }, []);
  const signout = useCallback(() => {
    localStorage.removeItem('id');
    setId(() => '');
  }, []);

  return (
    <AuthContext.Provider value={{ id, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
});

export { AuthContext, AuthContextProvider };
