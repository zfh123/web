

export default {
  ['GET */api-server/goods/*'] (pathMatch, query, request) {
    debugger
    if(pathMatch.length==1){
      let body = {
        "code": 404,
        "message": "缺少参数keyword :(",
        "description": "没有keyword参数或参数传递方式有误"
      };
      return {
        body: body,
        status: 404,
        statusText: '404',
        headers: { /*headers*/ },
        deylay: 500, //millisecond
      }
    }
    let body = Mock.mock({"data|1-3":[
      {
        "id|1": ["123","124","125","126","126","127","128","129","130","131","1311","1312","1313","1314","1315","1316"],
        "pluCode|1": "@natural(6900000,6999999999999)",
        "name": "@ctitle(3,50)",
        "spec|1": ["250ml","200g","320ml","128g"],
        "netPrice": "@float(60, 100, 0, 1)",
        "vipPrice": "@float(60, 100, 0, 1)",
        "quantity":"@natural(0,50)"
      }
    ]});
    return {
      body: body,
      status: 200,
      statusText: 'OK',
      headers: { /*headers*/ },
      deylay: 500, //millisecond
    }
  },
  ['GET */api-server/member/*'] (pathMatch, query, request) {
    debugger
    if(pathMatch.length==1){
      let body = {
        "code": 404,
        "message": "缺少参数keyword :(",
        "description": "没有keyword参数或参数传递方式有误"
      };
      return {
        body: body,
        status: 404,
        statusText: '404',
        headers: { /*headers*/ },
        deylay: 500, //millisecond
      }
    }
    let body = Mock.mock({"data|0-1":[
      {
        "id": "@id",
        "nickname": "@cname",
        "level|1":["普通会员","银卡会员","金卡会员","铂金会员","钻石会员"],
        "levelOffer|1":[1,0.98,0.95,0.9,0.89],
        "cardNo":"@natural(330000000000,339999999999)",
        "integral": "@integer(0,100)",
        "money":"@integer(0,100)",
        "mobile":"@natural(13000000000, 13999999999)",
        "creatTime":"2017-1-1 12:12:12"
      }
    ]});
    return {
      body: body,
      status: 200,
      statusText: 'success',
      headers: { /*headers*/ },
      deylay: 500, //millisecond
    }
  },
  ['POST */api-server/member/*'] (pathMatch, query, request) {
    debugger
    let body = Mock.mock({
      "id": Math.round(Math.random()*1000000),
      "nickname": query.nickname,
      "integral": 0,
      "photo": 'https://randomuser.me/api/portraits/men/35.jpg'
    });
    return {
      body: body,
      status: 200,
      statusText: 'success',
      headers: { /*headers*/ },
      deylay: 500, //millisecond
    }
  }
}
