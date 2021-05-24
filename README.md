# apigames
## Pequeno projeto feito em nodejs para por em prática alguns conceitos aprendidos.
### O projeto é um crud (Criar, Ler, Atualizar e Deletar) games. Os jogos estão gravados em um banco de dados utilizando mongodb, foi utilizado o padrão REST de api.
####  Foi utilizado o padrão mvc (Model, views e controllers), como o projeto é de uma api não tem views, foi separado em responsabilidade, o model faz acesso ao banco de dados utilizando o mongoose, os controllers ficam responsáveis pelas requisições e respostas e as rotas estão separadas.
##### Exemplo de rota


get - http://localhost:3002/api/v1/game/60ab8586f5a9e50ccc2a9c64 (pega um jogo com id passado, se o id não existir você receberá um erro)
![image](https://user-images.githubusercontent.com/69086171/119346148-3bc41f80-bc70-11eb-8b1c-6939abcee10a.png)

get - http://localhost:3002/api/v1/games/ (rota para pegar todos os jogos cadastrados na base de dados)
![image](https://user-images.githubusercontent.com/69086171/119346349-7b8b0700-bc70-11eb-86b6-06b7fd505916.png)

post - http://localhost:3002/api/v1/game (rota para criar um novo jogo, devemos passar as informações via body)
![image](https://user-images.githubusercontent.com/69086171/119346559-bf7e0c00-bc70-11eb-9147-610ddc7cf60b.png)

put - http://localhost:3002/api/v1/game/60ab994f1982092e3853b241 (rota para atualizar um jogo por id, devemos informar o id do jogo correto)
![image](https://user-images.githubusercontent.com/69086171/119346667-e6d4d900-bc70-11eb-9233-99d39d1045fa.png)

delete - http://localhost:3002/api/v1/game/60ab994f1982092e3853b241 (rota para deletar um jogo com id informado, devemos informa o id do jogo correto)

![image](https://user-images.githubusercontent.com/69086171/119346778-0a981f00-bc71-11eb-9eea-9ac4640a8e95.png)
