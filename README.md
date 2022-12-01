# PPI-PDS
### Repositório para o projeto final das disciplinas de Programação Para Internet e Projeto de Desenvolvimento de Software

Bem-vindo! Esse é o repositório oficial do projeto final das disciplinas de PPI e PDS. Nele, podem ser encontrados, no momento, os arquivos do do Angular e arquivos de teste para estilização das páginas. 

No momento o site está hospedado no domínio da Netlify, em: [https://csbrasil.netlify.app/](https://csbrasil.netlify.app/), e está recebendo as devidas atualizações ao decorrer do projeto. O site está subdivido em quatro partes principais: o **[Home](https://csbrasil.netlify.app/)**, a aba do **[Competitivo](https://csbrasil.netlify.app/competitivo)**, a aba de **[Estatísticas](https://csbrasil.netlify.app/estatisticas)** e, por fim, a aba de **[Comunidade](https://csbrasil.netlify.app/comunidade)**.

## Home

O [Home](https://csbrasil.netlify.app/) é a página principal do projeto. Nela, está contida as indicações de todas as outras vertentes da aplicação, que foram anteriormente citadas.

## Competitivo

A parte de [Competitivo](https://csbrasil.netlify.app/competitivo) é onde as informações do cenário competitivo de CS:GO estão dispostas.

## Estatísticas

A aba de [Estatísticas](https://csbrasil.netlify.app/estatisticas) apresenta uma interface de comparação de dados, a qual os jogadores de CS:GO podem inserir o ID de seus respectivos perfis e exibir, comparando ou não, as estatísticas de jogo entre indivíduos.

Para a utilização da ferramenta, é necessário apenas do número de identificação da Steam e que o perfil escolhido não esteja privado. Nesse caso, a identificação necessária pode ser encontrada na própria URL do perfil, de modo que faz-se necessário ressaltar as seguintes opções: 

- Caso a URL **não tenha sido customizada**, o ID ficará na posição como mostra a figura abaixo: 

> https://steamcommunity.com/profiles/ *{ ID da Steam }*

- Caso a URL **tenha sido customizada**, o nome ficará na mesma posição, como retratado a seguir, sendo convertido para o número de identificação pela própria aplicação. 

> https://steamcommunity.com/id/ *{ nome customizado }*

Ao fim da extração, é necessário apenas inserir as identificações - seja o número, ou o nome - nas lacunas que o usuário desejar.

## Comunidade 

Atualmente, a aba de [Comunidade](https://csbrasil.netlify.app/comunidade) não possui informações. Devido ao tempo limite do projeto, essa vertente não será completada, de modo a apresentar uma página que simbolize tal contratempo.

## Modelo

O site segue o seguinte esquema:

![Esboço do site.](/imgmd/projeto-esboco.PNG "Esboço do Site")

## Especificações técnicas

O projeto está sendo realizado através do framework Angular, em sua versão 14. Para esse projeto, também foram utilizadas APIs para demonstração de informações. A primeira delas, implementada através da biblioteca Node.js [hltv-api](https://www.npmjs.com/package/hltv-api), possui inúmeras versatilidades e é baseada no site de dados estatísticos de CS:GO, a [HLTV](https://www.hltv.org/).

A segunda delas, é a API da steam criada pelo discente, a qual se conecta à API fornecida pela steam e extrai apenas informações do CS:GO. O motivo pela utilização de uma API que extrai as informações de outra API está relacionado ao bloqueio do CORS, não implementado na API original. Por essa razão, a biblioteca [node-fetch](https://www.npmjs.com/package/node-fetch) cumpre a função da extração de dados anteriormente citada. Além disso, a biblioteca [steamapi](https://www.npmjs.com/package/steamapi) também converte nomes da steam em IDs, bem como mostra dados do usuário da Steam, de modo a complementar a API criada pelo discente.

Ambas as APIs estão hospedadas no [Heroku](https://dashboard.heroku.com/), uma plataforma em nuvem para hospedagem de serviços.

Links para acessar as APIs hospedadas no Heroku:

- *HLTV*: [api-hltv-natham.herokuapp.com](https://api-hltv-natham.herokuapp.com/)
- *Steam*: [api-steam-natham.herokuapp.com](https://api-steam-natham.herokuapp.com/)

## Metas atuais

Alguns dos objetivos a serem cumpridos em relação à aplicação.

### Home

- Responsividade das DIVs
- Organização dos textos
- Organização das imagens

### Competitivo

- Planejamento do design da página
- Escolher estatísticas apresentadas
- Validators
- Incluir times brasileiros
- Mostrar foto do time e jogador
    - *Perfil da steam (?)*

### Estatísticas 

- Planejamento do design da página
- <s>Mostrar foto de perfil do jogador</s>
- Validators
- <s>Mostrar perfil da steam do jogador</s>

### Comunidade

- Fazer página de manutenção
    - *Aba de feedback (?)*