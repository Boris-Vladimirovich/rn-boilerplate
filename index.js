import { Navigation } from 'react-native-navigation';

import { registerScreens } from './src/screens';

import { INIT_SCREEN } from './src/constants/navigation';

registerScreens();

Navigation.startSingleScreenApp({
    screen: {
        screen: INIT_SCREEN
    }
});
