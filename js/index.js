//入口函数
$(function () {
  //1. 1.2模块有一个tab栏切换
  $(".monitor .tabs a").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");

    let idx = $(this).index();

    $(".monitor .content").eq(idx).show().siblings(".content").hide();
  });

  //2. 1.2模块有一个轮播图效果
  function lunbo() {
    $(".monitor .carousel ul").animate(
      {
        top: -525,
      },
      10000,
      "linear",
      function () {
        //这个回调函数只是表示动画结束,
        $(".monitor .carousel ul").css("top", 0);
      }
    );
  }
  lunbo();
  setInterval(lunbo, 10000);

  //3. 3.1模块有一个tab栏切换
  let orderData = [
    { orders: "301,987", amount: "99834" }, //0
    { orders: "20,301", amount: "9834" }, //1
    { orders: "1,987", amount: "3834" }, //2
    { orders: "987", amount: "834" }, //3
  ];
  let index = 0;
  //手动切换
  $(".order .head a").on("click", function () {
    $(this).addClass("active").siblings("a").removeClass("active");
    //从一堆a中 获取到当前点击的a标签的索引.
    let idx = $(".order .head a").index(this);
    console.log(idx);
    //从orderData数组中取下标对应的值,分别显示在p标签中.
    $(".order .data p:eq(0)").text(orderData[idx].orders);
    $(".order .data p:eq(1)").text(orderData[idx].amount);

    //索引保持一致
    index = idx;
  });
  //自动切换
  setInterval(function () {
    index++;
    if (index == 4) {
      index = 0;
    }
    $(".order .head a")
      .eq(index)
      .addClass("active")
      .siblings("a")
      .removeClass("active");
    //从orderData数组中取下标对应的值,分别显示在p标签中.
    $(".order .data p:eq(0)").text(orderData[index].orders);
    $(".order .data p:eq(1)").text(orderData[index].amount);
  }, 3000);

  //4. 3.2模块明天做自动的tab切换

  //5. 3.4模块tab栏切换的效果
  let hotData = [
    { name: "可爱多", num: "9,086" },
    { name: "娃哈哈", num: "8,341" },
    { name: "喜之郎", num: "7,407" },
    { name: "八喜", num: "6,080" },
    { name: "小洋人", num: "6,724" },
    { name: "好多鱼", num: "2,170" },
  ];
  let index2 = 0;
  //手动的
  $(".province .data ul.fl li").on("mouseenter", function () {
    $(this).addClass("active").siblings("li").removeClass("active");
    let idx = $(this).index();
    //打乱右边ul的数据(也就是上面hotData数组中的数据)
    hotData.push(hotData.shift());
    console.log(hotData);

    //根据新的数据,重新去生成右边ul里面的li标签们.
    let str = "";
    for (let i = 0; i < hotData.length; i++) {
      str +=
        "<li>" +
        "<span>" +
        hotData[i].name +
        "</span>" +
        "<b>" +
        hotData[i].num +
        "</b>" +
        '<i class="icon-up"></i>' +
        "</li>";
    }
    console.log(str);
    $(".province .data ul.fr").html(str);

    //索引对应
    index2 = idx;
  });

  //自动切换
  setInterval(function () {
    index2++;
    if (index2 == 5) {
      index2 = 0;
    }
    $(".province .data ul.fl li")
      .eq(index2)
      .addClass("active")
      .siblings("li")
      .removeClass("active");

    //打乱右边ul的数据(也就是上面hotData数组中的数据)
    hotData.push(hotData.shift());
    // console.log(hotData);

    //根据新的数据,重新去生成右边ul里面的li标签们.
    let str = "";
    for (let i = 0; i < hotData.length; i++) {
      str +=
        "<li>" +
        "<span>" +
        hotData[i].name +
        "</span>" +
        "<b>" +
        hotData[i].num +
        "</b>" +
        '<i class="icon-up"></i>' +
        "</li>";
    }
    // console.log(str);
    $(".province .data ul.fr").html(str);
  }, 3000);
});

//入口函数-环形图
$(function () {
  // 基于准备好的dom，初始化echarts实例
  let myChart = echarts.init(document.querySelector(".point .pie"));

  // 指定图表的配置项和数据
  let option = {
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff",
    ],
    //背景色
    // backgroundColor: '#2c343c',
    // 标题
    // title: {
    //     text: 'Customized Pie',
    //     left: 'center',
    //     top: 20,
    //     textStyle: {
    //         color: 'green'
    //     }
    // },
    //提示框组件
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
      // 提示框的位置,参数point是表示鼠标的位置
      position: function (point) {
        //point[0] 鼠标x轴的坐标
        //point[1] 鼠标y轴的坐标
        return [point[0] + 10, point[1] + 10];
      },
    },

    // visualMap: {
    //     show: true,
    //     min: 80,
    //     max: 600,
    //     inRange: {
    //         colorLightness: [0, 1]
    //     }
    // },
    series: [
      {
        name: "点位分布",
        type: "pie",
        // 内外半径
        radius: [8, 57],
        // 位置
        center: ["50%", "50%"],
        data: [
          {
            value: 110,
            name: "云南",
          },
          {
            value: 160,
            name: "北京",
          },
          {
            value: 180,
            name: "山东",
          },
          {
            value: 180,
            name: "河北",
          },
          {
            value: 160,
            name: "江苏",
          },
          {
            value: 200,
            name: "浙江",
          },
          {
            value: 280,
            name: "四川",
          },
          {
            value: 335,
            name: "湖北",
          },
        ],
        //.sort(function (a, b) { return a.value - b.value; }),
        // radius: 圆心角展现数据的百分比  area:圆心角相同
        roseType: "radius",
        // 饼图图形上的文本标签
        // label: {
        //     颜色
        //     color: 'green'
        // },
        // 引导线
        labelLine: {
          //引导线的样式
          // lineStyle: {
          //     //引导线的颜色
          //     color: 'pink'
          // },
          //是否平滑视觉引导线，默认不平滑，可以设置成 true 平滑显示，也可以设置为 0 到 1 的值，表示平滑程度
          //smooth: 0.2,
          //视觉引导线第一段的长度。
          length: 4,
          //视觉引导线第一段的长度。
          length2: 5,
        },
        //图形样式
        // itemStyle: {
        //     // color: '#c23531',
        //     //阴影
        //     shadowBlur: 200,
        //     shadowColor: 'rgba(255, 0, 0, 0.5)'
        // },

        // animationType: 'scale',
        // animationEasing: 'elasticOut',
        // animationDelay: function (idx) {
        //     return Math.random() * 200;
        // }
      },
    ],
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
});

//入口函数-柱状图
$(function () {
  // 基于准备好的dom，初始化echarts实例
  let myChart = echarts.init(document.querySelector(".user .echarts .bar"));

  // 指定图表的配置项和数据
  let item = {
    value: 1000,
    itemStyle: {
      color: "#254065",
      opacity: 0.6,
    },
  };

  let option = {
    //图例颜色
    color: ["#3398DB"],
    // 提示组件
    tooltip: {
      // trigger: 'axis',
      // axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      //     type: 'none'        // 默认为直线，可选为：'line' | 'shadow'|'cross'
      // }
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "13%",
      height: 170,
      width: "auto",
      //常用于『防止标签溢出』的场景
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: [
          "上海",
          "广州",
          "北京",
          "深圳",
          "合肥",
          "",
          "......",
          "",
          "杭州",
          "厦门",
          "济南",
          "成都",
          "重庆",
        ],
        //x轴刻度线相关的
        axisTick: {
          show: false,
          alignWithLabel: true,
        },
        //x轴文本
        axisLabel: {
          show: true,
          color: "#4c9bfd",
        },
        //x轴轴线相关
        axisLine: {
          show: true,
          lineStyle: {
            color: "#01586b",
          },
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        //y轴刻度线相关的
        axisTick: {
          show: false,
          alignWithLabel: true,
        },
        //y轴文本
        axisLabel: {
          show: true,
          color: "#4c9bfd",
        },
        //y轴轴线相关
        axisLine: {
          show: true,
          lineStyle: {
            color: "#01586b",
          },
        },
        //y轴分割线
        splitLine: {
          lineStyle: {
            color: "#01586b",
          },
        },
      },
      {
        //y轴轴线相关
        axisLine: {
          show: true,
          lineStyle: {
            color: "#01586b",
          },
        },
      },
    ],
    // 每一个实例
    series: [
      {
        name: "全国用户总量统计",
        type: "bar",
        // 柱条的宽度
        barWidth: "60%",
        // 数据
        data: [
          2100,
          1900,
          1700,
          1560,
          1400,
          item,
          item,
          item,
          900,
          750,
          600,
          480,
          240,
        ],
        // 图形样式。
        itemStyle: {
          //柱条的颜色
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#00faf9",
            },
            {
              offset: 1,
              color: "#0064cf",
            },
          ]),
        },
      },
    ],
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
});

//入口函数-线性图
$(function () {
  // 基于准备好的dom，初始化echarts实例
  let myChart = echarts.init(document.querySelector(".sales .echarts .line"));

  //要显示的数据
  let data = [
    [
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
    ],
    [
      [23, 475, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
      [43, 31, 265, 23, 78, 421, 82, 64, 343, 60, 19, 34],
    ],
    [
      [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
      [56, 43, 298, 21, 456, 87, 43, 12, 343, 54, 12, 98],
    ],
    [
      [43, 173, 262, 54, 91, 54, 84, 43, 86, 343, 154, 53],
      [32, 54, 234, 87, 332, 45, 462, 68, 93, 54, 154, 24],
    ],
  ];

  // 指定图表的配置项和数据
  let option = {
    //标题
    title: {
      text: "单位 万",
      // subtext: '纯属虚构'
      textStyle: {
        color: "#4996f5",
        fontSize: 12,
      },
      //   left: 30,
      top: 5,
    },
    //鼠标移入的提示组件
    tooltip: {
      // trigger: 'axis'
    },

    grid: {
      left: "3%",
      right: "4%",
      bottom: "6%",
      height: 120,
      width: "auto",
      //常用于『防止标签溢出』的场景
      containLabel: true,
    },

    legend: {
      data: ["最高额度", "最低额度"],
      textStyle: {
        color: "#4995f4",
      },
      right: 10,
      top: 5,
    },

    // toolbox: {
    //     show: true,
    //     feature: {
    //         dataZoom: {
    //             yAxisIndex: 'none'
    //         },
    //         dataView: {readOnly: false},
    //         magicType: {type: ['line', 'bar']},
    //         restore: {},
    //         saveAsImage: {}
    //     }
    // },

    //x轴
    xAxis: {
      type: "category",
      //坐标轴两边留白策略
      boundaryGap: false,
      //数据
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
      //x轴刻度
      axisTick: {
        show: false,
      },
      //x轴文本
      axisLabel: {
        color: "#438be5", //颜色
        align: "left", //文本对齐方式
      },
      //x轴轴线
      axisLine: {
        lineStyle: {
          color: "#012b48",
        },
      },
    },
    yAxis: {
      type: "value",
      //y轴文本
      axisLabel: {
        // formatter: '{value} °C'
        color: "#438be5",
      },
      //y轴最大刻度
      max: 500,
      //y轴最小间隔
      minInterval: 100,
      //y轴刻度
      axisTick: {
        show: false,
      },
      //y轴轴线
      axisLine: {
        lineStyle: {
          color: "#012b48",
        },
      },
      //y轴分割线
      splitLine: {
        lineStyle: {
          color: "#012b48",
        },
      },
    },
    series: [
      {
        name: "最高额度",
        type: "line",
        data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        //是否平滑显示
        smooth: true,
        // 线条和圆点的样式
        itemStyle: {
          color: "#00f2f1",
        },
        // 线条的样式
        // lineStyle:{
        //     color:'green'
        // },
        // 区域的样式
        // areaStyle:{
        //     color:'green'
        // }

        // 圆点的大小
        symbolSize: 8,

        //标记点
        // markPoint: {
        //     data: [
        //         {type: 'max', name: '最大值'},
        //         {type: 'min', name: '最小值'}
        //     ]
        // },
        //标记线
        // markLine: {
        //     data: [
        //         {type: 'average', name: '平均值'}
        //     ]
        // }
      },
      {
        name: "最低额度",
        type: "line",
        data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
        // 圆点的大小
        symbolSize: 8,
        //是否平滑显示
        smooth: true,
        // 线条和圆点的样式
        itemStyle: {
          color: "#dd3c36",
        },
      },
    ],
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);

  //声明一个变量,用来记录索引
  let index = 0; 
  setInterval(function(){
      index++;
      if(index == 4){
        index = 0;
      }
      //重新赋值
      option.series[0].data = data[index][0];
      option.series[1].data = data[index][1];
      //根据新的数据重新加载图表
      myChart.setOption(option);

      //年季月周也要自动切换
      $('.sales .head a').eq(index).addClass('active').siblings('a').removeClass('active');
  },3000);
});

//入口函数-环形图
$(function(){
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.querySelector('.quarter .echarts .loop'));

    // 指定图表的配置项和数据
    let option = {
        series: [{
            name: '销售进度',
            type: 'pie',
            //起始的角度
            startAngle: 180,
            radius: ['70%', '90%'],
            // 位置
            center: ["50%", "65%"],
            // 是否启用防止标签重叠策略，
            avoidLabelOverlap: false,
            //文本
            label: {
                show: false,
                position: 'left'
            },
            // 高亮的扇区和标签样式
            // emphasis: {
            //     //文本
            //     label: {
            //         show: true,
            //         fontSize: '30',
            //         fontWeight: 'bold'
            //     }
            // },
            //引导线
            // labelLine: {
            //     show: false
            // },
            data: [{
                    value: 1,
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [{
                                    offset: 0,
                                    color: '#0063c2'
                                },
                                {
                                    offset: 1,
                                    color: '#00c3de'
                                }
                            ]
                        )
                    }
                },
                {
                    value: 1,
                    itemStyle: {
                        color: '#d0274d'
                    }
                },
                {
                    value: 2,
                    itemStyle: {
                        color: 'transparent'
                    }
                }
            ]
        }]
    };


    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
});

//入口函数-迁徙图
$(function(){
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.querySelector('.map .echarts .geo'));

    // 指定图表的配置项和数据
    var geoCoordMap = {
        '新疆玛纳斯基地': [86.22, 44.30],
        '九江': [116.00, 29.70],
        '新乡': [116.402217, 35.311657],
        ' ': [79.92, 37.12],
        '  ': [86.85, 47.70],
        '若羌县': [88.17, 39.02],
        '上海': [121.4648, 31.2891],
        '东莞': [113.8953, 22.901],
        '东营': [118.7073, 37.5513],
        '中山': [113.4229, 22.478],
        '临汾': [111.4783, 36.1615],
        '临沂': [118.3118, 35.2936],
        '丹东': [124.541, 40.4242],
        '丽水': [119.5642, 28.1854],
        '乌鲁木齐': [87.9236, 43.5883],
        '佛山': [112.8955, 23.1097],
        '保定': [115.0488, 39.0948],
        '兰州': [103.5901, 36.3043],
        '包头': [110.3467, 41.4899],
        '北京': [116.4551, 40.2539],
        '北海': [109.314, 21.6211],
        '南京': [118.8062, 31.9208],
        '南宁': [108.479, 23.1152],
        '南昌': [116.0046, 28.6633],
        '南通': [121.1023, 32.1625],
        '厦门': [118.1689, 24.6478],
        '台州': [121.1353, 28.6688],
        '合肥': [117.29, 32.0581],
        '呼和浩特': [111.4124, 40.4901],
        '咸阳': [108.4131, 34.8706],
        '哈尔滨': [127.9688, 45.368],
        '唐山': [118.4766, 39.6826],
        '嘉兴': [120.9155, 30.6354],
        '大同': [113.7854, 39.8035],
        '大连': [122.2229, 39.4409],
        '天津': [117.4219, 39.4189],
        '太原': [112.3352, 37.9413],
        '威海': [121.9482, 37.1393],
        '宁波': [121.5967, 29.6466],
        '宝鸡': [107.1826, 34.3433],
        '宿迁': [118.5535, 33.7775],
        '常州': [119.4543, 31.5582],
        '广州': [113.5107, 23.2196],
        '廊坊': [116.521, 39.0509],
        '延安': [109.1052, 36.4252],
        '张家口': [115.1477, 40.8527],
        '徐州': [117.5208, 34.3268],
        '德州': [116.6858, 37.2107],
        '惠州': [114.6204, 23.1647],
        '成都': [103.9526, 30.7617],
        '扬州': [119.4653, 32.8162],
        '承德': [117.5757, 41.4075],
        '拉萨': [91.1865, 30.1465],
        '无锡': [120.3442, 31.5527],
        '日照': [119.2786, 35.5023],
        '昆明': [102.9199, 25.4663],
        '杭州': [119.5313, 29.8773],
        '枣庄': [117.323, 34.8926],
        '柳州': [109.3799, 24.9774],
        '株洲': [113.5327, 27.0319],
        '武汉': [114.3896, 30.6628],
        '汕头': [117.1692, 23.3405],
        '江门': [112.6318, 22.1484],
        '沈阳': [123.1238, 42.1216],
        '沧州': [116.8286, 38.2104],
        '河源': [114.917, 23.9722],
        '泉州': [118.3228, 25.1147],
        '泰安': [117.0264, 36.0516],
        '泰州': [120.0586, 32.5525],
        '济南': [117.1582, 36.8701],
        '济宁': [116.8286, 35.3375],
        '海口': [110.3893, 19.8516],
        '淄博': [118.0371, 36.6064],
        '淮安': [118.927, 33.4039],
        '深圳': [114.5435, 22.5439],
        '清远': [112.9175, 24.3292],
        '温州': [120.498, 27.8119],
        '渭南': [109.7864, 35.0299],
        '湖州': [119.8608, 30.7782],
        '湘潭': [112.5439, 27.7075],
        '滨州': [117.8174, 37.4963],
        '潍坊': [119.0918, 36.524],
        '烟台': [120.7397, 37.5128],
        '玉溪': [101.9312, 23.8898],
        '珠海': [113.7305, 22.1155],
        '盐城': [120.2234, 33.5577],
        '盘锦': [121.9482, 41.0449],
        '石家庄': [114.4995, 38.1006],
        '福州': [119.4543, 25.9222],
        '秦皇岛': [119.2126, 40.0232],
        '绍兴': [120.564, 29.7565],
        '聊城': [115.9167, 36.4032],
        '肇庆': [112.1265, 23.5822],
        '舟山': [122.2559, 30.2234],
        '苏州': [120.6519, 31.3989],
        '莱芜': [117.6526, 36.2714],
        '菏泽': [115.6201, 35.2057],
        '营口': [122.4316, 40.4297],
        '葫芦岛': [120.1575, 40.578],
        '衡水': [115.8838, 37.7161],
        '衢州': [118.6853, 28.8666],
        '西宁': [101.4038, 36.8207],
        '西安': [109.1162, 34.2004],
        '贵阳': [106.6992, 26.7682],
        '连云港': [119.1248, 34.552],
        '邢台': [114.8071, 37.2821],
        '邯郸': [114.4775, 36.535],
        '郑州': [113.4668, 34.6234],
        '鄂尔多斯': [108.9734, 39.2487],
        '重庆': [107.7539, 30.1904],
        '金华': [120.0037, 29.1028],
        '铜川': [109.0393, 35.1947],
        '银川': [106.3586, 38.1775],
        '镇江': [119.4763, 31.9702],
        '长春': [125.8154, 44.2584],
        '长沙': [113.0823, 28.2568],
        '长治': [112.8625, 36.4746],
        '阳泉': [113.4778, 38.0951],
        '青岛': [120.4651, 36.3373],
        '韶关': [113.7964, 24.7028],
        '国旗哥': [90, 30]
    };

    var BJData = [
        [{
            name: '新乡'
        }, {
            name: '新乡',
            value: 200
        }],
        [{
            name: '新乡'
        }, {
            name: '呼和浩特',
            value: 90
        }],
        [{
            name: '新乡'
        }, {
            name: '哈尔滨',
            value: 90
        }],
        [{
            name: '新乡'
        }, {
            name: '石家庄',
            value: 90
        }],
        [{
            name: '新乡'
        }, {
            name: '昆明',
            value: 30
        }],
        [{
            name: '新乡'
        }, {
            name: '北京',
            value: 100
        }],
        [{
            name: '新乡'
        }, {
            name: '长春',
            value: 40
        }],
        [{
            name: '新乡'
        }, {
            name: '重庆',
            value: 40
        }],
        [{
            name: '新乡'
        }, {
            name: '贵阳',
            value: 50
        }],
        [{
            name: '新乡'
        }, {
            name: '南宁',
            value: 30
        }],
        [{
            name: '新乡'
        }, {
            name: '济南',
            value: 10
        }],
        [{
            name: '新乡'
        }, {
            name: '太原',
            value: 40
        }],
        [{
            name: '新乡'
        }, {
            name: '西安',
            value: 60
        }],
        [{
            name: '新乡'
        }, {
            name: '武汉',
            value: 50
        }],
        [{
            name: '新乡'
        }, {
            name: '合肥',
            value: 40
        }],
        [{
            name: '新乡'
        }, {
            name: '南京',
            value: 30
        }],
        [{
            name: '新乡'
        }, {
            name: '沈阳',
            value: 20
        }],
        [{
            name: '新乡'
        }, {
            name: '成都',
            value: 10
        }],
        [{
            name: '新乡'
        }, {
            name: '国旗哥',
            value: 80
        }]
    ];

    var SHData = [
        [{
            name: '九江'
        }, {
            name: '九江',
            value: 200
        }],

        [{
            name: '九江'
        }, {
            name: '长沙',
            value: 95
        }],
        [{
            name: '九江'
        }, {
            name: '武汉',
            value: 30
        }],
        [{
            name: '九江'
        }, {
            name: '南昌',
            value: 20
        }],
        [{
            name: '九江'
        }, {
            name: '合肥',
            value: 70
        }],
        [{
            name: '九江'
        }, {
            name: '南京',
            value: 60
        }],
        [{
            name: '九江'
        }, {
            name: '福州',
            value: 50
        }],
        [{
            name: '九江'
        }, {
            name: '上海',
            value: 100
        }],
        [{
            name: '九江'
        }, {
            name: '深圳',
            value: 100
        }],
        [{
            name: '九江'
        }, {
            name: '国旗哥',
            value: 80
        }],

    ];

    var GZData = [
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '新疆玛纳斯基地',
            value: 200
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '  ',
            value: 90
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: ' ',
            value: 40
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '呼和浩特',
            value: 90
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '昆明',
            value: 40
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '成都',
            value: 10
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '兰州',
            value: 95
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '银川',
            value: 90
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '西宁',
            value: 80
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '国旗哥',
            value: 80
        }],

    ];

    var planePath =
        'path://M.6,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705';

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push([{
                    coord: fromCoord
                }, {
                    coord: toCoord
                }]);
            }
        }
        return res;
    };

    var color = ['#3ed4ff', '#ffa022', '#a6c84c'];
    var series = [];
    [
        ['新乡', BJData],
        ['九江', SHData],
        ['新疆', GZData]
    ].forEach(function (item, i) {
        series.push({
            name: item[0] + ' Top10',
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        }, {
            name: item[0] + ' Top10',
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: planePath,
                symbolSize: 15
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.4,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        }, {
            name: item[0] + ' Top10',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: function (val) {
                return val[2] / 8;
            },
            itemStyle: {
                normal: {
                    color: color[i]
                }
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                };
            })
        });
    });

    option = {
        backgroundColor: '#080a20',
        // title: {
        //     text: '模拟迁徙',
        //     subtext: '数据纯属虚构',
        //     left: 'left',
        //     textStyle: {
        //         color: '#fff'
        //     }
        // },
        tooltip: {
            trigger: 'item'
        },
        // legend: {
        //     orient: 'vertical',
        //     top: 'bottom',
        //     left: 'right',
        //     data: ['北京 Top10', '上海 Top10', '广州 Top10'],
        //     textStyle: {
        //         color: '#fff'
        //     },
        //     selectedMode: 'single'
        // },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#132937',
                    borderColor: '#0692a4'
                },
                emphasis: {
                    areaColor: '#0b1c2d'
                }
            }
        },
        series: series
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
});
