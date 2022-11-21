import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useDispatch } from "react-redux";
import { StackRouteParams } from "../../interface/StackInterface";
import { ICardPizza } from "../../interface/ICardPizza";
import { addPizza } from "../../redux/redux";

const CardPizza: React.FC<ICardPizza> = ({
  id,
  image,
  name,
  price,
  ingredients,
  allergens,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackRouteParams>>();
  const dispatch = useDispatch();
  return (
    <View style={styles.containerCard} key={id}>
      <Image
        style={styles.image}
        source={
          name == "La Chorizo"
            ? require("../../../assets/img/pizzaChorizo.jpg")
            : name == "La Salsa"
            ? require("../../../assets/img/pizzaSalsa.jpg")
            : name == "La Mexicaine"
            ? require("../../../assets/img/pizzaMexicaine.jpg")
            : null
        }
      />
      <View style={styles.containerNameAndAddButton}>
        <Text style={styles.name}>{name}</Text>
        <AntDesign
          name="pluscircleo"
          size={30}
          color="white"
          onPress={() => dispatch(addPizza(id))}
        />
      </View>
      <View>
        <Text style={styles.price}>{price} €</Text>
      </View>
      <View style={{ height: "40%", paddingTop: 20 }}>
        <Text style={styles.Titleingredients}>Ingrédients: </Text>
        {ingredients.map((ingredient, index) => {
          return (
            <Text key={index} style={styles.ingredients}>
              {" "}
              - {ingredient}
            </Text>
          );
        })}
      </View>
      <Pressable
        onPress={() =>
          navigation.navigate("ProductScreen", {
            name: name,
            image: image,
            allergens: allergens,
          })
        }
      >
        <Text style={{ textAlign: "center", color: "#fdb813" }}>
          Liste des allergènes
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    flex: 1,
    width: "80%",
    height: "85%",
    backgroundColor: "#232830",
    margin: 30,
    borderRadius: 10,
  },
  image: {
    width: 300,
    height: "40%",
    resizeMode: "cover",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  containerNameAndAddButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  name: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    width: "100%",
    marginLeft: 15,
  },
  Titleingredients: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    width: "100%",
    marginLeft: 15,
  },
  ingredients: {
    color: "white",
    fontSize: 10,
    width: "100%",
    marginLeft: 20,
    marginTop: 10,
  },
});

export default CardPizza;
