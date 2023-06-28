// 2023-06-07 22:35

const url = $request.url;
const header = $request.headers;
let ua = header["User-Agent"];

if (url.includes("/amdc/mobileDispatch")) {
  if (ua.includes("AMapiPhone") || ua.includes("Cainiao4iPhone")) {
    $done({ status: "HTTP/1.1 404 Not Found" });
  } else {
    $done({});
  }
} else {
  $done({});
}
