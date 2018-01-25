var homeMenu = [
    {
        type: 'home',
        name: '首页',                //名称
        url: 'html/home.html',      //路径
        icon: 'fa-home' ,      //图标样式
        children: []                //子目录
    },
    {
        name: '组织机构',
        icon: 'fa-sitemap',
        children: [
            {name: '机构设置',url: 'html/jgsz.html'},
            {name: '数据统计',url: 'html/sjtj.html'}
        ]
    },
    {
        name: '党员发展',
        icon: 'fa-users',
        children: [
            {name: '入党积极分子',url: 'html/rdjjfz.html'},
            {name: '发展对象信息',url: 'html/debug.html'},
            {name: '预备党员管理',url: 'html/debug.html'},
            {name: '预备转正党员管理',url: 'html/debug.html'}
        ]
    },
    {
        name: '党员管理',
        icon: 'fa-th',
        children: [
            {name: '党员登记管理',url: 'html/debug.html'},
            {name: '流动党员管理',url: 'html/fzdxxx.html'},
            {name: '党员注销管理',url: 'html/ybdygl.html'},
            {name: '党费收缴管理',url: 'html/ybzzdygl.html'},
            {name: '党员评议管理',url: 'html/ybzzdygl.html'}
        ]
    },
    {
        name: '党员服务',
        icon: 'fa-tasks',
        url: 'html/ybzzdygl.html'
    },
    {
        name: '党员活动',
        icon: 'fa-th-large',
        children: [
            {name: '活动开展',url: 'html/rdjjfz.html'},
            {name: '活动情况统计',url: 'html/fzdxxx.html'}
        ]
    },
    {
        name: '居民议事',
        icon: 'fa-bar-chart-o',
        children: [
            {name: '议题受理情况',url: 'html/rdjjfz.html'},
            {name: '议题审查情况',url: 'html/fzdxxx.html'},
            {name: '会议公告信息',url: 'html/fzdxxx.html'},
            {name: '会议通知信息',url: 'html/fzdxxx.html'},
            {name: '表决决议公告',url: 'html/fzdxxx.html'},
            {name: '实施结果公告',url: 'html/fzdxxx.html'},
            {name: '实施结果季度公告',url: 'html/fzdxxx.html'},
        ]
    }
];