//依赖模块
var fs = require('fs');
var request = require("request");
var cheerio = require("cheerio");
var mkdirp = require('mkdirp');

var text = '凶猛淹没归凿渠哇耽误探抓入勤妇稍滑艰披嫂颐捞浑含辈嘛何必赁柜议模范倘单顾迅顿涕待帐剩绸价贵异豪咱千棉絮蔡薄洲禁叹筷稀烫俩赛搅胜嫌银亿除越印曹官堵柱秤杆宰割艘沉线搬微牧泊漠茫矿兰簇拥吸显苍吻颊蒋沈蜂仍默扎崭况慌躺屏嗅羞愧特悦曲初翠爽透雕克但而且咬尝葡萄疆盛梯茂展搭棚串紫暗淡够床疑霜梅凌寒独遥昼疲伏甲板休翅却崇达迷质究掂藏郊贯溅裤致图馆者管册济些笃呵阅览凳坦蜡糟虽强态适孔碍钉舱港狂颠簸灌排巨竟匹愿驮坊挡伯浅鼠拦唉筋蹄既号缝傻吵厉冻悲哀趁懒惰纷普唤丑耐待壳模瘦讨欺侮嘲讥昏芽鹅敞希广喇叭优秀栏浙鲁幅卧仙墨砚段历务铺药之奋都央雄耸堂词垂朽型颖荫毯辆川迹景杰轰隆浓烟蔓救即移码拨防瑞凛冽霎罩蒙巍枕馒眉掷逐某击仅膀胳膊踏刺骨齿证任滨赏烁芒哟仿佛腾廊迈鞭宫猜';

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
                console.log('正在下载' + name + src);
                download(src, dir, name + src.substr(-4, 4));
                console.log('下载完成');
            });
        }
    });
}

var textArr = text.split('');
var lengthText = textArr.length;
var ind = 0;

var loop = function() {
    if (ind < lengthText) {
        setTimeout(function(){
            ind++;
            loop();
        }, 1000);
    }
    const url = `http://child.tao289.com/index.php?m=Chinese&word=${encodeURIComponent(textArr[ind])}`;
    requestUrl(url, textArr[ind]);
}
loop();
//下载方法
var download = function (url, dir, filename) {
    request
        .head(url, function (err, res, body) {
            request(url).pipe(fs.createWriteStream(dir + "/" + filename));
        });
};