# 个人简历展示网站

面向高职院校「广告艺术设计」专业毕业生的个人简历展示静态网站，突出「设计+技术」双维度能力，为求职提供专业的线上展示平台。

## 🛠️ 技术栈

- **前端**：HTML5、CSS3、JavaScript
- **组件库**：Bootstrap 5.x、jQuery、jQuery UI、jQuery Mobile 1.4.5
- **图标**：Bootstrap Icons
- **语言**：中文

## 🚀 快速启动

1. **直接打开**：用浏览器打开根目录下的 `index.html` 即可访问首页。
2. **本地静态服务（推荐）**：若使用 VS Code，可安装 Live Server 插件，右键 `index.html` 选择「Open with Live Server」，避免部分功能因 file 协议受限。
3. 或使用命令行：在根目录执行 `npx serve .`，按终端提示的地址访问（如 http://localhost:3000）。

## 🗃️ 功能介绍

### 核心功能

1. **封面页**
   - 个人职业照与作品轮播（Bootstrap Carousel）、创意标题、姓名与身份
   - 求职岗位、核心技能标签（PS/AI、C4D、Figma、HTML/CSS）
   - 联系方式（电话、邮箱、作品集链接）

2. **个人定位页**
   - 个人简介与职业理念
   - 技术赋能案例（Python、Figma 等）及代码块展示
   - 设计展示视频（HTML5 `<video>`，可选：将 demo.mp4 放入 media/）

3. **技能与工具页**
   - 设计技能：软件熟练度（Photoshop、Illustrator、C4D、Figma）+ 设计能力列表
   - 计算机信息能力：技术工具（HTML/CSS、Python、Excel）+ 技术应用列表
   - 进度条与 Bootstrap Icons 图标

4. **作品与项目页**
   - 三个项目卡片：校园文化节海报、交互式产品宣传页、电商商品详情页
   - 大图 + 项目说明，技术关键词高亮与数据化成果

5. **教育与总结页**
   - 教育背景（院校、专业、核心课程）
   - 求职意愿与期望

### 技术特点

- **纯静态**：无后端、无构建，直接由浏览器或静态服务器提供。
- **响应式**：Bootstrap 栅格 + 媒体查询，支持 PC 与移动端。
- **现代 UI**：统一配色（蓝+橙）、圆角与阴影、hover/点击反馈、Bootstrap Icons 图标。
- **语义化**：HTML5 语义标签，结构清晰，便于维护与替换个人内容。

## 📁 项目结构

```
个人简历展示网站/
├── README.md               # 项目说明文档
├── index.html              # 封面页（首页）
├── positioning.html        # 个人定位页
├── skills.html             # 技能与工具页
├── works.html              # 作品与项目页
├── education.html          # 教育与总结页
├── css/
│   ├── common.css          # 公共样式（设计令牌、导航、通用组件）
│   ├── cover.css           # 封面页样式
│   ├── positioning.css     # 个人定位页样式
│   ├── skills.css          # 技能页样式
│   ├── works.css           # 作品页样式
│   └── education.css       # 教育总结页样式
├── js/
│   ├── common.js           # 公共脚本（导航高亮、Toast、localStorage、表单校验）
│   ├── cover.js            # 封面页：Bootstrap Carousel 轮播
│   ├── education.js        # 教育页：期望到岗日期 Datepicker
│   └── works.js            # 作品页：查看详情 Dialog
├── images/
│   ├── avatar.svg          # 职业照占位（可替换为 avatar.jpg）
│   ├── works/              # 作品配图（project1.jpg 等）
│   └── icons/              # 技能图标（可选，当前使用 Bootstrap Icons）
├── media/                  # 视频/音频资源（HTML5 <video>/<audio> 引用）
│   └── README.txt          # 说明：可放入 demo.mp4 等
└── doc/                    # 需求与设计文档
    ├── 需求说明文档.md
    ├── 开发设计文档.md
    ├── 开发待办清单.md
    ├── 问题修复说明.md     # 六项需求落地问题与修复说明
```


## 📄 许可证

MIT

---

**项目作者**：jiajing(jiajing@163.com)  
**最后更新**：2026-02-13
