import {expect} from '@loopback/testlab';
import * as cp from 'child_process';
import * as path from 'path';
import * as http from 'http';

describe('App error handler (acceptance)', () => {
  let httpServer: http.Server;

  before(givenListeningServer);
  after(stopHttpServer);

  it('throws error for not starting', function() {
    this.timeout(5000);
    const child = cp.spawnSync('node', ['.'], {
      cwd: path.resolve(__dirname, '../..'),
    });
    expect(child.stderr.toString()).to.match(/Cannot start the application!/);
    expect(child.stderr.toString()).to.match(/EADDRINUSE/);
    expect(child.status).to.equal(1);
  });

  async function givenListeningServer() {
    httpServer = http.createServer();
    await httpServer.listen(3000);
  }

  function stopHttpServer() {
    httpServer.close();
  }
});
