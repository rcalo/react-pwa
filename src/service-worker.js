/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */

// Precarga la app
self.__precacheManifest = [].concat(self.__precacheManifest || [])
//workbox.precaching.suppressWarnings()
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

workbox.routing.registerNavigationRoute('/index.html')

workbox.googleAnalytics.initialize()

workbox.routing.registerRoute(/^https?:\/\/www.themealdb.com\/api\/.*/,
    workbox.strategies.staleWhileRevalidate(),
    'GET')

workbox.routing.registerRoute(/^https?:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/,
    workbox.strategies.cacheFirst(),
    'GET')

workbox.routing.registerRoute(
    /^https?/,
    workbox.strategies.NetworkFirst(),
    'GET'
)

