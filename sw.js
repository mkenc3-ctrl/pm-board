self.addEventListener('install',function(){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
self.addEventListener('push',function(e){var d={};try{d=e.data.json()}catch(x){d={t:'PM업무관리',b:e.data?e.data.text():''}}
 e.waitUntil(self.registration.showNotification(d.t||'PM업무관리',{body:d.b||'',icon:'icon-192.png',badge:'icon-192.png',tag:d.tag||'pm',renotify:true}))});
self.addEventListener('notificationclick',function(e){e.notification.close();e.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(function(a){for(var i=0;i<a.length;i++){if('focus' in a[i])return a[i].focus()}return clients.openWindow('./')}))});
