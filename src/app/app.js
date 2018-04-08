import { NavigationActions } from "react-navigation";
import { get_photos } from "~/src/redux/actions/store";

export default class App {
  static setMainNav(mainNav) {
    App.mainNav = mainNav;
  }

  static redux(redux) {
    App.redux = redux;
  }

  static navigateTo(params) {
    App.mainNav.dispatch(
      NavigationActions.navigate({
        routeName: params.routeName,
        params: params.props ? params.props : {}
      })
    );
  }

  static downloadData() {
    App.redux.dispatch(get_photos({ resultsPerPages: 10 }));
  }

  static goBack() {
    App.mainNav.dispatch({ type: "Navigation/BACK" });
  }
}
