import styled from 'styled-components';

const Container = styled.div`
max-width: 600px;
max-height: 100%;
background: #FFF;
margin: 80px auto;
padding: 30px;

border-radius: 20px 0 20px 0;


box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

h1{ 
    font-size: 35px;
    display: flex;
    align-items: center;

    svg{
        margin-right: 10px;
    }
}


 ul li{
     list-style: none
 }

 `;
export default Container;

