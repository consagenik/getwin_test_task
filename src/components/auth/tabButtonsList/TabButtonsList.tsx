import { Tabs } from 'antd';

import './TabButtonsList.less';
import { ReactNode } from "react";
import { useWindowSize } from '../../../hooks';

interface TabButtonsListProps {
  tabButtons: {key: string, label: string, children: ReactNode}[];
}

export default function TabButtonsList({
  tabButtons,
}: TabButtonsListProps) {
  const isDesktop = useWindowSize("(max-width: 1366px)");
  const isLaptop = useWindowSize("(max-width: 1024px)");
  const isTablet = useWindowSize("(max-width: 768px)");
  const isMobile = useWindowSize("(max-width: 500px)");

  function getTabBarStyles() {
    if (isMobile) {
      return {
        marginBottom: 24,
      };
    } else if (isTablet) {
      return {
        marginBottom: 32,
      };
    } else if (isLaptop) {
      return {
        marginBottom: 40,
      };
    } else if (isDesktop) {
      return {
        marginBottom: 48,
      };
    }
  }

  return (
    <Tabs
      items={tabButtons}
      defaultActiveKey="2"
      tabBarGutter={12}
      tabBarStyle={getTabBarStyles()}
    />
  );
}
  