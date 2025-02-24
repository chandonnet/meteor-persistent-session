Package.describe({
  name: "fchandonnet:persistent-session",
  version: "0.5.1",
  summary: "Persistently store Session data on the client",
  git: "https://github.com/chandonnet/meteor-persistent-session"
});

Package.onUse(function(api) {
  api.versionsFrom('2.3');
  api.use(['jquery@1.11.11', 'amplify@1.0.0', 'tracker', 'reactive-dict', 'session', 'underscore', 'ejson']);
  // If `accounts-base` is loaded, we have to make sure that this package is
  // loaded after `accounts-base` is, so we specify `weak: true` here
  api.use('accounts-base', { weak: true });
  api.addFiles('lib/persistent_session.js', 'client');
  api.export('PersistentSession', ['client']);
});

Package.onTest(function (api) {
  api.use("tinytest");
  api.use("amplify");
  api.use("random");
  api.use("underscore");
  api.use("reactive-dict"); // we only need this exposed for testing
  api.use("u2622:persistent-session");

  // expose for derping around in console
  api.export('PersistentSession', ['client']);
  api.export('ReactiveDict', ['client']);

  api.addFiles("tests/client/persistent_session.js", "client");
});
