import React from 'react';

function SaferBlank() {
  const googleBlank = (
    <a href='https://Google.com' target='_blank' rel='noopener noreferrer'>
      Google
    </a>
  );
  const mediumBlank = (
    <a href='https://medium.com/' target='_blank' rel='noopener noreferrer'>
      Medium
    </a>
  );

  const strong = <pre className='pre'>target='_blank' rel='noreferrer'</pre>;

  const blank = <pre className='pre'>target='blank'</pre>;
  return (
    <div>
      <h1 id='blank-links'>
        Click on a link, then return to this page and click on the other.
      </h1>
      <ul>{googleBlank}</ul>
      <ul>{mediumBlank}</ul>
      <p>
        The second link clicked should have opened in a new tab as opposed to
        the same tab like the {blank} example did. This is how {strong}
        works. This provides a much more pleasant and safer experiance for users
        when there are many links on a page.
      </p>
    </div>
  );
}

export default SaferBlank;
