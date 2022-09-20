import React from 'react';
import UserResult from '../components/users/UserResult';
import UserSearch from '../components/users/UserSearch';

export default function Home() {
  return (
    <>
      {/* Serch Componente */}
      <UserSearch />
      <UserResult />
    </>
  );
}
