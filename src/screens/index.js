import { Navigation } from 'react-native-navigation';
import { Provider }   from 'react-redux';

import store from '../store';

import {
    INIT_SCREEN
} from '../constants/navigation';

import Init from './Init';

export function registerScreens() {
    Navigation.registerComponent(INIT_SCREEN, () => Init, store, Provider);
}
