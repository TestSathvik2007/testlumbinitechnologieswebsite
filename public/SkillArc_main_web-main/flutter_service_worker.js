'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "570821cf4397caa583ea6e7a16668124",
"assets/AssetManifest.bin.json": "059ac41900071349ac69ebdda8900f5c",
"assets/AssetManifest.json": "3d31a3f8a4548e8f72e7f2187ffa0e9c",
"assets/assets/abstract/abstract_1.png": "2b45bd8d7a28dab6d81d2363b44824f6",
"assets/assets/abstract/abstract_10.png": "5ae5f3231e0225622386ce961c2cfa23",
"assets/assets/abstract/abstract_11.png": "ac877cb14e9493679bcd98c4a5bb02e9",
"assets/assets/abstract/abstract_12.png": "044054664e81e09d3dbbcf8ce21e51a5",
"assets/assets/abstract/abstract_13.png": "5ca214c9fe549a73e612be4010adfa68",
"assets/assets/abstract/abstract_14.png": "2b5acb834780d50cffb2dd220c25c98c",
"assets/assets/abstract/abstract_15.png": "bf5efcbf25c96180ea407eca55ce3500",
"assets/assets/abstract/abstract_16.png": "b58ef461fd8806888032946affa1b41c",
"assets/assets/abstract/abstract_17.png": "44980c6bbd467a0cfe9623ea450d6a7a",
"assets/assets/abstract/abstract_18.png": "9edda0342a447e7e4cb4241f128eec9e",
"assets/assets/abstract/abstract_19.png": "3378c978f825e6dccc67fe5fbadfa285",
"assets/assets/abstract/abstract_2.png": "e89d165d165439744bc5aca32f58b9d6",
"assets/assets/abstract/abstract_20.png": "7d96a2ab848908feb45569182a061b27",
"assets/assets/abstract/abstract_3.png": "2223a9e415a764f135210387a947ae84",
"assets/assets/abstract/abstract_4.png": "6cb1319cb55737b0995a6967eb5ac960",
"assets/assets/abstract/abstract_5.png": "bbb38f619ba7c77b54bd07ecd0c06f38",
"assets/assets/abstract/abstract_6.png": "f08cc755502646edfd389ea41b34d8a7",
"assets/assets/abstract/abstract_7.png": "ef65ee530d26aa5e77053d7668818b74",
"assets/assets/abstract/abstract_8.png": "d8f2f2724b84ce37290b6d4fd010d526",
"assets/assets/abstract/abstract_9.png": "c74b81bdb05f5dfd11c640b4ad6ee727",
"assets/assets/animations/instructor.json": "e97a8dd9771f64a6c9183497c17eec55",
"assets/assets/animations/parent.json": "fe51f00091b350823412dc3ace40ebc9",
"assets/assets/animations/student.json": "31e39268b373122ab181569297d2f77b",
"assets/assets/announcements/1.png": "053ddf5c5d11fea82b40a22e77c27c71",
"assets/assets/announcements/10.png": "e36697e8ca71285c82435579ba25bdc2",
"assets/assets/announcements/11.png": "662a3380e842c77e5f4ea8ac3c88e9cf",
"assets/assets/announcements/12.png": "159d5f08b3d613629492b6aec43ed600",
"assets/assets/announcements/13.png": "b17500d0aa3307478ffe50260a4808a0",
"assets/assets/announcements/14.png": "4b52d7677ce3fbc4a7f1b89213015fb6",
"assets/assets/announcements/15.png": "7860399f859030cf0eccfa4511aa9ac7",
"assets/assets/announcements/16.png": "7391629e2a28bde7881c43e3907ec793",
"assets/assets/announcements/17.png": "66d767a2d19564e500668425e4825284",
"assets/assets/announcements/18.png": "d9072e4f076aa18080e3fd72a97a739a",
"assets/assets/announcements/19.png": "be15ba71a5e42aa3d8e0e618c3edcb06",
"assets/assets/announcements/2.png": "0df51c04843e835d7c7e687490bf1668",
"assets/assets/announcements/20.png": "60030806ac74919f03235cce738a9e42",
"assets/assets/announcements/21.png": "522a1a7ede271d4436b0812990a1a13b",
"assets/assets/announcements/22.png": "b53bb13ec8596ae4d109486f1c366c7c",
"assets/assets/announcements/23.png": "b3acdf1fc500adad142d3819de2029f4",
"assets/assets/announcements/24.png": "1b34578bbd5ccc94fa1873a93b6dad3c",
"assets/assets/announcements/25.png": "4e63f518f4dfb398500e6854b9ea088c",
"assets/assets/announcements/26.png": "5a56ad7aaa47fc2784fa2f3f9244bb0c",
"assets/assets/announcements/27.png": "99c6da43ec36e3b0d1a221c1a945cc75",
"assets/assets/announcements/28.png": "ccc5b2f24c764c006652a28aa878faf7",
"assets/assets/announcements/3.png": "09c5085e80bf8e1786e17773cf6c7467",
"assets/assets/announcements/4.png": "9b87b47ec88ce277712298eacb80988e",
"assets/assets/announcements/5.png": "a382da331d1b048c66034d086f08f4ac",
"assets/assets/announcements/6.png": "689b21a2cf3b506bdaa134ae254c8cf9",
"assets/assets/announcements/7.png": "333acdc71e59fc53d1c82d399b4d38d2",
"assets/assets/announcements/8.png": "7932503f0999e5a0bb87b446016e448a",
"assets/assets/announcements/9.png": "bd2c8bb65b2ba53ed0e2bd9c98b47ccf",
"assets/assets/bot.png": "089f355afb3db1f266be3baae97c4aaa",
"assets/assets/credentials.json": "231424270fc818a248f212e9a1c27fe6",
"assets/assets/logo.png": "3ccdb5da524118f47a541e4fd9b6b156",
"assets/assets/synthetic_students_scores_structured_gpa_in_sheets.xlsx": "99d3e1f3c243ea04fd960714578f9ac6",
"assets/FontManifest.json": "866b9b20ab0e8c30ffe220d2a2d66abe",
"assets/fonts/MaterialIcons-Regular.otf": "8463fd6d956ddb91abe56b7907bebae1",
"assets/NOTICES": "9d3d814197cd208b017191087f4acb7c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-arrow.png": "8efbd753127a917b4dc02bf856d32a47",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-attachment.png": "9c8f255d58a0a4b634009e19d4f182fa",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-delivered.png": "b6b5d85c3270a5cad19b74651d78c507",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-document.png": "e61ec1c2da405db33bff22f774fb8307",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-error.png": "5a59dc97f28a33691ff92d0a128c2b7f",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-seen.png": "10c256cc3c194125f8fffa25de5d6b8a",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-send.png": "2a7d5341fd021e6b75842f6dadb623dd",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-arrow.png": "3ea423a6ae14f8f6cf1e4c39618d3e4b",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"assets/packages/flutter_chat_ui/assets/icon-arrow.png": "678ebcc99d8f105210139b30755944d6",
"assets/packages/flutter_chat_ui/assets/icon-attachment.png": "17fc0472816ace725b2411c7e1450cdd",
"assets/packages/flutter_chat_ui/assets/icon-delivered.png": "b064b7cf3e436d196193258848eae910",
"assets/packages/flutter_chat_ui/assets/icon-document.png": "b4477562d9152716c062b6018805d10b",
"assets/packages/flutter_chat_ui/assets/icon-error.png": "4fceef32b6b0fd8782c5298ee463ea56",
"assets/packages/flutter_chat_ui/assets/icon-seen.png": "b9d597e29ff2802fd7e74c5086dfb106",
"assets/packages/flutter_chat_ui/assets/icon-send.png": "34e43bc8840ecb609e14d622569cda6a",
"assets/packages/rive_animated_icon/assets/icons1.riv": "7f23a53d34a2b43b6dd551465d9f71a6",
"assets/packages/rive_animated_icon/assets/icons2.riv": "054611cd990d48b0415acc0def8b2064",
"assets/packages/rive_animated_icon/assets/icons3.riv": "0427231b1a0b147fef274cff2eff1f43",
"assets/packages/rive_animated_icon/assets/icons4.riv": "e1e065954b82deb7cacefaad8499880c",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/packages/timezone/data/latest_all.tzf": "a3a6cb5d912b5375926e5b027f91cb00",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "867a01e5438cf1ccbd1fb58987b7ad0d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e1f2af54b729a06056f3fd7fbf9d87c0",
"/": "e1f2af54b729a06056f3fd7fbf9d87c0",
"main.dart.js": "3f23dde3816babd098631fa8e53123d9",
"manifest.json": "fcc5e571ffd9aa3f95f6b85b5a209f99",
"version.json": "a62fe7b3454109fb04f2e0b18d367ce3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
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
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
