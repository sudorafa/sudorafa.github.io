'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e4c6fedb3fba05dc040a85c881863552",
"index.html": "c073a1f4da7950339b59d899f7f709f4",
"/": "c073a1f4da7950339b59d899f7f709f4",
"main.dart.js": "d2e1d4724f6f627f48bd75b7ce773638",
"favicon.png": "e62c3ed1f3e5e37f8010898dbe737836",
"icons/Icon-192.png": "4629454c02fdb07b73cceb34352aab8a",
"icons/Icon-512.png": "2d2a46bcd0650b98e626d7b36e7a1f3b",
"manifest.json": "e6f6a59d08bcd276d7e2035caace95c7",
".git/config": "c25a5d927367f5f8a1b9dacf61fc4218",
".git/objects/0d/74fbbfef7d9c0281c0d30364b8a224964dbb05": "6d4d380b96abf287278da7e558d8933d",
".git/objects/59/d6605dab9eec64b1c975d5a585bf049519e8ea": "ce2eab3086d8c0e8c357e0bfd328c4e0",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/3b/2c14efc84df847f89943dc02c06b7afd102780": "6a4b4f2e4fadbba42446eaf12063b34f",
".git/objects/6a/882fe81298108331d303ba072d44dcd55daa57": "d5dae133437d66f1dce4984f81e0553a",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/69/ac205415712a598faa8d7121e9b3879b53feb7": "628589b14ef381cfa5db917a21f04ce8",
".git/objects/67/bd84202ad5b2e307d3b6fac1731c2a5d963e0b": "aa161ace139f434c81be219b6f6205e5",
".git/objects/94/8f0a5d26e899539e7821aa5a500932f76ba582": "e9093d046b81c96e5fd46a48a0b68b11",
".git/objects/5f/72e9127ffaae2a500cd9d950067f46c21b277c": "9334d3373cb9fc449377becf4cba5477",
".git/objects/a3/09313d5fb20765dff1d8f41dbd72c558097611": "ce77a88cc2b115d907f98afb245fa5f6",
".git/objects/ad/77fe31f844862340c5caf6621fbcf97c933e46": "c32a5b239d8270005c4354d634bed0e0",
".git/objects/d0/688738bb51e399bdf8593281b76c338656d3c0": "fc446fa6fc934f5ec0d3cad17018b330",
".git/objects/da/22d5843a02a882ac5c744f056a977e7611dffa": "49bf8c4d704e8b88e3ea857d19038ea1",
".git/objects/d1/375807cdd2f8f7950f21acdb246e15b6ccaf7c": "f7ba5d21aa5bb9651c142095b381c67a",
".git/objects/ae/2396c796b7c50ec2e02716e08f2824fa8a1fcc": "a1dd5e956786d9cc271060729f61bd40",
".git/objects/d8/ba2246d976e5e9cd51d558c9bb6c8dba725c64": "48d19ad01180b0370ba31a98b030b0d3",
".git/objects/fc/963dfe2292c4e241afb5950e063414d544c093": "8cd8693ced3c797431323a7707d38029",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f5/eaf7eb1511bd9532cebfae70e47524663de109": "50b1229f40423533da8629dc65d38889",
".git/objects/cf/e2d9f8fd1f1602ac2944104150deb151250322": "138cd42be5f7f5389f94211921b22a97",
".git/objects/cf/ba65a8806b9f48406e84d8cbc2b35ca5299407": "5957cf8fd98f972cd850b80bb2c5a1b0",
".git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "c1fb9fd9132eb732a1d95b1d7a283648",
".git/objects/c8/005a27fa776d0c2d5c488f65a9da73c9d7c867": "464ebd96c1a697c8e71c395fe08f633f",
".git/objects/c8/df92b853992397794e13e57140bbab28367e15": "4e587a7e4ba7acfc9ac1796c5c862e78",
".git/objects/c1/71cc0f96ca1bb6303d86d732133b89f2169cb8": "d64c1b15633b4589d0936b94ec28c758",
".git/objects/20/3b57d95bcdede60cd0bbb32981b32baaad7e08": "f5c5ff28a1b141f97f827952286422a9",
".git/objects/27/ff2c44ef361076c593180fb67459da52376917": "5357a5070a1cc9d39de512bdac541472",
".git/objects/29/9c77213ece7e10ec69f166a839a3da37c752b6": "42dd1a122d528a836ad1fd8cefa893ee",
".git/objects/80/9abe022571b80751e6e6ad6c1c70f6b2d33751": "ecd700aa339976f823c43687d5028da2",
".git/objects/28/816927bfc2e5fbea5193bbf91061de611fcdc9": "e0c692ac1fe88ea4be372341cc59f103",
".git/objects/7e/ce3282a4f7824b249d9e568819d98bd2fa3da6": "8c71b613b9912dfd1fdf473a52e99214",
".git/objects/7e/1c393ab4344ed2bdfc076110682d2b625f9cb0": "b24208ad748355d86b1e7591e0fef57f",
".git/objects/4c/46963323ade2260d7b8dc3182ca88005652b03": "c955d1a192da25ede43afb38205dda56",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/2f/f20d73860d4f62cedbdbe303c15ab0819a03d3": "19bc4beb840b09089bd50c40e81bde45",
".git/objects/88/feb4428193abfd592c7a762e38e3ccacaaf870": "096f96475c4edb3df718376258b6555c",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/6e/b0812e119879d50b883d381e2f2bb726c5c0a9": "881fd916db754c948fdc26acac8eb0ee",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/6c/9852c0959aa2dd0c854c9a5a0c7ccae3af6eaa": "8493e6355cd0f42b49c173dc75e0831a",
".git/objects/99/ff3aa0fc59d3b50125a3c829f469ce9f65c258": "eb5ebfb3497b14fe02bb117ea7b25abc",
".git/objects/63/6a3ab3abef0a325650804f045027bb44e12cd9": "2121a9f13f0095b72cf47cbe76a7f3bb",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0f/fe00b92b2e2d21c1f33024760f685cbb7ffdb8": "6655e717f185770489b36816ed0d52de",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/b0/ed08bc1e7f05037c5bd6d31288f7de51cb8e0f": "b6bc782ebdbaaa65d303d8f44fe74b36",
".git/objects/ea/8271f701a424d39d1b0d7a7bc6bae669e862a7": "6b30fe7c359af7bf3329fc7befde291a",
".git/objects/f0/c77271f52bbd32c5b38feab575682748d8d280": "57e04d397d560e65b291007f763041f2",
".git/objects/e8/9fdeb2358d8572aaf32c9192eb39ed6d8699c4": "0670039bd9b4b4681932f4403cd61e4d",
".git/objects/e0/b6fd0e21e7d5f8732fde0181e0bb7277e70518": "05c40357b8a6e1ac1b69215f4ee4dc8a",
".git/objects/e0/8e4b884bec4bbe3b6f40e176c8b9d1370640d9": "10d176087cde455e2e17c4741e9f3e0c",
".git/objects/48/2834169edc8f0197494899290e40f671bb9206": "245bcb2c2d6479f4dc5b4fd2ed1595c3",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/15/70452c55a9a4cd42f20e024dee0ba60285ce49": "7e879cb7ccff343508e400063eb73e2e",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/8c/00d9d4e1c4ae7ac0e862337b8da0a02de26b16": "71d4248164c415fb3bdf4b91a8254eef",
".git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "7d52f9ae3b3fac811829018aea2c668f",
".git/objects/13/68837e1e2baf841b4d6a284504ddbbed8eb5de": "c6f07a5a5a4bbf8e66200ef5f452dc85",
".git/objects/8e/0a3430c717b54a8f5510669774e8f60967b444": "b8e26e16207407085d2349d49d099a4c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7900625300d97594a8ebf3eb6f043e04",
".git/logs/refs/heads/main": "1e2e734b258c3b727afe40550433f965",
".git/logs/refs/remotes/origin/main": "a9381c2ce899941e7ff6af4dc6cd6480",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "611bba9018d40f615fc076e1079f962d",
".git/refs/remotes/origin/main": "611bba9018d40f615fc076e1079f962d",
".git/index": "1d66344144b2ced63030036c91209536",
".git/COMMIT_EDITMSG": "a954a75f6bfcbd72d163bb5c9ac22510",
"assets/AssetManifest.json": "715e56087f962a8186df82b5d728fe97",
"assets/NOTICES": "1804441c941a02e8cdd4ddd44925ade6",
"assets/FontManifest.json": "7aaf3996738086bbd796613e14ef9e45",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/logo.png": "8ce8a4d5b41f5b30d623138cfa6e5ff6",
"assets/assets/brand-card/visa.png": "d6df0cf2787481bb17a1c98a185bef28",
"assets/assets/brand-card/hipercard.png": "8419b3a2cbc668b7ed629e4c3d6c1889",
"assets/assets/brand-card/elo.png": "2f6c964d1813d14ae16aa83e8b0f0676",
"assets/assets/brand-card/other.png": "927570bb09e91319a1f90b6954128aff",
"assets/assets/brand-card/dinersclub.png": "dcdac9507121e5243ceba31de3d0fef1",
"assets/assets/brand-card/amex.png": "685e19e22c20c69ef10c2fad7c624519",
"assets/assets/brand-card/mastercard.png": "dc57d14a005a8c5bdb09454fd70e2728"
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
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
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
