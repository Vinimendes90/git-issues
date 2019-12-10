import React, {Component} from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';
import{Loading, IssueList} from './styles';

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
    <>
     <Container>
       <header>
         <img src= {repository.owner.avatar_url} alt={repository.owner.login}/>
         <strong>{repository.owner.name}</strong>
         <small>{repository.owner.login}</small>
        </header>

        <ul>
          <li>{repository.stargazers_count}<small> stars</small></li>
          <li>{repository.forks_count}<small> forks</small></li>
          <li>{repository.open_issues_count}<small> issues</small></li>
          <li>{repository.pushed_at}<small> last commit</small></li>
        </ul>
     </Container>

     <IssueList>
       {issues.map(issue => (
         <li key={String(issue.id)}>
           <img src={issue.user.avatar_url} alt='Perfil' />
         </li>
       ))}
     </IssueList>
     </>
    )
  }
}

export default Repository;
