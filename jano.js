const Discord = require("discord.js");
const fs = require("fs");
const devs = "888125940318765146";
const moment = require("moment");
const client = new Discord.Client();
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(3000, () => {
  console.log('Server Started.');
});
client.login("OTgyMDI5NDA2NjE4OTIzMTA5.GlE0G2.QtHU0ZIlI-ipPajDgK4C3GZRJZ418gjdP0rmio");
const prefix = ".";
const PREFIX = ".";
////////////////
client.on('guildMemberAdd', message => {
if (message.guild.id === (""))
{
 let user = message.author;
message.setNickname(`${message.user.username} ᴰᔆ`);
}
});

client.on('message', id441 => {
  const madara = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (id441.content.match(madara)) {
    id441.channel.send(`Bot prefix is ==> <  **${prefix}**  >`);
  }
})

////////////////////

client.on('message', message => {
  
  
  
    if(message.content.startsWith(prefix + 'ava-server')) {
  
    
      var embed = new Discord.MessageEmbed()
      
  .setDescription(`**[Avatar Link](${message.guild.iconURL()})**`)
  .setImage(message.guild.iconURL({dynamic : true, size : 1024}))
  
  
  message.channel.send(embed)
    }
  });
  

///////////////////

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "boy")) {
    let man = [
      "https://media.discordapp.net/attachments/786897044483604490/803870769313480714/Enes_Acar_GIF_70.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870793716858880/a_57a7f6c875e3a329b170edf177392911.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870817351368734/5-2.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804007829010513966/image1.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804007829483552838/image3.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804219672513478706/Lenora_36.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804220384899498064/Lenora_28.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804220394697392158/Lenora_33.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804315371271749662/image0-20.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804968359572930580/ALANIS_MAN_GIF_156.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804968381816111124/image0-5.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804760463044640808/ALANIS_MAN_GIF_99.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870704999202836/ENES_ACAR_GIF_104.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870737941135421/ENES_ACAR_GIF_15.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870682479067166/ENES_ACAR_GIF_135.gif"
    ];
    message.channel
      .send({
        embed: {
          description: `👦 | ${message.author.username} BOY GIFS`,
          image: {
            url: man[Math.floor(Math.random() * man.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
client.on("message", message => {
  if (message.content.startsWith(PREFIX + "girl")) {
    let girl = [
      "https://media.discordapp.net/attachments/786897045436366849/804968189892755456/image2-1.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804968223577604126/gif472.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804968231794245642/rexsin_212.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804968258859827210/pintrst___luri_4.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804983128527077387/a_177ddfe86ad32b68be6200f007682136.gif",
      "https://media.discordapp.net/attachments/786897045436366849/805008600334073866/3WIu.gif",
      "https://media.discordapp.net/attachments/786897045436366849/805370008330436648/image0.gif",
      "https://media.discordapp.net/attachments/786897045436366849/805008566439641128/image0.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804681217022099466/a_3c85d4517fbaf4f750d344820b49c076.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804682936615829504/image0.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804314115601596426/ALANIS_WOMAN_GIF_176.gif",
      "https://media.discordapp.net/attachments/786897045436366849/804280612227383316/ALANIS_WOMAN_GIF_138.gif"
    ];
    message.channel
      .send({
        embed: {
          description: `👧 | ${message.author.username} GIRL GIFS `,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
client.on("message", message => {
  if (message.content.startsWith(PREFIX + "baby")) {
    let girl = [
      "https://media.discordapp.net/attachments/699339066029768796/857304174067449877/desconhecido.gif",
      "https://media.discordapp.net/attachments/699339066029768796/857302834416582666/Swqly_73.gif",
      "https://media.discordapp.net/attachments/699339066029768796/857302774927458345/Swqly_27.gif",
      "https://media.discordapp.net/attachments/699339066029768796/857302767730556968/Swqly_65.gif",
      "https://media.discordapp.net/attachments/699339066029768796/857302743440818206/Swqly_32.gif",
      "https://media.discordapp.net/attachments/699339066029768796/857272978189975572/davsann.gif",
      "https://media.discordapp.net/attachments/699339066029768796/857229285437472788/taki_babygif50.gif",
      "https://media.discordapp.net/attachments/699339066029768796/857229285089214484/luisa_5.gif",
      "https://media.discordapp.net/attachments/699339066029768796/857191097541459968/854834185234939955.gif",
      "https://media.discordapp.net/attachments/699339066029768796/857177191473217546/image0-29.gif",
      "https://media.discordapp.net/attachments/699339066029768796/857176971213406208/25.gif",
      "https://media.discordapp.net/attachments/699339066029768796/857176970702225408/tenor_1.gif"
    ];
    message.channel
      .send({
        embed: {
          description: `👶 | ${message.author.username} BABY GIFS `,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
client.on("message", message => {
  if (message.content.startsWith(PREFIX + "anime")) {
    let girl = [
      "https://media.discordapp.net/attachments/608711485849337856/859555398808633384/3a22e788f70db28cf820d2a060742547.gif",
      "https://media.discordapp.net/attachments/608711485849337856/859555398532464651/31512a46817edd477818277ac60af3ef.gif",
      "https://media.discordapp.net/attachments/608711485849337856/859555398159564820/19629d1b8101f581d5c53369104657c5.gif",
      "https://media.discordapp.net/attachments/608711485849337856/859555397768970270/4471648a09239bf326e26ebf38a47eda.gif",
      "https://media.discordapp.net/attachments/608711485849337856/859551886159904798/giphy.gif",
      "https://media.discordapp.net/attachments/608711485849337856/859542765116981278/SPOILER_1548244985_tumblr_oehosoYb6i1qg9t1lo2_400.gif",
      "https://media.discordapp.net/attachments/608711485849337856/859542756254679090/SPOILER_2f46a27d-f14c-4733-8178-24d03ef093e9.gif",
      "https://media.discordapp.net/attachments/608711485849337856/859542719339429938/44d0f1339059de50f411ba1c2f0b4d3a.gif",
      "https://media.discordapp.net/attachments/608711485849337856/859542602462527488/20210611_182625.gif",
      "https://media.discordapp.net/attachments/608711485849337856/859535363534225418/image0.gif",
      "https://media.discordapp.net/attachments/608711485849337856/859534450152701992/20210526_192740.gif",
      "https://media.discordapp.net/attachments/608711485849337856/859534195012272179/4fc7dc8db47f29569f6298785bb32449a3c9615e_00.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `🧸 | ${message.author.username} ANIME GIFS `,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
client.on("message", message => {
  if (message.content.startsWith(PREFIX + "smoke")) {
    let girl = [
      "https://media.discordapp.net/attachments/755893014915711047/859534445873463316/Man_PP_Gif_57.gif",
      "https://media.discordapp.net/attachments/755893014915711047/859534425049399306/saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.gif",
      "https://media.discordapp.net/attachments/755893014915711047/859411338567352330/a_7a979c79c2ea562424102c7a568cc414.gif",
      "https://media.discordapp.net/attachments/755893530429489192/858798045138780180/masallah17.gif",
      "https://media.discordapp.net/attachments/755893530429489192/858816881792253962/e3ddb0e03943ad023942d43950934c94d.gif",
      "https://media.discordapp.net/attachments/755893530429489192/859020499791249418/womann_2.gif",
      "https://media.discordapp.net/attachments/755893530429489192/859076917864038410/sigaraaaaa.gif",
      "https://media.discordapp.net/attachments/755893530429489192/858095158373384253/image0-1-1.gif",
      "https://media.discordapp.net/attachments/755893014915711047/858738615571578910/bune_la.gif",
      "https://media.discordapp.net/attachments/755893014915711047/858807677149118464/image0_3.gif",
      "https://media.discordapp.net/attachments/755893014915711047/858357189184847921/a_22621337db51c27898c8e1cfeb2ba5d7.gif",
      "https://media.discordapp.net/attachments/755893530429489192/857748717469171772/a_16845931fc3f341c95f2c46b0870182a-1.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `🚬 | ${message.author.username} SMOKE GIFS `,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
client.on("message", message => {
  if (message.content.startsWith(PREFIX + "sad")) {
    let sads = [
      "https://media.discordapp.net/attachments/786897045952790550/798719676795715614/Zeyrox_43.gif",
      "https://media.discordapp.net/attachments/786897045952790550/799435191323852820/luisa1-1.gif",
      "https://media.discordapp.net/attachments/786897045952790550/799435254011920404/a_caf4fdc4f3e516fcabec0022078c38ab.gif",
      "https://media.discordapp.net/attachments/786897045952790550/804040753072439326/038842117446a0c76a922d23727942b1.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787581071079768074/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787581004424544256/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787580974975549450/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/787580943627976704/image0.gif",
      "https://media.discordapp.net/attachments/786897045952790550/802930927784820766/Cedric_Anime_Gif_81.gif",
      "https://media.discordapp.net/attachments/786897045952790550/802722301984243712/a_66f26e072e89a58c1879c6fa27744bd7.gif",
      "https://media.discordapp.net/attachments/786897045952790550/801054305569865778/uzgun-4.gif",
      "https://media.discordapp.net/attachments/786897044483604490/806288916160315422/image0.gif"
    ];
    message.channel
      .send({
        embed: {
          description: `🙍 | ${message.author.username} SAD GIFS`,
          image: {
            url: sads[Math.floor(Math.random() * sads.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
client.on("message", message => {
  if (message.content.startsWith(PREFIX + "neon")) {
    let girl = [
      "https://media.discordapp.net/attachments/755890505681731714/856207944953233439/a_08ca790f778a7ee65184020eb2c85124.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856212748844007454/image4.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856203154143313970/hhhh.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856200984888082472/Comp_105.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856145244059729920/uurekzneon_17.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856138999771693076/a_0163926dade85d15a4c7e9f90bd9905c.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856137212385951744/image0.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856134635972591636/Comp_22.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856094705813422090/a_a46b7692563509a4a7332280f8aed01f-1.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856066337788133377/neon_1-1.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856039171788767292/sol._of.gif",
      "https://media.discordapp.net/attachments/755890505681731714/856034861047480320/Nice_gif_pfp.gif",
      "https://media.discordapp.net/attachments/755890505681731714/855995485688954900/a_4f85b11851dd2fd40c275af63e24ca9c.gif",
      "https://media.discordapp.net/attachments/755890505681731714/855901403768029255/Gif8.gif",
      "https://media.discordapp.net/attachments/755890505681731714/855894776896159804/a_622822eb42bf3c49c83f342290a304b6.gif",
      "https://media.discordapp.net/attachments/755890505681731714/855841642979786752/826380519012565012.gif",
      "https://media.discordapp.net/attachments/755890505681731714/855788419716218890/image0.gif",
    ];
    message.channel
      .send({
        embed: {
          description: `⁉️ | ${message.author.username} NEON GIFS `,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
client.on("message", message => {
  if (message.content.startsWith(PREFIX + "couple")) {
    let loves = [
      "https://media.discordapp.net/attachments/608711480346542102/782233713538498600/hit_gif_5.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782286421020508170/image0_1.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782284851570147358/image0-1-4.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782406047473467422/image0.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782148760997593098/a_8bc52b6080ce3079988c6e49f84c4b03.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782445443665625128/ezgif-7-2032ed99845d.gif",
      "https://media.discordapp.net/attachments/608711480346542102/782196955488321556/a_637b8e2042d540a1e5e28282e3fe5cc7.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803307812608409600/image0.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869330005688340/a_130ce69bc8c1f06d917ee668f7051b64.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869344266321931/dans4.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869587988152340/gif.13.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869653641854996/20210105_223539.gif",
      "https://media.discordapp.net/attachments/788119246517174362/803869660814376960/a_09fbaba0301c6db194af2f0c6d2a6a93.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804188805204410378/2.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804337804179275776/16-10-27-tenor.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804759240451424256/Lrows_Gif_25.gif",
      "https://media.discordapp.net/attachments/788119246517174362/804759252899594259/ciftler8.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `👩‍❤️‍💋‍👨 | ${message.author.username}   Couple GIFS `,
          image: {
            url: loves[Math.floor(Math.random() * loves.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
client.on("message", message => {
  if (message.content.startsWith(PREFIX + "cat")) {
    let girl = [
      "https://media.discordapp.net/attachments/608711488806584330/859501211283095562/21.gif",
      "https://media.discordapp.net/attachments/608711488806584330/859450818591981578/Zeyrox_34.gif",
      "https://media.discordapp.net/attachments/608711488806584330/859419911746486312/image0.gif",
      "https://media.discordapp.net/attachments/608711488806584330/859279253065564180/a_5e45be6109ee8d19b1faf07d3578cae7.gif",
      "https://media.discordapp.net/attachments/608711488806584330/859279222992273418/Animal-5.gif",
      "https://media.discordapp.net/attachments/608711488806584330/859279207862763530/a_1f88d9d0fc7c274035b4a11d71b3072f.gif",
      "https://media.discordapp.net/attachments/608711488806584330/859279197976133642/21313.gif",
      "https://media.discordapp.net/attachments/608711488806584330/859279171376119848/21.gif",
      "https://media.discordapp.net/attachments/608711488806584330/859279151918612530/Lavinia_13.gif",
      "https://media.discordapp.net/attachments/608711488806584330/859279140753637376/kedicipsi.gif",
      "https://media.discordapp.net/attachments/608711488806584330/859279067835793408/a_52d9412f3d92c45604415c34847a82d3.gif",
      "https://media.discordapp.net/attachments/608711488806584330/859279030825779220/aureliongif4.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `🐱 | ${message.author.username} CAT GIFS `,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
client.on("message", message => {
  if (message.content.startsWith(PREFIX + "cartoon")) {
    let girl = [
      "https://media.discordapp.net/attachments/755169627872428134/859514371474325505/tenor_7.gif",
      "https://media.discordapp.net/attachments/755169627872428134/859513072615424010/image0.gif",
      "https://media.discordapp.net/attachments/755169627872428134/859512883990102056/image0.gif",
      "https://media.discordapp.net/attachments/755169627872428134/859512805753487370/image0.gif",
      "https://media.discordapp.net/attachments/755169627872428134/859475938159624192/itachi.gif",
      "https://media.discordapp.net/attachments/755169627872428134/859473817709576242/6e782a5ae0b44f52bf867f361e73c26a.gif",
      "https://media.discordapp.net/attachments/755169627872428134/859387230149148672/pp8.gif",
      "https://media.discordapp.net/attachments/755169627872428134/859386157883064360/a_a79974a9a389ea9245ce7e5153223993.gif",
      "https://media.discordapp.net/attachments/755169627872428134/859379700832534528/g0yPLFTYpr283dUJBs.gif",
      "https://media.discordapp.net/attachments/755169627872428134/859371320626118656/de9o2kn-d29293c2-4ea7-4010-9c7b-df6a39c39044.gif",
      "https://media.discordapp.net/attachments/755169627872428134/859313579525275668/3fcf62b03e920a47f7e836ee87834474.gif",
      "https://media.discordapp.net/attachments/755169627872428134/859313527361634314/original.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `⚜️ | ${message.author.username} CARTOON GIFS `,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
/////////////////////
client.on("message", message => {
  if (message.content.startsWith(PREFIX + "pboy")) {
    let exploit = [
      "https://cdn.discordapp.com/avatars/584486122521100308/00e684b8c3ca4fab1a8d3efc200e58ac.webp",
      "https://cdn.discordapp.com/attachments/836764913078763600/837860633202262066/image1.jpg",
      "https://cdn.discordapp.com/attachments/836764913078763600/837860633377636392/image2.png",
      "https://cdn.discordapp.com/attachments/836764913078763600/837860633638600769/image3.png",
      "https://cdn.discordapp.com/attachments/836764913078763600/837860633876627476/image4.png",
      "https://cdn.discordapp.com/attachments/836764913078763600/837860633876627476/image4.png",
      "https://cdn.discordapp.com/attachments/836764913078763600/837860634485981204/image5.png",
      "https://cdn.discordapp.com/attachments/836764913078763600/837860634485981204/image5.png",
      "https://cdn.discordapp.com/attachments/836764913078763600/837860634485981204/image5.png",
      "https://cdn.discordapp.com/attachments/836764913078763600/837860670670241822/image2.png",
      "https://cdn.discordapp.com/attachments/836764913078763600/837860670019076116/image0.png",
      "https://cdn.discordapp.com/attachments/836764913078763600/837860670300880916/image1.png",
      "https://cdn.discordapp.com/attachments/837463807202033736/837560698396606545/image0.jpg",
      "https://cdn.discordapp.com/attachments/837463807202033736/837464867567960084/15-36-03-image6.jpg",
      "https://media.discordapp.net/attachments/608711478496854019/865139999523209216/Leris_Man_PP_70.jpg",
      "https://media.discordapp.net/attachments/608711478496854019/865139998276583454/Leris_Man_PP_69.jpg",
      "https://media.discordapp.net/attachments/608711478496854019/865139996401860619/Leris_Man_PP_68.jpg",
      "https://media.discordapp.net/attachments/608711478496854019/865139995034255380/Leris_Man_PP_67.jpg",
      "https://media.discordapp.net/attachments/608711478496854019/865139993978994708/Leris_Man_PP_66.jpg",
      "https://media.discordapp.net/attachments/608711478496854019/865139992623317022/Leris_Man_PP_65.jpg",
      "https://media.discordapp.net/attachments/608711478496854019/865139990900113418/Leris_Man_PP_64.jpg",
      "https://media.discordapp.net/attachments/608711478496854019/865139986877513739/Leris_Man_PP_62.jpg",
      "https://media.discordapp.net/attachments/608711478496854019/865139985140416512/Leris_Man_PP_61.jpg",
      "https://media.discordapp.net/attachments/608711478496854019/865139949540343808/Leris_Man_PP_48.jpg"
    ];
    message.channel
      .send({
        embed: {
          description: `**${message.author.username}** \`Photo\` ` ,
          image: {
            url: exploit[Math.floor(Math.random() * exploit.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

/////////

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "pgirl")) {
    let exploit = [
      "https://cdn.discordapp.com/avatars/829349613717684256/4bea6e23e0bfc15da73b3d28fe2ee8a3.png?size=1024",
      "https://cdn.discordapp.com/avatars/802587393398931487/6d77fb4ab92b050ad2ef1f56b4d33e69.png?size=1024",
      "https://cdn.discordapp.com/attachments/837463807202033736/837722582689251418/e2b8fd1c-e712-45d3-bb2f-55084be192b3.jpeg",
      "https://cdn.discordapp.com/attachments/837463807202033736/837723967980175360/d49028368c80fbd5d27dddf81d8af673.jpg",
      "https://cdn.discordapp.com/attachments/837463807202033736/837723989220524032/IMG_20210424_194718_447.jpg",
      "https://cdn.discordapp.com/attachments/830884935258734595/838133843306348554/R3.gif"
    ];
    message.channel
      .send({
        embed: {
          description: `**${message.author.username}** \`Gif\` ` ,
          image: {
            url: exploit[Math.floor(Math.random() * exploit.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
client.on("message", message => {
  if (message.content.startsWith(PREFIX + "panime")) {
    let exploit = [
      "https://cdn.discordapp.com/attachments/833819106528329761/837877576700526622/Screenshot_20210403_170626.jpg",
      "https://cdn.discordapp.com/attachments/833819106528329761/837877607668252692/image0-13.jpg",
      "https://cdn.discordapp.com/attachments/833819106528329761/837877607903002696/20201228_181147-1.jpg",
      "https://cdn.discordapp.com/attachments/833819106528329761/837877638877020180/3a717dfa4c3fb4a7cf5f5783de164da8.jpg",
      "https://cdn.discordapp.com/attachments/833819106528329761/837877639049773096/R9cfae23664d44486a7ab5c8b51515ae2_1-1.gif",
      "https://cdn.discordapp.com/attachments/833819106528329761/837877639175077969/R7ce25f7820245a03ca8b3e3a58b015ee.gif",
      "https://cdn.discordapp.com/attachments/833819106528329761/837877695646793768/Rdc3a48907a088478d72119c194dd331c.gif",
      "https://cdn.discordapp.com/attachments/833819106528329761/837877695965691935/1b49a8e00d220175742707a232fcfd8a.gif",
      "https://cdn.discordapp.com/attachments/833819106528329761/837877696188121088/72TQ.gif",
      "https://cdn.discordapp.com/attachments/833819106528329761/837877732611850250/tenor_1.gif",
      "https://cdn.discordapp.com/attachments/833819106528329761/837877732795875358/images_3.jpeg",
      "https://cdn.discordapp.com/attachments/833819106528329761/837877732939399178/images_1.jpeg",
      "https://cdn.discordapp.com/attachments/833819106528329761/837877733156978699/images.jpeg",
      "https://cdn.discordapp.com/attachments/830066947290300476/830067385577766923/0047d2dd9ee1560faf81773baecb60c6.jpg",
      "https://cdn.discordapp.com/attachments/830066947290300476/830067318113173504/794a66c01ee0797f3dc90d0f307100f7.jpg",
      "https://cdn.discordapp.com/attachments/830066947290300476/830067248613031976/ff9859ccbaca1d1d75806588c216a5d6.jpg",
      "https://cdn.discordapp.com/attachments/830884935258734595/838133843507544064/M1.gif",
      
    ];
    message.channel
      .send({
        embed: {
          description: `**${message.author.username}** \`Gif\` ` ,
          image: {
            url: exploit[Math.floor(Math.random() * exploit.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
////////
client.on("message",message=>{
    if(message.content.startsWith(prefix+"setnick")){
      if(!message.member.hasPermission("CHANGE_NICKNAME")) return message.reply("❌ | You Dont Have Permission")
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      let member = message.mentions.users.first() || message.guild.members.cache.get(args[1])||message.guild.members.cache.find(r => r.user.username === args[1])
      if(!member) return message.channel.send(`❓ | Type User Example: => **${prefix}setnick @TAG __Nickname New__**`)
      let nick = message.content.split(" ").slice(2).join(" ")
      let g = message.guild.members.cache.get(member.id)
      if(!nick){
g.setNickname(member.username)
      }
g.setNickname(nick)
const l = g.nickname|| member.username
let embed = new Discord.MessageEmbed()
.setAuthor(message.member.user.username,message.member.user.avatarURL({dynamic:true}))
.setThumbnail(message.member.user.avatarURL({dynamic:true}))
.setTitle("📇"+"New NickName:"+"📇")
.addField(`👨‍🏫 | User Nick Change`,`${member}`,true)
.addField(`🔍 | Befor:`,`**${l}**`,true)
.addField(`🔎 | After:`,`**${nick}**`,true)
.setFooter(message.member.user.username,message.member.user.avatarURL({dynamic:true}))
.setTimestamp()
message.channel.send(embed)
    }
  })

//////////////


client.on("message", async message => {
  if (
    message.content.includes(
      "@everyon",
      "@here",
    )
  ) {
 if(message.member.hasPermission("MENTION_EVERYONE")) return;
    if (!message.channel.guild) return;
    message.delete();
    var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.cache.find(
      role => role.name === `Muted`
    );
    if (!muterole) {
      try {
        muterole = await message.guild.roles.create({
          name: "Muted",
          color: "#000001",
          permissions: []
        });
        message.guild.channels.cache.forEach(async (channel, id) => {
          await channel.updateOverwrite(muterole, {
            SEND_TTS_MESSAGES: false,
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
            
            SPEAK: false
          });
        });
      } catch (e) {
        console.log(e.stack);
      }
    }
    message.member.roles.add(muterole);
    const embed500 = new Discord.MessageEmbed()
      .setTitle("🔕"+"Muted Ads"+"🔕")
      .addField(`**  You Have Been Muted **`, `**Reason : Uses mention Everyone Or Here**`)
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL())
      .setAuthor(message.author.username, message.author.avatarURL())
      .setFooter(`${message.guild.name} `);
    message.channel.send(embed500);
  }
});

///////////////
client.on("message", message => {
  if (message.content === PREFIX + "close") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply("❌ | You Dont Have Perms `MANAGE CHANNELS` :x:");
    message.channel.createOverwrite(message.guild.id, {
      VIEW_CHANNEL: false
    });
    const embed = new Discord.MessageEmbed()
      .setThumbnail(message.author.avatarURL())
      .setTitle("🙈"+"**Channel Hide**"+"🙈")
      .addField("〽 | **Server name**", message.guild.name)
      .addField("#️⃣ | **Channel**", message.channel.name)
      .addField("👑 | **Moderation**", `<@${message.author.id}>`, true)
      .setColor("RANDOM");
    message.channel.send(embed).then(bj => {
      bj.react("");
    });
  }
});
client.on("message", message => {
  if (message.content === PREFIX + "open") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply("❌ | You dont have Perms `MANAGE CHANNELS`:x:");
    message.channel.createOverwrite(message.guild.id, {
      VIEW_CHANNEL: true
    });
    const embed = new Discord.MessageEmbed()
      .setThumbnail(message.author.avatarURL())
      .setTitle("🙉"+"**Channel Unhide**"+"🙉")
      .addField("〽 | **Server name**", message.guild.name)
      .addField("#️⃣ | **Channel**", message.channel.name)
      .addField("👑 | **Moderation**", `<@${message.author.id}>`, true)
      .setColor("RANDOM");
    message.channel.send(embed).then(bj => {
      bj.react("");
    });
  }
});
//////////
client.on("message", msg => {
  if (msg.content === prefix + "closeall") {
    if (!msg.member.hasPermission("MANAGE_CHANNELS"))  return;
    msg.guild.channels.cache.forEach(c => {
      c.createOverwrite(msg.guild.id, {
        SEND_MESSAGES: false,
        VIEW_CHANNEL: false
      });
    });
    msg.channel.send("🙈 | **Done check hide all**");
  }
});
 
client.on("message", msg => {
  if (msg.content === prefix + "openall") {
    if (!msg.member.hasPermission("MANAGE_CHANNELS"))   return;
    msg.guild.channels.cache.forEach(c => {
      c.createOverwrite(msg.guild.id, {
        SEND_MESSAGES: true,
        VIEW_CHANNEL: true
      });
    });
    msg.channel.send("🙉 | **done check unhide all**");
  }
});








/////////////////////////


client.on("message", message => {
  if (message.content.startsWith(PREFIX + "lock")) {
    let blackjack = "created by black jack";
    if (!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("🔒 | **Please Check Your Permissions**");
    message.channel
      .createOverwrite(message.guild.id, { SEND_MESSAGES: false })
      .then(() => {
        
          
          
        return message.reply(`**:lock: <#${message.channel.id}> has been locked.**`);
      });
  }
});
client.on("message", message => {
  if (message.content.startsWith(PREFIX + "unlock")) {
    let blackjack = "created by black jack";
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("🔓 | **Please Check Your Permission**");
    message.channel
      .createOverwrite(message.guild.id, { SEND_MESSAGES: true })
      .then(() => {
        return message.reply(`**:unlock: <#${message.channel.id}> has been unlocked.**`);
      });
  }
});
//////


client.on('message',message => {

if(message.content.startsWith(PREFIX + 'ban')) {
let args = message.content.split(" ").slice(1)
if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("❌ | I'm sorry, you don't have permission.")
   
let Ban = message.mentions.members.first();
let hokar = args.slice(1).join(" ");
if(!args[0]) return message.channel.send('✈️ | select member')
if(!Ban) return message.channel.send(`${args[0]} is not a member - member tag`)

if(!Ban.bannable) {
return message.channel.send('❌ | I cannot ban someone that is mod/admin.')

}

if(Ban.bannable) {

const embed = new Discord.MessageEmbed()
          .setAuthor(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
          .setFooter(`${client.user.username}`)
          .setTitle("✈️"+"BAN Member "+"✈️")
          .addField("〽️ | **Server Name **", message.guild.name)
          .addField("#️⃣ | **Channel**", `${message.channel.name}`) 
          .addField("✈️ | **Member ban**", Ban)
          .addField("👑 | **Moderation**", `<@${message.author.id}>`, true)
          .addField("🆔 | **Moderation Id** ", `${message.author.id}`, true)
          .setColor("RANDOM");
message.channel.send(embed)

Ban.ban();
}}})


      client.on('message', async message=>{
  
  if(message.content.startsWith(PREFIX + 'unban')){
if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("❌ | I'm sorry, you don't have permission.")
    let args = message.content.split(" ").slice(1)
if(!args[0]) return message.channel.send('🤗 | select member')
const reason = args[1] || "dont reason"
let unban = await client.users.fetch(args[0])

message.guild.members.unban(unban,reason)
const embed = new Discord.MessageEmbed()
     .setFooter(`${client.user.username}`)
          .setTitle("**__UNBAN Member__**")
          .addField("〽️ | **Server Name**", message.guild.name)
          .addField("#️⃣ | **Channel**", `${message.channel.name}`) 
          .addField("🤗 | **Member unban**", unban)
          .addField("👑 | **Moderation**", `<@${message.author.id}>`, true)
          .addField("🆔 | **Moderation Id**", `${message.author.id}`, true)
          .setColor("RANDOM");
    
message.channel.send(embed)

  }})

//////////

  client.on("message", message => {
        switch(message.content.toLowerCase()) {
            case (prefix + "uban-all"):
                if (message.member.hasPermission("ADMINISTRATOR")) {
                    message.guild.fetchBans().then(bans => {
                        if (bans.size == 0) {message.reply("🔎 | There are no banned users."); throw "No members to unban."};
                        bans.forEach(ban => {
                            message.guild.members.unban(ban.user.id);
                        });
                    }).then(() => message.reply("🤗 | Unbanned all users.")).catch(e => console.log(e))
                } else {message.reply("❌ | You do not have enough permissions for this command.")}
            break;
        }
      });


///////////////
client.on('message', rw => {
  if (rw.content.startsWith(prefix + 'vban')) {
if (!rw.member.hasPermission("MOVE_MEMBERS")) return rw.channel.send("**YOU DONT HAVE PERMISSION** | ❎ ");
let men = rw.mentions.users.first()
let mas = rw.author
if(!men) return rw.channel.send('🔎 | `MANTION THE MEMBER `'); 
rw.guild.channels.cache.forEach(c => {
c.createOverwrite(men.id, { 
          CONNECT: false
})
    })
const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(`${rw.guild.name}`)
.setDescription(`**
 🎤 | <@${men.id}>
YOU CANT JOIN THE VOICE ROOM
👑 | BANNER : <@${rw.author.id}> **`)
.setThumbnail("")
          
client.users.cache.get(men.id).send(embed)
const Embed11 = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(rw.guild.name, rw.guild.iconURL())
.setDescription(` 
🎤 | **Voice Bannded**
<@${men.id}>

👑 | BANNER : <@${rw.author.id}> `)
.setThumbnail("")
rw.channel.send(Embed11).then(rw => {rw.delete(10000)})
    }
})
 
 //فكه 
client.on('message', rw => {
  if (rw.content.startsWith(prefix + 'unvban')) {
if (!rw.member.hasPermission("MOVE_MEMBERS")) return rw.channel.send("**YOU DONT HAVE PERMISSION** | ❎ ");
 let men = rw.mentions.users.first()
 let mas = rw.author
 if(!men) return rw.channel.send('🔎 | `MANTION THE MEMBER `');
 rw.guild.channels.cache.forEach(c => { 
 c.createOverwrite(men.id, {
         CONNECT: true
 })
    })
const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(`${rw.guild.name}`)
.setDescription(`**
 🔊 | <@${men.id}>
 Welcome Back To Voice
👑 | Back With : <@${rw.author.id}> **`) 
.setThumbnail("")
          
client.users.cache.get(men.id).send(embed)
const Embed11 = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(rw.guild.name, rw.guild.iconURL())
.setDescription(` 
❤️ | GO FOR VOICE NOW
<@${men.id}>
👑 | With : <@${rw.author.id}>
`)
.setThumbnail("")
rw.channel.send(Embed11).then(rw => {rw.delete(15000)})
    } 
})

////////////

client.on("message", message => {
  if (message.content.startsWith(PREFIX + "kick")) {
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("❌ | I'm sorry, you don't have permission. ")
    let tag = message.mentions.members.first();
    if(!tag) return message.reply('🦵 | select member')
    let args = message.content.split(" ").slice(1); 
    let reason = message.content.split(" ").slice(2).join(" ")
    if(!args) return message.reply('🦵 | select member')
 
    var blackjack = 'Gardi Bot'
    const kick = new Discord.MessageEmbed()
    .setTitle("🦵"+'**Kicked In a Server**'+"🦵")
    .addField('〽 | Server', message.guild.name)
    .addField('👤 | Name member ', tag)
    .addField('👑 | Moderation', message.author.tag)
    .setFooter(`${client.user.username}`) 
    .setColor("RANDOM")
    message.channel.send(kick)
    tag.kick();
  }})


client.on('message',async message => {
  if(message.content.startsWith(PREFIX + "vkick")) { 
	  var mention = message.mentions.members.first();
   if (!message.member.hasPermission("MANAGE_GUILD")) {
      return message.channel.send("❌ | I'm sorry, you don't have permission. ");
    }
 
    if (!message.mentions.members.first())
      return message.channel.send(
        `🗣 | select member`
      );
 
    let { channel} = message.mentions.members.first().voice;
 
    if (!channel)
      return message.channel.send(`🔎 | This person is not in the voice.`);
 
    message.mentions.members.first().voice.kick();
    const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail(message.author.avatarURL())
        .setAuthor(message.author.username,message.author.avatarURL()) 
        .addField("👑 | Moderation", message.author.tag)
        .addField("🗣 | Member vkick", mention)
        .setFooter(`${client.user.tag}`)
        .setTimestamp()
    message.channel.send(embed)
  }
}) 





////////////

client.on("message", message => {
  if (message.content.startsWith(prefix + "movall")) {
    if (!message.member.hasPermission("MOVE_MEMBERS"))
      return message.channel.send("**❌ |  You Dont Have Perms `MOVE_MEMBERS`**");
    if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS"))
      return message.reply("**❌ |  I Dont Have Perms `MOVE_MEMBERS`**");
    if (message.member.voice.channel == null)
      return message.channel.send(`🔎 | **You Have To Be In Room Voice**`);
    var author = message.member.voice.channel.id;
    var m = message.guild.members.cache.filter(m => m.voice.channel);
    message.guild.members.cache.filter(m => m.voice.channel).forEach(m => {
        m.voice.setChannel(author);
      })
    const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail(message.author.avatarURL())
        .setAuthor(message.author.username,message.author.avatarURL())
        .setTitle("✅ | **Done Chek Move all**")
        .addField("👑 | Moderation", message.author.tag)
        message.channel.send(embed);
  }
});

//////////

client.on("message", message => {
  if (message.content.startsWith(prefix + "move")) {
    let args = message.content.split(" ");
    let user = message.guild.member(
      message.mentions.users.first() || message.guild.members.cache.get(args[1])
    );
    if (!message.channel.guild || message.author.bot) return;
    if (!message.guild.member(message.author).hasPermission("MOVE_MEMBERS"))
      return message.channel.send("❌ | Please Check Your Permission");
    if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS"))
      return message.channel.send("❌ | Please Check My Permission");
    if (!message.member.voice.channel)
      return message.channel.send("🔎 | Your are not in voice channel");
    if (!user) return message.channel.send(`🔎 | **>>> ${prefix}move <@mention or id>**`);
    if (!message.guild.member(user.id).voice.channel)
      return message.channel.send(
        `❌ | **${user.user.username}** Has not in Voice channel`
      );
    message.guild
      .member(user.id)
      .voice.setChannel(message.member.voice.channel.id)
      .then(() => {
      message.channel.send(
          `👨‍🏫**${user.user.username}** \nhas been moved to \n👑**${
            message.guild.member(message.author).voice.channel.name
          }**`
        );
      });
  }
});

/////////////
client.on("message", message => {
if(message.content.startsWith(PREFIX + "vmute")) {
var mention = message.mentions.members.first();
if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MUTE_MEMBERS") || !message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return;
if(!mention) return message.channel.send(`🔇 | **.**vmute @user`);
if(!mention.voice.channel) return message.channel.send(`🔎 | This person is not in the voice.`);
mention.voice.setMute(true).then(() => {
const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail(message.author.avatarURL())
        .setAuthor(message.author.username,message.author.avatarURL()) 
        .addField("👑 | Moderation", message.author.tag)
        .addField("🔇 | Member vmute", mention)
        .setFooter(`${client.user.tag}`)
        .setTimestamp()
        message.channel.send(embed);    
}).catch(console.error);
}
if(message.content.startsWith(PREFIX + "unvmute")) {
var mention = message.mentions.members.first();
if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MUTE_MEMBERS") || !message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return;
if(!mention) return message.channel.send(`🔈 | **.**unvmute @user`);
if(!mention.voice.channel) return message.channel.send(`🔎 | This person is not in the voice.`);
mention.voice.setMute(false).then(() => {
const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail(message.author.avatarURL())
        .setAuthor(message.author.username,message.author.avatarURL())
        .addField("👑 | Moderation", message.author.tag)
        .addField("🔈 | Member unvmute", mention)
        .setFooter(`${client.user.username}`)
        .setTimestamp()
        message.channel.send(embed);   
}).catch(console.error);
}
});

//////
client.on("message", async message => {
  let args = message.content.split(" ");
  let user = message.mentions.users.first();
  if (message.content.startsWith(PREFIX + "unmute")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "❌ | I'm sorry, you don't have permission. "
      );
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "❌ | I'm sorry, you don't have permission. "
      );
    if (!user)
      return message.channel.send(`🔔 | **.**unmute @user`);
    let mute = message.guild.roles.cache.find(role => role.name === "Muted");
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.remove(mute);
	  const embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
          .setFooter(`${client.user.username}`)
          .setTitle("🔔"+"Unmute Member"+"🔔")
          .addField("〽️ | **Server Name**", message.guild.name)
          .addField("#️⃣ | **Channel**", `${message.channel.name}`) 
          .addField("🔔 | **Member Unmute**", `${user.username}`)
          .addField("👑 | **Moderation**", `<@${message.author.id}>`, true)
          .addField("🆔 | **Moderation Id** ", `${message.author.id}`, true)
          .setColor("RANDOM");
    message.channel.send(embed);
  }
});

client.on("message", async message => {
  let args = message.content.split(" ");
  let user =
    message.mentions.users.first() || message.guild.members.cache.get(args[1]);
  if (message.content.startsWith(PREFIX + "mute")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "❌ | I'm sorry, you don't have permission. "
      );
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "❌ | I'm sorry, you don't have permission."
      );
    if (!user)
      return message.channel.send(`🔕 | **.**mute @user`);
    let mute = message.guild.roles.cache.find(role => role.name === "Muted");
    if (!mute)
      mute = await message.guild.roles.create({
        data: {
          name: "Muted",
          color: "RANDOM",
          permissions: []
        }
      });
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.add(mute);
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
          .setFooter(`${client.user.username}`)
          .setTitle("🔕"+"Mute Member"+"🔕")
          .addField("〽️ | **Server Name**", message.guild.name)
          .addField("#️⃣ | **Channel**", `${message.channel.name}`) 
          .addField("🔕 | **Member Mute**", `${user.username}`)
          .addField("👑 | **Moderation**", `<@${message.author.id}>`, true)
          .addField("🆔 | **Moderation Id** ", `${message.author.id}`, true)
          .setColor("RANDOM");
    message.channel.send(embed);
  }
  if (message.content.toLowerCase() === `${PREFIX}hmute`) {
    let mute = new Discord.MessageEmbed()
      .setTitle(`Command: Mute `)
      .addField("Usage", `${PREFIX}mute @user`)
      .addField("Information", "Mute Members");
    message.channel.send(mute);
  }
});
///////////////////
client.on("message", message => {
  if (message.content.startsWith(prefix + "user")) {
    if (!message.channel.guild) return;
    let user = message.mentions.users.first();
    var men = message.mentions.users.first();
    var heg;
    if (men) {
      heg = men;
    } else {
      heg = message.author;
    }
    var mentionned = message.mentions.members.first();
    var h;
    if (mentionned) {
      h = mentionned;
    } else {
      h = message.member;
    }
       
    const embed = new Discord.MessageEmbed()
        .setThumbnail(heg.avatarURL())
        .setTitle(`**User Info ${message.author.tag}**`)
        .addField("🆔 | **ID**", `${heg.id}`, true)
        .addField("🧑‍🏫 | **Name**", `${heg.username}`, true)
        .addField('#️⃣ | **Discrim Account**',"**#" +  `${heg.discriminator}**`,true)
        .addField("⏳ | **Created Account At**", `${heg.createdAt}`, true)
        .addField("⏱ | **Time Join Server**", message.member.joinedAt.toLocaleString())    
        .addField("🤖 | **Bot**", `${heg.bot}`, true)
        .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
        .setColor("RANDOM")      
        .setTimestamp()
 
    message.channel.send(embed);
  }
});
//////////////////

const channelid = "937120311739027497"; //id channele vc
client.on("ready", () => {
  const channel = client.channels.cache.get(channelid);
  if (!channel) return console.error("The channel does not exist!");
  channel
    .join()
    .then((connection) => {
      console.log("Successfully connected.");
    })
    .catch((e) => {
      console.error(e);
    });
});
//////
client.on("message", message => {
if (message.content.startsWith(prefix + "about")) {
message.channel.send({
embed: new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())
.setThumbnail(client.user.avatarURL())
.setColor("RANDOM")
.setTitle("Info Bot")
.addField("👑``OWNER``", `<@881116033916735570>`, true)
.addField("👨‍🏫``My Name``", `${client.user.tag} `, true)
.addField("🆔``My ID``", `[ ${client.user.id} ]`, true)
.addField("🖇``Servers``", [client.guilds.cache.size], true)
.addField("⚠️``Users``", `[ ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} ]`, true)
.addField("#️⃣``Channels``", `[ ${client.channels.cache.size} ]`, true)
.addField("📶``My Ping``",[`${Date.now() - message.createdTimestamp}` + "MS"],true)
.addField("🔐``My Prefix``", `[ ${prefix} ]`, true)
});
}
});
///////////
let smsm = ['881116033916735570','']
client.on('message', message=> {
  if(message.content.startsWith(prefix + "setavatar")){
  if(!smsm.includes(message.author.id))return
  const args = message.content.split(" ").slice(1).join(" ")
  if(!args) return message.reply(new Discord.MessageEmbed().setTitle(`Hi`))
  client.user.setAvatar(`${args}`)
  message.channel.send(`> Done SetAvatar To\n||${args}||`)
  }
}) 
/////////////////////
client.on("message", message => {
if (message.content === prefix +"help") {
const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
    .setDescription(`
🌙 ┇ **Everyone**
> \`invite\` - \`support\` - \`about\` - \`ping\`
> \`user\` - \`srever\` - \`avatar\` - \`allbots\`
>  \`date\` - \`uptime\`
> 
============
**⚙️┇Moderator**
**__\`mute\`__** - **__\`unmute\`__** - **__\`vmute\`__** - **__\`unvmute\`__**
\`move\` - \`movall\` - \`kick\` - \`vkick\`
**__\`vban\`__** - **__\`unvban\`__** - **__\`ban\`__** - **__\`unban\`__** - **__\`uban-all\`__**
\`lock\` - \`unlock\` - \`clear\` - \`say\` - \`esay\`
**__\`open\`__** - **__\`close\`__** - **__\`openall\`__** - **__\`closeall\`__**
\`setnick\` - \`ava-server\`
============
**🤹‍♀️┇Gif**
> \`boy\` - \`girl\` - \`baby\` - \`anime\` - \`smoke\` - \`sad\` - \`neon\`   \`couple\` - \`cat\` - \`cartoon\`
============
**📸┇Photo**
> \`pboy\` - \`pgirl\` - \`panime\`
============
**🤪┇Funny**
> \`kiss\` - \`slap\` - \`hug\` - \`love\` - \`boom\`
============
**💎┇Link**
[**Support**](https://discord.gg/R9emxmvgRh)   **|**   [**Invite**](https://discord.com/api/oauth2/authorize?client_id=925840229443731487&permissions=8&scope=bot)
`)

    .setFooter(` Gardi bot ✨ | By : PW๛ᗰᗩᗰ  ᘜᗩᖇᗪI ᴰᔆ✨#1000`, client.user.avatarURL)
   .setURL("https://discord.gg/R9emxmvgRh")
      
    message.channel.send(embed);
    message.react("<a:jano_27:799630916820795422>");
  }
});


/////////////////////
/////////////

//////////////

////////////////
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("⏳Wait\`...\`").then(msg => {
      var PinG = `${Date.now() - msg.createdTimestamp}`;
      var ApL = `${Math.round(client.ping)}`;
      msg.edit(`\`\`\`javascript\n⏳Time taken: \n📶${PinG} ms.\`\`\``);
    });
  }
});
/////////////


//////////////////////////////////////////////


const developers = ["881116033916735570"];
client.on("message", (message) => {
  if (!developers.includes(message.author.id)) return;
  if (message.content.startsWith(prefix + "watch")) {
    client.user.setActivity(`${prefix}help ${client.guilds.cache.size} Server`, { type: "WATCHING" });
    message.reply("Done\n  Now Activity is WATCHING  ");
  }
if (message.content.startsWith(prefix + "watchuser")) {
    client.user.setActivity(`${prefix}help Server ${client.guilds.cache.size} USER ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}`, { type: "WATCHING" });
    message.reply("Done\n  Now Activity is WATCHING  ");
  }
  if (message.content == prefix + "listen") {
    client.user.setActivity(`${prefix}help ${client.guilds.cache.size} Server`, { type: "LISTENING" });
    message.reply("Done\n  Now Activity is LISTENING ");
  }
if (message.content == prefix + "listenuser") {
    client.user.setActivity(`${prefix}help Server ${client.guilds.cache.size} USER ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}`, { type: "LISTENING" });
    message.reply("Done\n  Now Activity is LISTENING ");
  }
  if (message.content == prefix + "play") {
    client.user.setActivity(`${prefix}help ${client.guilds.cache.size} Server`, { type: "PLAYING" });
    message.reply("Done\n  Now Activity is PLAYING  ");
  }
if (message.content == prefix + "playuser") {
    client.user.setActivity(`${prefix}help Server ${client.guilds.cache.size} USER ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}`, { type: "PLAYING" });
    message.reply("Done\n  Now Activity is PLAYING  ");
  }
  if (message.content == prefix + "stream") {
    client.user.setActivity(`${prefix}help ${client.guilds.cache.size} Server`, { type: "STREAMING", url: "https://www.twitch.tv/tapoze"});
    message.reply("Done\n  Now Activity is STREAMING ");
}
if (message.content == prefix + "streamuser") {
    client.user.setActivity(`${prefix}help Server ${client.guilds.cache.size} USER ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}`, { type: "STREAMING", url: "https://www.twitch.tv/tapoze"});
    message.reply("Done\n  Now Activity is STREAMING ");
}

if (message.content == prefix + "online") {
    client.user.setStatus(`online`);
    message.reply("Done\n  Now Status is online ");
}
if (message.content == prefix + "idle") {
    client.user.setStatus(`idle`);
    message.reply("Done\n  Now Status is idle ");
}
if (message.content == prefix + "dnd") {
    client.user.setStatus(`dnd`);
    message.reply("Done\n  Now Status is dnd ");
}
}); 




///////////////////////////////////////////////
   ///////////////////////////
client.on('message',async message => {
  if(message.content.startsWith(prefix + "avatar")) {
 
    let args = message.content.split(" ").slice(1).join(" ");   
   let member = message.mentions.users.first() || message.author
    let avatar = member.displayAvatarURL({size: 1024})
      const embed = new Discord.MessageEmbed()
        .setTitle(`${member.username}'s avatar`)
        .setImage(avatar)
        .setColor("RANDOM")
        message.channel.send(embed);
    
  }})
////////////////////////////
client.on("message", message => {
  let commands = message.content.split(" ");
  if (commands[0] == prefix + "say") {
    if (!message.guild) return;
    if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
      return message.reply("❌ | **You Dont Have `ADMINISTRATOR` Permission ** ");
    if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR"))
      return message.reply(
        "❌ | Please Check My Role Permission To `ADMINISTRATOR"
      );
    var args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) {
      return message.channel.send("`Usage : " + prefix + "say <message>`");
    }
    message.delete();
    message.channel.send(`**${args}**`);
  }
});

client.on("message", message => {
  let commands = message.content.split(" ");
  if (commands[0] == prefix + "esay") {
    if (!message.guild) return;
    if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
      return message.reply("❌ | **You Dont Have `ADMINISTRATOR` Permission ** ");
    if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR"))
      return message.reply(
        "❌ | Please Check My Role Permission To `ADMINISTRATOR"
      );
    var args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) {
      return message.channel.send("`Usage : " + prefix + "esay <message>`");
    }
    message.delete();
const embed = new Discord.MessageEmbed()
       .setColor("random")
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setDescription (`**${args}**`)
    .setFooter(`GARDI BOT ✨`)
    .setImage(``)
    .setThumbnail(client.user.avatarURL())
    message.channel.send(embed);
  }
});
//////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (!message.guild) return;
  if (message.author.bot) return;
  let args = message.content.split(" ");
  let command = args[0].toLowerCase();
  if (command === prefix + "clear")  {
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        `❌ | You are missing the permission \`MANAGE MESSAGES\`.`
      );
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        `❌ | I Am missing the permission \`MANAGE MESSAGES\`.`
      );
    if (!args[1]) {
      message.channel
        .bulkDelete(100)
        .then(m =>
          message.channel
            .send(`\`\`\`\n✅ | Deleted ${m.size} messages\n\`\`\``)
            .then(p => p.delete({ timeout: 1500 }))
        );
    } else {
      message.delete().then(n => {
        message.channel
          .bulkDelete(args[1])
          .then(m =>
            message.channel
              .send(`\`\`\`\n✅ | Deleted ${m.size} messages\n\`\`\``)
              .then(p => p.delete({ timeout: 1500 }))
          );
      });
    }
  }
});
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.content === prefix + "date") {
    var currentTime = new Date(),
      Year = currentTime.getFullYear(),
      Month = currentTime.getMonth() + 1,
      Day = currentTime.getDate();

    var clinet = new Discord.MessageEmbed()
      .setTitle("⏱Date Today⏱")
      .setColor("RANDOM")
      .setTimestamp()
      .setDescription("" + Day + "/" + Month + "/" + Year + "🗓");
    message.channel.send(clinet);
  }
});
//////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.content === prefix + "support") {
    if (!message.channel.guild)
      return message.reply("**this command only for server**");
    const embed = new Discord.MessageEmbed()
       .setColor("random")
    .setDescription (`
☺️Support is me
--------------
📊I work
 \`⚙️moderation\`
 \`🤹gif\`
 \`🤪funny\`
 \`📸photo\`
Link
[support](https://discord.gg/R9emxmvgRh)`)
    .setFooter(``)
    .setImage(``)
    .setTitle(``) 
    .setThumbnail(client.user.avatarURL())
    message.channel.send(embed);
  }
});
////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.content === prefix + "invite") {
    if (!message.channel.guild)
      return message.reply("**this command only for server**");
    const embed = new Discord.MessageEmbed()
       .setColor("random")
    .setDescription (`
☺️Invite is me
--------------
📊I work
\` ⚙️moderation \`
\`🤹gif\`
\` 🤪funny\`
\`📸photo\`
Link
[invite]( https://discord.com/api/oauth2/authorize?client_id=765396847379480660&permissions=8&scope=bot)`)
    .setFooter(``)
    .setImage(``)
    .setTitle(``) 
    .setThumbnail(client.user.avatarURL())
    message.channel.send(embed);
  }
});

//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.content.startsWith(prefix + "slap")) {
    let user = message.mentions.users.first();
    if (!user) return message.reply("🙊 | **${prefix}**slap <@USER>");
    let slaps = [
      "https://media.discordapp.net/attachments/738277612039962688/775009108402372608/image0.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775009109166522428/image1.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775009109383577621/image2.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775009109585821746/image3.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775009109749006406/image4.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775009110177349692/image6.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775009110373433364/image7.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775009110525345797/image8.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775009110663233576/image9.gif"
    ];
    const embed = new Discord.MessageEmbed()
      .setDescription(`${message.author.username} Slap ${user.username}!`)
      .setColor(`RANDOM`)
      .setImage(slaps[Math.floor(Math.random() * slaps.length)]);
    message.channel.send(embed);
  }
});
//////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.content.startsWith(prefix + "love")) {
    let user = message.mentions.users.first();
    if (!user) return message.reply("🙊 | **${prefix}**love <@USER>");
    let loves = [
      "https://media.discordapp.net/attachments/738277612039962688/775017084848439296/image0.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775017085545086996/image2.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775017085721116732/image3.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775017085948133406/image4.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775017086127702047/image5.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775017086300717068/image6.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775017086522228766/image7.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775017086757634128/image8.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775017087004442634/image9.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775017087004442634/image9.gif"
    ];

    const embed = new Discord.MessageEmbed()
      .setDescription(`${message.author.username} Love ${user.username}!`)
     .setColor(`RANDOM`)
      .setImage(loves[Math.floor(Math.random() * loves.length)]);
    message.channel.send(embed);
  }
});
//////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.content.startsWith(prefix + "hug")) {
    let user = message.mentions.users.first();
    if (!user) return message.reply("🙊 | **${prefix}**hug <@USER>");

    let hugs = [
      "https://media.discordapp.net/attachments/738277612039962688/775010008437096508/image0.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775010008676433945/image1.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775010008823103508/image2.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775010008982224896/image3.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775010009151045692/image4.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775010009322094602/image5.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775010009578340382/image6.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775010009796575262/image7.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775010009972867082/image8.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775010010152566804/image9.gif"
    ];

    const embed = new Discord.MessageEmbed()
      .setDescription(`${message.author.username} Hugs ${user.username}!`)
      .setColor(`RANDOM`)
      .setImage(hugs[Math.floor(Math.random() * hugs.length)])
      .setFooter("hug");
    message.channel.send(embed);
  }
});
//////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.content.startsWith(prefix + "kiss")) {
    let user = message.mentions.users.first();
    if (!user) return message.reply("🙊 | **${prefix}**kiss <@USER>");
    var kiss = [
      "https://media.discordapp.net/attachments/738277612039962688/775017819980431360/image0.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775017820161179648/image1.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775017820445868032/image2.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775017820643262465/image3.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775017820853239808/image4.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775017821129932860/image5.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775017821611753472/image7.gif",
      "https://media.discordapp.net/attachments/725046590242291763/775020613109678090/image0.gif"
    ];

    const embed = new Discord.MessageEmbed()
      .setDescription(`${message.author.username} kiss ${user.username}!`)
      .setColor(`RANDOM`)
      .setImage(kiss[Math.floor(Math.random() * kiss.length)]);
    message.channel.send(embed);
  }
});
//////////////////////////////////////////////////////////////////

///////////////////////

//////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.content.startsWith(prefix + "boom")) {
    let user = message.mentions.users.first();
    if (!user) return message.reply("🙊 | **${prefix}**boom <@USER>");

    let bombs = [
      "https://media.discordapp.net/attachments/738277612039962688/775016118678454282/image0.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775016118938894407/image1.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775016119148740608/image2.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775016119328833566/image3.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775016119588225094/image4.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775016119778017290/image5.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775016119966629928/image6.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775016120393924698/image8.gif",
      "https://media.discordapp.net/attachments/738277612039962688/775016120577949706/image9.gif"
    ];

    const embed = new Discord.MessageEmbed()
      .setDescription(`${message.author.username} boom ${user.username}!`)
      .setColor(`RANDOM`)
      .setImage(bombs[Math.floor(Math.random() * bombs.length)]);
    message.channel.send(embed);
  }
});

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (!message.channel.guild) return;

  if (message.content.startsWith(prefix + "allbots")) {
    if (message.author.bot) return;
    let i = 1;
    const botssize = message.guild.members.cache
      .filter(m => m.user.bot)
      .map(m => `${i++} - <@${m.id}>`);
    const embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setDescription(
        `**All Bots Is ${
          message.guild.members.cache.filter(m => m.user.bot).size
        } In Server**
${botssize.join(" \n")}`
      )
      .setFooter(client.user.username, client.user.avatarURL())
      .setTimestamp();
    message.channel.send(embed);
  }
});

///////////////////////////////////////////////////////////////// /////////////////////////////////////////////////////////////////
client.on("message", async message => {
  if (message.content.startsWith(prefix + "uptime")) {
    let rozh = Math.floor(client.uptime / 86400000);
    let katzhmer = Math.floor(client.uptime / 3600000) % 24;
    let daqa = Math.floor(client.uptime / 60000) % 60;
    let chrka = Math.floor(client.uptime / 1000) % 60;

    return message.channel.send(
      `__Uptime:__\n\n☀️${rozh}day \n⏳${katzhmer}hour \n⏱${daqa}minute \n⏲${chrka}seconds`
    );
  }
});
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
client.on("message", async message => {
  if (message.content.startsWith(prefix + "server")) {
    if (message.author.bot) return;
    if (!message.channel.guild) return;

    let args = message.content.split(" ").slice(1);

    const os = require("os");

    let region;
    switch (message.guild.region) {
      case "europe":
        region = "🇪🇺 Europe";
        break;
      case "us-east":
        region = "🇺🇸 us-east";
        break;
      case "us-west":
        region = "🇺🇸 us-west";
        break;
      case "us-south":
        region = "🇺🇸 us-south";
        break;
      case "us-central":
        region = "🇺🇸 us-central";
        break;
    }

    const embed = new Discord.MessageEmbed()
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setColor("RANDOM")
      .setTitle(`server Info`)
      .addFields(
        {
          name: "👑 | Owner: ",
          value: `${message.guild.owner}`,
          inline: true
        },
	      
	      
        {
          name: "🧑‍🏫 | All Members: ",
          value: `${message.guild.memberCount} users`,
          inline: true
        },
	      
	      
        
	      
	      
        {
          name: "🤖 | All Bots: ",
          value: ` ${
            message.guild.members.cache.filter(m => m.user.bot).size
          } bots`,
          inline: true
        },
	      
	      
        {
          name: "⏳ | Creation Date: ",
          value: message.guild.createdAt.toLocaleDateString("en-us"),
          inline: true
        },
	      
	      
        {
          name: "〽 | Roles Number: ",
          value: ` ${message.guild.roles.cache.size} roles in this server.`,
          inline: true
        },
	      
	      
        
        {
          name: "⁉️ | Boosters: ",
          value:
            message.guild.premiumSubscriptionCount >= 1
              ? ` ${message.guild.premiumSubscriptionCount} Boosters`
              : ` no boosters Found`,
          inline: true
        },
	      
	      
        {
          name: "⚠️ | Emojis: ",
          value:
            message.guild.emojis.cache.size >= 1
              ? `All emojis ${message.guild.emojis.cache.size} !`
              : " no emojis Found",
          inline: true
        }
	      
      );
    await message.channel.send(embed);
  }
});
/////////////////////////////////////////////////////////////////

//////////////////////////

////////////////

////////



