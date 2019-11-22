import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

export default class extends React.Component {
  getLoaction = async () => {
    const location = await Location.getCurrentPositionAsync();
    console.log(location);
  };

  componentDidMount() {
    this.getLoaction();
  }
  render() {
    return <Loading />;
  }
}
