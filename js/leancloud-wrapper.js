function initLeancloud({
    appId,
    appKey,
    serverURLs
}) {
    AV.init({
        appId: appId,
        appKey: appKey,
        serverURLs: serverURLs
    });
    console.log("init av finish")
}

function loginLeancloud(name,pwd) {
    AV.User.logIn(name, pwd).then(function (user) {
        // 登录成功
    }, function (error) {
        // 登录失败（可能是密码错误）
    });
}

function createUrls(name,url) {
    // 声明 class
    var Hao123 = AV.Object.extend('hao123');

    // 构建对象
    var hao123 = new Hao123();

    // 为属性赋值
    hao123.set('name', name);
    hao123.set('url', url);

    // 将对象保存到云端
    hao123.save().then(function (hao123) {
        // 成功保存之后，执行其他逻辑
        console.log('保存成功。objectId：');
    }, function (error) {
        // 异常处理
        alert("保存失败");
    });
}