# Countdown Personalizado

Um contador de contagem regressiva interativo e totalmente personalizável construído em **React puro**, desenvolvido com o objetivo de exercitar conceitos fundamentais de desenvolvimento frontend, manipulação de estado, efeitos colaterais e estilização dinâmica.

---

## Funcionalidades

O projeto permite que o usuário crie uma experiência visual única para a sua contagem regressiva através das seguintes customizações:

* **Definição de Data:** Escolha o dia e horário alvo para o término da contagem.
* **Temas Customizados:** Alternância de temas visuais para o contador.
* **Imagem de Fundo Dinâmica:** Define o background do projeto inserindo qualquer URL de imagem da web.
* **Cor de Destaque:** Personalização das cores dos números e elementos principais através de um seletor de cores ou input.

---

## Tecnologias Utilizadas

* **React (Hooks):** `useState` para gerenciamento de dados e `useEffect` para o ciclo de vida do timer.
* **JavaScript (ES6+):** Manipulação de datas com o objeto `Date`.
* **CSS3 / Styled Components:** Estilização dinâmica baseada nas escolhas do usuário.

---

## Como Executar o Projeto

Siga os passos abaixo para rodar o projeto localmente em sua máquina:

### 1. Clonar o Repositório
```bash
git clone https://github.com/Rodrigonpp/countdown
```

### 2. Entrar no Diretório
```bash
cd countdown
```

### 3. Instalar as Dependências
```bash
npm install
```

### 4. Iniciar o Servidor de Desenvolvimento
```bash
npm run dev
```
Abra o navegador em `http://localhost:5173` (ou na porta indicada no seu terminal) para ver o resultado.

---

## Aprendizados e Foco do Frontend

Este projeto foi essencial para consolidar conhecimentos práticos em:
* **Gerenciamento de Intervalos:** Uso correto do `setInterval` dentro do ecossistema do React.
* **Estilização Dinâmica:** Aplicação de variáveis CSS ou *props* inline para mudar o background e a cor de destaque em tempo real conforme o input do usuário.
* **Manipulação de Datas:** Cálculos matemáticos para converter milissegundos restantes em Dias, Horas, Minutos e Segundos.