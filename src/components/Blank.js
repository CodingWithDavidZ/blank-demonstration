import React from 'react';

function Blank() {
  const googleBlank = (
    <a href='https://Google.com' target='blank'>
      Google
    </a>
  );
  const mediumBlank = (
    <a href='https://medium.com/' target='blank'>
      Medium
    </a>
  );

  const strong = <pre className='pre'>target='blank'</pre>;
  return (
    <div>
      <h1 id='blank-links'>
        Click on a link, then return to this page and click on the other.
      </h1>
      <ul>{googleBlank}</ul>
      <ul>{mediumBlank}</ul>
      <p>
        The second link clicked should have opened in the same tab as the
        previous. This is how: {strong} works. One can see how this could be
        frustrating for a user if there are multiple links on a page.
      </p>
    </div>
  );
}

export default Blank;
