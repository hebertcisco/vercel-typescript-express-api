import type { Server } from 'node:http';
import { Logger } from '../helpers/utils/Logger';

export function gracefulShutdown(
  server: Server,
  code: string
): (event: string) => void {
  const logger: Logger = new Logger(gracefulShutdown.name);

  return (event: string): void => {
    logger.info(`${event} signal received with code ${code}`);
    logger.log('Closing http server...');
    server.close(() => {
      logger.log('Http server closed.');
      process.exit(0);
    });
  };
}
export default gracefulShutdown;
