const Database = require("./config"); //Importando o arquivo config

// Constante pra guardar as seguintes funções
const initDb = {
  //
  async init() {
    // async = Tem que estar junto ao await. São meio que irmão gêmeos siameses. Um não fica sem o outro.

    // await = Serve pra não rodar a próxima linha sem que tenha retornado algum resultado | Significa esperar rodar o Database() pra ir pra próxima linha. Isso garante que a const db receba todos os valores já com os resultados do Database()
    const db = await Database();

    // Aqui é escrito o código SQL
    // Comando SQL sempre em MAIÚSCULO. CREATE TABLE, SHOW, SELECT FROM, INSERT, ALTER...
    // Novamente o Await para ele rodar o primeiro comando por completo antes de ir pro próximo
    await db.exec(`
    CREATE TABLE rooms(
      id INTEGER PRIMARY KEY, 
      pass TEXT
      )`);

    await db.exec(`
    CREATE TABLE questions(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      read INT,
      room INT
      )`);

    await db.close(); //Fechando o db (como se fosse uma caixa. Lá em cima, nós abrimos e agora estamos fechando)
  },
};

initDb.init();
