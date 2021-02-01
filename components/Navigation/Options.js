import { headerBackgroundColor } from '../../styles/globalStyles'; 

export function NavigationOptions(title) {
  const options = {
    title: title,
    headerStyle: {
      backgroundColor: headerBackgroundColor,
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
      alignSelf: "center",
    },
  };
  return options;
}
