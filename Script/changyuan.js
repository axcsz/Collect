// 2023-04-15 14:40

const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/common/getReceipt")) {
  if (obj.payload.adInfo) {
    delete obj.payload.adInfo;
  }
} else if (url.includes("/user/message/equipmentPara")) {
  if (obj.payload) {
    if (obj.payload.bottomAd) {
      delete obj.payload.bottomAd;
    }
    if (obj.payload.payAfterAd) {
      obj.payload.payAfterAd = false;
    }
  }
}

$done({ body: JSON.stringify(obj) });
