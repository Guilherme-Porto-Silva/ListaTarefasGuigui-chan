# Lista de Tarefas (To-Do List)

Uma aplicação web simples e modularizada para gerenciamento de tarefas diárias, desenvolvida com HTML5, CSS3 e JavaScript puro utilizando o conceito de **ES Modules**.

---

## 🚀 Funcionalidades

- **Adicionar Tarefas:** Insira novas tarefas à sua lista através de um formulário simples.
- **Marcar como Concluída:** Alterne o status da tarefa entre pendente e concluída.
- **Excluir Tarefas:** Remova itens que não são mais necessários na lista.
- **Estrutura Modular:** Código JavaScript organizado em componentes reutilizáveis utilizando import/export nativo do ES6.

---

## 📁 Estrutura do Projeto

```text
.
├── index.html
├── css/
│   └── style.css
└── scripts/
    ├── main.js
    └── components/
        ├── GetListItem.js
        ├── TaskConclusion.js
        ├── TaskCreation.js
        └── TaskDeletion.js
```

### Componentes Principais:
- **`main.js`**: Ponto de entrada do JavaScript responsável por inicializar a aplicação.
- **`TaskCreation.js`**: Lida com a criação de novas tarefas e manipuladores do formulário.
- **`TaskConclusion.js`**: Controla o estado de conclusão da tarefa.
- **`TaskDeletion.js`**: Gerencia a remoção de tarefas.
- **`GetListItem.js`**: Função utilitária para capturar o nó da lista no DOM.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Semântica e estrutura de dados customizada (`data-attributes`).
- **CSS3:** Estilização com Google Fonts (*BioRhyme* e *Space Mono*) e regras responsivas (`clamp`).
- **JavaScript (ES6+):** Módulos JS (`import`/`export`), manipulação do DOM e eventos.

---

## 💻 Como Executar o Projeto

Como o projeto utiliza **ES Modules** (`type="module"` no arquivo HTML), para executar a aplicação localmente é recomendado utilizar um servidor HTTP local devido às restrições de CORS ao abrir arquivos diretamente no navegador (`file://`).

1. **Usando a extensão Live Server no VS Code:**
   - Instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
   - Abra o arquivo `index.html`.
   - Clique com o botão direito e selecione **"Open with Live Server"**.

2. **Usando Node.js (Servidor estático):**
   ```bash
   # Executar via npx (Http-server ou serve)
   npx serve .
   ```