import React from 'react';

export default function LoginFormContainer() {
  return (
    <>
      <div>
        <label htmlFor="input-email">E-mail</label>
        <input type="email" id="input-email" />
      </div>
      <div>
        <label htmlFor="input-password">Password</label>
        <input type="password" id="input-password" />
      </div>
    </>
  );
}
