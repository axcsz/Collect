/*
脚本引用https://raw.githubusercontent.com/Keywos/rule/main/loon/tk.js
*/
let keyus={台湾: "TW", 日本: "JP", 韩国: "KR", 泰国: "TH", 英国: "UK", 美国: "US", 法国: "FR", 新加坡: "SG", 菲律宾: "PH", 马来西亚: "MY"},
lk = $persistentStore.read("解锁地区"),loc = keyus[lk] || "KR",url = $request.url;
if (/_region=CN&|&mcc_mnc=4/.test(url)) {
  url = url.replace(/_region=CN&/g,`_region=${loc}&`).replace(/&mcc_mnc=4/g,"&mcc_mnc=2");
  const response = {
    status: 307,
    headers: {Location: url},
  };
  $done({response});
} else {
  $done({})
}
