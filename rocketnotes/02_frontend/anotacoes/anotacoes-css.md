# Pré Processadores CSS

Um CSS pré processador quer dizer que você não vai utilizar esse arquivo em produção. Na verdade, ele será processado para utilização final no css da sua aplicação.

## Qual a vantagem?

- facilidade na manuntenção;
- ajuda a escrever código mais limpo;
- organização;
- Possui a minificação do arquivo.

## CSS-in-Js

CSS-in-JS aproveita os metodos atuais de componetização em javascript para criar componentes.

## Styled Components

Styled Components foi desenvolvido para melhorar a maneira que lidamos com o css nos componentes.

#### Vantagens do Styled Components

- Sem colisão de classes;
- Desempenho;
- Estilo dinâmico;
- Manunteção sem dor.

##### Instalando Styled Components

**https://styled-components.com/**

- npm install --save styled-components

###### Como importar o Styled Components e utilizar nos primeiros passos:

- A estrutura utilizada para componente no curso foi desta forma:

![alt text](./prints/styled.png)

- O css será executado dentro do `style.js`. Sendo criado como um componente que será exportado da seguinte forma:

![alt text](./prints/styled2.png)

![alt text](./prints/styled3.png)

###### Definindo um tema pelo Styled Components

![alt text](./prints/styled4.png)
_Primeiro você terá de importar o `ThemeProvider` do Styled Components da seguinte forma_

![alt text](./prints/styled5.png)
_E aplicando assim_

###### Definindo configurações globais com o Styled Components

![alt text](./prints/styled6.png)
_A organização das pastas passada pelo curso_

![alt text](./prints/styled7.png)
_E o arquivo já configurado assim:_

![alt text](./prints/styled8.png)
_Não esqueça de importar o global dentro do ThemeProvider_


