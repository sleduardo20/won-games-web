global.fetch= require('node-fetch');

import { server } from '../src/utils/mockServer/server';

beforeAll(()=> {
  //ficar escutando todas as chamadas de testes
  server.listen()
})

afterEach(()=> {
  //resetar todos os handlers para cada teste chamado
  server.resetHandlers()
})

afterAll(()=> {
  //fecha o server e limpa os testes
  server.close()
})

