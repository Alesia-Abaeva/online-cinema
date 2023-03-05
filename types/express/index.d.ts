import express from "express";

declare global {
  namespace Express {
    interface Request {
      user?: Record<string, any>;
    }
  }
}

interface User {
  email: string;
  name?: string;
  password: string;
}
