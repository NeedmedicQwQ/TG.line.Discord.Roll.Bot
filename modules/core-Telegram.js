"use strict";
if (process.env.TELEGRAM_CHANNEL_SECRET) {

	const {
		Random,
		nodeCrypto
	} = require("random-js");
	const random = new Random(nodeCrypto);

	function timer(ms) {
		return new Promise(res => setTimeout(res, ms));
	}
	exports.analytics = require('../modules/analytics');
	const Telegraf = require('telegraf');
	const TGclient = new Telegraf(process.env.TELEGRAM_CHANNEL_SECRET);
	const channelKeyword = process.env.TELEGRAM_CHANNEL_KEYWORD || '';
	//var TGcountroll = 0;
	//var TGcounttext = 0;
	const joinMessage = "你剛剛添加了HKTRPG 骰子機械人! \
						\n輸入 1D100 可以進行最簡單的擲骰.\
						\n輸入 Bothelp 去觀看詳細使用說明.\
						\n如果你需要幫助, 加入支援頻道.\
						\n(http://bit.ly/HKTRPG_DISCORD)\
						\n有關TRPG資訊, 可以到網站\
						\n(http://www.hktrpg.com/)";

	const telegrafGetChatMembers = require('telegraf-getchatmembers');
	TGclient.catch((err) => {
		console.log('bot error: ', err);
	});
	//TGclient.use(telegrafGetChatMembers)


	TGclient.on('audio', async (ctx) => {
		if ((ctx.chat.type === 'group' || ctx.chat.type === 'supergroup') && ctx.message.from.id && ctx.message.chat.id) {
			let groupid, userid, displayname, channelid, membercount = '';
			groupid = ctx.message.chat.id;
			if (ctx.message.from.username) {
				displayname = ctx.message.from.username;
			}
			if (ctx.message.from.id) {
				userid = ctx.message.from.id;
			}
			if (ctx.chat && ctx.chat.id) {
				membercount = await ctx.getChatMembersCount(ctx.chat.id);
			}
			await exports.analytics.parseInput("", groupid, userid, 1, "Telegram", displayname, channelid, "", membercount);

		};
		return null;
	});
	TGclient.on('document', async (ctx) => {
		if ((ctx.chat.type === 'group' || ctx.chat.type === 'supergroup') && ctx.message.from.id && ctx.message.chat.id) {
			let groupid, userid, displayname, channelid, membercount = '';
			groupid = ctx.message.chat.id;
			if (ctx.message.from.username) {
				displayname = ctx.message.from.username;
			}
			if (ctx.message.from.id) {
				userid = ctx.message.from.id;
			}
			if (ctx.chat && ctx.chat.id) {
				membercount = await ctx.getChatMembersCount(ctx.chat.id);
			}
			await exports.analytics.parseInput("", groupid, userid, 1, "Telegram", displayname, channelid, "", membercount);

		}
		return null
	})
	TGclient.on('photo', async (ctx) => {
		if ((ctx.chat.type === 'group' || ctx.chat.type === 'supergroup') && ctx.message.from.id && ctx.message.chat.id) {
			let groupid, userid, displayname, channelid, membercount = ''
			groupid = ctx.message.chat.id
			if (ctx.message.from.username) displayname = ctx.message.from.username
			if (ctx.message.from.id) userid = ctx.message.from.id
			if (ctx.chat && ctx.chat.id)
				membercount = await ctx.getChatMembersCount(ctx.chat.id)
			await exports.analytics.parseInput("", groupid, userid, 1, "Telegram", displayname, channelid, "", membercount)

		}
		return null
	})
	TGclient.on('sticker', async (ctx) => {
		if ((ctx.chat.type === 'group' || ctx.chat.type === 'supergroup') && ctx.message.from.id && ctx.message.chat.id) {
			let groupid, userid, displayname, channelid, membercount = ''
			groupid = ctx.message.chat.id
			if (ctx.message.from.username) displayname = ctx.message.from.username
			if (ctx.message.from.id) userid = ctx.message.from.id
			if (ctx.chat && ctx.chat.id)
				membercount = await ctx.getChatMembersCount(ctx.chat.id)
			await exports.analytics.parseInput("", groupid, userid, 1, "Telegram", displayname, channelid, "", membercount)

		}
		return null
	})
	TGclient.on('video', async (ctx) => {
		if ((ctx.chat.type === 'group' || ctx.chat.type === 'supergroup') && ctx.message.from.id && ctx.message.chat.id) {
			let groupid, userid, displayname, channelid, membercount = ''
			groupid = ctx.message.chat.id
			if (ctx.message.from.username) displayname = ctx.message.from.username
			if (ctx.message.from.id) userid = ctx.message.from.id
			if (ctx.chat && ctx.chat.id)
				membercount = await ctx.getChatMembersCount(ctx.chat.id)
			await exports.analytics.parseInput("", groupid, userid, 1, "Telegram", displayname, channelid, "", membercount)

		}
		return null
	})
	TGclient.on('voice', async (ctx) => {
		if ((ctx.chat.type === 'group' || ctx.chat.type === 'supergroup') && ctx.message.from.id && ctx.message.chat.id) {
			let groupid, userid, displayname, channelid, membercount = ''
			groupid = ctx.message.chat.id
			if (ctx.message.from.username) displayname = ctx.message.from.username
			if (ctx.message.from.id) userid = ctx.message.from.id
			if (ctx.chat && ctx.chat.id)
				membercount = await ctx.getChatMembersCount(ctx.chat.id)
			await exports.analytics.parseInput("", groupid, userid, 1, "Telegram", displayname, channelid, "", membercount)

		}
		return null
	})
	TGclient.on('forward', async (ctx) => {
		if ((ctx.chat.type === 'group' || ctx.chat.type === 'supergroup') && ctx.message.from.id && ctx.message.chat.id) {
			let groupid, userid, displayname, channelid, membercount = ''
			groupid = ctx.message.chat.id
			if (ctx.message.from.username) displayname = ctx.message.from.username
			if (ctx.message.from.id) userid = ctx.message.from.id
			if (ctx.chat && ctx.chat.id)
				membercount = await ctx.getChatMembersCount(ctx.chat.id)
			await exports.analytics.parseInput("", groupid, userid, userrole, "Telegram", displayname, channelid, "", membercount)

		}
		return null
	})

	TGclient.on('text', async (ctx) => {
		let CAPTCHA = random.string(20);
		//console.log(ctx.getChatMembers(ctx.chat.id) //[Members]
		//	ctx.getChatMembers() //[Members]
		//	telegrafGetChatMembers.check(ctx.chat.id) //[Members]
		//	telegrafGetChatMembers.all //[Chats]
		let groupid, userid, displayname, channelid, membercount = '';
		let TargetGM = require('../roll/z_DDR_darkRollingToGM').initialize();
		//得到暗骰的數據, GM的位置
		if (ctx.message.from.username) displayname = ctx.message.from.username;
		//是不是自己.ME 訊息
		//TRUE 即正常
		let displaynamecheck = true;
		let userrole = 1;
		//console.log('TG: ', message)
		//console.log('ctx.chat.id', ctx.chat.id)
		//頻道人數
		if (ctx.chat && ctx.chat.id)
			membercount = await ctx.getChatMembersCount(ctx.chat.id);
		if (ctx.chat.type === 'group' || ctx.chat.type === 'supergroup') {
			groupid = ctx.message.chat.id;
			if (ctx.chat && ctx.chat.id)
				if ((await telegrafGetChatMembers.check(ctx.chat.id) && telegrafGetChatMembers.check(ctx.chat.id)[0] && await telegrafGetChatMembers.check(ctx.chat.id)[0].status == ("creator" || "administrator")) || ctx.message.chat.all_members_are_administrators == true) {
					userrole = 3;
					//console.log(userrole)
					//console.log(telegrafGetChatMembers.check(ctx.chat.id))
				}
		}


		if (ctx.message.from.id) userid = ctx.message.from.id;
		//285083923223
		//userrole = 3
		let rplyVal = {};
		let msgSplitor = (/\S+/ig);
		let trigger = "";
		if (ctx.message.text && ctx.message.from.is_bot == false) {
			if (ctx.botInfo && ctx.botInfo.username && ctx.message.text.match(/^[/]/))
				ctx.message.text = ctx.message.text
				.replace(new RegExp('\@' + ctx.botInfo.username + '$', 'i'), '')
				.replace(new RegExp('^\/', 'i'), '');
			var mainMsg = ctx.message.text.match(msgSplitor); // 定義輸入字串

		}
		if (mainMsg && mainMsg[0])
			trigger = mainMsg[0].toString().toLowerCase(); // 指定啟動詞在第一個詞&把大階強制轉成細階
		if (trigger == ".me") {
			displaynamecheck = false;
		}
		// 訊息來到後, 會自動跳到analytics.js進行骰組分析
		// 如希望增加修改骰組,只要修改analytics.js的條件式 和ROLL內的骰組檔案即可,然後在HELP.JS 增加說明.

		let privatemsg = 0
		//設定私訊的模式 0-普通 1-自己 2-自己+GM 3-GM
		if (trigger.match(/^dr$/i) && mainMsg && mainMsg[1]) {
			privatemsg = 1;
			ctx.message.text = ctx.message.text.replace(/^[d][r][ ]/i, '');
		}
		if (trigger.match(/^ddr$/i) && mainMsg && mainMsg[1]) {
			privatemsg = 2;
			ctx.message.text = ctx.message.text.replace(/^[d][d][r][ ]/i, '');
		}
		if (trigger.match(/^dddr$/i) && mainMsg && mainMsg[1]) {
			privatemsg = 3;
			ctx.message.text = ctx.message.text.replace(/^[d][d][d][r][ ]/i, '');
		}
		if (channelKeyword != '' && trigger == channelKeyword.toString().toLowerCase()) {
			mainMsg.shift();
			rplyVal = await exports.analytics.parseInput(ctx.message.text, groupid, userid, userrole, "Telegram", displayname, channelid, "", membercount);
		} else {
			if (channelKeyword == '') {
				rplyVal = await exports.analytics.parseInput(ctx.message.text, groupid, userid, userrole, "Telegram", displayname, channelid, "", membercount, CAPTCHA);

			}

		}
		if (!rplyVal.text && !rplyVal.LevelUp)
			return;
		//LevelUp功能
		if (rplyVal) {
			if (CAPTCHA != rplyVal.CAPTCHA) {
				console.log('TG CAPTCHA false', CAPTCHA, ' &&', rplyVal.CAPTCHA, 'text: ', ctx.message.text, 'rplyVal: ', rplyVal);
				return;
			}
			if (groupid && rplyVal && rplyVal.LevelUp) {
				//	console.log('result.LevelUp 2:', rplyVal.LevelUp)
				await ctx.reply("@" + displayname + '\n' + rplyVal.LevelUp);
			}
			if (rplyVal.text) {
				//TGcountroll++;
				if (privatemsg >= 1) {
					//當是私訊模式1-3時
					var TargetGMTempID = [];
					var TargetGMTempdiyName = [];
					var TargetGMTempdisplayname = [];
					if (TargetGM && TargetGM.trpgDarkRollingfunction)
						for (var i = 0; i < TargetGM.trpgDarkRollingfunction.length; i++) {
							if (TargetGM.trpgDarkRollingfunction[i].groupid == groupid) {
								for (var a = 0; a < TargetGM.trpgDarkRollingfunction[i].trpgDarkRollingfunction.length; a++) {
									//checkifsamename = 1
									TargetGMTempID[a] = TargetGM.trpgDarkRollingfunction[i].trpgDarkRollingfunction[a].userid
									TargetGMTempdiyName[a] = TargetGM.trpgDarkRollingfunction[i].trpgDarkRollingfunction[a].diyName
									TargetGMTempdisplayname[a] = TargetGM.trpgDarkRollingfunction[i].trpgDarkRollingfunction[a].displayname
									//TargetGMTemp[a]. channelid displayname diyName userid
								};
							};
						};
				};
				switch (true) {
					case privatemsg == 1:
						// 輸入dr  (指令) 私訊自己
						//
						//console.log('ctx.message.chat.type: ', ctx.message.chat.type)
						if (ctx.message.chat.type != 'private') {
							ctx.reply("@" + displayname + ' 暗骰給自己');
						}
						rplyVal.text = "@" + displayname + " 的暗骰\n" + rplyVal.text
						await SendToId(ctx.message.from.id);
						break;
					case privatemsg == 2:
						//輸入ddr(指令) 私訊GM及自己
						if (ctx.message.chat.type != 'private') {
							let targetGMNameTemp = "";
							for (var i = 0; i < TargetGMTempID.length; i++) {
								targetGMNameTemp = targetGMNameTemp + ", " + (TargetGMTempdiyName[i] || "@" + TargetGMTempdisplayname[i]);
							};
							ctx.reply("@" + displayname + ' 暗骰進行中 \n目標: 自己 ' + targetGMNameTemp);
						}
						rplyVal.text = "@" + displayname + " 的暗骰\n" + rplyVal.text;
						await SendToId(ctx.message.from.id);
						for (var i = 0; i < TargetGMTempID.length; i++) {
							if (ctx.message.from.id != TargetGMTempID[i])
								await SendToId(TargetGMTempID[i]);
						}
						break;
					case privatemsg == 3:
						//輸入dddr(指令) 私訊GM
						if (ctx.message.chat.type != 'private') {
							let targetGMNameTemp = "";
							for (var i = 0; i < TargetGMTempID.length; i++) {
								targetGMNameTemp = targetGMNameTemp + " " + (TargetGMTempdiyName[i] || "@" + TargetGMTempdisplayname[i]);
							};
							await ctx.reply("@" + displayname + ' 暗骰進行中 \n目標: ' + targetGMNameTemp);
						}
						rplyVal.text = "@" + displayname + " 的暗骰\n" + rplyVal.text;
						for (var i = 0; i < TargetGMTempID.length; i++) {
							await SendToId(TargetGMTempID[i]);
						}
						break;
					default:
						if (displaynamecheck && displayname) {
							//285083923223
							displayname = "@" + ctx.message.from.username + "\n";
							rplyVal.text = displayname + rplyVal.text;
						}
						await SendToReply();
						break;
				}

				async function SendToId(targetid) {
					for (var i = 0; i < rplyVal.text.toString().match(/[\s\S]{1,1900}/g).length; i++) {
						if (i == 0 || i == 1 || i == rplyVal.text.toString().match(/[\s\S]{1,1900}/g).length - 2 || i == rplyVal.text.toString().match(/[\s\S]{1,1900}/g).length - 1) {
							await ctx.telegram.sendMessage(targetid, rplyVal.text.toString().match(/[\s\S]{1,1900}/g)[i]);
						}
					}
				}
				async function SendToReply() {
					for (var i = 0; i < rplyVal.text.toString().match(/[\s\S]{1,1900}/g).length; i++) {
						if (i == 0 || i == 1 || i == rplyVal.text.toString().match(/[\s\S]{1,1900}/g).length - 2 || i == rplyVal.text.toString().match(/[\s\S]{1,1900}/g).length - 1) {
							await ctx.reply(rplyVal.text.toString().match(/[\s\S]{1,1900}/g)[i]);
						}
					}
				}
			}
			// console.log("rplyVal: " + rplyVal)
		} else {
			return;
		}
		//  }

	})
	TGclient.on('message', async (ctx) => {
		if (ctx.message.new_chat_member && ctx.message.new_chat_member.username == ctx.me) {
			console.log("Telegram joined");
			await ctx.reply(joinMessage);
		} else if (ctx.message.group_chat_created) {
			console.log("Telegram joined");
			await ctx.reply(joinMessage);
		} else return null;
	});
	TGclient.launch();

}
async function HandleMessage(message) {
	let temp = [];
	switch (true) {
		case message.type == 'text' && message.text != '':
			for (var i = 0; i < message.text.toString().match(/[\s\S]{1,1900}/g).length; i++) {
				if (i == 0 || i == 1 || i == message.text.toString().match(/[\s\S]{1,1900}/g).length - 2 || i == message.text.toString().match(/[\s\S]{1,1900}/g).length - 1)
					temp.push({
						type: 'text',
						text: message.text.toString().match(/[\s\S]{1,1900}/g)[i]
					})
			}
			return temp;
		case message.type == 'image' && message.text != '':
			return {
				"type": "image",
				"originalContentUrl": message.text.replace('http://', 'https://'),
					"previewImageUrl": message.text.replace('http://', 'https://')
			};

		case typeof message == 'string' || message instanceof String:
			for (var i = 0; i < message.toString().match(/[\s\S]{1,1900}/g).length; i++) {
				if (i == 0 || i == 1 || i == message.toString().match(/[\s\S]{1,1900}/g).length - 2 || i == message.toString().match(/[\s\S]{1,1900}/g).length - 1)
					temp.push({
						type: 'text',
						text: message.toString().match(/[\s\S]{1,1900}/g)[i]
					});
			};
			return temp;
		case message.text != '':
			for (var i = 0; i < message.text.toString().match(/[\s\S]{1,1900}/g).length; i++) {
				if (i == 0 || i == 1 || i == message.text.toString().match(/[\s\S]{1,1900}/g).length - 2 || i == message.text.toString().match(/[\s\S]{1,1900}/g).length - 1)
					temp.push({
						type: 'text',
						text: message.text.toString().match(/[\s\S]{1,1900}/g)[i]
					})
			}
			return temp;
		default:
			break;
	}
};
/*
bot.command('pipe', (ctx) => ctx.replyWithPhoto({
	url: 'https://picsum.photos/200/300/?random'
}))
*/