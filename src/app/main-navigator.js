import { StackNavigator } from "react-navigation";
import Home from "~/src/components/home/home";
import { useNavigationParamsAsProps } from "./helpers";

const headerStyle = {
  headerStyle: {
    backgroundColor: "#fff"
  },
  headerTintColor: "#daa204f0",
  headerTitleStyle: {
    fontWeight: "bold",
    color: "black"
  },
  headerBackTitleStyle: {
    color: "black"
  }
};

const MainStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        ...headerStyle,
        title: "Home"
      }
    }
  },
  {
    cardStyle: {
      backgroundColor: "#f1f1f1"
    }
  }
);

export default MainStack;
