# Swap Test

Aguardando o case ...

#

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

<h2 id="design">Design Patterns</h2>

#### Repository Pattern
 É uma representação onde você pode manter todas as operações do seu banco de dados (como uma operação Criar, Ler, Atualizar e Deletar) em um local por Entidade de Negócio, quando você precisar fazer operações com Banco de Dados, não chame diretamente drivers de banco de dados e se você tiver mais um banco de dados, ou bancos de dados diferentes para uma transação, sua aplicação só chama o método de repositório e fica transparente para quem chama.
#
