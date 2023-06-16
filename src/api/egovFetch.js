import { SERVER_URL } from "../config";

import URL from "constants/url";
import CODE from "constants/code";

/**
 * send request function
 * @param {String} url api url
 * @param {*} requestOptions parameters
 * @param {*} handler response callback
 * @param {*} errorHandler catch callback
 */
export function requestFetch(url, requestOptions, handler, errorHandler) {
  console.groupCollapsed("requestFetch");
  console.log("requestFetch [URL] : ", SERVER_URL + url);
  console.log("requestFetch [requestOption] : ", requestOptions);

  if (!requestOptions["origin"]) {
    requestOptions = { ...requestOptions, origin: SERVER_URL };
  }
  if (!requestOptions["credentials"]) {
    requestOptions = { ...requestOptions, credentials: "include" };
  }

  fetch(SERVER_URL + url, requestOptions)
    .then((response) => response.json())
    .then((resp) => {
      if (Number(resp.resultCode) === Number(CODE.RCV_ERROR_AUTH)) {
        alert("Login Alert");
        sessionStorage.setItem("loginUser", JSON.stringify({ id: "" }));
        window.location.href = URL.LOGIN;
        return false;
      } else {
        return resp;
      }
    })
    .then((resp) => {
      typeof handler === "function" && handler(resp);
      console.groupEnd("requestFetch.then()");
    })
    .catch((error) => {
      console.error("There was an error!", error);
      if (error === "TypeError: Failed to fetch") {
        alert("서버와의 연결이 원활하지 않습니다. 서버를 확인하세요.");
      }
      typeof errorHandler === "function" ? errorHandler(error) : alert("ERR : " + error.message);
    })
    .finally(() => {
      console.log("requestFetch finally end");
      console.groupEnd("requestFetch");
    });
}
