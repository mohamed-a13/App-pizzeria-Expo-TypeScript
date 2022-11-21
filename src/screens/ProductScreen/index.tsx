import { View, Text, StyleSheet, Image } from "react-native";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import Icon from "../../components/Icon";
import ImageComponent from "../../components/ImageComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import Allergens from "../../components/Allergens";

type ParamsList = {
  params: {
    name: string;
    image: string;
    allergens: string[];
  };
};

const ProductScreen = () => {
  const route = useRoute<RouteProp<ParamsList, "params">>();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 10, width: 50 }}>
        <Icon
          name="keyboard-backspace"
          size={30}
          color="black"
          onPress={() => navigation.goBack()}
        />
      </View>
      <Text style={styles.title}>{route.params.name}</Text>
      <View style={{ height: 300 }}>
        <ImageComponent style={styles.image} name={route.params.name} />
      </View>
      <Allergens allergens={route.params.allergens} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9ecef",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    color: "red",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ProductScreen;
