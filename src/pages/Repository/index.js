import React, {Component} from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';
import{Owner, Loading, IssueList} from './styles';

import Container from '../../components/Container';

import {Link} from 'react-router-dom'


class Repository extends Component{
   static propTypes = {
     match: PropTypes.shape({
       params: PropTypes.shape({
         repository: PropTypes.string,
       }),
     }).isRequired
   }

   state = {
     repository: {},
     issues: [],
     loading: true,
   };


  async componentDidMount(){

  const { match } = this.props;

   const repoName = decodeURIComponent(match.params.repository);

   const [repository, issues] = await Promise.all([
        api.get(`/repos/${repoName}`),
        api.get(`/repos/${repoName}/issues`, {
           params:{
             state: 'open',
             per_page: 5,
           } 
         
        }),
   ]);

   this.setState({
     repository: repository.data,
     issues: issues.data,
     loading: false,
   })
   console.log(repository);
   console.log(issues);
  }

  render() {  
    const {repository, issues, loading} = this.state

     if(loading){
       return <Loading>Carregando...</Loading>
     }
  return ( 
    
     <Container>
       <Owner>
       <header>
         <Link to="/">Repositorio</Link>
         <img src= {repository.owner.avatar_url} alt={repository.owner.login}/>
         <strong>{repository.name}</strong>
         <p>{repository.description}</p>
        </header>
        </Owner>
     <IssueList>
       {issues.map(issue => (
         <li key={String(issue.id)}>
           <img src={issue.user.avatar_url} alt='Perfil' />
           <div>
             <strong>
           <a href={issue.html_url}>{issue.title}</a>
           </strong>
           <p>{issue.user.login}</p>
           </div>
         </li>
       ))}
     </IssueList>
       </Container>
    );
  }
}

export default Repository;
