# API/Backend

Pasta com o código-fonte do backend da aplicação.

## Variáveis de ambiente

Crie um arquivo `.env` na pasta `src` (ou ajuste conforme sua configuração) com:

```
DATABASE_URL=postgres://user:password@localhost:5432/dbname
JWT_SECRET=sua_chave_secreta
JWT_EXPIRES_IN=1d
PORT=3333
```

`JWT_SECRET` é obrigatório para emissão/validação dos tokens de autenticação.
