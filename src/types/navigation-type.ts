import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type AppRoutes = {
  Authentication: undefined;
  Home: undefined;
};

export type AuthenticationRoutes = {
  Login: undefined;
};

export interface AuthNavigationProps<
  RouteName extends keyof AuthenticationRoutes
> {
  navigation: StackNavigationProp<AuthenticationRoutes, RouteName>;
  route: RouteProp<AuthenticationRoutes, RouteName>;
}
