# Swap Test
 
O Case consiste em criar um serviço que recupere todas as issues de um determinado repositório no github e retorne um JSON assincronamente (1 dia de diferença) via webhook com  as issues e contribuidores que existiam no projeto no momento da chamada.
#

## Solução

Criar uma rota via post ou get que receba os nomes do usuário e do repositório respectivamente para ser consumido por um client da Api do Github.
- Primeira chamada retorna as informações do usuário/repositório
- Segundo chamada retorna as informações das issues
- Terceira chamada retorna as informações dos contribuidores do repositório.

Apos ter essas informações advindas da API tenho que transformar os dados pois só preciso de alguns específicos de cada chamada.
Sendo assim criei um arquivo na pasta utils que recebe o retorno das apis e pega as informações e retorna da maneira solicitada.
/swapTest/src/utils/transforms-datas-repo.ts

Após esse processamento é criado um único objeto que retorna para o service /swapTest/src/services/git-services.ts salvar na base de dados, criando assim uma fila de processamento onde 
posteriormente será utilizado por outro arquivo, salvando o dado retorna uma mensagem para o usuário com algumas informações de criação da própria base de dados que nesse case é o Mongodb.

O arquivo src/services/webhook-services.ts tem a função de verificar os dados salvos na base comparar as datas e enviar para o webhook ou seja ele compara a data de criação com a data atual caso ultrapasse 24 horas ele envia o dado para o webhook e deleta da base o dado enviado.
Essa funcionalidade independe de requests, foi criado um timeout configurável para essa verificação sendo assim ela fica buscando e enviando sem a necessidade de ser chamada ou ativada.


## Sumário
- [Pacotes Utilizado](#pact)
- [Design Patterns](#design)

<h2 id="pact">Pacotes Utilizado</h2>

#

### Eslint:
SLint é uma ferramenta de análise de código estática para identificar padrões problemáticos encontrados no código JavaScript. <a href="https://en.wikipedia.org/wiki/ESLint">Fonte</a>

#### Por que o uso?
Criar uma padronização do código baseado no padrão de código Airbnb auxiliando a escrever código de maneira mais limpa e clara.

#

### Prettier:
Prettier é um formatador de código com suporte a diversos tipos de arquivos como JavaScript, JSX, Angular, Vue, TypeScript, HTML, CSS, SCSS e JSON. <a href="https://blog.cod3r.com.br/configurando-a-extensao-prettier-no-visual-studio-code/#:~:text=Prettier%20%C3%A9%20um%20formatador%20de,%2C%20CSS%2C%20SCSS%20e%20JSON.">Fonte</a>

#### Por que o uso?
Para "forçar" um padrão de codificação. 
#

### Express:
Express.js é um framework para Node.js que fornece recursos mínimos para construção de servidores web.

#### Por que o uso?
Framework trás uma gama de ferramentas que facilita a criação de aplicações back-end no NodeJs, e também um conjunto com sistemas de templates, aplicações full-stack
#

### Body-Parser
O body-parser é um módulo capaz de converter o body da requisição para vários formatos. Um desses formatos é json, exatamente o que queremos.
#

