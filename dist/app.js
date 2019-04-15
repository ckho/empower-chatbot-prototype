'use strict';

var _fbMessengerBotApi = require('fb-messenger-bot-api');

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let app = new _koa2.default();
let router = new _koaRouter2.default();

const messageClient = new _fbMessengerBotApi.FacebookMessagingAPIClient(process.env.PAGE_ACCESS_TOKEN);

const profileClient = new _fbMessengerBotApi.FacebookProfileAPIClient(process.env.PAGE_ACCESS_TOKEN);

// const result = await profileClient.setGreetingMessage('Hello World! Welcome to EMpower.');

router.get('/', (ctx, next) => {
  // ctx.router available
});

console.log(process.env);

router.get('/api/webhook', _fbMessengerBotApi.ValidateWebhook.validateServer);
router.post('/api/webhook', async (req, res) => {
  try {
    const incomingMessages = messageParser.parsePayload(req.body);
    await messagingClient.markSeen(senderId);
    await messagingClient.toggleTyping(senderId, true);
    //promise based reaction on message send confirmation
    const result = await messagingClient.sendTextMessage(senderId, 'Hello');
    console.log('Result sent with: ${result}');
  } catch (e) {
    console.log(e);
  };
  //callback based reaction on message confirmation
  messagingClient.sendTextMessage(senderId, 'Hello', result => console.log('Result sent with: ${result}'));
  // //silent message sending
  // messagingClient.sendTextMessage(senderId,'Hello');
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
//# sourceMappingURL=app.js.map