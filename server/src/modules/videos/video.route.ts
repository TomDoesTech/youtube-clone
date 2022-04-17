import express from "express";
import requireUser from "../../middleware/requireUser";
import {
  findVideosHandler,
  streamVideoHandler,
  updateVideoHandler,
  uploadVideoHandler,
} from "./video.controller";
const router = express.Router();

router.post("/", requireUser, uploadVideoHandler);

router.patch("/:videoId", requireUser, updateVideoHandler);

router.get("/:videoId", streamVideoHandler);

router.get("/", findVideosHandler);

export default router;
