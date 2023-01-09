import { ConnectOptions, Connection, createConnection } from 'mongoose';

export const createMongooseConnection = async (): Promise<Connection> =>
  createConnection(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions);

export const databaseProvider = {
  provide: 'DbConnection',
  useFactory: createMongooseConnection,
};
