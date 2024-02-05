const {
  getAllNews,
  createNews,
  getNewsByMatchId,
  getNewsByTourId,
  getNewsBySportId,
} = require("../models/news");

const getAll = async () => {
  return await getAllNews();
};

const create = async (body) => {
  const { title, description, matchId, tourId } = body;

  if (!title) {
    throw new Error("title is required");
  }
  if (!description) {
    throw new Error("description is required");
  }
  if (!tourId) {
    throw new Error("tourId is required");
  }

  return await createNews({ title, description, matchId, tourId });
};

const getByMatchId = async (params) => {
  const { matchId } = params;

  if (!matchId) {
    throw new Error("matchId is required");
  }

  return await getNewsByMatchId({ matchId });
};

const getByTourId = async (params) => {
  const { tourId } = params;

  if (!tourId) {
    throw new Error("tourId is required");
  }

  return await getNewsByTourId({ tourId });
};

const getBySportId = async (params) => {
  const { sportId } = params;

  if (!sportId) {
    throw new Error("sportId is required");
  }

  return await getNewsBySportId({ sportId });
};

module.exports = {
  getAllNews: getAll,
  createNews: create,
  getNewsByMatchId: getByMatchId,
  getNewsByTourId: getByTourId,
  getNewsBySportId: getBySportId,
};
