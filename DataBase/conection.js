const { Sequelize } = require("sequelize");

const conection = new Sequelize(
  "postgresql://postgres.bcutfkzzugvqccrbzxyo:Edueedu1...@aws-1-us-east-1.pooler.supabase.com:6543/postgres",
  {
    dialect: "postgres",
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

const DbConect = async () => {
  try {
    await conection.authenticate();
    console.log("conexão com banco de dados estabelecida com sucesso");
  } catch (err) {
    console.log(err);
  }
};

DbConect();

module.exports = conection;
