import React from 'react';
import ReactDOM from 'react-dom';

function Whitespace() {
  return (
    <div>
      {/* a. Single lines */}
      <div>One Space</div>
      <div>Two  Spaces</div>
      <div>  Space  Around  </div>

      {/* b. Newlines */}
      <div>
      Newline
      Test
      </div>

      {/* c. Empty Newlines */}
      <div>
      Empty

      Newlines

      Here
      </div>

      {/* d. Spaces and newlines */}
      <div>
        Spaces Before 
       and After  
      </div>

      {/* e. Non-breaking spaces using &nbsp; */}
      <div>
      &nbsp;Non-breaking
      &nbsp;Spaces&nbsp;
      </div>

      {/* f. Inserting spaces when content spans multiple lines */}
      <div>
      Line1
      {' '}
      Line2
      </div>
    </div>
  );
}

ReactDOM.render(<Whitespace/>, document.querySelector('#root'));
