import { Context, Status } from "@oak/oak";
import { service } from "../services/Service.ts";
import type { HelloWorld } from "../models/DTO.ts";

export const controller = {
  helloWorld: (context: Context) => {
    service.helloWorld().subscribe({
      next: (result: HelloWorld) => {
        context.response.status = Status.OK;
        context.response.body = result;
      },
      error: (error: Error) => {
        context.response.status = Status.InternalServerError;
        context.response.body = error.message;
      }
    });
  },
};