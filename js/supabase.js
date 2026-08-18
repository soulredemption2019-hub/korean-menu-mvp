/**
 * js/supabase.js — Supabase 云端同步层（零依赖，原生 fetch）
 *
 * 职责：把「我的评分」从纯 localStorage 扩展到云端备份。
 *   - saveRating / deleteRating / fetchRatings 直接调用 Supabase 的 PostgREST 接口
 *   - 用 publishable key（sb_publishable_…）作为 apikey 与 Bearer（SDK 的默认行为）
 *   - 每次操作 fire-and-forget：失败不影响本地功能，静默降级
 * 表结构（public.ratings，主键 = dish_id + device_id）：
 *   dish_id text, device_id text, score int, created_at timestamptz, updated_at timestamptz
 */
(function (global) {
  "use strict";

  var KM = global.KM = global.KM || {};

  var SUPABASE_URL = "https://tajcatjrqamkuyckalpm.supabase.co";
  var SUPABASE_KEY = "sb_publishable_IFp6mVBuS_R5O3FM08rQKg_B1XPt3m9";
  var DEVICE_KEY = "km:device";

  function getDeviceId() {
    try {
      var id = global.localStorage.getItem(DEVICE_KEY);
      if (!id) {
        id = (global.crypto && global.crypto.randomUUID)
          ? global.crypto.randomUUID()
          : ("dev-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 10));
        global.localStorage.setItem(DEVICE_KEY, id);
      }
      return id;
    } catch (e) {
      return "dev-unknown";
    }
  }

  function headers() {
    return {
      "apikey": SUPABASE_KEY,
      "Authorization": "Bearer " + SUPABASE_KEY,
      "Content-Type": "application/json"
    };
  }

  function ok(res) {
    if (!res.ok) throw new Error("Supabase " + res.status + " " + res.statusText);
    return res;
  }

  // 写入/更新一条评分（同 dish_id + device_id 时合并更新）
  function saveRating(dishId, score) {
    return fetch(SUPABASE_URL + "/rest/v1/ratings", {
      method: "POST",
      headers: Object.assign({}, headers(), {
        "Prefer": "resolution=merge-duplicates,on_conflict=dish_id,device_id,return=minimal"
      }),
      body: JSON.stringify({
        dish_id: dishId,
        device_id: getDeviceId(),
        score: score,
        updated_at: new Date().toISOString()
      })
    }).then(ok);
  }

  // 删除一条评分
  function deleteRating(dishId) {
    var q = "dish_id=eq." + encodeURIComponent(dishId) +
            "&device_id=eq." + encodeURIComponent(getDeviceId());
    return fetch(SUPABASE_URL + "/rest/v1/ratings?" + q, {
      method: "DELETE",
      headers: headers()
    }).then(ok);
  }

  // 拉取当前设备的评分（用于换浏览器后恢复）
  function fetchRatings() {
    var q = "device_id=eq." + encodeURIComponent(getDeviceId()) + "&select=dish_id,score";
    return fetch(SUPABASE_URL + "/rest/v1/ratings?" + q, {
      headers: headers()
    }).then(ok).then(function (res) {
      return res.json();
    });
  }

  KM.supabase = {
    ready: true,
    saveRating: saveRating,
    deleteRating: deleteRating,
    fetchRatings: fetchRatings,
    getDeviceId: getDeviceId
  };
})(typeof window !== "undefined" ? window : globalThis);
