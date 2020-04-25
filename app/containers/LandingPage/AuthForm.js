import React from 'react';
import styled from 'styled-components';


const FormContainer = styled.div`
  background-color: rgba(255,255,255,0.8);
  display: block;
  width: 100%;
  max-width: 1092px;
  min-height: 400px;
  margin: auto;
  padding: 20px;
  border-radius: 8px;
`;

const FormHeader = styled.div`
  h2 {

  }
`;

const AuthForm = () => {

  return (
    <FormContainer>
      <FormHeader>
        <h2>Lets get you set up</h2>
        <p>
          All you need is a username to get started!
          You wont need an email or password unless you want to save your stats.
        </p>
      </FormHeader>

    </FormContainer>
  )
}

export default AuthForm