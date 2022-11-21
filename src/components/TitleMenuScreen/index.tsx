import {
  View,
  Text,
  StyleSheet,
  Alert,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackRouteParams } from "../../interface/StackInterface";
import { useNavigation } from "@react-navigation/native";
import Icon from "../Icon";
import { ITitleMenuScreen } from "../../interface/ITitleMenuScreen";

const TitleMenuScreen: React.FC<ITitleMenuScreen> = ({ totalPizzas }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackRouteParams>>();

  const Height = (Dimensions.get("window").height * 10) / 100;
  return (
    <View style={[styles.containerTitle, { height: Height }]}>
      <Icon
        name="information-variant"
        size={30}
        color="white"
        onPress={() => Alert.alert("Ouverture de 11h30 à 22h00")}
      />
      <Text style={styles.title}>Nos Pizzas</Text>
      <View
        style={{
          flexDirection: "row",
          width: 40,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Icon
          name="shopping-outline"
          size={24}
          color="white"
          onPress={() => navigation.navigate("HomeScreen")}
        />
        <Text style={{ color: "#fdb813", fontSize: 20 }}>{totalPizzas}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerTitle: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

export default TitleMenuScreen;
