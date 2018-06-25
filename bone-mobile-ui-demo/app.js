import { BackAndroid } from 'react-native';
import Bone from '@bone/bone-mobile';
import HomePage from './app/page/HomePage';

// Layout Components
import BlankPage from './app/page/BlankPage';
import BlockPage from './app/page/BlockPage';
import FlexPage from './app/page/FlexPage';
import HeaderPage from './app/page/HeaderPage';

// Navigation Components
import NavBarPage from './app/page/NavBarPage';

// Data Interaction Components
import CheckboxPage from './app/page/CheckboxPage';
import PickerPage from './app/page/PickerPage';
import RadioPage from './app/page/RadioPage';
import SwitchPage from './app/page/SwitchPage';

// Data Display Components
import IconPage from './app/page/IconPage';
import ListPage from './app/page/ListPage';

// Feedback Components
import ActionSheetPage from './app/page/ActionSheetPage';
import AlertPage from './app/page/AlertPage';
import GesturePage from './app/page/GesturePage';
import ModalPage from './app/page/ModalPage';
import ToastPage from './app/page/ToastPage';
import TouchableOpacityPage from './app/page/TouchableOpacityPage';
import TouchableOverlayPage from './app/page/TouchableOverlayPage';

// register android hardware back event
BackAndroid.addEventListener('hardwareBackPress', () => {
  Bone.navigation.pop();
  return true;
});

const app = Bone.createApp({
  router: {
    routes: [
      // Home
      { path: '/', page: HomePage, exact: true, isPrivate: false },
      // Layout Components
      { path: '/Blank', page: BlankPage, exact: true, isPrivate: true },
      { path: '/Block', page: BlockPage, exact: true, isPrivate: true },
      { path: '/Flex', page: FlexPage, exact: true, isPrivate: true },
      { path: '/Header', page: HeaderPage, exact: true, isPrivate: true },
      // Navigation Components
      { path: '/NavBar', page: NavBarPage, exact: true, isPrivate: true },
      // Data Interaction Components
      { path: '/Checkbox', page: CheckboxPage, exact: true, isPrivate: true },
      { path: '/Picker', page: PickerPage, exact: true, isPrivate: true },
      { path: '/Radio', page: RadioPage, exact: true, isPrivate: true },
      { path: '/Switch', page: SwitchPage, exact: true, isPrivate: true },
      // Data Display Components
      { path: '/Icon', page: IconPage, exact: true, isPrivate: true },
      { path: '/List', page: ListPage, exact: true, isPrivate: true },
      // Feedback Components
      { path: '/ActionSheet', page: ActionSheetPage, exact: true, isPrivate: true },
      { path: '/Alert', page: AlertPage, exact: true, isPrivate: true },
      { path: '/Gesture', page: GesturePage, exact: true, isPrivate: true },
      { path: '/Modal', page: ModalPage, exact: true, isPrivate: true },
      { path: '/Toast', page: ToastPage, exact: true, isPrivate: true },
      { path: '/TouchableOpacity', page: TouchableOpacityPage, exact: true, isPrivate: true },
      { path: '/TouchableOverlay', page: TouchableOverlayPage, exact: true, isPrivate: true },
    ],
  },
  autoStart: false,
  historyMode: 'hash',
});

app.start();
