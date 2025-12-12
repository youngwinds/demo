import { IVSeed } from "./VSeed";

export type Pipe = (spec: any, vseed: IVSeed) => any;
export type Pipeline = Pipe[];
