## Validador de CPF

### Uma refatoração de código

> Refatoração é uma _"alteração feita na estrutura
> interna do software para
> torná-lo mais fácil de ser
> entendido e menos custoso de ser modificado,
> sem alterar o seu comportamento observável."_
> \- Martin Fowler

Este repositório contém um exercício de refatoração, feito após a primeira aula do curso [Clean Code e Clean Architecture](https://app.branas.io/public/products) (Turma 4) do mestre [Rodrigo Branas](https://www.linkedin.com/in/rodrigobranas/)

#### Documentação

Veja os [casos de teste](./src/validate-cpf.test.js)

#### Execução dos casos de teste

- `npm install`
- `npm run test:live`

#### Execução passo a passo

Para verificar a execução passo a passo, utilizando o VSCode:

- Use o arquivo [validate-cpf-step-by-step.js](./src/validate-cpf-step-by-step.js) para inserir um CPF. Por padrão, executa com o valor `111.444.777-35`.
- Utilize os breakpoints para marcar as linhas onde deseja que a execução seja pausada
- Clique em `F5` ou vá até a aba lateral esquerda, em "Executar e Debugar" (`Ctrl + Shift + D`) e clique no ícone de play ("Iniciar a Depuração")

#### Resultado da refatoração

Para verificar o resultado, verifique os arquivos de [antes](./src/validate-cpf-before.js) e [depois](./src/validate-cpf-after.js) do processo de refatoração

#### Referências

[http://www.macoratti.net/alg_cpf.htm](http://www.macoratti.net/alg_cpf.htm)