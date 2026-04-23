// Service Worker for Academic Homepage
const CACHE_NAME = 'academic-homepage-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/css/style.css',
    '/css/academic.css',
    '/js/main.js',
    '/js/papers.js',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    'https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css',
    'https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap'
];

// Install Event - Cache Resources
self.addEventListener('install', function(event) {
    console.log('Service Worker: Installing...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Service Worker: Caching files');
                return cache.addAll(urlsToCache);
            })
            .then(function() {
                console.log('Service Worker: Installation complete');
                return self.skipWaiting();
            })
            .catch(function(error) {
                console.error('Service Worker: Installation failed', error);
            })
    );
});

// Activate Event - Clean up old caches
self.addEventListener('activate', function(event) {
    console.log('Service Worker: Activating...');
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Service Worker: Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(function() {
            console.log('Service Worker: Activation complete');
            return self.clients.claim();
        })
    );
});

// Fetch Event - Serve cached content when offline
self.addEventListener('fetch', function(event) {
    console.log('Service Worker: Fetching ', event.request.url);
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Return cached version or fetch from network
                if (response) {
                    console.log('Service Worker: Serving from cache:', event.request.url);
                    return response;
                }

                // Clone the request because request streams can only be consumed once
                const fetchRequest = event.request.clone();

                return fetch(fetchRequest).then(
                    function(response) {
                        // Check if valid response
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // Clone the response because response streams can only be consumed once
                        const responseToCache = response.clone();

                        // Cache successful responses
                        if (event.request.url.startsWith(self.location.origin) ||
                            event.request.url.includes('cdn.jsdelivr.net') ||
                            event.request.url.includes('fonts.googleapis.com')) {
                            caches.open(CACHE_NAME)
                                .then(function(cache) {
                                    cache.put(event.request, responseToCache);
                                });
                        }

                        return response;
                    }
                ).catch(function(error) {
                    console.log('Service Worker: Fetch failed', error);

                    // Return offline page for navigation requests
                    if (event.request.destination === 'document') {
                        return caches.match('/index.html');
                    }
                });
            })
    );
});

// Background Sync for offline actions
self.addEventListener('sync', function(event) {
    if (event.tag === 'background-sync') {
        console.log('Service Worker: Background sync triggered');
        event.waitUntil(doBackgroundSync());
    }
});

function doBackgroundSync() {
    // Handle background sync operations
    return new Promise((resolve) => {
        console.log('Service Worker: Performing background sync');
        // Add your sync logic here
        resolve();
    });
}

// Push Notifications
self.addEventListener('push', function(event) {
    console.log('Service Worker: Push received');

    const options = {
        body: event.data ? event.data.text() : 'New update available',
        icon: '/images/icon-192x192.png',
        badge: '/images/badge-72x72.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            {
                action: 'explore',
                title: 'Explore',
                icon: '/images/checkmark.png'
            },
            {
                action: 'close',
                title: 'Close',
                icon: '/images/xmark.png'
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('Academic Homepage', options)
    );
});

// Notification Click Handler
self.addEventListener('notificationclick', function(event) {
    console.log('Service Worker: Notification click received');

    event.notification.close();

    if (event.action === 'explore') {
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});

// Message Handler
self.addEventListener('message', function(event) {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

// Error Handling
self.addEventListener('error', function(event) {
    console.error('Service Worker error:', event.error);
});

self.addEventListener('unhandledrejection', function(event) {
    console.error('Service Worker unhandled promise rejection:', event.reason);
});