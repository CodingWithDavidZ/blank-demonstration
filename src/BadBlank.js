import React from 'react';
import { Link } from 'react-router-dom';

function BadBlank() {
  const googleBlank = (
    <a href='https://Google.com' target='_blank'>
      Google
    </a>
  );
  const mediumBlank = (
    <a href='https://medium.com/' target='_blank'>
      Medium
    </a>
  );

  const badBlank = (
    <a href='https://medium.com/' target='_blank'>
      Phishing Link
    </a>
  );

  const hijack = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

  const strong = <pre className='pre'>target='_blank'</pre>;
  const safer = <pre className='pre'>rel='noopener noreferrer'</pre>;
  const blank = <pre className='pre'>target='blank'</pre>;
  return (
    <div>
      <script>window.opener.location.href = {hijack}</script>
      <h1 id='blank-links'>
        Click on a link, then return to this page and click on the other links.
      </h1>
      <ul>{googleBlank}</ul>
      <ul>{mediumBlank}</ul>
      <ul>
        <Link to='/phishingdemo' target='_blank'>
          Phishing Demo
        </Link>
      </ul>
      <p>
        The second link clicked should have opened in a new tab just like we saw
        in the "Safer Blank" link. However when you click the "Phishing Demo"
        you will the vulnerability of using: {strong}
        without: {safer} As you can see, without: {safer} The user may get some
        undesired results when clicking links and returning to your page.
      </p>
    </div>
  );
}

export default BadBlank;
