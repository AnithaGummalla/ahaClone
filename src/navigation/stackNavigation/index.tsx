import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../../screens/welcomescreen';
import LanguageSelect from '../../screens/languageSelect';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name=" " component={WelcomeScreen} />
      <Stack.Screen name="lang" component={LanguageSelect} />
    </Stack.Navigator>
  );
}
export default MyStack;
