# 🔐 Privacy Policy Analyzer

Ferramenta web para facilitar a leitura e compreensão de políticas de privacidade, utilizando inteligência artificial para extrair os pontos mais relevantes de forma clara e objetiva.

## 🧠 Problema

Políticas de privacidade são documentos essenciais, mas:

- 📄 **Extensas**: muitas vezes com dezenas de páginas.
- 🧾 **Linguagem técnica**: cheia de termos jurídicos difíceis de entender.
- 🌀 **Complexas**: mal estruturadas e confusas.
- ❓ **Pouco claras**: usam termos vagos ou ambíguos.

Resultado? A maioria dos usuários **não lê** ou **não entende** o conteúdo, gerando uma grande assimetria de informação.

## 💡 Solução

O **Privacy Policy Analyzer** atua como um **tradutor inteligente** de políticas de privacidade. Com poucos cliques, o usuário pode:

- 📥 Submeter uma política
- 🧪 Analisar automaticamente com IA
- ✅ Visualizar os principais pontos extraídos de forma clara

---

## 🛠 Tecnologias Utilizadas

### Backend
- **Python**
- **Flask**
- **SQLite**
- **API REST**
- Integração com **Mistral AI** para análise de políticas

### Frontend
- **React**
- **JavaScript**

---

## ⚙️ Funcionalidades

- ✅ Criar nova política
- 📋 Listar políticas existentes
- 🔍 Visualizar uma política específica
- 🤖 Analisar política com IA (Mistral)

---

## 🧱 Requisitos Técnicos

- API com rotas REST:
  - `POST /politicas` – criar política
  - `GET /politicas` – listar políticas
  - `GET /politicas/:id` – visualizar política
  - `POST /politicas/:id/analisar` – analisar política

- Banco de dados relacional (SQLite)
- Integração com a API da Mistral (https://mistral.ai/)
  - Usar plano gratuito
  - **Chave da API deve ser armazenada em variável de ambiente**
  
---

## 🌐 Aplicação Web

A interface web é composta por três telas principais:

1. **📋 Lista de Políticas** – exibe todas as políticas cadastradas
2. **➕ Criar Política** – formulário para adicionar novas políticas
3. **🔍 Visualizar Política** – mostra o conteúdo da política e possui o botão **Analisar** com IA

---

## 🚧 Em desenvolvimento

Este projeto está em andamento e novas funcionalidades estão sendo adicionadas! 💬

---

## 👩‍💻 Autora

**Thauanny da Cruz**  
[GitHub](https://github.com/ThauannydaCruzz)

