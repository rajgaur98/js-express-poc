const News = require("../controllers/news");

module.exports = function (app) {
  app.route("/news").get(async (req, res, next) => {
    try {
      return res.json(await News.getAllNews());
    } catch (err) {
      return next(err);
    }
  });

  app.route("/news").post(async (req, res, next) => {
    try {
      let body = req.body;
      let result = await News.createNews(body);
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  });

  app.route("/news/match/:matchId").get(async (req, res, next) => {
    try {
      let params = req.params;
      let result = await News.getNewsByMatchId(params);
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  });

  app.route("/news/tour/:tourId").get(async (req, res, next) => {
    try {
      let params = req.params;
      let result = await News.getNewsByTourId(params);
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  });

  app.route("/news/sport/:sportId").get(async (req, res, next) => {
    try {
      let params = req.params;
      let result = await News.getNewsBySportId(params);
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  });
};
