import React from 'react';

export default function About() {
  return (
    <>
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details. This
        project is part of the
        <a href='#'>
         
          React GitHub Finder
        </a>
        
        <strong>
          <a href='https://www.c-sharpcorner.com/members/dharmesh-singh3'> Dharmesh Singh</a>
        </strong>
        .
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Layout By:
        <a className='text-white' href='https://www.c-sharpcorner.com/members/dharmesh-singh3'>
          Dharmesh Singh
        </a>
      </p>
    </>
  );
}
