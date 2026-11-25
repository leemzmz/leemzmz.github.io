// 将项目列表增强为标签页；未加载脚本时仍显示全部项目。
function initializeProjectTabs(container) {
  if (!container || container.querySelector('[role="tablist"]')) return;

  const panels = Array.from(container.children).filter((child) => child.matches('article'));
  if (panels.length === 0 || panels.some((panel) => !panel.id || !panel.querySelector('h3 a'))) return;

  const tabList = document.createElement('div');
  tabList.className = 'project-tabs';
  tabList.setAttribute('role', 'tablist');
  tabList.setAttribute('aria-label', 'Projects');

  const tabs = panels.map((panel) => {
    const tab = document.createElement('button');
    tab.type = 'button';
    tab.id = `${panel.id}-tab`;
    tab.className = 'project-tab';
    tab.textContent = panel.querySelector('h3 a').textContent;
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', panel.id);
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', tab.id);
    panel.tabIndex = 0;
    tabList.append(tab);
    return tab;
  });

  // 同步选中状态、面板可见性及键盘焦点入口。
  function _selectTab(index, moveFocus = false) {
    tabs.forEach((tab, tabIndex) => {
      const selected = tabIndex === index;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      panels[tabIndex].hidden = !selected;
    });
    if (moveFocus) {
      tabs[index].focus({ preventScroll: true });
      tabs[index].scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'instant' });
    }
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => _selectTab(index));
    tab.addEventListener('keydown', (event) => {
      let nextIndex;
      switch (event.key) {
        case 'ArrowRight': nextIndex = (index + 1) % tabs.length; break;
        case 'ArrowLeft': nextIndex = (index - 1 + tabs.length) % tabs.length; break;
        case 'Home': nextIndex = 0; break;
        case 'End': nextIndex = tabs.length - 1; break;
        default: return;
      }
      event.preventDefault();
      _selectTab(nextIndex, true);
    });
  });

  container.prepend(tabList);
  container.classList.add('has-project-tabs');
  _selectTab(0);
}

document.querySelectorAll('[data-project-tabs]').forEach(initializeProjectTabs);
