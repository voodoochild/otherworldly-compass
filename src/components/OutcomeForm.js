import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class OutcomeForm extends Component {
  render() {
    const { text, form } = this.props.outcome;

    console.log(form);

    return (
      <React.Fragment>
        {text && (
          <ReactMarkdown
            source={this.props.strings[text]}
            disallowedTypes={['paragraph']}
            unwrapDisallowed={true}
          />
        )}
        <form />
      </React.Fragment>
    );
  }
}

export default OutcomeForm;

/*
fields : {
  cultists:{
    type:checkbox,
    label:'Cultists We Interrogated',
    options:{
      'The Masked Hunter',
      'Wolf-Man Drew',
      'Herman Collins',
      'Peter Warren',
      'Victoria Devereux',
      'Ruth Turner'
    },
    onSubmit:()=>{}
  }
}
*/
