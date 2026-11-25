# 当前项目状态

- 项目目的：长期维护用户自己的个人学术主页。
- 远程仓库：https://github.com/leemzmz/leemzmz.github.io
- 本地目录：`/home/leemzmz/VibeCoding/app_homepage`。
- 默认分支：`main`；远程名称：`origin`。
- 初始化日期：2026-11-25。

## 实际功能

- 英文个人学术主页，展示 Mingzhen Li 的个人资料。
- 内容包括研究方向、项目、论文、教育、学术服务、教学与工作经历。
- 使用原生 HTML/CSS/JavaScript，无后端或构建依赖。
- 浏览器加载 `index.html`、样式表、头像及延迟执行的标签页脚本。
- Projects 使用横向标签页，默认显示首个项目；标签过多时横向滚动。
- 项目顺序：Symbolic-Lite、PathWeave、Hello-SPICE。
- PathWeave 链接至其 GitHub 仓库；简介依据仓库 README，概括路径感知图学习与模拟电路宏模型拓扑恢复。
- Symbolic-Lite 项目介绍注明使用 GPDD 作为符号化引擎。
- 支持点击、左右方向键循环切换，以及 Home/End 跳转。
- 禁用 JavaScript 时显示完整项目列表；打印时展示全部项目。
- 样式包含移动端适配与打印规则。
- 仓库含 `.nojekyll`；GitHub Pages 发布设置及线上状态尚未核验。
- 页面页脚目前标注 `Last updated: October 2026`。
- 当前没有自动测试或构建脚本。
- 标签页已通过浏览器轻量检查：点击、键盘、375px 窄屏、10 项目溢出、打印、无脚本降级。
