import React from 'react';

const businessDescription = () => (
  <div>
    <h1>Business Description Goes here!</h1>
    <ul>
      <li>Step 1</li>
      <li>Step 2</li>
    </ul>
    <p>
        A few short sentences about Item 2 that we do not want to
        appear appended to the list item. A second sentence of additional details
    </p>
    <ul start="3">
      <li>Step 3</li>
      <li>Step 4</li>
    </ul>
    <p>
        Notice that we used the
      <code>start</code>
        attribute on the
      <code>ul</code>
        tag to restart the numbering at 3 fullowing the break in the list above.
        We will use the same technique to properly number Step 5 below.
    </p>
    <ul start="5">
      <li>Step 5</li>
    </ul>
        Read more: https://html.com/lists/#ixzz5wRyjOYwZ
  </div>
);

export default businessDescription;
