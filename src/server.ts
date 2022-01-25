import TuyaWebsocket from "./TuyaWsClient";

const client = new TuyaWebsocket({
  accessId: "ACCESS_ID",
  accessKey: "ACCESS_KEY",
  url: TuyaWebsocket.URL.EU,
  env: TuyaWebsocket.env.PROD, // Test channel
  maxRetryTimes: 50,
});

client.open(() => {
  console.log('open');
});

client.ping(() => {
  console.log('ping');
});

client.pong(() => {
  console.log('pong');
});

client.message((ws, message) => {
  client.ackMessage(message.messageId);
  console.log('message', message);
});

client.close((ws, ...args) => {
  console.log('close', ...args);
});

client.error((ws, error) => {
  console.log('error', error);
});

client.start() 
