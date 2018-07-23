//依赖模块
var fs = require('fs');
var request = require("request");
var cheerio = require("cheerio");
var mkdirp = require('mkdirp');

var text = '一五上玉米木禾竹子瓜大果多十月日头口目手足走左右二三四六七八九草地马牛人父女坐立天上水中下爸妈好我爱国你是他们北京安门前升白云的鱼儿青山课了小不要里皮拍冬有个口叫家起早和丁来学校同鸟花开可捉摘叶秋到树只在飞园红黄还劳动笑船两尖只看见闪星新放后这那工厂说会衣洗把奶种赶鸡谷场公吃拿病做给讲故事听过桥时雨河去又怕冷就出长当也雪看着回找对太阳老年毛点都乐得进步真高少想师背书包林向玩吧边生快送什么呢朵写兴地路亮跑它许告诉她春风吹绿桃醒蛙姓李张弓长章古胡吴王谁刚很倒扶候吗认识乌鸦喝渴处君办石法光朋友心没块用力破得祖欢清羊甜燕暖住海唱各种捡篮从南方往奇怪问底油了洞龙火车村运变化爷孩卫员医先自已纸完作业成扔踢脸饭香农民粮哪漂亮穿布午帕连忙袜睡院啁语间颗黑请片座再兔干哈比半觉刻以猴扛棵满捧圆抱跳空猫钓条气怎意话样画远色近无声惊松尾巴觉软能原啊别身当游今空闷田低为虫才明球浮几伸根枝钩文勇敢窗外影柳碰盆东读每带知道分件考试礼貌妹谢茶跟飘狼常喊骗谎理被哭虹夏雷呀像全现彩童节庆祝领巾少队主班正姐习题算客情晚楼拉扑弯腰汗搂怀级教室贴打扫整洁桌首赞美趣物角江活泼瞧愉摇泡迎轻迟晨稻秧紧绳牵交发表扬喜晶顶漂航行乾军舰量集体丽野照相机望肩宽岸渔撒网乡湾梨苹牙绕流群映栽朝霞墙报桂让闻味行热提帮助叔收椅接弟腿坏刀旁护科容易夫席戏次延演位站秩序乱定肯桔刘岁朱房挂盏灯笼奖瓣急等最捆束麻邮递信解窝然落凉爬躲屋沟蚂蚁藏伞电催锄滴盘餐粒皆辛苦查字典买教已经音母第形义便警钱夹您娃难票差啦丢街发浪数追应该奔科懂建造推器西肉抬馋直亲眼羽差嗓句极掉谜箱池塘波替裳热耳嘴鼻睛伙伴夜停转播视察寻煤炭露鸭邻居借结砍柴深刮抢修止本思久厌倦累莺练受猎坚持因念背傍湖通荷珠神平省笔始灰蜘蛛织阵丝断重冰终于结实捕啄森治痛死壮危险伤害枯蛀周静悄忽消灭挖眠准备食麦苗盖呼淘哨梦裙蓝舞穗丰堆仗团糕验瓶装炉融层脏菌期阿姨敲鞠躬糖摆喷醋削蕉核瓦尼亚摸围注塞虾吞烦吓象士熊名试冲撞翻眯齐录取万城翔鸽参伟铁棒磨针朝诗困娘更加功论决此数锋泪仔细检努得错改为及格答遍赖宁育操郭拐脚昨肿绩感蹦激晓啼离荣烧尽晴朗净服灿换鲜艳杏洒散坡革命烈季纪永献恭敬幸福英假华利按如或制度并冒号另施肥符阴般预温台息示介绍泥和挺舒蚯蚓招钻泉闹突世界蚕姑卵桑脱嫩旧渐胖吐茧响蛾蝌蚪脑袋甩鲤龟短蹲碧肚鼓宝玲淋湿砰称关弄擦干盲绊背导脆总搀使劲举胸精耀匆陈洪共汽售陪拾元还失男程眨鹰市舌哪保庄稼益商卖便宜零掏呆珍靠仰指百组勺斗楚慢汉研著脾乘暴折钢锈霉烂灾难掌握乖煮婆饿锅忘碗蛋撑柄拼灶菜茄豆瓢翼敌纳闷睁蚜专蔬恩店司杨驶颜芳邓所切严肃随德扁担志部产茅挑争鞋戴劝记双粱设计架观代沙潮毫策速井沿际蜜蜂引列莫斯附养谈派丛采讶竿溜好众顽踩笨滚哄稳插喝骑挥卷烤蜻蜒圈哗澡镜抚塑合摔跤传溪非怜辩龇逼嚷反秘密抗战份桶兵晃乎搜瞪杀灵凶猛淹没归凿渠哇耽误探抓入勤妇稍滑艰披嫂颐捞浑含辈嘛何必赁柜议模范倘单顾迅顿涕待帐剩绸价贵异豪咱千棉絮蔡薄洲禁叹筷稀烫俩赛搅胜嫌银亿除越印曹官堵柱秤杆宰割艘沉线搬微牧泊漠茫矿兰簇拥吸显苍吻颊蒋沈蜂仍默扎崭况慌躺屏嗅羞愧特悦曲初翠爽透雕克但而且咬尝葡萄疆盛梯茂展搭棚串紫暗淡够床疑霜梅凌寒独遥昼疲伏甲板休翅却崇达迷质究掂藏郊贯溅裤致图馆者管册济些笃呵阅览凳坦蜡糟虽强态适孔碍钉舱港狂颠簸灌排巨竟匹愿驮坊挡伯浅鼠拦唉筋蹄既号缝傻吵厉冻悲哀趁懒惰纷普唤丑耐待壳模瘦讨欺侮嘲讥昏芽鹅敞希广喇叭优秀栏浙鲁幅卧仙墨砚段历务铺药之奋都央雄耸堂词垂朽型颖荫毯辆川迹景杰轰隆浓烟蔓救即移码拨防瑞凛冽霎罩蒙巍枕馒眉掷逐某击仅膀胳膊踏刺骨齿证任滨赏烁芒哟仿佛腾廊迈鞭宫猜厦饰橱置镇品增添氛幻勃剐厅娱媚托侧阔似峨端旗夺眺偏舟倾征途缓射乙乐讯其技术轨浩瀚返平伊凡诺姆宁钟要求辞凄侵犯律项担存挤副饱喂积陆续盼熬汤胀甸瓤籽汁淌挣晃哦巧绣纹腹衬衫疾尽逃锐隐约荡漾壁健登蘑菇悉岗歇充沸将输羸负纵跃敏捷攻着盯畅富由佳棋乒乓逢戚需袱党旅孤别扭伍调悠闲与略确咳嗽户系股酸囱测性支炎毒环境骆驼跛缺忿哄详吗啃留至殊系窄杯获犹豫堂委啥瞅夸缘区徽尤陡峭臂脖狗狮弹状岩饶岛崖陷峡惨划威武滩寸栖厚守社鹳雀依欲穷遇言叛徒庙胁枪毙愤怒血铸血膛牺牲挽贺培荒耕忆竞茬粉郑碎兜吭嚼骤恙释邀驾卸吊帜弥漫褐雾艨胧堡挨莲蓬裂姿势翩蹈贝礁额沁焦肠哩应嘻螺捅漏赵州县横跨史创减固案互爪智慧遗煌艺库余尊描绘奏杂辉亭客雅琴弦毅聂胆栽判私弱局抵弹退畏谦虚励训谱诞匠幕降临笛阶恳哥昆攀偏帆妙聪选惭诀聚缸懈翁巷箭瞄罢葫芦扣铜坛舀沾啧蹬筐澄箩歪漉嘟皱哄虑卡轿帘嬉叠涛汹涌旋桨僵坠衡掠令械继罗喀嚓窟窿泛扒塌葬墓碑袖铃筒颤抖询迁歉内宾维佩式厢值促启鸣载圃彬菊累棠冲柿压塔屹筑幢鳞栉伐标扮叉舶桅免泳逗雁编假访庞羡慕忧据惋惜恰脏患疗批复康菪忌败丧孙惑讽蔑锣炊驻蚊帽潜侦缩掀津恨逮鸣虎混恬翘拱莹廉营摊粽浆揽劈剖诱尺剑缠嘶吼闯嘶漩涡巅拖晒善良帝陵猿庐瀑夕垠舷抹粼柔喉囊袅拣抛痕犁硬监扇旱浇杭链套绑粗斜咆哮燃震聋锯膨啪偷触付毕剥俗唐繁磁宵泻缤栩鹊鹤郎牌评捎属楞惦溶嵋汇拢忍慈祥蔼鬼咔僻基础末均勉强厕资欧授贫膜践笋揉娇阻唠叨哎辫叽喳烘裹滋润株俊俏剪凑拂伶俐唧偶尔晕曦炽凝仪擎钮徐秒鲜须摄氏拧臃损纯绝鹂鹭岭泊宿篱疏径未蝶艇具艄蛇垫圣雇祷哗寂矗残澎湃否窃汪肌梭贼类费植胞藻蕴储饮占暑尚享统玻璃甘谊族曾禽兽更魏嘲惨愈玛娜补竭誓哑唇袍襟绵燥萌障超厘责刷联隔陌嗅寄诚悔址龄职豹芜娶媳巫绅苇褂投跪磕溉镶宴缭括暂叼盒粥效铝例源键熄揭则咽痰症遵嘱涤倍脂匙搓斤隙污染惯梳趴估锡粘购涂匀晰凹凸漆页迪咯述索瞎遏冠酷疼萎摩芬偎枣陕堡缀违稚俄避皇渊若脊悬狭眩黎刹矮锻炼役炮屡腔仇匍雹挪烽规澳浸惹愁竺桢哆嗦篇巡逻喧嘈辨誉沐浴魔苏饲耘馥郁哺冠瞩届锦宇权屈辱搏奥汰闭匈甚盈眶控腕吩咐荧篼蜿蜒梢坎埂吁材攒撩揩渍抿葛坝嵌捣嗡焊驰啸嗨陶醉咚哒睹畦眸喘蓑笠慰勿恶亩辟榨埋榴窑篝聊冀率哼镬荆棘戳昂顷翰狱弃亏糊弄罚审瞥狠斩截押凭贪蹭痒稿咕噌耍跌彼遭殃魄峻嘉峪砖砌秦御贸扩恋孟姜骄傲奠迫亡俭妮筹镑伦敦抒滔译逝版卷荠抽豌财丫掰棍呛咩呱巢葱盐吱绽董舍撼嗒构进掩壕疯哧尘匐毁嘹赤纠乞轧涓幽缕踪粪萝卜拔猪幼循遮墩肤躯纱拄杖槐丈妻踮幛穆泣腮矫枫瑜遣渡幔硝硫拴缆窜盔僧诡妖吆箍竖抡撇涧戒寡祟寇晋奉撤振绷崎岖砸嗖诸妒督惩罪胶寨擂口内酒援淙殖蒸蝴茵凤逆畔暇旷怡域潺徙供唯谣噩耗跺莱挎矛盾政淳朴兄诤傅辗塾吉渗扯裕禄款肝饥噙债戈限茁檐咦和仆拒恐惧憋烛骂樱桦晏君敞矩陪囚盗臣淮柑博贡谍拘募捐邦晤俑楣镌坑铠抄眈膘圈寿酵厨沼渣莓貂淤俯沏壶怨券菖蒲艾辣椒糯斧奸漓澜瑕翡泰兀鳞峋筏檀彤恍惚泗屐苔扉盎豌掐焚跋涉袭芝泸湍妄溃泞钧狈亨纬苛瘫痪彰炒煎畚箕币枚怔胎斥馁旦呕沥协瞻拂邱坳蔽蜷伪窜绞呻吟歼帅婚唰赫喃诫予榜乳碌焰穹萨废墟尿逛惫斑鬓婉壁蔺渑怯颇瑟缶卿芯痴瞬帷逸冉衔瞰绚蓉埃殿涯叩拜娓姥戛闰捏正租毡佛匾缚猬畜汛梗蹒跚喷磅赌冈贤怏谒辅佐鹤茱萸倚驱朦胧咨铅浏碟喔昙秉赠欣涨趟酝酿咙宛恼筝擞溢宠氧碳吨肆虐沃壑炙噪畸滞坷靴穴窖刨拎驯螃蟹肴蟾蜍蔗迢泌滥饵揿瘪梆镐铆橡覆踵柏梧炫鼎伫番簪髻榕桩恋颐匣纽旺肢珊瑚椽肾咏呗撅冤枉潭熏岳晌筛岂唬肋踉跄霹雳泄揪锤酥浃吮馅佑爹袄墅蘸揍噎卢辽铛醺炕悼唁浒囫囵敷佣詹挠挟勘铲劣隧岔竣藐牢彭腐匪籁俱倔强签悸拷懦';
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
            $('#bishun-gif img').each(function () {
                var src = $(this).attr('src');
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
    const url = `http://www.zhihuishan.com/bishun-search-${encodeURIComponent(textArr[ind])}.html`;
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