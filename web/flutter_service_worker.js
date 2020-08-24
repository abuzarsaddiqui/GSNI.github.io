'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "8bb9947684d2250fd21c5f66b422baa0",
"/": "8bb9947684d2250fd21c5f66b422baa0",
"main.dart.js": "e708e4d5ec4b0edf1fd4c1154c7b85fc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b032b9f99e177fb4394d04d2611a632b",
"assets/AssetManifest.json": "3ac28343f7656f6ca2ec3345ff73efcd",
"assets/NOTICES": "38589b93d670d17fb69efa8cafea77e4",
"assets/FontManifest.json": "09b8581e6ab13d1dfda0d45d6dca84f0",
"assets/fonts/Ubuntu-Medium.ttf": "8e22c2a6e3a3c679787e763a97fa11f7",
"assets/fonts/Ubuntu-LightItalic.ttf": "d96027148c57a715e372789a90f69e8f",
"assets/fonts/Ubuntu-Regular.ttf": "2505bfbd9bde14a7829cc8c242a0d25c",
"assets/fonts/Ubuntu-Bold.ttf": "e00e2a77dd88a8fe75573a5d993af76a",
"assets/fonts/Ubuntu-MediumItalic.ttf": "0fbe070c207e3a869cc9e02f234f81e5",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/Ubuntu-BoldItalic.ttf": "48c161df9991f9b0f6e4a858e95e415e",
"assets/fonts/Ubuntu-Italic.ttf": "4b96047e4af086277cdaeb9e60857534",
"assets/fonts/Ubuntu-Light.ttf": "277289c53af7cb469c1dc5dca3adca35",
"assets/assets/images/info.png": "244d94b94b2533989178fbe8f8efc175",
"assets/assets/images/cisco.png": "8ac9b9d072d8ba157cd16601f7fd6a99",
"assets/assets/images/fortinet.png": "089c6d56e2937c5e4c581bdb15f4461d",
"assets/assets/images/gps.png": "47e515f02279f3c2d73848bc310dd726",
"assets/assets/images/gfi.jpg": "9fecab87b88d557eaa4c9698c4d5bff5",
"assets/assets/images/kaspersky.png": "3a4d580d7818c090ba5f6a8dc48a58b1",
"assets/assets/images/mail.png": "669a9d2793f678b767ad751193bcaf79",
"assets/assets/images/rsa.png": "f0e08407d4b080d2ffdc26c80f6cbdac",
"assets/assets/images/banner2.jpg": "551869b0b14446b0eddfd041a0d989fd",
"assets/assets/images/banner1.jpg": "a4ab7235912b9573a5791a2d71321fd5",
"assets/assets/images/android.png": "71c5e80fed1249872199c64cbf237ec2",
"assets/assets/images/banner4.jpg": "d3822872d34f5137da86ab3c10ab7842",
"assets/assets/images/shop.png": "1bf34e6a9d5a0bffc0d6ea8b1f5a5143",
"assets/assets/images/account.png": "ac323e7635e33157ecafe0089c40c74e",
"assets/assets/images/banner5.jpg": "9f4aec0358adaaa73d7f7c94d5cedd75",
"assets/assets/images/sophos.jpg": "64ec120f924184644c2f7f336df1ccca",
"assets/assets/images/contact-us.png": "a739c8429f292cf81a43e154a149eee1",
"assets/assets/images/banner6.jpg": "e00a747db2fe3e68924a5fe890bbf09b",
"assets/assets/images/privacy.png": "fb63c0b5d8b9718d16ff80018baaabd1",
"assets/assets/images/prod.png": "6a62130fa74d16e1a78a9660cdd297bb",
"assets/assets/images/shopping-cart.png": "7f8aff6e8ab57669368760d5ffd7f833",
"assets/assets/images/macos.png": "75a3c3d95109f0cea6404cbfa245a4fe",
"assets/assets/images/consultant.png": "efb82860a417d13f1dc7ef07707ca6a8",
"assets/assets/images/protection.png": "5cc375e8ed13847f285279195a7f5794",
"assets/assets/images/phone.png": "f2d817ea5f13e54dc15e0adf09ad1223",
"assets/assets/images/gsni.jpg": "4fc39ee84b7295b4aac17cce3f0c0669",
"assets/assets/images/ios.png": "e78cbd0f68d83bf7f9c4054faf337837",
"assets/assets/images/symantec.png": "36b8be9c01c54edf70775024fc8eb7d8",
"assets/assets/images/jigsaw.png": "5e20446f5628e34635a00761ad09f736",
"assets/assets/images/windows.png": "ca518242ba48f01bf3cd65d521eee2b9",
"assets/assets/images/performance.png": "5a38c360ca184bce6f111f5d1d421ccc",
"assets/assets/images/solarwinds.png": "254b253630fcfe69df4e3d6e2b4819de",
"assets/assets/images/barracuda.jpg": "c7ad0f5f6854283b67e94da3f5fbf85a",
"assets/assets/images/consult.jpg": "1ff849c757e1c3ba82e1d2beedfda450",
"assets/assets/images/bitdefender.png": "21ac77c08612113cc74f4610cf807725",
"assets/assets/images/mcafee.png": "1c5b68856c23b5b47c0f796292e3e9d8",
"assets/assets/images/ceo.jpg": "378e62c5569aede867e24f3e332fa452"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
