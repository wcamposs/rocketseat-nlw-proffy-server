import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// faz ouvir requisições http (usa a porta como parâmetro)
app.listen(3333);
