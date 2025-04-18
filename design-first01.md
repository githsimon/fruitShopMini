---

### **微信小程序“红红果园”首页UI与交互详细设计**

---

#### **一、首页整体布局与视觉设计**
1. **页面结构**  
   - **顶部导航栏**（固定高度：120rpx）  
     - **左侧Logo**：显示“水果商城”文字+水果图标（尺寸：80rpx×80rpx），点击可返回首页。  
     - **搜索框**（占位符“搜索新鲜水果…”）：圆角矩形（背景色：#F5F5F5），右侧带“搜索”图标，点击跳转搜索页。  
     - **消息通知图标**：右上角铃铛图标（未读消息显示红点），点击跳转消息中心。  
   - **Banner轮播图**（高度：360rpx）  
     - 全屏宽度，自动轮播（间隔3秒），支持手动滑动切换，底部指示点显示当前页数。  
     - 点击Banner跳转对应活动页或商品详情页（需后台配置链接）。  
   - **公告跑马灯**（高度：80rpx）  
     - 左侧“公告”图标+滚动文字（字体颜色：#FF6B6B），滚动速度每秒15字符。  
     - 点击展开弹窗显示完整公告内容（弹窗高度60%，支持滑动查看）。  
   - **分类入口**（宫格布局，4列×2行）  
     - 图标（尺寸：64rpx×64rpx）+文字标签（字体：28rpx），点击跳转对应分类商品列表。  
     - 默认分类：时令水果、折扣专区、拼团抢购、会员特惠。  
   - **商品推荐区块**  
     - **标题栏**：左侧“热销推荐”+右侧“查看更多”，点击查看更多跳转热销列表。  
     - **瀑布流布局**：两列商品卡片（间距：20rpx），每张卡片包含：  
       - 商品主图（比例1:1，圆角8rpx）  
       - 商品名称（单行省略，字体：28rpx）  
       - 价格标签（原价划掉显示灰色，折扣价红色加粗）  
       - 促销角标（如“限时5折”“拼团中”）。  

2. **视觉规范**  
   - **主色调**：  
     - 主题色：#FF6B6B（用于按钮、角标、价格）  
     - 辅助色：#8BC34A（分类图标、背景点缀）  
   - **字体**：  
     - 标题：32rpx，加粗  
     - 正文：28rpx  
     - 辅助文字：24rpx，颜色：#999  

---

#### **二、核心交互细节**
1. **页面初始化加载**  
   - 首次进入时显示骨架屏（灰色占位图），数据加载完成后渐显。  
   - 自动弹出“新人礼包”弹窗（延迟1秒），支持手动关闭（点击蒙层或右上角×）。  

2. **下拉刷新**  
   - 下拉触发区域：页面顶部（阈值80rpx）。  
   - 动效：显示“下拉刷新”提示→释放后转菊花加载动画→刷新完成顶部Toast提示“已更新”。  

3. **上拉加载更多**  
   - 滚动至底部（距离底部50rpx）时自动加载新商品。  
   - 加载状态显示“正在加载…”→加载完成显示“已加载全部商品”（仅一次）。  

4. **分类入口交互**  
   - 点击分类图标时轻微放大（缩放1.1倍，持续0.2秒）。  
   - 长按分类图标弹出“快速预览”浮层（显示该分类下Top3商品）。  

5. **商品卡片交互**  
   - **点击跳转**：进入商品详情页，支持滑动返回。  
   - **快速加购**：长按商品卡片弹出“加入购物车”浮层，直接选择规格并确认。  

6. **Banner与公告联动**  
   - 若Banner包含公告关联活动，公告文字颜色高亮（#FF6B6B），点击公告直接跳转对应Banner链接。  

---

#### **三、动效与反馈设计**
1. **Banner轮播动效**  
   - 切换时使用淡入淡出效果（时长0.5秒）。  
   - 手动滑动时跟随手指移动，释放后自动吸附至最近页。  

2. **商品加载动效**  
   - 新商品卡片从底部渐显（透明度0→1，时长0.3秒）。  

3. **操作反馈**  
   - **按钮点击**：轻微缩放（0.95倍） + 背景色加深（如主题色从#FF6B6B→#FF4757）。  
   - **成功提示**：底部Toast（如“已加入购物车！”），2秒后自动消失。  
   - **错误提示**：红色Toast（如“网络异常，请重试”），带感叹号图标。  

---

#### **四、适配与性能优化**
1. **多设备适配**  
   - 使用rpx单位，确保各屏幕比例一致。  
   - 商品瀑布流布局动态计算列宽（根据屏幕宽度-间距）。  

2. **图片优化**  
   - Banner图压缩至WebP格式，单张不超过200KB。  
   - 商品图懒加载：未进入可视区域时显示占位图。  

3. **接口缓存策略**  
   - 首页数据缓存5分钟，用户主动刷新时强制更新。  

---

#### **五、异常场景处理**
1. **网络中断**  
   - 显示全局遮罩层：“网络连接失败，点击重试”。  
   - 点击遮罩层重新调用接口。  

2. **数据为空**  
   - 商品列表为空时显示插画+文案（如“暂无商品，去看看其他分类吧”）。  

---

### **执行步骤**
1. **UI定稿**：确认首页视觉设计稿（Sketch/Figma）。  
2. **组件开发**：封装Banner轮播、商品卡片、分类入口等公共组件。  
3. **交互联调**：实现下拉刷新、上拉加载、动效衔接。  
4. **性能测试**：使用微信开发者工具检查FPS和内存占用。  
5. **用户测试**：邀请5-10名用户进行首页操作体验，收集反馈优化细节。  

通过以上设计，首页将具备清晰的视觉层次、流畅的交互体验，并兼顾性能与稳定性，为后续功能迭代奠定基础。