import { queries } from "../database/Queries.ts";
import { Observable } from "rxjs"
import type { HelloWorld } from "../models/DTO.ts";

export const service = {
  helloWorld: (): Observable<HelloWorld> => {
    return queries.helloWorld()
  }
};