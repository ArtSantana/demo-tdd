# Test Driven Development

Dentro do desenvolvimento de software temos diversas abordagens que podemos utilizar para nos guiar durante a execução de um projeto. Dessa forma temos metodologias que podem ser escolhidas como um norte sendo uma delas o TDD(Test-Driven Development) dentre tantas outras como DDD(Domain-Driven Design) ou BDD(Behavior Driven Development).

Neste momento, gostaria de abordar especificamente o TDD e como uma proposta focada nos testes pode trazer mais confiabilidade para o sistema. Pois, ao manter o foco em criar testes unitários para todas nossas funcionalidades estamos aumentando consideravelmente a cobertura de testes que teremos por toda a aplicação, dessa forma, estamos diminuindo a probabilidade de introduzirmos novos bugs ao realizar manutenções no código, dado que, com a alta cobertura temos mais chances dos testes falharem ao ser introduzido um novo bug na aplicação. Vale ressaltar que ao desenvolver os testes antes da implementação nos dá a possibilidade de focarmos nos termos de aceite da feature que desejamos adicionar ao sistema.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bdkmq0t2fqijm8v3o5yu.jpeg)

## Conceitos

Sendo assim, é interessante entendermos o ciclo por trás do TDD para nos orientar ao nosso desenvolvimento guiado pelos testes.

### 1. Crie um caso de teste

Exatamente, com o TDD iremos sempre nossos testes antes mesmo de iniciarmos a implementação da funcionalidade que almejamos, consequentemente iremos escrever testes sem sofrer influência da implementação realizada no código. De tal maneira que podemos nos manter fiéis aos requisitos da feature que será desenvolvida. Note que no exemplo não iremos implementar nem ao menos o método que será utilizado.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/j808uqo576jnudhuyrtt.png)

### 2. Rodando os testes

Visto que, no passo anterior nos escrevemos os testes antes de iniciarmos o desenvolvimento da nossa funcionalidade não será incomum que possivelmente sua aplicação não seja capaz de ser compilada, ou seja, mesmo que compile os testes irão falhar e será perfeitamente normal para este momento dessa forma temos certeza de que os testes estão funcionando.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1wnv4mtb02y8tzfgknaa.gif)

### 3. Implementação da solução

Neste momento, já podemos desenvolver a nossa funcionalidade de tal forma que passe nos testes realizados anteriormente, contudo, não necessariamente devemos terminar com os testes sendo bem sucedidos, pois em certos casos é normal que após esse etapa nós voltemos ao código para fazer uma refatoração a fim de melhorar a implementação utilizada

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/042cv47nbd21c1ps7skv.png)

### 4. Rodando os testes novamente

Agora que temos nossos testes criados e a funcionalidade implementada todos nossos testes deverão passar, caso algum teste falhe, volte ao passo anterior e revise o código desenvolvido para que a aplicação cumpra os requisitos solicitados.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/17djqjxqa5ufqot6cz3r.gif)

### 5. Refatore a implementação

Como dito anteriormente, aqui voltaremos a solução desenvolvida e tentaremos refatorar a solução que desenvolvemos com o objetivo de tornar o código mais legível e torná-lo menos custoso para receber manutenções ou adição de features. Sendo assim, é interessante buscarmos eliminar código duplicado, quebrar métodos/funções extensas em métodos menores. Contudo, no nosso exemplo não será necessário por se tratar de um caso muito simples mas em um contexto real e mais complexo não é incomum a necessidade de executar esse refactor.

Desta forma, seguiremos esse ciclo de desenvolvimento durante todas as funcionalidades que implementarmos na aplicação, sendo assim, iremos conseguir ter uma cobertura de testes muito abrangente trazendo mais confiabilidade para o nosso sistema e consequentemente retirando muito peso das costas dos QAs e Testers de sua equipe/empresa. Vale ressaltar que TDD não se reduz apenas aos testes unitários é possível e aconselhável também seguir a mesma metodologia enquanto escrevendo testes de integração de sua API por exemplo.
