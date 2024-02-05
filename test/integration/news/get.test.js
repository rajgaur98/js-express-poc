const request = require("supertest");
const mysql = require("../../../src/lib/mysql");
const { app } = require("../../../app");
jest.mock("../../../src/lib/mysql");

describe("Get News", () => {
  it("get all news", async () => {
    mysql.query.mockResolvedValue([]);
    const response = await request(app).get("/news");
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  it("get news by matchId", async () => {
    mysql.query.mockResolvedValue([]);
    const response = await request(app).get("/news/match/1");
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  it("get news by tourId", async () => {
    mysql.query.mockResolvedValue([]);
    const response = await request(app).get("/news/tour/1");
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  it("get news by sportId", async () => {
    mysql.query.mockResolvedValue([]);
    const response = await request(app).get("/news/sport/1");
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  it("should return a 500 Internal Server Error status code for GET request to /news", async () => {
    mysql.query.mockRejectedValue(new Error());
    const response = await request(app).get("/news");
    expect(response.status).toBe(500);
  });
});
