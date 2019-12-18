import styled, {keyframes, css} from 'styled-components';



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

const rotate = keyframes`
  from{ 
      transform: rotate(0deg);
       }
  to{
       transform: rotate(360deg); 
       }
`;


export const SubmitButton = styled.button.attrs(props => ({
    type: 'submit',/* podemos passar o tipo do botão através do styled-component*/
    disabled: props.loading,
}))`
background: #008000;
border: none;
width: 30px;
margin-left: 10px;
border-radius: 5px 50px 5px 5px;

display: flex;
justify-content: center;
align-items:center;

&[disabled]{
    cursor: not-allowed;
    opacity: 0.6;
}

${props => 
props.loading &&

 css`
    svg{
       animation: ${rotate} 2s linear infinite;
    }
  `}
`;

export const List = styled.ul`

  list-style: none;
  margin-top: 20px; 
  padding: 10px 0;

  li{
  padding: 15px 0;
  
  display:flex;
  justify-content: space-between;
  align-items: center;

  & + li {
      border-top: 1px solid #eee;
  }

  a{
      color: rgb(0, 0, 0, 25);
      text-decoration: none;
  }
}

`;





