const u=$request.url;let k=JSON.parse($response.body);switch(true){case/cainiao\.nbpresentation\.protocol\.homepage\.get\.cn/.test(u):if(k.data.result){let e=k.data.result;if(e.dataList){e.dataList=e.dataList.filter((e=>{if(e.type.includes("kingkong")){if(e.bizData.items){for(let t of e.bizData.items){t.rightIcon=null;t.bubbleText=null}return true}}else if(e.type.includes("icons_scroll")){if(e.bizData.items){const t=["bgxq","cncy","cngy","cngreen","gjjf","jkymd","ljjq","ttlhb"];e.bizData.items=e.bizData.items.filter((e=>!t.includes(e.key)));for(let t of e.bizData.items){t.rightIcon=null;t.bubbleText=null}return true}}else if(e.type.includes("big_banner_area")){return false}else if(e.type.includes("promotion")){return false}else{return true}}))}}break;case/cainiao\.guoguo\.nbnetflow\.ads\.mshow/.test(u):const e=["10","498","328","366","369","615","616","727","1275","1308","1316","1332","1340"];for(let t of e){if(k.data?.[t]){delete k.data[t]}}break;case/nbpresentation\.homepage\.merge\.get\.cn/.test(u):if(k.data){const e=["mtop.cainiao.nbmensa.research.researchservice.acquire.cn@0","mtop.cainiao.nbmensa.research.researchservice.acquire.cn@1","mtop.cainiao.nbmensa.research.researchservice.acquire.cn@2","mtop.cainiao.nbmensa.research.researchservice.acquire.cn@3"];for(let t of e){if(k.data?.[t]){delete k.data[t]}}}break;case/nbpresentation\.pickup\.empty\.page\.get\.cn/.test(u):if(k.data.result){let e=k.data.result.content;if(e.middle){e.middle=e.middle.filter((e=>!["guoguo_pickup_empty_page_relation_add","guoguo_pickup_helper_feedback","guoguo_pickup_helper_tip_view"].includes(e.template.name)))}}break;case/guoguo\.nbnetflow\.ads\.show\.cn/.test(u):if(k.data.result){k.data.result=k.data.result.filter((e=>{const t=e?.materialContentMapper?.group_id;const a=e?.materialContentMapper?.bgImg;const n=e?.materialContentMapper?.advRecGmtModifiedTime;const r=e?.materialContentMapper?.adItemDetail;const i=new Set(["entertainment","kuaishou_banner","common_header_banner","interests"]);return!(r||t&&i.has(t)||a&&n)}))}break;default:break}$done({body:JSON.stringify(k)});