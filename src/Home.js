import React from 'react';

const blank = <pre className='pre'>target='blank'</pre>;
const saferBlank = (
  <pre className='pre'>target= '_blank' rel='noopener noreferrer'</pre>
);
const badBlank = <pre className='pre'>target='_blank'</pre>;

const list = (
  <ul>
    <li>{blank}</li>
    <li>{saferBlank}</li>
    <li>{badBlank}</li>
  </ul>
);

function Home() {
  return (
    <div>
      <p>
        Welcome to this demo of how the following work: {list} Click the links
        at the top for a demo of how each work.
      </p>
    </div>
  );
}

export default Home;
