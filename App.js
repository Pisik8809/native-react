import React from 'react';
import { Button, View, Text, SectionList } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import Fetch from 'react-native-fetch';
import Unsplash from 'unsplash-js/native';

const unsplash = new Unsplash({
  applicationId: "{32638}",
  secret: "{46464d17b8a5168597f97ee917077b16b7afd52beef8efd9851e9177dc461b1e}",
  callbackUrl: "{urn:ietf:wg:oauth:2.0:oob}"
});
console.log(unsplash);
  const listData = {
    data: []
  };
  
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red'}}>
        <Text style={{color: 'green', fontSize: 30}}>Home Screen</Text>
        <Fetch
          url="https://randomuser.me/api?results=10"
          retries={3}
          timeout={3000}
          onResponse={async (res) => {
            const json = await res.json();
            //listData.data[0] = json.id;
            //console.log(json);
          }}
          onError={console.error}
        />
        <SectionList
            renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
            renderSectionHeader={({section: {title}}) => (
              <Text style={{fontWeight: 'bold'}}>{title}</Text>
            )}
            sections={[
              {title: 'Title1', data: ['item111', 'item2']},
              {title: 'Title2', data: ['item3', 'item4']},
              {title: 'Title3', data: ['item5', 'item6']},
            ]}
            keyExtractor={(item, index) => item + index}
          />
        <Button 
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

/*
<Fetch
          url="https://jsonplaceholder.typicode.com/posts/1"
          retries={3}
          timeout={3000}
          onResponse={async (res) => {
            const json = await res.json();
            //listData.data[0] = json.id;
            console.log(json);
          }}
          onError={console.error}
        />
  state = {
    data: []
  };

  componentWillMount() = {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch('https://randomuser.me/api?results=10');
    const json = response.json();
    this.setState({data: json.results});
  };

FlatList
<FlatList
          data={this.state.data}
          keyExtractor={(x, i) => i}
          renderItem={({ item }) =>
          <Text>
          {`${item.name.first} ${item.name.last}`}
          </Text>}
          />     


 

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => LotsOfStyles);
*/