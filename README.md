# Sobre

Estes documento README tem como objetivo fornecer as informações necessárias para a inicialização do projeto.

## Inicialização do projeto:

````bash
> npm install
> npm run prestart
> npm run dev
````
_link das rotas existentes_
> http://localhost:3334/docs

## Objetivo do Projeto:
Construção de um site que disponibilize a funcionalidade de encurtamento de URLs
### Requisitos básicos do projeto:

#### 1 - O site deve disponibilizar a funcionalidade de encurtar a URL original e gerar um código único de até 5 caracteres;
_Exemplo:_
- Ao inserir a url: www.google.com.br o endereço resultante deve ser zg.com.br/gkMTZ
A URL encurtada não irá expirar
Se o usuário submeter a mesma url à encurtamento várias vezes, a url encurtada deve ser diferente.
#### 2 - Ao acessar a url encurtada deve ocorrer o redirecionamento para o endereço de destino, com o mínimo de delay;
#### 3 - A aplicação deve possuir uma arquitetura que suporte o máximo de acessos simultâneos;
#### 4 - Não há necessidade de autenticação
#### 5 - O layout do site deve ser limpo e de fácil uso (Embora não seja essa a prioridade)

### Orientações a respeito da apresentação da solução:

- A solução deve ser apresentada de maneira completa (Arquitetura, layout e código);
- O uso de boas práticas de codificação e Design Patterns serão observados;
- Recursos adicionais servirão como diferencial desde que os requisitos básicos tenham sido atendidos
- No decorrer da apresentação os desenvolvedores poderão fazer perguntas a fim de esclarecer dúvidas acerca da solução apresentada.
