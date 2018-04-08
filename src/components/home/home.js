import React, { PureComponent } from "react";
import { View, FlatList, Image } from "react-native";
import { connect } from "react-redux";
import styles from "./styles";

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

  render() {
    const photos = this.props.photos;
    return (
      <View style={styles.container}>
        <FlatList
          data={Object.values(photos)}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Image
              style={{ width: 400, height: 400 }}
              source={{ uri: item.urls.small }}
            />
          )}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    photos: state.store.photos
  };
}

export default connect(mapStateToProps)(Home);
