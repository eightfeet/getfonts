//依赖模块
var fs = require('fs');
var request = require("request");
var cheerio = require("cheerio");
var mkdirp = require('mkdirp');

var text = '级教室贴打扫整洁桌首赞美趣物角江活泼瞧愉摇泡迎轻迟晨稻秧紧绳牵交发表扬喜晶顶漂航行乾军舰量集体丽野照相机望肩宽岸渔撒网乡湾梨苹牙绕流群映栽朝霞墙报桂让闻味行热提帮助叔收椅接弟腿坏刀旁护科容易夫席戏次延演位站秩序乱定肯桔刘岁朱房挂盏灯笼奖瓣急等最捆束麻邮递信解窝然落凉爬躲屋沟蚂蚁藏伞电催锄滴盘餐粒皆辛苦查字典买教已经音母第形义便警钱夹您娃难票差啦丢街发浪数追应该奔科懂建造推器西肉抬馋直亲眼羽差嗓句极掉谜箱池塘波替裳热耳嘴鼻睛伙伴夜停转播视察寻煤炭露鸭邻居借结砍柴深刮抢修止本思久厌倦累莺练受猎坚持因念背傍湖通荷珠神平省笔始灰蜘蛛织阵丝断重冰终于结实捕啄森治痛死壮危险伤害枯蛀周静悄忽消灭挖眠准备食麦苗盖呼淘哨梦裙蓝舞穗丰堆仗团糕验瓶装炉融层脏菌期阿姨敲鞠躬糖摆喷醋削蕉核瓦尼亚摸围注塞虾吞烦吓象士熊名试冲撞翻眯齐录取';

//本地存储目录
var dir = './images';

//创建目录
mkdirp(dir, function (err) {
    if (err) {
        console.log(err);
    }
});

//发送请求
var requestUrl = function(url, name){
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(body);
            $('#wordimg').each(function () {
                var src = 'http://child.tao289.com'+$(this).attr('src');
                console.log('正在下载' + src);
                download(src, dir, name + src.substr(-4, 4));
                console.log('下载完成');
            });
        }
    });
}

var textArr = text.split('');

textArr.forEach(element => {
    const url = `http://child.tao289.com/index.php?m=Chinese&word=${encodeURIComponent(element)}`;
    requestUrl(url, element);
});



//下载方法
var download = function (url, dir, filename) {
    request
        .head(url, function (err, res, body) {
            request(url).pipe(fs.createWriteStream(dir + "/" + filename));
        });
};