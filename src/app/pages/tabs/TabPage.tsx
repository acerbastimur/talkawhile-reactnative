import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import TabBar from './TabBar';
import LearnPage from './Learn Page/LearnPage';

export interface TabPageProps {
}

export default class TabPage extends React.PureComponent<TabPageProps, any> {
  constructor(props: TabPageProps) {
    super(props);
  }

  public render() {
    return (
      <TabBar >
        <TabBar.Item
          icon={require('../../../assets/images/tabs/leaders.png')}
          selectedIcon={require('../../../assets/images/tabs/leaders.png')}
          title="Tab1"
        >
          <View>
            <Text>asdasfd</Text>
          </View>
        </TabBar.Item>
        <TabBar.Item
          icon={require('../../../assets/images/tabs/talk.png')}
          selectedIcon={require('../../../assets/images/tabs/talk.png')}
          title="Tab2"
        >
          <LearnPage />

        </TabBar.Item>
        <TabBar.Item
          icon={require('../../../assets/images/tabs/profile.png')}
          selectedIcon={require('../../../assets/images/tabs/profile.png')}
          title="Tab3"
        >
          <View>
            <Text>umut acer</Text>
          </View>
        </TabBar.Item>
      </TabBar>
    );
  }
}
