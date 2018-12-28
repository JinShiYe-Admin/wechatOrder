//此js用于保存本地存储时，用到的key值

var storageKeyName = (function(mod) {
	mod.key = 0; //0,开发;1，测试，999必须为正式环境
	var exLog = console.log;
	console.log = function(hint, object) {
		if(mod.key === 0) {
			var argus = hint;
			if(typeof(object) !== 'undefined') {
				argus = hint + JSON.stringify(object);
			}
			exLog.apply(this, [argus]);
		}
	}
	switch(mod.key) {
		case 0: //开发
			mod.USERTYPE = 0; //用户类型，0老师,1家长,2学生
			mod.INTERFACEGU = 'https://jsypay.jiaobaowang.net/useradminwebapi/api/data/'; //顾工接口
			mod.PAYTESULT = 'https://jsypay.jiaobaowang.net/jsypay/wxpay/sys/PcQRCode.aspx'; //获取支付结果地址
			mod.UPPAYSINGLE = 'https://jsypay.jiaobaowang.net/jsypay/wxpay/sys/WebPayServerNo.aspx'; //调起支付地址--单商家入驻
			mod.UPPAYMORE = 'https://jsypay.jiaobaowang.net/jsypaym/wxpay/sys/WebPayServerNo.aspx'; //调起支付地址--多商家入驻
			mod.PAYFLAG = '1'; //多商家入驻1，单商家0
			mod.PAYAPPID = 'wxf9b41cac260dd423'; //多商家入驻时的appid
			mod.GETORDERID = 'https://jsypay.jiaobaowang.net/jsypaym/wxpay/sys/WebOutPayNo.aspx'; //获取订单号
			break;
		case 999: //部署外网
			//地址必须都为https
			mod.USERTYPE = 0; //用户类型，0老师,1家长,2学生
			mod.INTERFACEGU = 'https://jsypay.jiaobaowang.net/useradminwebapi/api/data/'; //顾工接口
			mod.PAYTESULT = 'https://jsypay.jiaobaowang.net/jsypay/wxpay/sys/PcQRCode.aspx'; //获取支付结果地址
			mod.UPPAYSINGLE = 'https://jsypay.jiaobaowang.net/jsypay/wxpay/sys/WebPayServerNo.aspx'; //调起支付地址--单商家入驻
			mod.UPPAYMORE = 'https://jsypay.jiaobaowang.net/jsypaym/wxpay/sys/WebPayServerNo.aspx'; //调起支付地址--多商家入驻
			mod.PAYFLAG = '1'; //多商家入驻1，单商家0
			mod.PAYAPPID = 'wxf9b41cac260dd423'; //多商家入驻时的appid
			mod.GETORDERID = 'https://jsypay.jiaobaowang.net/jsypaym/wxpay/sys/WebOutPayNo.aspx'; //获取订单号
			break;
		default:
			break;
	}
	mod.BADGENUMBER = 'badgeNumber' //app角标
	mod.PUBLICPARAMETER = 'publicParameter' //共用参数
	mod.ISFIRST = 'isFitst'; //是否是第一次登陆
	mod.ICONNUM = 0; //角标数量
	mod.PERSONALINFO = 'personalInfo1111'; //个人信息，登录成功后返回值
	mod.SHAKEHAND = 'ShakeHand'; //公钥，登录时，返回的握手信息，
	mod.AUTOLOGIN = 'autoLogin'; //登录信息
	mod.DOCUMENTSPATH = 'DOCUMENTSPATH'; //记录document的地址
	mod.SEHISTORY = 'seHistory'; //科教历史记录
	mod.SECITY = 'seCity'; //科教订制的城市
	mod.SHOWCITY = 'showCity'; //展现订制的城市
	mod.FOCUSEPERSEN = "foucusPersen"; //求知关注的人
	mod.FOCUSEQUESTION = "focusQuestion"; //求知关注的问题
	mod.SHOWFOCUSEPERSEN = "showfoucusPersen"; //展现关注的人
	mod.FOCUSECOURSES = "focusCourses"; //关注的课程
	mod.COURSELASTTIME = "courseLastTime";
	mod.SHOWTYPE = "showType";
	mod.COURSETYPE = "courseType";
	mod.ISSHOWDETAILREADY = "isDetailReady"; //预加载是否完成
	mod.VIEWCANCLICK = 'viewCanClick';
	mod.SCIEDUREADED = 'sciedu-readed'; //科教已读
	mod.CUSTOMREQUESTTIME = 'customer-request-time';

	mod.VIDEOSIZE = -1; //视频大小限制 -1为不限制   30 * 1024 * 1024 =30M
	mod.VIDEOLENGTH = 301; //视频时长限制 -1为不限制

	mod.MAINHOMEWORKURLTEACHER = mod.MAINHOMEWORKURL + 'TeacherService.svc/'; //老师作业url
	mod.MAINHOMEWORKURLSTUDENT = mod.MAINHOMEWORKURL + 'StudentService.svc/'; //学生作业url
	mod.WAITING = '加载中...'; //
	mod.UPLOADING = '上传中...';
	mod.SIGNKEY = 'jsy309'; //签名密钥
	//---七牛---start---
	//七牛上传空间key值
	//资源平台
	mod.QNPUBZYKEY = "jsy8004";
	//教宝云作业
	mod.QNPUBJBYZYKEY = "zy309309!";
	//教宝云盘
	mod.QNPUBJBYPKEY = "jbyp@2017";
	//教宝云用户管理
	mod.QUPUBJBMANKEY = "jbman456";
	//家校圈
	mod.QNPUBJXQKEY = "jxq789!@";
	//求知
	mod.QNPUBQZKEY = "qz123qwe";
	//校讯通
	mod.QNPUBXXT = "jsy@180526";

	//七牛存储子空间（文件二级文件名）
	mod.QNPUBSPACE = "pb"; //七牛公开空间
	mod.QNPRISPACE = "pv"; //七牛私有空间
	mod.TEAPICBUCKET = 'TeaAnswersPic/'; //老师临时作业答案存储空间
	mod.TEATHUMBPICBUCKET = 'TeaAnThumbPic/Thumb/'; //老师临时作业答案缩略图存储空间
	mod.STUPICBUCKET = 'StuAnswerPic/'; //学生临时作业答案存储空间
	mod.STUTHUMBPICBUCKET = 'StuAnThumbPic/Thumb/'; //学生临时作业缩略图存储空间
	mod.PERSONALSPACE = 'PersonalSpace/'; //个人空间、原图
	mod.PERSONALSPACETHUMB = 'PersonalSpace/Thumb/'; //个人空间、缩略图
	mod.CLASSSPACE = 'ClassSpace/'; //班级空间、原图
	mod.CLASSSPACETHUMB = 'ClassSpace/Thumb/'; //班级空间、缩略图
	mod.NOTE = 'Note/'; //笔记、原图
	mod.NOTETHUMB = 'Note/Thumb/'; //笔记、缩略图
	mod.RECORD = 'Record/'; //记事、原图
	mod.RECORDTHUMB = 'Record/Thumb/'; //记事、缩略图
	mod.KNOWLEDGE = 'Knowledge/'; //求知、原图
	mod.KNOWLEDGETHUMB = 'Knowledge/Thumb/'; //求知、缩略图
	mod.HEADIMAGE = 'HeadImage/'; //个人头像，资料头像，群头像
	mod.HEADIMAGETHUMB = 'HeadImage/Thumb/'; //个人头像，资料头像，群头像
	mod.CLOUDSTORAGE = 'CloudStorage/'; //云存储的文件
	mod.CLOUDSTORAGETHUMB = 'CloudStorage/Thumb/'; //云存储的文件缩略图
	mod.XXTNOTICE = 'notice/'; //笔校讯通、通知
	//---七牛---end---

	//---默认图片---start---
	mod.DEFAULTPERSONALHEADIMAGE = '../../img/utils/default_personalimage.png'; //默认的个人头像
	mod.DEFAULTSCIEDUIMAGELOAD = '/img/utils/default_load_2.gif'; //科教首页，懒加载显示加载中的图片
	mod.DEFAULTIMAGELOAD = '/img/utils/default_load_2_1.gif';
	//---默认图片---end---

	//---Activity的code---start---
	mod.CODERECORDVIDEO = 0; //录像
	mod.CODEPLAYVIDEO = 1; //播放视频
	//---Activity的code---end---

	/**
	 * 在本地存永久数据
	 * @param {Object} key
	 * @param {Object} value
	 */
	mod.setLocalStorage = function(key, value) {
		localStorage.setItem(key, value);
	}

	/**
	 * 取永久数据
	 * @param {Object} key
	 */
	mod.getLocalStorage = function(key) {
		return localStorage.getItem(key);
	}

	/**
	 * 删除单个永久数据
	 * @param {Object} key
	 */
	mod.removeLocalStorage = function(key) {
		localStorage.removeItem(key);
	}

	/**
	 * 删除所有的永久数据
	 */
	mod.clearLocalStorage = function() {
		localStorage.clear();
	}

	/**
	 * 在本地存临时数据
	 * @param {Object} key
	 * @param {Object} value
	 */
	mod.setSessionStorage = function(key, value) {
		sessionStorage.setItem(key, value);
	}

	/**
	 * 取临时数据
	 * @param {Object} key
	 */
	mod.getSessionStorage = function(key) {
		return sessionStorage.getItem(key);
	}

	/**
	 * 删除单个临时数据
	 * @param {Object} key
	 */
	mod.removeSessionStorage = function(key) {
		sessionStorage.removeItem(key);
	}

	/**
	 * 删除所有的临时数据
	 */
	mod.clearSessionStorage = function() {
		sessionStorage.clear();
	}

	return mod;

})(storageKeyName || {});