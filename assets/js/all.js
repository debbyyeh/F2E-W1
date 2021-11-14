"use strict";

// jquery 下拉式選單
$(document).ready(function () {
  $('.search-more').click(function (e) {
    e.preventDefault();
    $('body').toggleClass('search-height-show');
  });
  $('.search-input').click(function () {
    $('body').toggleClass('whereHeight-show');
  });
  $('.input-group-label').click(function () {
    $(this).toggleClass('.active');
  });
}); // 縣市區篩選欄位連動

var area_data = {
  "north": {
    0: {
      "cityCH": '臺北市',
      "cityEN": 'Taipei',
      "district": ["中正區", "大同區", "中山區", "萬華區", "信義區", "松山區", "大安區", "南港區", "北投區", "內湖區", "士林區", "文山區"]
    },
    1: {
      "cityCH": '新北市',
      "cityEN": 'NewTaipei',
      "district": ["板橋區", "新莊區", "泰山區", "林口區", "淡水區", "金山區", "八里區", "萬里區", "石門區", "三芝區", "瑞芳區", "汐止區", "平溪區", "貢寮區", "雙溪區", "深坑區", "石碇區", "新店區", "坪林區", "烏來區", "中和區", "永和區", "土城區", "三峽區", "樹林區", "鶯歌區", "三重區", "蘆洲區", "五股區"]
    },
    2: {
      "cityCH": '基隆市',
      "cityEN": 'Keelung',
      "district": ["仁愛區", "中正區", "信義區", "中山區", "安樂區", "暖暖區", "七堵區"]
    },
    3: {
      "cityCH": '桃園市',
      "cityEN": 'Taoyuan',
      "district": ["桃園區", "中壢區", "平鎮區", "八德區", "楊梅區", "蘆竹區", "龜山區", "龍潭區", "大溪區", "大園區", "觀音區", "新屋區", "復興區"]
    },
    4: {
      "cityCH": '新竹縣',
      "cityEN": 'HsinchuCounty',
      "district": ["竹北市", "竹東鎮", "新埔鎮", "關西鎮", "峨眉鄉", "寶山鄉", "北埔鄉", "橫山鄉", "芎林鄉", "湖口鄉", "新豐鄉", "尖石鄉", "五峰鄉"]
    },
    5: {
      "cityCH": '新竹市',
      "cityEN": 'Hsinchu',
      "district": ["東區", "北區", "香山區"]
    },
    6: {
      "cityCH": '宜蘭縣',
      "cityEN": 'YilanCounty',
      "district": ["宜蘭市", "羅東鎮", "蘇澳鎮", "頭城鎮", "礁溪鄉", "壯圍鄉", "員山鄉", "冬山鄉", "五結鄉", "三星鄉", "大同鄉", "南澳鄉"]
    }
  },
  "mid": {
    0: {
      "cityCH": '苗栗縣',
      "cityEN": 'MiaoliCounty',
      "district": ["苗栗市", "通霄鎮", "苑裡鎮", "竹南鎮", "頭份鎮", "後龍鎮", "卓蘭鎮", "西湖鄉", "頭屋鄉", "公館鄉", "銅鑼鄉", "三義鄉", "造橋鄉", "三灣鄉", "南庄鄉", "大湖鄉", "獅潭鄉", "泰安鄉"]
    },
    1: {
      "cityCH": '臺中市',
      "cityEN": 'Taichung',
      "district": ["中區", "東區", "南區", "西區", "北區", "北屯區", "西屯區", "南屯區", "太平區", "大里區", "霧峰區", "烏日區", "豐原區", "后里區", "東勢區", "石岡區", "新社區", "和平區", "神岡區", "潭子區", "大雅區", "大肚區", "龍井區", "沙鹿區", "梧棲區", "清水區", "大甲區", "外埔區", "大安區"]
    },
    2: {
      "cityCH": '南投縣',
      "cityEN": 'NantouCounty',
      "district": ["南投市", "埔里鎮", "草屯鎮", "竹山鎮", "集集鎮", "名間鄉", "鹿谷鄉", "中寮鄉", "魚池鄉", "國姓鄉", "水里鄉", "信義鄉", "仁愛鄉"]
    },
    3: {
      "cityCH": '彰化縣',
      "cityEN": 'ChanghuaCounty',
      "district": ["彰化市", "員林鎮", "和美鎮", "鹿港鎮", "溪湖鎮", "二林鎮", "田中鎮", "北斗鎮", "花壇鄉", "芬園鄉", "大村鄉", "永靖鄉", "伸港鄉", "線西鄉", "福興鄉", "秀水鄉", "埔心鄉", "埔鹽鄉", "大城鄉", "芳苑鄉", "竹塘鄉", "社頭鄉", "二水鄉", "田尾鄉", "埤頭鄉", "溪州鄉"]
    },
    4: {
      "cityCH": '雲林縣',
      "cityEN": 'YunlinCounty',
      "district": ["斗六市", "斗南鎮", "虎尾鎮", "西螺鎮", "土庫鎮", "北港鎮", "莿桐鄉", "林內鄉", "古坑鄉", "大埤鄉", "崙背鄉", "二崙鄉", "麥寮鄉", "臺西鄉", "東勢鄉", "褒忠鄉", "四湖鄉", "口湖鄉", "水林鄉", "元長鄉"]
    }
  },
  "south": {
    0: {
      "cityCH": '嘉義縣',
      "cityEN": 'ChiayiCounty',
      "district": ["太保市", "朴子市", "布袋鎮", "大林鎮", "民雄鄉", "溪口鄉", "新港鄉", "六腳鄉", "東石鄉", "義竹鄉", "鹿草鄉", "水上鄉", "中埔鄉", "竹崎鄉", "梅山鄉", "番路鄉", "大埔鄉", "阿里山鄉"]
    },
    1: {
      "cityCH": '嘉義市',
      "cityEN": 'Chiayi',
      "district": ["東區", "西區"]
    },
    2: {
      "cityCH": '臺南市',
      "cityEN": 'Tainan',
      "district": ["中西區", "東區", "南區", "北區", "安平區", "安南區", "永康區", "歸仁區", "新化區", "左鎮區", "玉井區", "楠西區", "南化區", "仁德區", "關廟區", "龍崎區", "官田區", "麻豆區", "佳里區", "西港區", "七股區", "將軍區", "學甲區", "北門區", "新營區", "後壁區", "白河區", "東山區", "六甲區", "下營區", "柳營區", "鹽水區", "善化區", "大內區", "山上區", "新市區", "安定區"]
    },
    3: {
      "cityCH": '高雄市',
      "cityEN": 'Kaohsiung',
      "district": ["楠梓區", "左營區", "鼓山區", "三民區", "鹽埕區", "前金區", "新興區", "苓雅區", "前鎮區", "小港區", "旗津區", "鳳山區", "大寮區", "鳥松區", "林園區", "仁武區", "大樹區", "大社區", "岡山區", "路竹區", "橋頭區", "梓官區", "彌陀區", "永安區", "燕巢區", "田寮區", "阿蓮區", "茄萣區", "湖內區", "旗山區", "美濃區", "內門區", "杉林區", "甲仙區", "六龜區", "茂林區", "桃源區", "那瑪夏區"]
    },
    4: {
      "cityCH": '屏東縣',
      "cityEN": 'PingtungCounty',
      "district": ["屏東市", "潮州鎮", "東港鎮", "恆春鎮", "萬丹鄉", "長治鄉", "麟洛鄉", "九如鄉", "里港鄉", "鹽埔鄉", "高樹鄉", "萬巒鄉", "內埔鄉", "竹田鄉", "新埤鄉", "枋寮鄉", "新園鄉", "崁頂鄉", "林邊鄉", "南州鄉", "佳冬鄉", "琉球鄉", "車城鄉", "滿州鄉", "枋山鄉", "霧台鄉", "瑪家鄉", "泰武鄉", "來義鄉", "春日鄉", "獅子鄉", "牡丹鄉", "三地門鄉"]
    }
  },
  "east": {
    0: {
      "cityCH": '花蓮縣',
      "cityEN": 'HualienCounty',
      "district": ["花蓮市", "鳳林鎮", "玉里鎮", "新城鄉", "吉安鄉", "壽豐鄉", "秀林鄉", "光復鄉", "豐濱鄉", "瑞穗鄉", "萬榮鄉", "富里鄉", "卓溪鄉"]
    },
    1: {
      "cityCH": '臺東縣',
      "cityEN": 'TaitungCounty',
      "district": ["臺東市", "成功鎮", "關山鎮", "長濱鄉", "海端鄉", "池上鄉", "東河鄉", "鹿野鄉", "延平鄉", "卑南鄉", "金峰鄉", "大武鄉", "達仁鄉", "綠島鄉", "蘭嶼鄉", "太麻里鄉"]
    }
  },
  "islands": {
    0: {
      "cityCH": '澎湖縣',
      "cityEN": 'PenghuCounty',
      "district": ["馬公市", "湖西鄉", "白沙鄉", "西嶼鄉", "望安鄉", "七美鄉"]
    },
    1: {
      "cityCH": '金門縣',
      "cityEN": 'KinmenCounty',
      "district": ["金城鎮", "金湖鎮", "金沙鎮", "金寧鄉", "烈嶼鄉", "烏坵鄉"]
    },
    2: {
      "cityCH": '連江縣',
      "cityEN": 'LienchiangCounty',
      "district": ["南竿鄉", "北竿鄉", "莒光鄉", "東引鄉"]
    }
  }
};
var areaSelect = document.querySelectorAll("input[name=area]");
var citySelect = document.querySelectorAll("input[name=city]");
var listResult = document.getElementById('list-result');
var citySelected;
var city = document.getElementById('city');
var areaSelected = false;
areaSelect.forEach(function (e) {
  e.addEventListener('click', function () {
    var citypart = area_data[e.id];
    var cityLen = Object.keys(citypart).length;
    var newCity = '';

    for (var i = 0; i < cityLen; i++) {
      newCity += "<div class=\"input-group-city\"><input name=\"city\" id=\"".concat(citypart[i].cityEN, "\" type=\"radio\"><label for=\"").concat(citypart[i].cityEN, "\">").concat(citypart[i].cityCH, "</label></div>");
    }

    city.innerHTML = newCity;
    var citySelect = document.querySelectorAll("input[name=city]");

    if (typeof newCity == 'string') {
      areaSelected = true;
    }

    if (areaSelected) {
      citySelect.forEach(function (e) {
        e.addEventListener('click', function () {
          var citySelected = document.querySelector("input[name=city]:checked").id;
          axios.get("https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/".concat(citySelected, "?$top=30&$format=JSON"), {
            headers: getAuthorizationHeader()
          }).then(function (response) {
            var thisData = response.data;
            var str = "";
            thisData.forEach(function (item) {
              console.log(item.Picture[0]); // str += `<li>${item.Name}</li>`

              str += "<li> <div class=\"img\" style=\"background-image: url('".concat(item.Picture.PictureUrl1, "');\"></div><div class=\"name\">").concat(item.Name, "</div><div class=\"city\">").concat(item.City, "</div><div class=\"openTime\">").concat(item.OpenTime, "</div></li>");
            });
            listResult.innerHTML = str;
          })["catch"](function (error) {
            console.log(error);
          });
        });
      });
    }
  });
});
var selectInput = document.getElementById('selectInput');
var selectOptions = document.getElementById('selectOptions');
var selectOption = document.querySelectorAll('#selectOptions li');
selectInput.addEventListener('click', function () {
  selectOptions.classList.toggle("visible");
});

for (var i = 0; i < selectOption.length; i++) {
  selectOption[i].addEventListener("click", function () {
    selectInput.value = this.innerHTML;
    selectInput.dataset.value = this.dataset.value;
  });
}

selectInput.addEventListener('input', function () {
  selectOptions.classList.toggle("visible");
  axios.get("https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=contains(Name,'".concat(this.value, "')&$top=5&$format=JSON"), {
    headers: getAuthorizationHeader()
  }).then(function (response) {
    var thisData = response.data;
    var str = "<li>Popular destinations</li>";
    thisData.forEach(function (item) {
      str += "<li data-value=\"".concat(item.Name, "\">").concat(item.Name, "</li>");
    });
    selectOptions.innerHTML = str;
  })["catch"](function (error) {
    console.log(error);
  });
}); // 資料權限

var go = document.getElementById('gobtn');
go.addEventListener('click', function () {
  axios.get("https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=contains(Name,'".concat(selectInput.value, "')&$top=30&$format=JSON"), // `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${selectInput.dataset.value}?$top=30&$format=JSON`,
  {
    headers: getAuthorizationHeader()
  }).then(function (response) {
    var thisData = response.data;
    var str = "";
    thisData.forEach(function (item) {
      str += "<li> <div class=\"img\" style=\"background-image: url('".concat(item.Picture.PictureUrl1, "');\"></div><div class=\"name\">").concat(item.Name, "</div><div class=\"city\">").concat(item.City, "</div><div class=\"openTime\">").concat(item.OpenTime, "</div></li>");
    });
    listResult.innerHTML = str;
  })["catch"](function (error) {
    console.log(error);
  });
});

function getAuthorizationHeader() {
  var AppID = '74bc0b4c8ecf49b7bf26fd6d27c3cfc4';
  var AppKey = '2baza7gCYG1Bc40o1lKdu9-Zrs0';
  var GMTString = new Date().toGMTString();
  var ShaObj = new jsSHA('SHA-1', 'TEXT');
  ShaObj.setHMACKey(AppKey, 'TEXT');
  ShaObj.update('x-date: ' + GMTString);
  var HMAC = ShaObj.getHMAC('B64');
  var Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';
  return {
    'Authorization': Authorization,
    'X-Date': GMTString
  };
}
//# sourceMappingURL=all.js.map
