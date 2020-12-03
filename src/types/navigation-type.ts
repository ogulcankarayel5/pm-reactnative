import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type AppRoutes = {
    Authentication: undefined;
    Home: undefined;
};

export type AuthenticationRoutes = {
    Login: undefined;
    SignUp: undefined;
    ForgotPassword: undefined;
};

export type HomeRoutes = {
    Vault: undefined;
    Add: undefined;
    Password: undefined;
};

export type VaultRoutes = {
    Vault: undefined;
    Deneme2: undefined;
};

export interface AuthNavigationProps<
    RouteName extends keyof AuthenticationRoutes
> {
    navigation: StackNavigationProp<AuthenticationRoutes, RouteName>;
    route: RouteProp<AuthenticationRoutes, RouteName>;
}

export interface HomeNavigationProps<RouteName extends keyof HomeRoutes> {
    navigation: BottomTabNavigationProp<HomeRoutes, RouteName>;
    route: RouteProp<HomeRoutes, RouteName>;
}

export interface VaultStackNavigationProps<
    RouteName extends keyof VaultRoutes
> {
    navigation: CompositeNavigationProp<
        StackNavigationProp<VaultRoutes, RouteName>,
        BottomTabNavigationProp<HomeRoutes>
    >;
    route: RouteProp<VaultRoutes, RouteName>;
}
