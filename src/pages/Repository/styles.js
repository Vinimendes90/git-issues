import styled from 'styled-components';

export const Owner = styled.div`

header{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    margin-bottom: 50px;

    a{
        margin-bottom: 20px;
        text-decoration: none;
        font-size: 20px;
        color: green;
    }
    img{
        width: 300px;
    }

    p{
       margin-top: 5px;
       font-size: 14px;
       color: #666;
       line-height: 1.4;
       text-align: center;
       max-width: 400px;
    }
}
`;


export const Loading = styled.div`
   color: #FFF;
   font-size: 30px;
`;



export const IssueList = styled.ul`
   padding-top:30px;
   margin-top: 30px;
   border-top: 1px solid #eee;
   list-style: none;

   li{
      display: flex;
      padding: 15px 10px;
      border: 1px solid #eee;
      border-radius: 4px;
   }

   & + li {
      margin-top: 10px;
   }
   img{
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
   }

   div{
      flex: 1;
      margin-left: 15px;

      strong{
         font-size: 16px;

         a{ 
            text-decoration: none;
            color: green;

         &:hover{
            color: green;
           }
         }
      }

      p{
         margin-top: 5px;
         font-size: 12px;
         color: #999;
      }
   }
`;
