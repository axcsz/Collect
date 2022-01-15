/*
**** 活动 ****
活动长牛来啦cookie(cowkey):更新并启动微信重写https://raw.githubusercontent.com/CenBoMin/GithubSync/main/TXSTOCK/txs_wxcookie.conf,打开App,点击左上头像-进入，点击活动页面即可获取

！！！！！获取完cookie,务必关闭重写引用
*/

const jsname = '🐮自选股养牛牛'
const $ = Env(jsname)
const logs = 0; //0为关闭日志，1为开启,默认为0
const notifyInterval = 1; //0为关闭通知，1为所有通知,默认为0

let rndtime = Math.round(new Date().getTime()) //毫秒
let signday = formatDateTime(new Date());
let tz = '';
let cash = $.getval('cash') || 0; //0为不自动提现,1为自动提现1元,5为自动提现1元,

const userheaderArr = [];
let userheaderVal = "";
let USERHEADER = [];

const userkeyArr = [];
let userkeyVal = "";
let USERKEY = [];

const signheaderArr = [];
let signheaderVal = "";
let SINGHEADER = [];

const signkeyArr = [];
let signkeyVal = "";
let SINGKEY = [];

const taskheaderArr = [];
let taskheaderVal = "";
let TASKHEADER = [];

const taskkeyArr = [];
let taskkeyVal = "";
let TASKKEY = [];

const wxtaskkeyArr = [];
let wxtaskkeyVal = "";
let WXTASKKEY = [];

const cowkeyArr = [];
let cowkeyVal = "";
let COWKEY = [];
////////////////////////////////////////////////////////////////////


if ($.isNode()) {
  Object.keys(userheaderVal).forEach((item) => {
    if (userheaderVal[item]) {
      userheaderArr.push(signheaderVal[item])
    }
  });
  Object.keys(userkeyVal).forEach((item) => {
    if (userkeyVal[item]) {
      userkeyArr.push(userkeyVal[item])
    }
  });
  Object.keys(signheaderVal).forEach((item) => {
    if (signheaderVal[item]) {
      signheaderArr.push(signheaderVal[item])
    }
  });
  Object.keys(signkeyVal).forEach((item) => {
    if (signkeyVal[item]) {
      signkeyArr.push(signkeyVal[item])
    }
  });
  Object.keys(taskheaderVal).forEach((item) => {
    if (taskheaderVal[item]) {
      taskheaderArr.push(taskheaderVal[item])
    }
  });
  Object.keys(taskkeyVal).forEach((item) => {
    if (taskkeyVal[item]) {
      taskkeyArr.push(taskkeyVal[item])
    }
  });
  Object.keys(wxtaskkeyVal).forEach((item) => {
    if (wxtaskkeyVal[item]) {
      wxtaskkeyArr.push(wxtaskkeyVal[item])
    }
  });
  Object.keys(cowkeyVal).forEach((item) => {
    if (cowkeyVal[item]) {
      cowkeyArr.push(cowkeyVal[item])
    }
  });


} else {
  userheaderArr.push($.getdata('userheader'));
  userkeyArr.push($.getdata('userkey'));
  signheaderArr.push($.getdata('signheader'));
  signkeyArr.push($.getdata('signkey'));
  taskheaderArr.push($.getdata('taskheader'));
  taskkeyArr.push($.getdata('taskkey'));
  wxtaskkeyArr.push($.getdata('wxtaskkey'));
  cowkeyArr.push($.getdata('cowkey'));
}


///////////////////////////////////////////////////////////////////

!(async () => {
  await Jsname()
  O = (`${jsname}执行通知🔔`);
  userheaderVal = userheaderArr[0];
  userkeyVal = userkeyArr[0];
  signheaderVal = signheaderArr[0];
  signkeyVal = signkeyArr[0];
  taskheaderVal = taskheaderArr[0];
  taskkeyVal = taskkeyArr[0];
  wxtaskkeyVal = wxtaskkeyArr[0];
  cowkeyVal = cowkeyArr[0];
  if (!taskheaderArr[0]) {
    console.log($.name, '【提示】请先前往获取任务cookie')
    return;
  }
  console.log(`\n✅ 执行【戳牛拿奖🧧】任务\n`)
  await cowred();
  console.log(`\n✅ 执行【点长牛开💰】任务\n`)
  await cowbox();
  console.log(`\n✅ 执行【每日悬赏💎】任务\n`)
  await cowtask0();
  await cowtask1();
  await cowtask2();
  await cowtask3();
  await cowtask4();
  await cowtask5();
  await cowtask6();
  await cowtask7();
  await cowtask8();
  await cowtask9();
  console.log(`\n✅ 执行【自动喂牛牛🐮】任务\n`)
  await cowhome1();
  await cowfood(bullish);
  await cowhome2();
  await showmsg();

})()
.catch((e) => $.logErr(e))
  .finally(() => $.done())

//通知
function showmsg() {
  if (notifyInterval != 1) {
    console.log(O + '\n' + tz);
  }

  if (notifyInterval == 1) {
    $.msg(O, '\n', tz);
  }
}
//////////////////////////////////////////////////////////////////
async function cowtask0() {
  console.log(`开始验证【COW每天长牛签到】任务状态`)
  await cowstatuid6()
  if (cowstatuid6.done == 0) {
    console.log(`开始申请票据...`)
    await cowtaskticket(); //申请票据
    console.log(`执行【COW每天长牛签到】任务`)
    await cowtaskid6(cowticket);
  } else {
    console.log(`准备执行下一个任务...\n`)
    tz += `【🐮每天长牛签到】:已执行\n`
  }
}
async function cowtask1() {
  console.log(`开始验证【COW阅读一篇资讯】任务状态`)
  await cowstatuid1()
  if (cowstatuid1.done == 0) {
    console.log(`开始申请票据...`)
    await cowtaskticket(); //申请票据
    console.log(`执行【COW阅读一篇资讯】任务`)
    await cowtaskid1(cowticket);
  } else {
    console.log(`准备执行下一个任务...\n`)
    tz += `【🐮阅读一篇资讯】:已执行\n`
  }
}
async function cowtask2() {
  console.log(`开始验证【COW查看大盘行情】任务状态`)
  await cowstatuid2()
  if (cowstatuid2.done == 0) {
    console.log(`开始申请票据...`)
    await cowtaskticket(); //申请票据
    console.log(`执行【COW查看大盘行情】任务`)
    await cowtaskid2(cowticket);
  } else {
    console.log(`准备执行下一个任务...\n`)
    tz += `【🐮查看大盘行情】:已执行\n`
  }
}
async function cowtask3() {
  console.log(`开始验证【COW分享一篇资讯】任务状态`)
  await cowstatuid3()
  if (cowstatuid3.done == 0) {
    console.log(`开始申请票据...`)
    await cowtaskticket(); //申请票据
    console.log(`执行【COW分享一篇资讯】任务`)
    await cowtaskid3(cowticket);
  } else {
    console.log(`准备执行下一个任务...\n`)
    tz += `【🐮分享一篇资讯】:已执行\n`
  }
}
async function cowtask4() {
  console.log(`开始验证【COW分享股票行情】任务状态`)
  await cowstatuid4()
  if (cowstatuid4.done == 0) {
    console.log(`开始申请票据...`)
    await cowtaskticket(); //申请票据
    console.log(`执行【COW分享股票行情】任务`)
    await cowtaskid4(cowticket);
  } else {
    console.log(`准备执行下一个任务...\n`)
    tz += `【🐮分享股票行情】:已执行\n`
  }
}
async function cowtask5() {
  console.log(`开始验证【COW添加股票到自选】任务状态`)
  await cowstatuid5()
  if (cowstatuid5.done == 0) {
    console.log(`开始申请票据...`)
    await cowtaskticket(); //申请票据
    console.log(`执行【COW添加股票到自选】任务`)
    await cowtaskid5(cowticket);
  } else {
    console.log(`准备执行下一个任务...\n`)
    tz += `【🐮添加股票到自选】:已执行\n`
  }
}
async function cowtask6() {
  console.log(`开始验证【未上架-分享帖子】任务状态`)
  await cowstatuid7()
  if (cowstatuid7.done == 0) {
    console.log(`开始申请票据...`)
    await cowtaskticket(); //申请票据
    console.log(`执行【未上架-分享帖子】任务`)
    await cowtaskid7(cowticket);
  } else {
    console.log(`准备执行下一个任务...\n`)
    tz += `【🐮未上架-分享帖子】:已执行\n`
  }
}
async function cowtask7() {
  console.log(`开始验证【未上架-点赞】任务状态`)
  await cowstatuid8()
  if (cowstatuid8.done == 0) {
    console.log(`开始申请票据...`)
    await cowtaskticket(); //申请票据
    console.log(`执行【未上架-点赞】任务`)
    await cowtaskid8(cowticket);
  } else {
    console.log(`准备执行下一个任务...\n`)
    tz += `【🐮未上架-点赞】:已执行\n`
  }
}
async function cowtask8() {
  console.log(`开始验证【COW查看选股卡页】任务状态`)
  await cowstatuid9()
  if (cowstatuid9.done == 0) {
    console.log(`开始申请票据...`)
    await cowtaskticket(); //申请票据
    console.log(`执行【COW查看选股卡页】任务`)
    await cowtaskid9(cowticket);
  } else {
    console.log(`准备执行下一个任务...\n`)
    tz += `【🐮查看选股卡页】:已执行\n`
  }
}
async function cowtask9() {
  console.log(`开始验证【COW模拟炒股】任务状态`)
  await cowstatuid10()
  if (cowstatuid10.done == 0) {
    console.log(`开始申请票据...`)
    await cowtaskticket(); //申请票据
    console.log(`执行【COW模拟炒股】任务`)
    await cowtaskid10(cowticket);
  } else {
    console.log(`准备执行下一个任务...\n`)
    tz += `【🐮模拟炒股】:已执行\n`
  }
}
////////////////////////////////////////////////////////////////////
async function cowhome1() {
  return new Promise((resolve) => {
    let url = {
      url: `https://zqact03.tenpay.com/cgi-bin/activity_year_party.fcgi?invite_code=&help_code=&share_date=&type=bullish&action=home&channel=1&actid=1105&_=${rndtime}&_appName=ios${taskheaderVal}`,

      headers: {
        'Cookie': `${cowkeyVal}`,
        'Accept': `application/json, text/plain, */*`,
        'Connection': `keep-alive`,
        'Referer': ``,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `zqact03.tenpay.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 qqstock/8.7.1`,
        'Accept-Language': `zh-cn`
      },
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("腾讯自选股: API查询请求失败 ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            bullish = JSON.parse(data);
            upvalue = bullish.bullish_info.next_level_exp - bullish.bullish_info.exp_value
            console.log(`查询牛牛🐮状况....\n`)
            $.log(`【🐮等级】:Lv.${bullish.bullish_info.level}`);
            $.log(`【🐮牛气值】:${bullish.bullish_info.bullish_value}牛气`);
            tz += `【🐮任务前等级】:Lv.${bullish.bullish_info.level}\n`
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function cowhome2() {
  return new Promise((resolve) => {
    let url = {
      url: `https://zqact03.tenpay.com/cgi-bin/activity_year_party.fcgi?invite_code=&help_code=&share_date=&type=bullish&action=home&channel=1&actid=1105&_=${rndtime}&_appName=ios${taskheaderVal}`,

      headers: {
        'Cookie': `${cowkeyVal}`,
        'Accept': `application/json, text/plain, */*`,
        'Connection': `keep-alive`,
        'Referer': ``,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `zqact03.tenpay.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 qqstock/8.7.1`,
        'Accept-Language': `zh-cn`
      },
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("腾讯自选股: API查询请求失败 ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            bullish = JSON.parse(data);
            upvalue = bullish.bullish_info.next_level_exp - bullish.bullish_info.exp_value
            tz += `【🐮喂食后等级】:Lv.${bullish.bullish_info.level}\n`
            tz += `【🐮等级经验值】:${bullish.bullish_info.exp_value}EXP\n`
            tz += `【🐮升级喂食量】:需要${upvalue}牛气\n`


          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function cowfood(bullish) {
  if (bullish.bullish_info.bullish_value >= 500) {
    console.log(`开始喂牛牛🐮....\n`)
    while (bullish.bullish_info.bullish_value >= 500) {
      await cowlevel();
      let randomtime = Randomtime(5000, 10000) / 1000
      await $.wait(Randomtime(5000, 10000));
      console.log(`【随机延迟🕑】:${Math.round(randomtime)}秒...`);
      bullish.bullish_info.bullish_value = bullish.bullish_info.bullish_value - 500
    }
  } else {
    console.log(`当前牛气不足,不喂食牛牛🐮...\n`)
  }
}
async function cowlevel() {
  return new Promise((resolve) => {
    let url = {
      url: `https://zqact03.tenpay.com/cgi-bin/activity_year_party.fcgi?type=bullish&action=feed&channel=1&actid=1105&_=${rndtime}&_appName=ios${taskheaderVal}`,

      headers: {
        'Cookie': `${cowkeyVal}`,
        'Accept': `application/json, text/plain, */*`,
        'Connection': `keep-alive`,
        'Referer': ``,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `zqact03.tenpay.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 qqstock/8.7.1`,
        'Accept-Language': `zh-cn`
      },
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("腾讯自选股: API查询请求失败 ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            if (data.level_up_status == 0) {
              $.log(`【喂牛气奖励】:${data.feed_reward_info.reward_desc}`);
            } else if (data.level_up_status == 1) {
              $.log(`【🐮新等级】:第${data.update_new_level}级，获得${data.level_reward_info.reward_desc}`);
              $.log(`【喂牛气奖励】:${data.feed_reward_info.reward_desc}`);
              tz += `【🐮新等级】:第${data.update_new_level}级，获得${data.level_reward_info.reward_desc}\n`
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function cowopenbox() {
  return new Promise((resolve) => {
    let url = {
      url: `https://zqact03.tenpay.com/cgi-bin/activity_year_party.fcgi?type=bullish&action=open_box&channel=1&actid=1105&_=${rndtime}&_appName=ios${taskheaderVal}`,

      headers: {
        'Cookie': `${cowkeyVal}`,
        'Accept': `application/json, text/plain, */*`,
        'Connection': `keep-alive`,
        'Referer': ``,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `zqact03.tenpay.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 qqstock/8.7.1`,
        'Accept-Language': `zh-cn`
      },
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("腾讯自选股: API查询请求失败 ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            $.log(data)
            data = JSON.parse(data);
            if (data.retcode == 0) {
              tz += `【🐮钱袋奖励】:获得${data.reward_info[0].reward_desc}\n`
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function cowopenboxck() {
  return new Promise((resolve) => {
    let url = {
      url: `https://zqact03.tenpay.com/cgi-bin/activity_year_party.fcgi?type=bullish&action=open_box&channel=1&actid=1105&_=${rndtime}&_appName=ios${taskheaderVal}`,

      headers: {
        'Cookie': `${cowkeyVal}`,
        'Accept': `application/json, text/plain, */*`,
        'Connection': `keep-alive`,
        'Referer': ``,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `zqact03.tenpay.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 qqstock/8.7.1`,
        'Accept-Language': `zh-cn`
      },
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("腾讯自选股: API查询请求失败 ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
            checkbox = data.forbidden_code
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function cowbox() {
  await cowopenboxck();
  await $.wait(8000);
  if (checkbox == 51091036) {
    console.log(`【🐮钱袋奖励】:今日奖励已经领完,明天再来`)
    tz += `【🐮钱袋奖励】:哎呀，这次是空的💭,在试试\n`
    console.log(`执行下一个任务...\n`)
  } else {
    for (let i = 0; i < 20; i++) {
      await cowopenbox();
      let randomtime = Randomtime(10000, 60000) / 1000
      await $.wait(Randomtime(10000, 60000));
      console.log(`【随机延迟🕑】:${Math.round(randomtime)}秒...\n`);
    }
  }
}
async function cowgetred() {
  return new Promise((resolve) => {
    let url = {
      url: `https://zqact03.tenpay.com/cgi-bin/activity_year_party.fcgi?type=bullish&action=rock_bullish&channel=1&actid=1105&_=${rndtime}&_appName=ios${taskheaderVal}`,

      headers: {
        'Cookie': `${cowkeyVal}`,
        'Accept': `application/json, text/plain, */*`,
        'Connection': `keep-alive`,
        'Referer': ``,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `zqact03.tenpay.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 qqstock/8.7.1`,
        'Accept-Language': `zh-cn`
      },
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("腾讯自选股: API查询请求失败 ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            $.log(data)
            data = JSON.parse(data);
            if (data.retcode == 0) {
              tz += `【🐮戳戳牛】:获得${data.reward_info[0].reward_desc}\n`
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function cowgetredck() {
  return new Promise((resolve) => {
    let url = {
      url: `https://zqact03.tenpay.com/cgi-bin/activity_year_party.fcgi?type=bullish&action=rock_bullish&channel=1&actid=1105&_=${rndtime}&_appName=ios${taskheaderVal}`,

      headers: {
        'Cookie': `${cowkeyVal}`,
        'Accept': `application/json, text/plain, */*`,
        'Connection': `keep-alive`,
        'Referer': ``,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `zqact03.tenpay.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 qqstock/8.7.1`,
        'Accept-Language': `zh-cn`
      },
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("腾讯自选股: API查询请求失败 ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
            checkdata = data.forbidden_code
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function cowred() {
  await cowgetredck();
  await $.wait(3500);
  if (checkdata == 190721002) {
    console.log(`【🐮戳戳牛】:今日奖励已经领完,明天再来`)
    tz += `【🐮戳戳牛】:今日奖励已经领完\n`
    console.log(`执行下一个任务...\n`)
  } else {
    for (let i = 0; i < 5; i++) {
      await cowgetred();
      await $.wait(Randomtime(3500, 4100));
    }
  }
}
//*********新活动*********//================================》

//票据申请
function cowtaskticket() {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskticket&channel=1&actid=1105&_rndtime=${rndtime}&_appName=ios${taskheaderVal}`,

      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      let test2 = JSON.parse(data)
      $.log(`本次验证时间🕐：` + time(rndtime));
      $.log(`本次验证票据🎫：${test2.task_ticket}`);
      cowticket = test2.task_ticket
      //tz += `【现金余额】：¥ ${task.data.activity_money.money}元\n`

      resolve()
    })
  })
}
//每天长牛签到+200牛气
function cowtaskid6(cowticket) {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskdone&channel=1&actid=1105&tid=39&id=6&task_ticket=${cowticket}&_appName=ios${taskheaderVal}`,

      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      let task = JSON.parse(data)
      $.log(`【🐮每天长牛签到】:获得 ${task.reward_desc}\n`);
      tz += `【🐮每天长牛签到】:获得 ${task.reward_desc}\n`
      await $.wait(10000); //等待10秒
      resolve()
    })
  })
}

function cowstatuid6() {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskstatus&channel=1&actid=1105&id=6&tid=39&_appName=ios${taskheaderVal}`,

      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      cowstatuid6 = JSON.parse(data)
      if (cowstatuid6.done == 1) {
        $.log(`验证状态失败,任务已执行🚫`);
      } else {
        $.log(`验证状态成功,可执行任务🎉`);
      }
      resolve()
    })
  })
}
//阅读一篇资讯+200牛气
function cowtaskid1(cowticket) {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskdone&channel=1&actid=1105&tid=5&id=1&task_ticket=${cowticket}&_appName=ios${taskheaderVal}`,

      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      let task = JSON.parse(data)
      $.log(`【🐮阅读一篇资讯】:获得 ${task.reward_desc}\n`);
      tz += `【🐮阅读一篇资讯】:获得 ${task.reward_desc}\n`
      await $.wait(10000); //等待10秒
      resolve()
    })
  })
}

function cowstatuid1() {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskstatus&channel=1&actid=1105&id=1&tid=5&_appName=ios${taskheaderVal}`,

      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      cowstatuid1 = JSON.parse(data)
      if (cowstatuid1.done == 1) {
        $.log(`验证状态失败,任务已执行🚫`);
      } else {
        $.log(`验证状态成功,可执行任务🎉`);
      }
      resolve()
    })
  })
}
//查看大盘行情+200牛气
function cowtaskid2(cowticket) {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskdone&channel=1&actid=1105&tid=11&id=2&task_ticket=${cowticket}&_appName=ios${taskheaderVal}`,

      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      let task = JSON.parse(data)
      $.log(`【🐮查看大盘行情】:获得 ${task.reward_desc}\n`);
      tz += `【🐮查看大盘行情】:获得 ${task.reward_desc}\n`
      await $.wait(10000); //等待10秒
      resolve()
    })
  })
}

function cowstatuid2() {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskstatus&channel=1&actid=1105&id=2&tid=11&_appName=ios${taskheaderVal}`,

      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      cowstatuid2 = JSON.parse(data)
      if (cowstatuid2.done == 1) {
        $.log(`验证状态失败,任务已执行🚫`);
      } else {
        $.log(`验证状态成功,可执行任务🎉`);
      }
      resolve()
    })
  })
}
//分享一篇资讯+300牛气
function cowtaskid3(cowticket) {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskdone&channel=1&actid=1105&tid=28&id=3&task_ticket=${cowticket}&_appName=ios${taskheaderVal}`,

      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      let task = JSON.parse(data)
      $.log(`【🐮分享一篇资讯】:获得 ${task.reward_desc}\n`);
      tz += `【🐮分享一篇资讯】:获得 ${task.reward_desc}\n`
      await $.wait(10000); //等待10秒
      resolve()
    })
  })
}

function cowstatuid3() {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskstatus&channel=1&actid=1105&id=3&tid=28&_appName=ios${taskheaderVal}`,

      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      cowstatuid3 = JSON.parse(data)
      if (cowstatuid3.done == 1) {
        $.log(`验证状态失败,任务已执行🚫`);
      } else {
        $.log(`验证状态成功,可执行任务🎉`);
      }
      resolve()
    })
  })
}
//分享股票行情+300牛气
function cowtaskid4(cowticket) {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskdone&channel=1&actid=1105&tid=22&id=4&task_ticket=${cowticket}&_appName=ios${taskheaderVal}`,

      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      let task = JSON.parse(data)
      $.log(`【🐮分享股票行情】:获得 ${task.reward_desc}\n`);
      tz += `【🐮分享股票行情】:获得 ${task.reward_desc}\n`
      await $.wait(10000); //等待10秒
      resolve()
    })
  })
}

function cowstatuid4() {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskstatus&channel=1&actid=1105&id=4&tid=22&_appName=ios${taskheaderVal}`,

      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      cowstatuid4 = JSON.parse(data)
      if (cowstatuid4.done == 1) {
        $.log(`验证状态失败,任务已执行🚫`);
      } else {
        $.log(`验证状态成功,可执行任务🎉`);
      }
      resolve()
    })
  })
}
//添加股票到自选+500牛气
function cowtaskid5(cowticket) {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskdone&channel=1&actid=1105&tid=2&id=5&task_ticket=${cowticket}&_appName=ios${taskheaderVal}`,

      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      let task = JSON.parse(data)
      $.log(`【🐮股票到自选】:获得 ${task.reward_desc}\n`);
      tz += `【🐮股票到自选】:获得 ${task.reward_desc}\n`
      await $.wait(10000); //等待10秒
      resolve()
    })
  })
}

function cowstatuid5() {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskstatus&channel=1&actid=1105&id=5&tid=2&_appName=ios${taskheaderVal}`,

      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      cowstatuid5 = JSON.parse(data)
      if (cowstatuid5.done == 1) {
        $.log(`验证状态失败,任务已执行🚫`);
      } else {
        $.log(`验证状态成功,可执行任务🎉`);
      }
      resolve()
    })
  })
}

//id7 分享帖子300牛气
function cowtaskid7(cowticket) {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskdone&channel=1&actid=1105&tid=29&id=7&task_ticket=${cowticket}&_appName=ios${taskheaderVal}`,

      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      let task = JSON.parse(data)
      $.log(`【🐮未上架-分享帖子】:获得 ${task.reward_desc}\n`);
      tz += `【🐮未上架-分享帖子】:获得 ${task.reward_desc}\n`
      await $.wait(10000); //等待10秒
      resolve()
    })
  })
}

function cowstatuid7() {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskstatus&channel=1&actid=1105&id=7&tid=29&_appName=ios${taskheaderVal}`,

      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      cowstatuid7 = JSON.parse(data)
      if (cowstatuid7.done == 1) {
        $.log(`验证状态失败,任务已执行🚫`);
      } else {
        $.log(`验证状态成功,可执行任务🎉`);
      }
      resolve()
    })
  })
}

//id8 点👍200牛气
function cowtaskid8(cowticket) {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskdone&channel=1&actid=1105&tid=4&id=8&task_ticket=${cowticket}&_appName=ios${taskheaderVal}`,

      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      let task = JSON.parse(data)
      $.log(`【🐮未上架-点赞】:获得 ${task.reward_desc}\n`);
      tz += `【🐮未上架-点赞】:获得 ${task.reward_desc}\n`
      await $.wait(10000); //等待10秒
      resolve()
    })
  })
}

function cowstatuid8() {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskstatus&channel=1&actid=1105&id=8&tid=4&_appName=ios${taskheaderVal}`,

      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      cowstatuid8 = JSON.parse(data)
      if (cowstatuid8.done == 1) {
        $.log(`验证状态失败,任务已执行🚫`);
      } else {
        $.log(`验证状态成功,可执行任务🎉`);
      }
      resolve()
    })
  })
}

//id9 查看选股卡页 200牛气
function cowtaskid9(cowticket) {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskdone&channel=1&actid=1105&tid=14&id=9&task_ticket=${cowticket}&_appName=ios${taskheaderVal}`,

      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      let task = JSON.parse(data)
      $.log(`【🐮查看选股卡页】:获得 ${task.reward_desc}\n`);
      tz += `【🐮查看选股卡页】:获得 ${task.reward_desc}\n`
      await $.wait(10000); //等待10秒
      resolve()
    })
  })
}

function cowstatuid9() {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskstatus&channel=1&actid=1105&id=9&tid=14&_appName=ios${taskheaderVal}`,

      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      cowstatuid9 = JSON.parse(data)
      if (cowstatuid9.done == 1) {
        $.log(`验证状态失败,任务已执行🚫`);
      } else {
        $.log(`验证状态成功,可执行任务🎉`);
      }
      resolve()
    })
  })
}

//id10 模拟炒股 500牛气
function cowtaskid10(cowticket) {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskdone&channel=1&actid=1105&tid=13&id=10&task_ticket=${cowticket}&_appName=ios${taskheaderVal}`,

      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      let task = JSON.parse(data)
      $.log(`【🐮模拟炒股】:获得 ${task.reward_desc}\n`);
      tz += `【🐮模拟炒股】:获得 ${task.reward_desc}\n`
      await $.wait(10000); //等待10秒
      resolve()
    })
  })
}

function cowstatuid10() {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskstatus&channel=1&actid=1105&id=10&tid=13&_appName=ios${taskheaderVal}`,

      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      cowstatuid10 = JSON.parse(data)
      if (cowstatuid10.done == 1) {
        $.log(`验证状态失败,任务已执行🚫`);
      } else {
        $.log(`验证状态成功,可执行任务🎉`);
      }
      resolve()
    })
  })
}

function invite() {
  return new Promise((resolve, reject) => {
    let inviteurl = {
      url: `https://zqact03.tenpay.com/activity/page/raisebull/?stat_data=Otw37p00qb228&inviteCode=WBLfuxb652&helpCode=WBLfuxb652&date=20210211`,
      headers: {
        'Accept-Encoding': `gzip, deflate, br`,
        'Cookie': `${wxtaskkeyVal}`,
        'Connection': `keep-alive`,
        'Accept': `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`,
        'Host': `zqact03.tenpay.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.2(0x1800022c) NetType/WIFI Language/zh_CN`,
        'Accept-Language': `zh-cn`
      }
    }
    $.get(inviteurl, (error, resp, data) => {
      if (error) {
        //$.log("响应错误")
      }
      resolve()
    })
  })
}

////////////////////////////////////////////////////////////////////
function Jsname() {
  $.log(`╭┉┉╮╭╮╭╮╭┉┉╮╭┉┉╮╭┉┉╮╭┉┉╮╭╮╭╮`)
  $.log(`╰╮╭╯┋╰╯┋┋╭┉╯╰╮╭╯┋╭╮┋┋╭┉╯┋╰╯┋`)
  $.log(` ┋┋ ╰╮╭╯┋╰┉╮ ┋┋ ┋┋┋┋┋┋  ┋ ╭╯`)
  $.log(` ┋┋ ╭╯╰╮╰┉╮┋ ┋┋ ┋┋┋┋┋┋  ┋ ╰╮`)
  $.log(` ┋┋ ┋╭╮┋╭┉╯┋ ┋┋ ┋╰╯┋┋╰┉╮┋╭╮┋`)
  $.log(` ╰╯ ╰╯╰╯╰┉┉╯ ╰╯ ╰┉┉╯╰┉┉╯╰╯╰╯`)
}

function Randomtime(mintime, maxtime) {
  return Math.round(Math.random() * (maxtime - mintime)) + mintime;
}

function time(time) {
  var date = new Date(time + 8 * 3600 * 1000);
  return date.toJSON().substr(0, 19).replace('T', ' ').replace(/-/g, '.');
}

function safeGet(data) {
  try {
    if (typeof JSON.parse(data) == "object") {
      return true;
    }
  } catch (e) {
    console.log(e);
    console.log(`服务器访问数据为空，请检查自身设备网络情况`);
    return false;
  }
}

function formatDateTime(inputTime) {
  var date = new Date(inputTime);
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  var h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  var minute = date.getMinutes();
  var second = date.getSeconds();
  minute = minute < 10 ? ('0' + minute) : minute;
  second = second < 10 ? ('0' + second) : second;
  return y + m + d;
};

function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s)
        })
      })
    }
    get(t) {
      return this.send.call(this.env, t)
    }
    post(t) {
      return this.send.call(this.env, t, "POST")
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports
    }
    isQuanX() {
      return "undefined" != typeof $task
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon
    }
    isLoon() {
      return "undefined" != typeof $loon
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t)
      } catch {
        return e
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t)
      } catch {
        return e
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t))
      } catch {}
      return s
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e)
      } catch {
        return !1
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i))
      })
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"), a = {
          url: `http://${h}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: r
          },
          headers: {
            "X-Key": o,
            Accept: "*/*"
          }
        };
        this.post(a, (t, e, i) => s(i))
      }).catch(t => this.logErr(t))
    }
    loaddata() {
      if (!this.isNode()) return {}; {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {}; {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i))
          } catch (t) {
            return {}
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i)
        if (r = Object(r)[t], void 0 === r) return s;
      return r
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e
        } catch (t) {
          e = ""
        }
      }
      return e
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
        }
      } else s = this.setval(t, e);
      return s
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
    }
    get(t, e = (() => {})) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
          }
        } catch (t) {
          this.logErr(t)
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body)
      }))
    }
    post(t, e = (() => {})) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      });
      else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t));
      else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o)
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body)
        })
      }
    }
    time(t) {
      let e = {
        "M+": (new Date).getMonth() + 1,
        "d+": (new Date).getDate(),
        "H+": (new Date).getHours(),
        "m+": (new Date).getMinutes(),
        "s+": (new Date).getSeconds(),
        "q+": Math.floor(((new Date).getMonth() + 3) / 3),
        S: (new Date).getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
      return t
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            }
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            }
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            }
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
      let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
      h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t))
    }
    done(t = {}) {
      const e = (new Date).getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
    }
  }(t, e)
}
