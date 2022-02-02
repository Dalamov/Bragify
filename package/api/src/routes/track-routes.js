const Router = require("express").Router;

const { authMiddleware } = require("../middlewares");
const { trackController } = require("../controllers");

const trackRouter = Router();

trackRouter.post("/tracks", trackController.createTrack);
trackRouter.get("/tracks", trackController.fetchTracks);
// trackRouter.get("/tracks/:id", authMiddleware, trackController.fetchTrackById);

module.exports = {
  trackRouter: trackRouter,
};