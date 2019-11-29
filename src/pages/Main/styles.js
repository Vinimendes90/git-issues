import styled from 'styled-components'

export const Container = styled.div`

max-width: 600px;
max-height: 100%;
background: #FFF;

margin: 80px auto;
padding: 30px;

border-radius: 20px;

box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

h1{ 
    font-size: 35px;
    display: flex;
    align-items: center;

    svg{
        margin-right: 10px;
    }
}

`;

export const Form = styled.form`
  display: flex; 
  margin-top: 20px;
  input{
      flex: 1; /* ocupa todo o espaço possivel do componente*/
      border: 1px solid #eee;
      padding-left: 10px;
      height: 28px;
      border-radius: 4px;  
      
  }

  
`;

export const SubmitButton = styled.button.attrs({
    type: 'submit',
})`
background: #008000;
border: none;
width: 30px;
margin-left: 10px;
border-radius: 5px;

display: flex;
justify-content: center;
align-items:center;
`;







