# React + Vite

## 📖 Guia de Fluxo de Trabalho 

### 1. Identificando o tipo de tarefa 

- `Bug`: Um problema que impede o funcionamento de uma funcionalidade ou parte do sistema.
- `Feature`: Uma nova funcionalidade ou ideia para o sistema.
- `Hotfix`: Uma correção crítica que precisa ser aplicada imediatamente em produção.


### 2. Criando a branch de trabalho (Gitflow)

O Gitflow define um modelo de branches para o projeto:

- `main`: A branch de produção
- `dev`: A branch de desenvolvimento
- `feature`: Branches para o desenvolvimento de novas funcionalidades
- `bugfix`: Branches para a correção de bugs em releases
- `hotfix`: Branches para a correção de bugs críticos encontrados em produção

<div id='branch-create-example' />  

Usando um exemplo real, uma branch para criação de cadastro de usuário poderia ficar como: `feature/cadastro-de-usuário`.

Para mais detalhes [clique aqui](https://medium.com/trainingcenter/utilizando-o-fluxo-git-flow-e63d5e0d5e04). 

#### Feature Branches

Para criar uma nova branch de feature, você deve estar na branch `dev` e em seguida criar a branch, como no comando abaixo:

```bash
git checkout dev
git checkout -b feature/nome-da-feature
```

## 📌 Padrões de Commits (Commits Semânticos)

Os commits devem seguir um padrão semântico para facilitar a leitura e o entendimento do histórico do projeto. Aqui estão alguns exemplos:

- `feat`: Uma nova feature
- `fix`: Uma correção de bug
- `docs`: Mudanças na documentação
- `style`: Mudanças que não afetam o significado do código (espaços em branco, formatação, ponto e vírgula faltando, etc)
- `refactor`: Uma mudança no código que não corrige um bug nem adiciona uma feature
- `perf`: Uma mudança no código que melhora a performance
- `test`: Adicionando testes faltantes ou corrigindo testes existentes
- `chore`: Mudanças no processo de build ou ferramentas auxiliares e bibliotecas

Usando ainda a branch criada no exemplo [acima](#branch-create-example), um commit para a branch `feature/cadastro-de-usuário`, poderia ficar como: `feat: adiciona funcionalidade a cadastro de usuários`

Para mais detalhes [clique aqui](https://www.conventionalcommits.org/en/v1.0.0/). 