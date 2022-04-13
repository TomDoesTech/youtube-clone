import express from "express";
import { processRequestBody } from "zod-express-middleware";
import { loginHandler } from "./auth.controller";
import { loginSchema } from "./auth.schema";

const router = express.Router();

router.post("/", processRequestBody(loginSchema.body), loginHandler);

export default router;
