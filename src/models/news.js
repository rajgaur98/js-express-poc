const mysql = require("../lib/mysql");

const getAllNews = async () => {
  const statement = "select * from news;";
  const parameters = [];

  return await mysql.query(statement, parameters);
};

const createNews = async (params) => {
  const statement =
    "insert into news (title, description, tourId, matchId) values (?, ?, ?, ?)";
  const parameters = [
    params.title,
    params.description,
    params.tourId,
    params.matchId,
  ];

  return await mysql.query(statement, parameters);
};

const getNewsByMatchId = async (params) => {
  const statement = "select * from news where matchId = ?";
  const parameters = [params.matchId];

  return await mysql.query(statement, parameters);
};

const getNewsByTourId = async (params) => {
  const statement = "select * from news where tourId = ?";
  const parameters = [params.tourId];

  return await mysql.query(statement, parameters);
};

const getNewsBySportId = async (params) => {
  const statement =
    "select news.* from sports inner join tours on sports.id = tours.sportId " +
    "inner join news on news.tourId = tours.id " +
    "where sports.id = ?";
  const parameters = [params.sportId];

  return await mysql.query(statement, parameters);
};

module.exports = {
  getAllNews: getAllNews,
  createNews: createNews,
  getNewsByMatchId: getNewsByMatchId,
  getNewsByTourId: getNewsByTourId,
  getNewsBySportId: getNewsBySportId,
};
