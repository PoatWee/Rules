/***********************************
> 应用名称：扫描全能王
> 通知频道：https://t.me/ddgksf2021
> 问题反馈：📮 ddgksf2013@163.com 📮
> 特别说明：⛔⛔⛔
           本脚本仅供学习交流使用，禁止转载、售卖
           ⛔⛔⛔
            
[rewrite_local]
# ✅ 扫描全能王
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontent.com/PoatWee/Rules/master/Crack/Cuttlefish/camscanner.js
[mitm]
hostname=ap*.intsig.net
***********************************/



let body = JSON.parse($response.body)
    body.data.psnl_vip_property = {"renew_method": "appstore",
      "initial_tm": "1614867690",
      "svip": 1,
      "auto_renewal": true,
      "ms_first_pay": 0,
      "pending": 0,
      "group2_paid": 0,
      "inherited_flag": 0,
      "nxt_renew_tm": "9915126887",
      "level_info": {
        "level": 1,
        "days": 1,
        "end_days": 30
      },
      "group1_paid": 1,
      "ys_first_pay": 0,
      "renew_type": "year",
      "expiry": 8487890487,
      "grade": 2,
      "last_payment_method": "appstore",
      "product_id": "com.intsig.camscanner.premiums.oneyear.autorenewable.svip.low"}
    $done({body:JSON.stringify(body)})
