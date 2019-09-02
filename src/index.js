import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './client/Routes';
import createStore from './helpers/createStore';
import renderer from './helpers/renderer';

const app = express();

app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com/', {
    proxyReqOptDecorator(opts) {
      const modifiedOpts = opts;
      modifiedOpts.headers['x-forwarded-host'] = 'localhost:3000';
      return modifiedOpts;
    },
  }),
);

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore(req);

  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => (route.loadData ? route.loadData(store) : null))
    .map((promise) => {
      if (promise) {
        return new Promise((resolve) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);
    if (context.notFound) {
      res.status(404);
    }
    res.send(content);
  });
});

app.listen(3000, () => {
  console.log('listening on 3000....');
});
