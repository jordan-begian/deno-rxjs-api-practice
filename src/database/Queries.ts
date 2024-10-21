import { of, Observable } from "rxjs";
import type { HelloWorld } from "../models/DTO.ts";

export const queries = {
  helloWorld: (): Observable<HelloWorld> => {
    const response: HelloWorld = {
      message: "Hello, Wold!"
    }
    return of(response);
  }
}