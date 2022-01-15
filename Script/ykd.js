/*
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
软件名：悦看点
下载链接：https://yuekandian.yichengw.cn/download?app=1&referrer=465331
【REWRITE】
匹配链接 https://yuekandian.yichengw.cn/api/v1/reward/coin?
对应重写目标 https://raw.fastgit.org/byxiaopeng/myscripts/main/ykd.js
[MITM]
hostname = yuekandian.yichengw.cn
boxjs地址 : https://raw.fastgit.org/byxiaopeng/myscripts/main/byxiaopeng.boxjs.json
食用方法：点击首页气泡即可获取
10 9 * * * ykd.js
//nodejs
export ykdhd='{"Host":"yuekandian.yichengw.cn".......}'
抓包head的头全部复制然后转成json格式填到上面,https://tooltt.com/header2json/
/////////////////////////////////////////////////////////////////////////////
*/

const $ = new Env('悦看点');
let status;
status = (status = ($.getval("ykdstatus") || "1")) > 1 ? `${status}` : ""; // 账号扩展字符
const ykdhdArr = [],
    ykdcount = ''
let ykdhd = $.isNode() ? (process.env.ykdhd ? process.env.ykdhd : "") : ($.getdata('ykdhd') ? $.getdata('ykdhd') : "")
let ykdhds = ""
let times = new Date().getTime();
let tz = ($.getval('tz') || '1');
let arr = [1, 2, 3, 4];
let cgarr = [1, 2, 3, 4, 5, 6, 7];
let host=`https://yuekandian.yichengw.cn`
let coinRecord = [];
let cgFlag = 0
$.message = ''

!(async() => {
  if (typeof $request !== "undefined") {
    ykdck()
  } else {
    if (!$.isNode()) {
        ykdhdArr.push($.getdata('ykdhd'))
      let ykdcount = ($.getval('ykdcount') || '1');
      for (let i = 2; i <= ykdcount; i++) {
        ykdhdArr.push($.getdata(`ykdhd${i}`))
      }
      console.log(`-------------共${ykdhdArr.length}个账号-------------\n`)
      for (let i = 0; i < ykdhdArr.length; i++) {
        if (ykdhdArr[i]) {
            ykdhd = ykdhdArr[i];
            $.index = i + 1;
            console.log(`\n【 悦看点 账号${$.index} 】`)
            await videoAward() 
        }
      }
    } else {
      if (process.env.ykdhd && process.env.ykdhd.indexOf('@') > -1) {
        ykdhdArr = process.env.ykdhd.split('@');
        console.log(`您选择的是用"@"隔开\n`)
      } else {
        ykdhds = [process.env.ykdhd]
      };
      Object.keys(ykdhds).forEach((item) => {
        if (ykdhds[item]) {
            ykdhdArr.push(ykdhds[item])
        }
      })
      console.log(`共${ykdhdArr.length}个账号`)
      for (let k = 0; k < ykdhdArr.length; k++) {
        $.message = ""
        ykdhd = ykdhdArr[k]
        $.index = k + 1;
        console.log(`\n【 悦看点 账号${$.index} 】`)
        await sign() 
      }
    }
  }
  //message()
})()
  .catch ((e) => $.logErr(e))
  .finally(() => $.done())
  

function ykdck() {
    if ($request.url.indexOf("api/v1/reward/coin?") > -1) {
        const ykdhd = JSON.stringify($request.headers)
        if (ykdhd) $.setdata(ykdhd, `ykdhd${status}`)
        $.log(ykdhd)
        $.msg($.name, "", `悦看点${status}headers获取成功`)
    }
}



//个人信息
function profile(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: `${host}/api/v1/member/profile?debug=0&`,
            headers: JSON.parse(ykdhd),
        }
        $.get(url, async (err, resp, data) => {
            try {
                result = JSON.parse(data)
                if (result.code == 0) {
                    $.log(`\n【吊毛作者欢迎用户】：${result.result.nickname}`)
                    $.log(`\n【当前账户金币】：${result.result.point}`)
                    $.log(`\n【提现券】：${result.result.ticket}`)
                    $.log(`\n【手机碎片】：${result.result.fragment}`)
                    $.log(`\n【账户邀请码】：${result.result.pin}`)
                    $.log(`\n【今日收益金币】：${result.result.today_point}`)
                } else {
                    $.log(`\n您操作太快了~`)
                }
            } catch (e) {
				console.log(e)
            } finally {

                resolve()
            }
        }, timeout)
    })
}
//签到信息
function sign(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: `${host}/api/v1/reward/sign?`,
            headers: JSON.parse(ykdhd),
        }
        $.post(url, async (err, resp, data) => {
            try {
                result = JSON.parse(data)
                if (result.code == 0) {
                    $.log(`\n【签到状态】：${result.result.message}`)
                    $.log(`\n【签到获得金币】：${result.result.coin}`)
                    $.log(`\n【签到获得提现券】：${result.result.coupon}`)
                } 
                await coinInfo()
                await $.wait(2000)
                await video()
				await $.wait(2000)
                await lottery()
                await $.wait(2000)
                await news()  //刷新闻
                await $.wait(2000)
                await short()  //刷小视频
                await $.wait(5000)
                await allbarrier(cgarr) //闯关
                await $.wait(5000)
                await profile()
                await $.wait(5000)
                await exchange() //开始提现
            } catch (e) {
				console.log(e)
            } finally {

                resolve()
            }
        }, timeout)
    })
}


//查询是否符合提现要求
function exchange(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: `${host}/api/v1/cash/exchange?`,
            headers: JSON.parse(ykdhd),
        }
        $.get(url, async (err, resp, data) => {
            try {
                result = JSON.parse(data)
                if (result.result.items[0]['is_ok'] == 1) {
                    $.log(`\n【符合提现要求开始提现】`)
                    await $.wait(2000)
                    await exchangetx() //开始提现
                } else {
                    $.log(`\n【不符合提现要求 去资讯页面观看2分钟】: ${result.result.items[0].tixian_tip}`)
                }
            } catch (e) {
				console.log(e)
            } finally {
                resolve()
            }
        }, timeout)
    })
}
//申请活动提现
function exchangetx(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: `${host}/api/v1/cash/exchange?`,
            headers: JSON.parse(ykdhd),
            body: `amount=0.3&gate=wechat&`,
        }
        $.post(url, async (err, resp, data) => {
            try {
                result = JSON.parse(data)
                if (result.code == 0) {
                    $.log(`\n【提现状态】：${result.result.message}`)
                    $.log(`\n【提现进度】：${result.result.title}`)
                } else {
                    $.log(`\n【提现状态】：${result.message}`)
                }
            } catch (e) {
				console.log(e)
            } finally {
                resolve()
            }
        }, timeout)
    })
}
//看新闻准备
function news(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: `${host}/api/v1/reward/news/detail?`,
            headers: JSON.parse(ykdhd),
        }
        $.get(url, async (err, resp, data) => {
            try {
                result = JSON.parse(data)
                if (result.code == 0) {
                    newstime = result.result.time * 1000
                    newstck = result.result.ticket
                    await interval() //开始记录阅读时间
					console.log(`【准备开始看资讯】，等待 ${newstime} ms\n`)
					await $.wait(newstime)
                    await rewardnews(newstck)
                } else {
                    console.log(`【获取看资讯失败】: ${result.message}`)

                }
            } catch (e) {
				console.log(e)
            } finally {

                resolve()
            }
        }, timeout)
    })
}

//开始记录阅读时间
function interval(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: `${host}/api/v1/reward/news/interval?`,
            headers: JSON.parse(ykdhd),
        }
        $.get(url, async (err, resp, data) => {
            try {
                result = JSON.parse(data)
                if (result.code == 0) {
                    console.log(`【看资讯时长记录开始】\n`)
                } else {
                    console.log(`【看资讯时长记录失败】`)

                }
            } catch (e) {
				console.log(e)
            } finally {

                resolve()
            }
        }, timeout)
    })
}

//结束记录阅读时间
function intervalend(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: `${host}/api/v1/reward/news/interval?end=1&`,
            headers: JSON.parse(ykdhd),
        }
        $.get(url, async (err, resp, data) => {
            try {
                result = JSON.parse(data)
                if (result.code == 0) {
                    console.log(`【看资讯时长记录完毕】\n`)
                } else {
                    console.log(`【看资讯时长记录失败】`)

                }
            } catch (e) {
				console.log(e)
            } finally {

                resolve()
            }
        }, timeout)
    })
}
//看新闻15次
function rewardnews(newstck) {
    return new Promise((resolve) => {
        let url = {
            url: `${host}/api/v1/reward/news?`,
            headers: JSON.parse(ykdhd),
            body: `ticket=${newstck}&`,
        }
        $.post(url, async (err, resp, data) => {
            try {
                result = JSON.parse(data)
                if (result.code == 0) {
                    if (result.result['today_count'] >= 15) {
                        console.log(`【已刷资讯15次】\n`)
                        await intervalend() //结束记录阅读时间
                    } else {
                        newtime1 = result.result.time * 1000
                        newstck1 = result.result.ticket
						console.log(`【看资讯获得金币】：${result.result.reward}\n`)
                        console.log(`【已刷资讯${result.result['today_count']}次】，等待 ${newtime1} ms`)
                        await $.wait(newtime1)
                        await rewardnews(newstck1)
                    }
                } else {
                    console.log(`【看资讯失败】：${result.message}\n`)
                
                }
            } catch (e) {
				console.log(e)
            } finally {

                resolve()
            }
        }, 0)
    })
}
//获取小视频tck
function short(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: `${host}/api/v1/reward/video?short=0&`,
            headers: JSON.parse(ykdhd),
        }
        $.get(url, async (err, resp, data) => {
            try {
                result = JSON.parse(data)
                if (result.code == 0) {
                    sptime = result.result.time * 1000
                    sptck = result.result.ticket
                    console.log(`【准备开始刷小视频】，等待 ${sptime} ms\n`)
                    await $.wait(sptime)
                    await spvideo(sptck)
                } else {
                    console.log(`【刷视频任务获取失败】：${result.message}\n`)
                }
            } catch (e) {
				console.log(e)
            } finally {

                resolve()
            }
        }, timeout)
    })
}
//刷视频15次
function spvideo(sptck) {
    return new Promise((resolve) => {
        let url = {
            url: `${host}/api/v1/reward/video?`,
            headers: JSON.parse(ykdhd),
            body: `ticket=${sptck}&short=0&`,
        }
        $.post(url, async (err, resp, data) => {
            try {
                result = JSON.parse(data)
                if (result.code == 0) {
                    if (result.result['today_count'] >= 15) {
                        console.log(`【已刷视频15次】`)
                    } else {
                        sptime = result.result.time * 1000
                        sptck = result.result.ticket
						console.log(`【刷视频获得金币】：${result.result.reward}\n`)
                        console.log(`【已刷视频${result.result['today_count']}次】，等待 ${sptime} ms`)
                        await $.wait(sptime)
                        await spvideo(sptck)
                    }
                } else {
                    console.log(`【刷视频失败】：${result.message}\n`)
                }
            } catch (e) {
				console.log(e)
            } finally {

                resolve()
            }
        }, 0)
    })
}

//首页金币查询
function coinInfo() {
    return new Promise((resolve) => {
        let url = {
            url: `${host}/api/v1/reward/coin?`,
            headers: JSON.parse(ykdhd)
        }
        $.get(url, async (err, resp, data) => {
            try {
                result = JSON.parse(data)
				if (result.code == 0) {
					await $.wait(2000)
					await getAllCoin(result.result.coins)
				}else{
					$.log(`\n查询首页金币失败: ${result.message}`)
				}
            } catch (e) {
				console.log(e)
            } finally {

                resolve()
            }
        }, 0)
    })
}
//首页金币 4次
async function getAllCoin(coins) {
    for (coinItem of coins) {
		if(coinItem.num != '0'){
			if (coinItem.ad == '1' || coinItem.ad == 1) {
				await $.wait(500)
				await placement14() //开始气泡广告
				await $.wait(500)
				await coinlq(coinItem.id)  //获得气泡奖励
			} else {
				await $.wait(500)
				await coinlq(coinItem.id)
			}
		}else{
			$.log(`\n金币气泡ID[${coinItem.id}]: 数量[${coinItem.num}]，不领取`)
		}
		await $.wait(500)
    }
}

//开始气泡广告
function placement14(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: `${host}/api/v1/ad/topon/placement/id?type=14&`,
            headers: JSON.parse(ykdhd),
        }
        $.get(url, async (err, resp, data) => {
            try {
                result = JSON.parse(data)
                if (result.code == 0) {
                    $.log(`\n开始执行广告`)
                    await $.wait(20000)
                    await log14() //结束气泡广告
                } else {
                    $.log(`\n领取金币失败: ${result.message}`)
                }
            } catch (e) {
				console.log(e)
            } finally {

                resolve()
            }
        }, timeout)
    })
}
//结束气泡广告
function log14(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: `${host}/api/v1/ad/log?type=14&`,
            headers: JSON.parse(ykdhd),
        }
        $.get(url, async (err, resp, data) => {
            try {
                result = JSON.parse(data)
                if (result.code == 0) {
                    $.log(`\n执行气泡广告完成`)
                } else {
                    $.log(`\n执行气泡广告完成`)
                }
            } catch (e) {
				console.log(e)
            } finally {

                resolve()
            }
        }, timeout)
    })
}
//首页金币
function coinlq(num) {
    return new Promise((resolve) => {
        let url = {
            url: `${host}/api/v1/reward/coin?`,
            headers: JSON.parse(ykdhd),
            body: `id=${num}&`,
        }
        $.post(url, async (err, resp, data) => {
            try {
                result = JSON.parse(data)
                if (result.code == 0) {
                    $.log(`\n领取成功金币：${result.result.coin}`)
                    await $.wait(2000)
                } else {
                    $.log(`\n您操作太快了~`)
                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, 0)
    })
}

//视频金币 10次
async function allvideo(Array) {
    for (const i of Array) {
        await $.wait(5000)
        await video()
    }
}
//视频任务
function video(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: `${host}/api/v1/zhuan/video?`,
            headers: JSON.parse(ykdhd),
        }
        $.post(url, async (err, resp, data) => {
            try {
                result = JSON.parse(data)
                if (result.code == 0) {
                    tick = result.result.ticket
                    $.log(`\n任务名称：${result.result.tip}`)
                    $.log(`\n获得金币：${result.result.coin}`)
                    $.log(`\n获得提现券：${result.result.coupon}`)
					if(result.result.coin == '0' && result.result.coupon == '0'){
						$.log(`\n没有收益，跳过`)
					}else{
						await $.wait(37000)
						await ticket(tick)
					}
                } else {
                    $.log(`\n视频任务失败: ${result.message}`)
                }
            } catch (e) {
				console.log(e)
            } finally {

                resolve()
            }
        }, timeout)
    })
}
function ticket(num) {
    return new Promise((resolve) => {
        let url = {
            url: `${host}/api/v1/ad/log?ticket=${num}&type=5&`,
            headers: JSON.parse(ykdhd),
        }
        $.get(url, async (err, resp, data) => {
            try {
                result = JSON.parse(data)
                if (result.code == 0) {
                    $.log(`\n观看广告成功：${result.result.status}`)
                    await $.wait(2000)
                    await coupon()
                } else {
                    $.log(`\n观看广告失败: ${result.message}`)
                }
            } catch (e) {
				console.log(e)
            } finally {

                resolve()
            }
        }, 0)
    })
}
//任务倒计时
function coupon(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: `${host}/api/v1/zhuan/coupon?`,
            headers: JSON.parse(ykdhd),
        }
        $.post(url, async (err, resp, data) => {
            try {
                result = JSON.parse(data)
                if (result.code == 0) {
                    time = result.result.items[1].time * 1000
                    $.log(`\n执行下个视频任务时间：${time}毫秒`)
                    await $.wait(time)
                } else {
                    $.log(`\n获取时间失败: ${result.message}`)
                }
            } catch (e) {
				console.log(e)
            } finally {

                resolve()
            }
        }, timeout)
    })
}
//获取抽奖参数
function lottery(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: `${host}/api/v1/reward/lottery/index?`,
            headers: JSON.parse(ykdhd),
        }
        $.get(url, async (err, resp, data) => {
            try {
                result = JSON.parse(data)
                if (result.code == 0) {
                    lotteryid = result.result.ticket
                    $.log(`\n开始抽奖`)
                    await $.wait(200)
                    await lotterycj(lotteryid)
                } else {
                    $.log(`\n没有获取到抽奖参数: ${result.message}`)
                }
            } catch (e) {
				console.log(e)
            } finally {

                resolve()
            }
        }, timeout)
    })
}
//开始抽奖
function lotterycj(num) {
    return new Promise((resolve) => {
        let url = {
            url: `${host}/api/v1/reward/lottery/index?`,
            headers: JSON.parse(ykdhd),
            body: `ticket=${num}&`,
        }
        $.post(url, async (err, resp, data) => {
            try {
                result = JSON.parse(data)
                if (result.code == 0) {
                    $.log(`\n抽奖成功`)
                } else {
                    $.log(`\n抽奖失败: ${result.message}`)
                }
            } catch (e) {
				console.log(e)
            } finally {

                resolve()
            }
        }, 0)
    })
}
//抽奖领取
function done(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: `${host}/api/v1/zhuan/done?`,
            headers: JSON.parse(ykdhd),
            body: `id=4&`,
        }
        $.post(url, async (err, resp, data) => {
            try {
                result = JSON.parse(data)
                if (result.code == 0) {
                    $.log(`\n获得金币：${result.result.coin}`)
                } else {
                    $.log(`\n领取失败: ${result.message}`)
                }
            } catch (e) {
				console.log(e)
            } finally {

                resolve()
            }
        }, timeout)
    })
}

//10次视频奖励领取
function videoAward(timeout = 0) {
    return new Promise((resolve) => {
        let url = {
            url: `${host}/api/v1/zhuan/done?`,
            headers: JSON.parse(ykdhd),
            body: `id=7&`,
        }
        $.post(url, async (err, resp, data) => {
            try {
                result = JSON.parse(data)
                if (result.code == 0) {
                    $.log(`\n10次视频奖励领取获得金币：${result.result.coin}`)
                } else {
                    $.log(`\n10次视频奖励领取失败: ${result.message}`)
                }
            } catch (e) {
				console.log(e)
            } finally {

                resolve()
            }
        }, timeout)
    })
}

//闯关7次
async function allbarrier(Array) {
    for (const i of Array) {
        await barrier(i)
		if($.cgFlag == 1){
			$.log(`\n闯关任务已完成7关，跳过`)
			break;
		}
        await $.wait(5000)
    }
}
//闯关换手机
function barrier(num) {
    return new Promise((resolve) => {
        let url = {
            url: `${host}/api/v1/reward/barrier/index?`,
            headers: JSON.parse(ykdhd),
        }
        $.get(url, async (err, resp, data) => {
            try {
                result = JSON.parse(data)
                if (result.result['current_barrier'] == 7 || result.result['current_barrier'] == '7') {
                    $.log(`\n闯关任务已完成7关`)
					$.cgFlag = 1
                } else {
                    $.log(`\n开始闯关任务`)
                    await $.wait(5000)
                    await barrierlq(num)
                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, 0)
    })
}
//闯关换手机
function barrierlq(num) {
    return new Promise((resolve) => {
        let url = {
            url: `${host}/api/v1/reward/barrier/index?`,
            headers: JSON.parse(ykdhd),
            body: `no=${num}&`,
        }
        $.post(url, async (err, resp, data) => {
            try {
                result = JSON.parse(data)
                if (result.code == 0) {
                    $.log(`\n闯关获得金币：${result.result.coin}`)
                } else {
                    $.log(`\n闯关领取失败`)
                }
            } catch (e) {

            } finally {

                resolve()
            }
        }, 0)
    })
}
//领现金看广告
//https://yuekandian.yichengw.cn/api/v1/reward/help/click?
//https://yuekandian.yichengw.cn/api/v1/ad/log?ticket=xxx&type=5&
//https://yuekandian.yichengw.cn/api/v1/reward/help/index?

function message() {
    if (tz == 1) { $.msg($.name, "", $.message) }
}

function RT(X, Y) {
    do rt = Math.floor(Math.random() * Y);
    while (rt < X)
    return rt;
}
//Env.min.js  来源https://raw.fastgit.org/chavyleung/scripts/master/Env.min.js
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}isShadowrocket(){return"undefined"!=typeof $rocket}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){if(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){let s=require("iconv-lite");this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:i,statusCode:r,headers:o,rawBody:h}=t;e(null,{status:i,statusCode:r,headers:o,rawBody:h},s.decode(h,this.encoding))},t=>{const{message:i,response:r}=t;e(i,r,r&&s.decode(r.rawBody,this.encoding))})}}post(t,e=(()=>{})){const s=t.method?t.method.toLocaleLowerCase():"post";if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[s](t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method=s,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){let i=require("iconv-lite");this.initGotEnv(t);const{url:r,...o}=t;this.got[s](r,o).then(t=>{const{statusCode:s,statusCode:r,headers:o,rawBody:h}=t;e(null,{status:s,statusCode:r,headers:o,rawBody:h},i.decode(h,this.encoding))},t=>{const{message:s,response:r}=t;e(s,r,r&&i.decode(r.rawBody,this.encoding))})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}