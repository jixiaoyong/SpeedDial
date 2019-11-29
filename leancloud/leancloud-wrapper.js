AV.init({
    appId: "{{eiCorogUwe1OdpPG65oSWEsP-MdYXbMMI}}",
    appKey: "{{glorq3CiX4j8RNIWf7kq5LBW}}",
    serverURLs: "https://api.xiaoyong.ml"
});

var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.set('words', 'Hello world!');
testObject.save().then(function (testObject) {
    console.log('保存成功。')
})