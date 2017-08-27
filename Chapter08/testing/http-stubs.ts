import {MockBackend, MockConnection} from '@angular/http/testing';
import {Response, ResponseOptions} from '@angular/http';

export class ConnectionHelper {
  setupConnections(mockBackend: MockBackend, options: any) {
    mockBackend.connections.subscribe((connection: MockConnection) => {
      // if (connection.request.url.indexOf('doctor') >= 0) {
        const responseOptions = new ResponseOptions(options);
        const response = new Response(responseOptions);
        connection.mockRespond(response);
      // }
    });
  }
}
