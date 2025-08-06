# 🌀 cicd-run

Projeto de automação de build e deploy para aplicações serverless no **Google Cloud**, com foco em **Cloud Run** e **Cloud Functions**, usando **GitLab CI/CD**, **Docker** e estrutura simples de configuração via arquivos JSON.

---

## 📌 Stack Utilizada

- ☁️ **Google Cloud**: Cloud Run, Cloud Functions
- 🛠️ **CI/CD**: GitLab CI/CD (`.gitlab-ci.yml`)
- 🐳 **Container**: Docker
- 📁 **Configuração**: `env.json`, `secrets/`
- 📦 **Node.js**: Aplicação simples para testes de deploy

---

## 🚀 Objetivo

Automatizar o processo de:

1. Build da imagem Docker
2. Deploy para **Cloud Run** ou execução como **Cloud Function**
3. Controle via CI/CD com GitLab
4. Separação de ambientes e segredos por pasta (`secrets/`)

---

## 🗂️ Estrutura do Projeto

```bash
cicd-run/
├── run/                    # Aplicação principal (Node.js)
│   ├── .gitlab-ci.yml      # Pipeline GitLab CI (modo isolado)
│   ├── Dockerfile          # Imagem da aplicação
│   ├── env.json            # Configurações de ambiente
│   └── index.js            # Código principal da aplicação
├── secrets/                # Variáveis e segredos por ambiente
├── .gitlab-ci.yml          # Pipeline raiz (opcional)
├── Dockerfile              # Dockerfile raiz (opcional)
├── env.json                # Configuração global (fallback)
├── index.js                # Entrada da aplicação (Cloud Function)
└── package.json            # Dependências do Node.js
```

## ⚙️ Execução Local
1. Instale dependências
```npm install```
2. Execute localmente
```node index.js```

##  📦 Build Docker
```
docker build -t cicd-run-app .
docker run -p 8080:8080 cicd-run-app
```

## 🚀 Deploy no Cloud Run
Pré-requisitos
Autenticação com GCP:
```
gcloud auth login
gcloud config set project [SEU_PROJECT_ID]
```

Deploy manual:
```
gcloud run deploy cicd-run \
  --source=. \
  --region=us-central1 \
  --platform=managed \
  --allow-unauthenticated
```

## 🧪 Deploy no GitLab CI/CD
Pipeline .gitlab-ci.yml
Arquivo já configurado com as seguintes etapas:
```
stages:
  - build
  - deploy

build:
  script:
    - docker build -t cicd-run-app .

deploy:
  script:
    - gcloud run deploy ...
```
Use variáveis como GCP_PROJECT_ID, GCP_REGION, SERVICE_NAME para parametrização no CI/CD.

🔐 Gerenciamento de Segredos
Utilize a pasta secrets/ para manter arquivos sensíveis (por ambiente).

Importante: não suba arquivos reais para o repositório.

Integração com GCP Secret Manager é recomendada para produção.

🙋‍♂️ Autor
Vitor Hugo de Sousa Santos
https://www.linkedin.com/in/vitor-santos-urlprofile/

