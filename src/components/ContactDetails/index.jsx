import React from 'react';

const ContactDetails = (props) => {

  console.log(props);
  return(
    <div>
      <h1>Contact: {props.match.params.id}</h1>
    </div>
  );
}

export default ContactDetails;
