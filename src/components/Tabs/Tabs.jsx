export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const effectiveActiveId =
    tabs.find(tab => tab.id === activeTabId)?.id || tabs[0].id;

  const activeTab = tabs.find(tab => tab.id === effectiveActiveId);

  return (
    <div data-cy="TabsComponent">
      <ul className="tabs is-boxed">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={effectiveActiveId === tab.id ? 'is-active' : ''}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={e => {
                e.preventDefault();
                if (tab.id !== effectiveActiveId) {
                  onTabSelected(tab.id);
                }
              }}
              role="tab"
              aria-selected={effectiveActiveId === tab.id}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="block" data-cy="TabContent">
        {activeTab?.content}
      </div>
    </div>
  );
};
