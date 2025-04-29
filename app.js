if ('serviceWorker' in navigator && 'PushManager' in window) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(swReg => {
        console.log('Service Worker is registered', swReg);
      })
      .catch(error => {
        console.error('Service Worker Error', error);
      });
  }
  