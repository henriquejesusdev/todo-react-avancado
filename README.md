# Todo React Avançado

   Uma aplicação de lista de tarefas (Todo List) desenvolvida com React, utilizando Hooks, Context API, Hooks customizados e memoization para otimizar performance.

   ## Tecnologias Utilizadas
   - **React**: Biblioteca JavaScript para construção de interfaces.
   - **Vite**: Ferramenta de build rápida para projetos web.
   - **Tailwind CSS**: Framework CSS para estilização.
   - **LocalStorage**: Para persistência de dados no navegador.

   ## Funcionalidades
   - Adicionar novas tarefas.
   - Marcar tarefas como concluídas.
   - Remover tarefas.
   - Filtrar tarefas (todas, concluídas, pendentes).
   - Persistência de dados no localStorage.
   - Otimização com React.memo e useMemo.

   ## Instruções para Rodar o Projeto Localmente

   1. **Clone o repositório**:
      ```bash
      git clone https://github.com/seu-usuario/todo-react-avancado.git
      cd todo-react-avancado
      ```

   2. **Instale as dependências**:
      ```bash
      yarn install
      ```

   3. **Inicie o servidor de desenvolvimento**:
      ```bash
      yarn dev
      ```

   4. Abra o navegador e acesse `http://localhost:5173`.

   ## Estrutura do Projeto
   - `src/components/`: Componentes React (TodoForm, TodoItem, TodoList, TodoFilters).
   - `src/context/`: Contexto para gerenciar o estado global (TodoContext).
   - `src/hooks/`: Hook customizado para manipulação de localStorage (useLocalStorage).
   - `src/App.jsx`: Componente principal da aplicação.
   - `src/index.css`: Estilização com Tailwind CSS.

   ## Notas
   - A aplicação segue a abordagem Mobile First.
   - Use o React Developer Tools para inspecionar hooks e contexto.
   - Teste a performance observando renderizações no console.