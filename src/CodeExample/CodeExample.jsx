import React from 'react';
import Highlight from 'react-highlight';
import './CodeExample.scss';

class CodeExample extends React.PureComponent {


  render() {
    return (
      <div className="code-example">
        <div className="live-preview">
          {this.props.component()}
        </div>
          <Highlight language={this.props.language}>{this.props.source}</Highlight>
      </div>
    );
  }
}

export default CodeExample;
