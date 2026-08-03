import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { env } from './config/env';

const app = express();
const httpServer = createServer(app);

// Middlewares
app.use(helmet());
app.use(cors({
  origin: env.CLIENT_URL,
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// Socket.io setup
const io = new Server(httpServer, {
  cors: {
    origin: env.CLIENT_URL,
    credentials: true,
  },
});

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Routes
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'SWAP API is running' });
});

// Start Server
httpServer.listen(env.PORT, () => {
  console.log(`Server running on port ${env.PORT} in ${env.NODE_ENV} mode`);
});
