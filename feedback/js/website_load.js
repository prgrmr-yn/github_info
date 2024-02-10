const webhookUrl = 'https://discord.com/api/webhooks/1205642652813627462/jmaFUFbGHxnlb5m9sW5BH8UN2hqzHFQuOl-zmSlClnL0MiiKBFERtU0vAVRZONUM55QK';

function sendToDis(webhookUrl) {
  window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          "content": `Someone is on your website from ${navigator.appVersion.slice(5, 33)}
          `,
      })
    })
    console.log('sent');
  });
}

sendToDis(webhookUrl);

