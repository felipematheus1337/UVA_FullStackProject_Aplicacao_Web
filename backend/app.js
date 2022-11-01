import express from 'express';
import cors from 'cors';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use('/', (req, res) => res.send(200).json('foi!'));
  }
}

export default new App().app;
