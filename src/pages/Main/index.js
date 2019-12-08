import React, {Component} from 'react';
import {FaGithubAlt, FaPlus, FaSpinner} from 'react-icons/fa';

import api from '../../services/api';

import {Container, Form, SubmitButton, List} from './styles';

import {Link} from 'react-router-dom';


export default class Main extends Component{
  
  state = {
    newRepo:'',  
    repositories: [],
    loading: false,
  };
  
  
  //carregar os dados do localStorage
  componentDidMount(){
    const repositories = localStorage.getItem('repositories');
    if(repositories){
      this.setState({repositories: JSON.parse(repositories)});
    }
  }
  
  //Salvar os dados do localStorage
  componentDidUpdate(_, prevState){
    const {repositories} = this.state
    if(prevState.repositories !== repositories){
      localStorage.setItem('repositories', JSON.stringify(repositories));
    };
  }


  handleInputChange = e => {
    this.setState({newRepo: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
     
    this.setState({ loading: true });

    const  { newRepo, repositories} = this.state;
    try {
    const response = await api.get(`/repos/${newRepo}`);

    const data = {
      name: response.data.full_name,    
    };
    
    this.setState({
       repositories: [...repositories, data],
       newRepo: '',
       loading: false,
    });
  } catch(error){
        document.write(error)
  }

  };
  
  
  render() {
       const { newRepo, repositories, loading } = this.state; // estou fazendo a desestruturação da onde será armazenado os dados

    return (
        <>
      <Container>
      <h1>
      <FaGithubAlt />
       Repositórios
       </h1>
        
        <Form onSubmit={this.handleSubmit}>
           <input type = 'text' 
           placeholder="Adicionar Repositórios"
           value={newRepo}
           onChange={this.handleInputChange}
           /> 



         <SubmitButton loading={loading}>
           {loading ? (<FaSpinner color="#FFF" size={14} />) : (<FaPlus color='#FFF' size={14} />)}
     
           </SubmitButton>
        </Form>
      
        <List>
          {repositories.map(repository =>(
            <li key={repository.name}>
             <span>{repository.name}</span>
             <Link to= {`/repository/${encodeURIComponent(repository.name)}`}>Detalhes </Link> {/*como estou criando uma pagina onde 
             ira detalhar cada repositorio que eu chamar passo para a url o nome do msm*/}

               {/*foi passado encodeURIComponent para que possa voltar uma barra , pois quando passamos repository.name o msm mostrava
                o primeiro e o segundo e nesse caso só preciso do primeiro endereço*/}

            </li>
          ))}
        </List>
        </Container>

      </>
    );
    
  }
}





