import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import TabBar from './TabBar';

export interface TabPageProps {
}

export default class TabPage extends React.PureComponent<TabPageProps, any> {
  constructor(props: TabPageProps) {
    super(props);
  }

  public render() {
    return (
      <TabBar>
        <TabBar.Item
          icon={require('../../../assets/images/tabs/leaders.png')}
          selectedIcon={require('../../../assets/images/tabs/leaders.png')}
          title="Tab1"
          screenBackgroundColor={{ backgroundColor: '#008080' }}
        >
          <View>
            <Text>asdasfd</Text>
          </View>
        </TabBar.Item>
        <TabBar.Item
          icon={require('../../../assets/images/tabs/talk.png')}
          selectedIcon={require('../../../assets/images/tabs/talk.png')}
          title="Tab2"
          screenBackgroundColor={{ backgroundColor: '#F08080' }}
        >
          <View>
            <Text>123412341234123</Text>
          </View>
        </TabBar.Item>
        <TabBar.Item
          icon={require('../../../assets/images/tabs/profile.png')}
          selectedIcon={require('../../../assets/images/tabs/profile.png')}
          title="Tab3"
          screenBackgroundColor={{ backgroundColor: '#485d72' }}
        >
          <View>
            <Text>umut acer</Text>
          </View>
        </TabBar.Item>
      </TabBar>
    );
  }
}
