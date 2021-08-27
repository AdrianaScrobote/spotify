import express, { json } from "express";

const app = express();

export default async function errorHandler(error: any, req: any, res: any, next: any) {
    res.status(500).json({message: error.toString()})
}