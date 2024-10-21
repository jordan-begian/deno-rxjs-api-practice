import { Router } from "@oak/oak"
import { controller } from "../controllers/Controller.ts";

export const router = new Router();

router.get("/", controller.helloWorld);