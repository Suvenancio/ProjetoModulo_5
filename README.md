😃 Olá Mundo!

<!--  --> Apresentação do projeto Dental Pride,uma rede de clinicas odontológica que ofereçe serviços de qualidade para diversos clientes espalhados pelo Brasil á fora.Nesse projeto temos a integração do backend com o frontend,tal integração é feita com tecnologias como o Node js mais voltada para o back rodando ao lado do servidor e o React js uma lib frontend mais voltada para o aspecto visual do site orientada a componente isto é, são como funções que aceitam propriedades e retornam novos elementos

<!--  --> Caso queira ter acesso a nossa aplicação siga os seguntes passos
- [ ] Basta da um *Git Clone*

<!--  -->  Ou acesse o seguinte link abaixo:
[https://objective-shaw-050cd7.netlify.app/](url "Titulo")



# Inicio do projeto
<!--  --> Primeiro passo criar nosso projetinho no React js usando o comando abaixo

## npx create-react-app my-app
cd my-app
npm start
---
**NPM START**
<!--  --> Inicia o projeto

# Apis envolvidas no projeto
<!--  --> Api são um conjunto de rotinas e padrões que facilitam a comunicação e troca de informações entre sistemas.
---
- [ ] Api de consulta
- [ ] Api do Médico
- [ ] Api do Paciente
- [ ] Api da Rede de lojas

# Montagem das paginas 
---
| Page         
| ---  ---    
| `Home`
| `Cadastro\Paciente`
| `Contato` 
| `Dentista`  
| `Fale conosco`  
| `Fundadores` 
| `Login` 
| `Portal do Paciente`


<!--  --> Páginas:



> Cadastro\Paciente
> > Pagina feita para o usuário inserir seus dados e efetuar o seu cadastro no sistema.Nessa página foi feita uma requiçao`POST` para enviar dados através do fetch para o banco de dados SQLize.
<!--  --> Post:É um método de requisição onde os dados sensíveis dos usuários são protegidos

> Pagina Dentista:
> > Nessa pagina foi ultilizado **Hook useEffect** que é um Hook que serve para lidar com os efeitos, no caso da nossa página queremos destacar o efeito de busca da nossa Api com a finalidade de listar os dentistas que estão presentes na rede.

> Hook:
> > nos ajudam a organizar a lógica que será usada em um componente

> Pagina Fale conosco :
> > Pagina que tem por finalidade conectar o usuário ao suporte de atendimento.Nessa página foi ultilizado**Hook useState** que  cria uma variável que controlará o estado do componente.Para este Hook nós passamos os valores  do estado, em nosso exemplo como retorno temos a variável com o valor do estado, que demos o nome de nome,data,email,assunto e mensagem e uma função que serve unicamente para atualizar o valor desta variável,que demos o nome de setNome()


> > Pagina dos Fundadores
> > Pagina em que os clientes pode conhecer nosso time de colaboderes,assim
como suas histórias e competênncias

> Pagina de Login
> > Pagina dedidcada a novos clientes que podem se logar mediante a um cadastro para conhecer um pouco mais do que temos a oferecer

> Portal do Paciente
> > Página  reservada para o cliente ter acesso exclusivo aos nossos servidos oferecido,novas funcionlidades e sugestões de melhorias








