import express, { json } from "express";

const app = express();

export default async function errorHandler(error: any, req: any, res: any, next: any) {
    console.log("message: " + error.toString());
    res.status(500).json({message: 'Internal Server Error'})
}