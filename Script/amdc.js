// 2023-06-18 20:25

const url = $request.url;
const header = $request.headers;
const isQuanX = typeof $task !== "undefined";
let ua = header["User-Agent"] || header["user-agent"];

if (url.includes("/amdc/mobileDispatch")) {
  if (ua.includes("AMapiPhone") || ua.includes("Cainiao4iPhone")) {
    if (isQuanX) {
      $done({ status: "HTTP/1.1 404 Not Found" });
    } else {
      $done();
    }
  } else {
    $done({});
  }
} else {
  $done({});
}
