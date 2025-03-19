const webhookUrl = 'https://discord.com/api/webhooks/1351853617853890641/aPy4zZ_5FDHR0Lg_f8LvhMYhTedLQHKxkvnRykpe-TKM8LAc4VqWp8Lin1lmgx5WcJGa';

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

