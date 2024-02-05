const request = require("supertest");
const mysql = require("../../../src/lib/mysql");
const { app } = require("../../../app");
jest.mock("../../../src/lib/mysql");

describe("Create News", () => {
  it("should return a 200 OK status code for POST request to /news with matchId", async () => {
    mysql.query.mockResolvedValue({ insertId: 1 });
    const response = await request(app)
      .post("/news")
      .send({ title: "test", description: "test", matchId: 1, tourId: 1 });
    expect(response.status).toBe(200);
    expect(response.body.insertId).toBe(1);
  });

  it("should return a 200 OK status code for POST request to /news without matchId", async () => {
    mysql.query.mockResolvedValue({ insertId: 1 });
    const response = await request(app)
      .post("/news")
      .send({ title: "test", description: "test", tourId: 1 });
    expect(response.status).toBe(200);
    expect(response.body.insertId).toBe(1);
  });

  it("should return a 500 Internal Server Error status code for POST request to /news", async () => {
    mysql.query.mockRejectedValue(new Error());
    const response = await request(app)
      .post("/news")
      .send({ title: "test", description: "test", tourId: 1 });
    expect(response.status).toBe(500);
  });
});
