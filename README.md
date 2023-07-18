# Inkdrop

List and search over your [Inkdrop](https://inkdrop.app) notes

# How to configure your own Inkdrop HTTP Server:

Docs for getting started on the HTTP Server: https://docs.inkdrop.app/manual/accessing-the-local-database#accessing-via-http-advanced

From `config.cson` copy the auth credentials and paste them on extension settings:
```cson
'*':
  core:
    server:
      enabled: true
      port: 19840
      bindAddress: '127.0.0.1'
      auth: # copy the following credentials:
        username: 'foo' 
        password: 'bar'
```