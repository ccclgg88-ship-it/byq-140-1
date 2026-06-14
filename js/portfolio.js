/**
 * 作品集浏览中心
 * 功能：作品展示、筛选排序、视图切换、详情查看、收藏、对比
 */
(function () {
  'use strict';

  /* ========== 作品数据模型 ========== */
  var WORKS_DATA = [
    {
      id: 'project1',
      title: '校园文化节海报设计',
      type: '广告设计类',
      typeIcon: 'bi-palette-fill',
      tools: ['PS', 'AI', 'C4D'],
      toolsFull: ['Photoshop', 'Illustrator', 'Cinema 4D'],
      keywords: ['海报设计', '创意设计', '3D元素', '校园文化', '视觉传达'],
      cover: 'images/works/project1.jpg',
      images: [
        'images/works/project1.jpg',
        'images/works/project1-cover.jpg'
      ],
      description: '为校园文化节设计系列宣传海报，融合传统元素与现代设计语言，通过C4D添加立体视觉效果增强冲击力。',
      fullDescription: '针对校园文化节「青春·融合·创新」的主题，设计了一套三张系列海报。设计过程中深入分析了目标受众（在校师生）的审美偏好，采用了鲜明的撞色搭配和动态构图。主视觉元素使用C4D建模渲染，营造出强烈的空间感和立体感。',
      process: '需求分析 → 创意构思 → 风格探索 → 软件实现（PS/AI绘制）→ C4D添加3D元素 → 多轮优化 → 成品输出',
      outcome: '获学院「最佳创意奖」，印刷量 500 份，覆盖全校三个校区，活动参与率提升 30%',
      outcomeValue: '500份',
      outcomeLabel: '印刷量',
      date: '2024-11',
      relatedSkills: ['平面设计', '海报设计', '品牌视觉'],
      featured: true,
      isHomeCarousel: true,
      originalPage: 'works.html#project1',
      masonryHeight: 32
    },
    {
      id: 'project2',
      title: '交互式产品宣传页设计',
      type: '技术赋能设计类',
      typeIcon: 'bi-code-slash',
      tools: ['Figma', 'HTML/CSS', 'JavaScript'],
      toolsFull: ['Figma', 'HTML5', 'CSS3', 'JavaScript'],
      keywords: ['交互设计', '网页设计', '产品宣传', '用户体验', '动效设计'],
      cover: 'images/works/project2.jpg',
      images: [
        'images/works/project2.jpg',
        'images/works/project2-cover.jpg'
      ],
      description: '为科技产品设计交互式宣传页面，将设计稿直接转化为可交互的HTML页面，让客户提前体验最终效果。',
      fullDescription: '采用「设计即开发」的工作流，在Figma中完成高保真原型后，直接使用HTML/CSS/JavaScript实现可交互的宣传页面。页面包含滚动动画、悬停效果、平滑过渡等丰富交互，大幅提升了设计方案的说服力。',
      process: '产品调研 → 用户画像分析 → Figma原型设计 → 交互评审 → HTML/CSS静态实现 → JavaScript交互动效 → 性能优化 → 上线部署',
      outcome: '页面访问量 1000+，客户反馈「交互体验提升设计说服力」，项目转化率提升 25%',
      outcomeValue: '1000+',
      outcomeLabel: '访问量',
      date: '2024-09',
      relatedSkills: ['UI设计', '网页设计'],
      featured: true,
      isHomeCarousel: true,
      originalPage: 'works.html#project2',
      masonryHeight: 36
    },
    {
      id: 'project3',
      title: '电商平台商品详情页设计',
      type: '跨专业合作类',
      typeIcon: 'bi-people-fill',
      tools: ['Figma', 'PS'],
      toolsFull: ['Figma', 'Photoshop'],
      keywords: ['电商设计', '详情页', '转化率优化', '协作设计', '视觉规范'],
      cover: 'images/works/project3.jpg',
      images: [
        'images/works/project3.jpg'
      ],
      description: '与计算机专业同学跨专业合作，负责电商平台商品详情页的视觉设计，建立完整的设计交付规范。',
      fullDescription: '作为设计负责人，与3名前端开发同学组成跨专业团队。负责整体视觉风格定义、组件设计、以及完整的设计规范交付。通过模块化的设计系统，大幅提升了开发效率和页面一致性。',
      process: '竞品分析 → 信息架构设计 → 视觉风格探索 → 组件库搭建 → 高保真设计 → 设计规范文档 → 开发协作跟进 → 效果复盘',
      outcome: '页面转化率提升 15%，设计组件复用率达 80%，团队协作效率提升 40%',
      outcomeValue: '15%',
      outcomeLabel: '转化率提升',
      date: '2024-07',
      relatedSkills: ['UI设计', '品牌视觉'],
      featured: true,
      isHomeCarousel: false,
      originalPage: 'works.html#project3',
      masonryHeight: 30
    },
    {
      id: 'project4',
      title: '「青韵」品牌视觉识别系统',
      type: '品牌视觉类',
      typeIcon: 'bi-award-fill',
      tools: ['AI', 'PS'],
      toolsFull: ['Illustrator', 'Photoshop'],
      keywords: ['品牌设计', 'VI系统', 'Logo设计', '视觉规范', '传统元素'],
      cover: 'images/works/project4.svg',
      images: [
        'images/works/project4.svg',
        'images/works/project1.jpg',
        'images/works/project2.jpg'
      ],
      description: '为新中式茶饮品牌「青韵」设计完整的视觉识别系统，包含Logo、色彩规范、应用场景等。',
      fullDescription: '以「东方美学，现代演绎」为设计理念，将传统青瓷纹样与现代极简设计语言融合。完整的VI系统包含基础规范（Logo、色彩、字体、图形元素）和应用规范（包装、菜单、门店物料、社交媒体模板等）共30+项内容。',
      process: '品牌调研 → 核心概念提炼 → Logo方案设计 → 视觉系统搭建 → 应用场景延展 → 规范手册制作 → 交付培训',
      outcome: '品牌已落地开业，VI系统应用覆盖率 100%，客户复购意向度达 85%',
      outcomeValue: '100%',
      outcomeLabel: 'VI应用率',
      date: '2024-05',
      relatedSkills: ['品牌视觉', '平面设计'],
      featured: false,
      isHomeCarousel: false,
      originalPage: 'works.html',
      masonryHeight: 34
    },
    {
      id: 'project5',
      title: '健康管理APP界面设计',
      type: 'UI设计类',
      typeIcon: 'bi-phone-fill',
      tools: ['Figma'],
      toolsFull: ['Figma'],
      keywords: ['APP设计', 'UI/UX', '健康管理', '数据可视化', '交互原型'],
      cover: 'images/works/project5.svg',
      images: [
        'images/works/project5.svg',
        'images/works/project3.jpg'
      ],
      description: '为健康管理类移动应用设计完整的用户界面，包含数据可视化、运动记录、饮食管理等核心功能模块。',
      fullDescription: '针对年轻人群体的健康管理需求，设计了一款轻量、美观、易用的健康管理APP。设计重点在于复杂健康数据的可视化呈现，以及流畅的操作体验。完整设计了30+个核心页面，建立了可复用的UI组件库。',
      process: '用户研究 → 竞品分析 → 信息架构 → 线框图设计 → 视觉风格定义 → 高保真界面 → 交互原型 → 可用性测试 → 设计交付',
      outcome: '通过用户测试，任务完成率达 92%，用户满意度评分 4.8/5，开发中',
      outcomeValue: '92%',
      outcomeLabel: '任务完成率',
      date: '2024-03',
      relatedSkills: ['UI设计'],
      featured: false,
      isHomeCarousel: false,
      originalPage: 'works.html',
      masonryHeight: 38
    },
    {
      id: 'project6',
      title: '春节互动H5页面设计',
      type: 'H5互动类',
      typeIcon: 'bi-phone-landscape',
      tools: ['PS', 'HTML/CSS', 'JavaScript'],
      toolsFull: ['Photoshop', 'HTML5', 'CSS3', 'JavaScript'],
      keywords: ['H5设计', '互动营销', '春节主题', '动画设计', '社交媒体'],
      cover: 'images/works/project6.svg',
      images: [
        'images/works/project6.svg',
        'images/works/project1-cover.jpg',
        'images/works/project2-cover.jpg'
      ],
      description: '为企业春节营销活动设计开发互动H5页面，包含集福卡、抽奖等趣味玩法，在社交媒体传播。',
      fullDescription: '以「新年纳福」为主题，设计了一款具有强分享属性的互动H5。用户可通过摇一摇、滑动等手势互动收集福卡，集齐后可参与抽奖。设计上融合了传统春节元素与现代扁平风格，色彩喜庆而不失高级感。',
      process: '营销目标分析 → 创意概念策划 → 互动流程设计 → 视觉设计 → 动效设计 → 前端开发 → 测试上线 → 数据复盘',
      outcome: '上线7天访问量 50000+，分享率 35%，获客成本降低 40%',
      outcomeValue: '50000+',
      outcomeLabel: '访问量',
      date: '2024-01',
      relatedSkills: ['网页设计', 'UI设计'],
      featured: false,
      isHomeCarousel: false,
      originalPage: 'works.html',
      masonryHeight: 34
    }
  ];

  /* ========== 工具图标映射 ========== */
  var TOOL_ICONS = {
    'PS': 'bi-palette-fill',
    'AI': 'bi-palette-fill',
    'C4D': 'bi-box-fill',
    'Figma': 'bi-grid-3x3-gap-fill',
    'HTML/CSS': 'bi-code-slash',
    'JavaScript': 'bi-braces'
  };

  /* ========== 存储键名 ========== */
  var STORAGE_KEYS = {
    FAVORITES: 'portfolio_favorites',
    COMPARE: 'portfolio_compare',
    VIEW_MODE: 'portfolio_view_mode'
  };

  /* ========== 状态管理 ========== */
  var state = {
    works: WORKS_DATA,
    filteredWorks: WORKS_DATA,
    filters: {
      type: 'all',
      tool: 'all',
      keyword: ''
    },
    sort: 'default',
    viewMode: 'card',
    favorites: [],
    compare: [],
    currentWorkId: null
  };

  /* ========== 工具函数 ========== */
  function getToolIcon(tool) {
    return TOOL_ICONS[tool] || 'bi-tools';
  }

  function loadStorage() {
    if (window.getStorage) {
      state.favorites = window.getStorage(STORAGE_KEYS.FAVORITES) || [];
      state.compare = window.getStorage(STORAGE_KEYS.COMPARE) || [];
      state.viewMode = window.getStorage(STORAGE_KEYS.VIEW_MODE) || 'card';
    }
  }

  function saveStorage() {
    if (window.setStorage) {
      window.setStorage(STORAGE_KEYS.FAVORITES, state.favorites);
      window.setStorage(STORAGE_KEYS.COMPARE, state.compare);
      window.setStorage(STORAGE_KEYS.VIEW_MODE, state.viewMode);
    }
  }

  function isFavorite(workId) {
    return state.favorites.indexOf(workId) !== -1;
  }

  function isInCompare(workId) {
    return state.compare.indexOf(workId) !== -1;
  }

  function toggleFavorite(workId) {
    var index = state.favorites.indexOf(workId);
    if (index === -1) {
      state.favorites.push(workId);
      if (window.showToast) window.showToast('已收藏');
    } else {
      state.favorites.splice(index, 1);
      if (window.showToast) window.showToast('已取消收藏');
    }
    saveStorage();
    updateUI();
  }

  function toggleCompare(workId) {
    var index = state.compare.indexOf(workId);
    if (index === -1) {
      if (state.compare.length >= 2) {
        if (window.showToast) window.showToast('对比栏最多只能添加2个作品');
        return false;
      }
      state.compare.push(workId);
      if (window.showToast) window.showToast('已添加到对比栏');
    } else {
      state.compare.splice(index, 1);
      if (window.showToast) window.showToast('已从对比栏移除');
    }
    saveStorage();
    updateUI();
    return true;
  }

  function clearCompare() {
    state.compare = [];
    saveStorage();
    updateUI();
    if (window.showToast) window.showToast('对比栏已清空');
  }

  function clearFavorites() {
    state.favorites = [];
    saveStorage();
    updateUI();
    if (window.showToast) window.showToast('收藏已清空');
  }

  /* ========== 筛选与排序 ========== */
  function applyFilters() {
    var result = state.works.slice();

    if (state.filters.type !== 'all') {
      result = result.filter(function (work) {
        return work.type === state.filters.type;
      });
    }

    if (state.filters.tool !== 'all') {
      result = result.filter(function (work) {
        return work.tools.indexOf(state.filters.tool) !== -1;
      });
    }

    if (state.filters.keyword) {
      var keyword = state.filters.keyword.toLowerCase();
      result = result.filter(function (work) {
        return (
          work.title.toLowerCase().indexOf(keyword) !== -1 ||
          work.description.toLowerCase().indexOf(keyword) !== -1 ||
          work.keywords.some(function (k) { return k.toLowerCase().indexOf(keyword) !== -1; }) ||
          work.type.toLowerCase().indexOf(keyword) !== -1
        );
      });
    }

    applySort(result);
    state.filteredWorks = result;
  }

  function applySort(works) {
    switch (state.sort) {
      case 'date-desc':
        works.sort(function (a, b) { return b.date.localeCompare(a.date); });
        break;
      case 'date-asc':
        works.sort(function (a, b) { return a.date.localeCompare(b.date); });
        break;
      case 'name-asc':
        works.sort(function (a, b) { return a.title.localeCompare(b.title, 'zh-CN'); });
        break;
      case 'name-desc':
        works.sort(function (a, b) { return b.title.localeCompare(a.title, 'zh-CN'); });
        break;
      default:
        works.sort(function (a, b) {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return b.date.localeCompare(a.date);
        });
    }
  }

  function resetFilters() {
    state.filters = { type: 'all', tool: 'all', keyword: '' };
    state.sort = 'default';

    document.querySelectorAll('#typeFilters .filter-tag').forEach(function (tag) {
      tag.classList.toggle('active', tag.dataset.type === 'all');
    });
    document.querySelectorAll('#toolFilters .filter-tag').forEach(function (tag) {
      tag.classList.toggle('active', tag.dataset.tool === 'all');
    });
    document.getElementById('searchInput').value = '';
    document.getElementById('sortSelect').value = 'default';

    applyFilters();
    renderWorks();
    updateResultInfo();
  }

  /* ========== 渲染函数 ========== */
  function renderWorks() {
    var container = document.getElementById('worksContainer');
    var emptyState = document.getElementById('emptyState');

    if (state.filteredWorks.length === 0) {
      container.innerHTML = '';
      emptyState.style.display = 'block';
      return;
    }

    emptyState.style.display = 'none';
    container.className = 'works-container ' + state.viewMode + '-view';

    container.innerHTML = state.filteredWorks.map(function (work) {
      return renderWorkCard(work);
    }).join('');

    bindCardEvents();
  }

  function renderWorkCard(work) {
    var isFav = isFavorite(work.id);
    var isComp = isInCompare(work.id);

    var toolsHtml = work.tools.map(function (tool) {
      return '<span class="tool-tag"><i class="bi ' + getToolIcon(tool) + '"></i> ' + tool + '</span>';
    }).join('');

    var featuredBadge = work.featured ? '<span class="work-badge"><i class="bi bi-star-fill"></i> 精选</span>' : '';
    var typeBadge = '<span class="work-badge type"><i class="bi ' + work.typeIcon + '"></i> ' + work.type + '</span>';

    var styleAttr = state.viewMode === 'masonry' ? 'style="--row-span: ' + work.masonryHeight + '"' : '';

    return `
      <div class="work-item" data-work-id="${work.id}" ${styleAttr}>
        <div class="work-item-cover">
          <img src="${work.cover}" alt="${work.title}" onerror="if(!this.dataset.fallback){this.dataset.fallback='1';this.src='images/works/placeholder.svg';}">
          <div class="work-item-badges">
            ${featuredBadge}
            ${typeBadge}
          </div>
          <div class="work-item-actions">
            <button class="work-action-btn favorite ${isFav ? 'active' : ''}" data-action="favorite" data-id="${work.id}" title="${isFav ? '取消收藏' : '收藏'}">
              <i class="bi ${isFav ? 'bi-heart-fill' : 'bi-heart'}"></i>
            </button>
            <button class="work-action-btn compare ${isComp ? 'active' : ''}" data-action="compare" data-id="${work.id}" title="${isComp ? '移出对比' : '加入对比'}">
              <i class="bi ${isComp ? 'bi-dash-lg' : 'bi-plus'}"></i>
            </button>
          </div>
        </div>
        <div class="work-item-body">
          <h3 class="work-item-title">${work.title}</h3>
          <div class="work-item-meta">
            <span class="type-tag">${work.type}</span>
            <span>·</span>
            <span>${work.date}</span>
          </div>
          <p class="work-item-desc">${work.description}</p>
          <div class="work-item-tools">
            ${toolsHtml}
          </div>
          <div class="work-item-footer">
            <span class="work-item-outcome">${work.outcomeLabel}：<strong>${work.outcomeValue}</strong></span>
            <button class="btn btn-primary btn-sm" data-action="detail" data-id="${work.id}">
              <i class="bi bi-eye"></i> 详情
            </button>
          </div>
        </div>
      </div>
    `;
  }

  function renderWorkDetail(work) {
    var isFav = isFavorite(work.id);
    var isComp = isInCompare(work.id);

    var carouselItems = work.images.map(function (img, index) {
      var activeClass = index === 0 ? 'active' : '';
      return `
        <div class="carousel-item ${activeClass}">
          <img src="${img}" alt="${work.title} - 图${index + 1}" onerror="if(!this.dataset.fallback){this.dataset.fallback='1';this.src='images/works/placeholder.svg';}">
        </div>
      `;
    }).join('');

    var carouselIndicators = work.images.length > 1 ? work.images.map(function (_, index) {
      var activeClass = index === 0 ? 'class="active"' : '';
      return `<button type="button" data-bs-target="#detailCarousel" data-bs-slide-to="${index}" ${activeClass} aria-label="图${index + 1}"></button>`;
    }).join('') : '';

    var carouselControls = work.images.length > 1 ? `
      <button class="carousel-control-prev" type="button" data-bs-target="#detailCarousel" data-bs-slide="prev" aria-label="上一张">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#detailCarousel" data-bs-slide="next" aria-label="下一张">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    ` : '';

    var keywordsHtml = work.keywords.map(function (kw) {
      return '<span class="keyword-tag">' + kw + '</span>';
    }).join('');

    var toolsHtml = work.toolsFull.map(function (tool) {
      return '<span class="tool-tag">' + tool + '</span>';
    }).join('');

    var relatedSkillsHtml = work.relatedSkills.map(function (skill) {
      return '<a href="skills.html" class="btn btn-outline-primary btn-sm"><i class="bi bi-arrow-up-right-square"></i> 查看『' + skill + '』技能</a>';
    }).join('');

    var homeLink = work.isHomeCarousel ? '<a href="index.html" class="btn btn-outline-primary btn-sm"><i class="bi bi-house"></i> 首页轮播中的作品</a>' : '';
    var worksLink = '<a href="' + work.originalPage + '" class="btn btn-outline-primary btn-sm"><i class="bi bi-arrow-up-right-square"></i> 查看原作品页</a>';

    return `
      <div class="work-detail-gallery">
        <div id="detailCarousel" class="carousel slide work-detail-carousel" data-bs-ride="carousel" data-bs-interval="false">
          <div class="carousel-indicators">
            ${carouselIndicators}
          </div>
          <div class="carousel-inner">
            ${carouselItems}
          </div>
          ${carouselControls}
        </div>
      </div>

      <div class="work-detail-header">
        <h2 class="work-detail-title">${work.title}</h2>
        <div class="work-detail-meta">
          <span class="meta-item"><i class="bi ${work.typeIcon}"></i> ${work.type}</span>
          <span class="meta-item"><i class="bi bi-calendar3"></i> ${work.date}</span>
          <span class="meta-item"><i class="bi bi-trophy"></i> ${work.outcomeLabel}：${work.outcomeValue}</span>
        </div>
        <div class="work-detail-keywords">
          ${keywordsHtml}
        </div>
      </div>

      <div class="work-detail-section">
        <h4><i class="bi bi-file-text"></i> 项目简介</h4>
        <p>${work.fullDescription}</p>
      </div>

      <div class="work-detail-section">
        <h4><i class="bi bi-list-check"></i> 设计流程</h4>
        <p>${work.process}</p>
      </div>

      <div class="work-detail-section">
        <h4><i class="bi bi-tools"></i> 使用工具</h4>
        <div class="work-detail-tools">
          ${toolsHtml}
        </div>
      </div>

      <div class="work-detail-outcome">
        <p><i class="bi bi-award"></i> <strong>设计成果：</strong>${work.outcome}</p>
      </div>

      <div class="work-detail-links">
        ${homeLink}
        ${worksLink}
        ${relatedSkillsHtml}
      </div>
    `;
  }

  function renderComparePanel() {
    var body = document.getElementById('compareBody');

    if (state.compare.length === 0) {
      body.innerHTML = `
        <div class="compare-empty">
          <i class="bi bi-arrow-left-right"></i>
          <h3>对比栏为空</h3>
          <p>请先选择最多2个作品添加到对比栏</p>
        </div>
      `;
      return;
    }

    var compareItems = state.compare.map(function (workId) {
      var work = WORKS_DATA.find(function (w) { return w.id === workId; });
      if (!work) return '';

      var toolsHtml = work.toolsFull.map(function (tool) {
        return '<span class="tool-tag">' + tool + '</span>';
      }).join('');

      var keywordsHtml = work.keywords.map(function (kw) {
        return '<span class="keyword-tag">' + kw + '</span>';
      }).join('');

      return `
        <div class="compare-item">
          <div class="compare-item-header">
            <h4>${work.title}</h4>
            <p><i class="bi ${work.typeIcon}"></i> ${work.type}</p>
          </div>
          <div class="compare-item-image">
            <img src="${work.cover}" alt="${work.title}" onerror="if(!this.dataset.fallback){this.dataset.fallback='1';this.src='images/works/placeholder.svg';}">
          </div>
          <div class="compare-item-body">
            <div class="compare-section">
              <h5>完成时间</h5>
              <p class="value">${work.date}</p>
            </div>
            <div class="compare-section">
              <h5>项目简介</h5>
              <p>${work.description}</p>
            </div>
            <div class="compare-section">
              <h5>使用工具</h5>
              <div class="tools-list">${toolsHtml}</div>
            </div>
            <div class="compare-section">
              <h5>关键词</h5>
              <div class="tools-list">${keywordsHtml}</div>
            </div>
            <div class="compare-section">
              <h5>设计成果</h5>
              <p class="value">${work.outcome}</p>
            </div>
            <div class="compare-section">
              <h5>相关技能</h5>
              <p class="value">${work.relatedSkills.join('、')}</p>
            </div>
          </div>
        </div>
      `;
    }).join('');

    body.innerHTML = '<div class="compare-container">' + compareItems + '</div>';
  }

  function renderFavoritesList() {
    var body = document.getElementById('favoritesBody');

    if (state.favorites.length === 0) {
      body.innerHTML = `
        <div class="favorites-empty">
          <i class="bi bi-heart"></i>
          <h3>还没有收藏的作品</h3>
          <p>点击作品卡片上的爱心图标收藏喜欢的作品</p>
        </div>
      `;
      return;
    }

    var items = state.favorites.map(function (workId) {
      var work = WORKS_DATA.find(function (w) { return w.id === workId; });
      if (!work) return '';

      return `
        <div class="favorite-item" data-work-id="${work.id}">
          <div class="favorite-item-thumb">
            <img src="${work.cover}" alt="${work.title}" onerror="if(!this.dataset.fallback){this.dataset.fallback='1';this.src='images/works/placeholder.svg';}">
          </div>
          <div class="favorite-item-body">
            <h5>${work.title}</h5>
            <p><span class="type-tag">${work.type}</span> · ${work.date} · ${work.outcomeLabel}：${work.outcomeValue}</p>
            <div class="work-item-tools">
              ${work.tools.map(function (tool) {
                return '<span class="tool-tag"><i class="bi ' + getToolIcon(tool) + '"></i> ' + tool + '</span>';
              }).join('')}
            </div>
          </div>
          <div class="favorite-item-actions">
            <button class="btn btn-primary btn-sm" data-action="detail" data-id="${work.id}">
              <i class="bi bi-eye"></i>
            </button>
            <button class="btn btn-outline-accent btn-sm" data-action="compare" data-id="${work.id}" title="${isInCompare(work.id) ? '移出对比' : '加入对比'}">
              <i class="bi ${isInCompare(work.id) ? 'bi-dash-lg' : 'bi-plus'}"></i>
            </button>
            <button class="btn btn-outline-secondary btn-sm" data-action="remove-favorite" data-id="${work.id}" title="取消收藏">
              <i class="bi bi-trash"></i>
            </button>
          </div>
        </div>
      `;
    }).join('');

    body.innerHTML = '<div class="favorites-list">' + items + '</div>';

    body.querySelectorAll('[data-action]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var action = btn.dataset.action;
        var id = btn.dataset.id;

        if (action === 'detail') {
          openWorkDetail(id);
        } else if (action === 'compare') {
          toggleCompare(id);
          renderFavoritesList();
        } else if (action === 'remove-favorite') {
          toggleFavorite(id);
          renderFavoritesList();
        }
      });
    });
  }

  function renderCompareBar() {
    var bar = document.getElementById('compareBar');
    var itemsContainer = document.getElementById('compareBarItems');

    if (state.compare.length > 0) {
      bar.classList.add('visible');
    } else {
      bar.classList.remove('visible');
    }

    var items = state.compare.map(function (workId) {
      var work = WORKS_DATA.find(function (w) { return w.id === workId; });
      if (!work) return '';
      return `
        <div class="compare-bar-item">
          <div class="compare-bar-item-thumb">
            <img src="${work.cover}" alt="${work.title}" onerror="if(!this.dataset.fallback){this.dataset.fallback='1';this.src='images/works/placeholder.svg';}">
          </div>
          <span class="compare-bar-item-name">${work.title}</span>
          <button class="compare-bar-item-remove" data-action="remove-compare" data-id="${work.id}" aria-label="移除">
            <i class="bi bi-x"></i>
          </button>
        </div>
      `;
    }).join('');

    while (state.compare.length < 2) {
      items += '<div class="compare-bar-placeholder"><i class="bi bi-plus"></i> 添加作品</div>';
      if (state.compare.length === 0) break;
    }

    itemsContainer.innerHTML = items;

    itemsContainer.querySelectorAll('[data-action="remove-compare"]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleCompare(btn.dataset.id);
      });
    });

    document.getElementById('compareBarCount').textContent = state.compare.length;
    document.getElementById('compareBtnCount').textContent = state.compare.length;
    document.getElementById('compareCount').textContent = state.compare.length;
    document.getElementById('compareBarBtn').disabled = state.compare.length < 2;
  }

  /* ========== 事件绑定 ========== */
  function bindCardEvents() {
    document.querySelectorAll('.work-item [data-action]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var action = btn.dataset.action;
        var id = btn.dataset.id;

        if (action === 'favorite') {
          toggleFavorite(id);
        } else if (action === 'compare') {
          toggleCompare(id);
        } else if (action === 'detail') {
          openWorkDetail(id);
        }
      });
    });

    document.querySelectorAll('.work-item-cover').forEach(function (cover) {
      cover.addEventListener('click', function () {
        var item = cover.closest('.work-item');
        if (item) {
          openWorkDetail(item.dataset.workId);
        }
      });
    });
  }

  function bindFilterEvents() {
    document.querySelectorAll('#typeFilters .filter-tag').forEach(function (tag) {
      tag.addEventListener('click', function () {
        document.querySelectorAll('#typeFilters .filter-tag').forEach(function (t) {
          t.classList.remove('active');
        });
        tag.classList.add('active');
        state.filters.type = tag.dataset.type;
        applyFilters();
        renderWorks();
        updateResultInfo();
      });
    });

    document.querySelectorAll('#toolFilters .filter-tag').forEach(function (tag) {
      tag.addEventListener('click', function () {
        document.querySelectorAll('#toolFilters .filter-tag').forEach(function (t) {
          t.classList.remove('active');
        });
        tag.classList.add('active');
        state.filters.tool = tag.dataset.tool;
        applyFilters();
        renderWorks();
        updateResultInfo();
      });
    });

    var searchInput = document.getElementById('searchInput');
    var searchTimeout;
    searchInput.addEventListener('input', function () {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(function () {
        state.filters.keyword = searchInput.value.trim();
        applyFilters();
        renderWorks();
        updateResultInfo();
      }, 300);
    });

    document.getElementById('sortSelect').addEventListener('change', function (e) {
      state.sort = e.target.value;
      applyFilters();
      renderWorks();
    });

    document.getElementById('resetFilters').addEventListener('click', resetFilters);
    document.getElementById('emptyResetBtn').addEventListener('click', resetFilters);
  }

  function bindViewToggleEvents() {
    document.querySelectorAll('.view-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        document.querySelectorAll('.view-btn').forEach(function (b) {
          b.classList.remove('active');
        });
        btn.classList.add('active');
        state.viewMode = btn.dataset.view;
        saveStorage();
        renderWorks();
      });
    });
  }

  function bindModalEvents() {
    document.getElementById('modalFavoriteBtn').addEventListener('click', function () {
      if (state.currentWorkId) {
        toggleFavorite(state.currentWorkId);
        updateModalButtons();
      }
    });

    document.getElementById('modalCompareBtn').addEventListener('click', function () {
      if (state.currentWorkId) {
        toggleCompare(state.currentWorkId);
        updateModalButtons();
      }
    });

    document.getElementById('showCompareBtn').addEventListener('click', function () {
      renderComparePanel();
      var modal = new bootstrap.Modal(document.getElementById('compareModal'));
      modal.show();
    });

    document.getElementById('compareBarBtn').addEventListener('click', function () {
      renderComparePanel();
      var modal = new bootstrap.Modal(document.getElementById('compareModal'));
      modal.show();
    });

    document.getElementById('compareBarClearBtn').addEventListener('click', clearCompare);
    document.getElementById('clearCompareBtn').addEventListener('click', function () {
      clearCompare();
      renderComparePanel();
    });

    document.getElementById('showFavoritesBtn').addEventListener('click', function () {
      renderFavoritesList();
      var modal = new bootstrap.Modal(document.getElementById('favoritesModal'));
      modal.show();
    });

    document.getElementById('clearFavoritesBtn').addEventListener('click', function () {
      clearFavorites();
      renderFavoritesList();
    });
  }

  /* ========== 详情模态框 ========== */
  function openWorkDetail(workId) {
    var work = WORKS_DATA.find(function (w) { return w.id === workId; });
    if (!work) return;

    state.currentWorkId = workId;

    var modalBody = document.getElementById('workDetailBody');
    var modalTitle = document.getElementById('workDetailModalLabel');

    modalTitle.textContent = work.title;
    modalBody.innerHTML = renderWorkDetail(work);

    updateModalButtons();

    var modal = new bootstrap.Modal(document.getElementById('workDetailModal'));
    modal.show();

    var carouselEl = document.getElementById('detailCarousel');
    if (carouselEl && work.images.length > 1) {
      new bootstrap.Carousel(carouselEl, {
        interval: false,
        wrap: true
      });
    }
  }

  function updateModalButtons() {
    if (!state.currentWorkId) return;

    var isFav = isFavorite(state.currentWorkId);
    var isComp = isInCompare(state.currentWorkId);

    var favBtn = document.getElementById('modalFavoriteBtn');
    var compBtn = document.getElementById('modalCompareBtn');

    favBtn.innerHTML = '<i class="bi ' + (isFav ? 'bi-heart-fill' : 'bi-heart') + '"></i> ' + (isFav ? '已收藏' : '收藏');
    if (isFav) {
      favBtn.classList.add('btn-primary');
      favBtn.classList.remove('btn-outline-primary');
    } else {
      favBtn.classList.remove('btn-primary');
      favBtn.classList.add('btn-outline-primary');
    }

    compBtn.innerHTML = '<i class="bi ' + (isComp ? 'bi-dash-lg' : 'bi-plus') + '"></i> ' + (isComp ? '移出对比' : '加入对比');
    if (isComp) {
      compBtn.classList.add('btn-accent');
      compBtn.classList.remove('btn-outline-accent');
    } else {
      compBtn.classList.remove('btn-accent');
      compBtn.classList.add('btn-outline-accent');
    }
  }

  /* ========== UI更新 ========== */
  function updateUI() {
    document.getElementById('favCount').textContent = state.favorites.length;
    document.getElementById('compareCount').textContent = state.compare.length;
    renderCompareBar();

    document.querySelectorAll('.work-item').forEach(function (item) {
      var id = item.dataset.workId;
      var favBtn = item.querySelector('[data-action="favorite"]');
      var compBtn = item.querySelector('[data-action="compare"]');

      if (favBtn) {
        var isFav = isFavorite(id);
        favBtn.classList.toggle('active', isFav);
        favBtn.innerHTML = '<i class="bi ' + (isFav ? 'bi-heart-fill' : 'bi-heart') + '"></i>';
      }

      if (compBtn) {
        var isComp = isInCompare(id);
        compBtn.classList.toggle('active', isComp);
        compBtn.innerHTML = '<i class="bi ' + (isComp ? 'bi-dash-lg' : 'bi-plus') + '"></i>';
      }
    });
  }

  function updateResultInfo() {
    document.getElementById('resultInfo').textContent = '显示 ' + state.filteredWorks.length + ' 个作品';
  }

  /* ========== URL 参数处理 ========== */
  function handleUrlParams() {
    var params = new URLSearchParams(window.location.search);
    var workId = params.get('work');
    var type = params.get('type');
    var tool = params.get('tool');

    if (type) {
      var typeTag = document.querySelector('#typeFilters [data-type="' + type + '"]');
      if (typeTag) typeTag.click();
    }

    if (tool) {
      var toolTag = document.querySelector('#toolFilters [data-tool="' + tool + '"]');
      if (toolTag) toolTag.click();
    }

    if (workId) {
      setTimeout(function () {
        openWorkDetail(workId);
      }, 500);
    }
  }

  /* ========== 初始化 ========== */
  function init() {
    loadStorage();

    document.getElementById('totalCount').textContent = WORKS_DATA.length;

    document.querySelectorAll('.view-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.view === state.viewMode);
    });

    bindFilterEvents();
    bindViewToggleEvents();
    bindModalEvents();

    applyFilters();
    renderWorks();
    updateResultInfo();
    updateUI();

    handleUrlParams();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
