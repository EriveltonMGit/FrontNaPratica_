import React from 'react';
import './Terminal.css'; // Certifique-se de adicionar a estilização correspondente.

const TerminalEffect: React.FC = () => {
  return (
    <div className="terminal">
      {/* Terminal window */}
      <div className="terminal__window">
        <div className="terminal__window-header">
          user@python-dev~
          <div className="terminal__controls"></div>
        </div>
        <div className="terminal__window-body">
          {/* Terminal screen */}
          <div className="terminal__screen">
            {/* Row 1 */}
            <div className="screen__row">
              <span className="screen__success">
                <b>user@python-dev</b>
              </span>
              <span className="screen__primary">~</span>
              <span className="screen__primary">$</span>
            </div>

            {/* Row 2 */}
            <div className="screen__row">
              <span className="screen__success">
                <b>user@python-dev</b>
              </span>
              <span className="screen__primary">~</span>
              <span className="screen__primary">$</span>
              <span className="screen__default">python3 --version</span>
            </div>

            {/* Row 3 */}
            <div className="screen__row">
              <span className="screen__warning">
                Python 3.10.4
              </span>
            </div>

            {/* Row 4 */}
            <div className="screen__row">
              <span className="screen__danger">Author:</span>
              <span className="screen__default">
             Erivlton Magalhaes
              </span>
            </div>

            {/* Row 5 */}
            <div className="screen__row">
              <span className="screen__danger">Date:10/11/2024</span>
              <span className="screen__default">
               
              </span>
            </div>

            {/* Empty row */}
            <div className="screen__row"></div>

           

            {/* Empty row */}
            <div className="screen__row"></div>

            {/* Row 6 */}
            <div className="screen__row">
              <span className="screen__success">
                <b>user@python-dev</b>
              </span>
              <span className="screen__primary">~</span>
              <span className="screen__primary">$</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalEffect;
