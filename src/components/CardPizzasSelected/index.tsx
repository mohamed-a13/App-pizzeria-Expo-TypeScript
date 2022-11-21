import { View, Text, StyleSheet } from "react-native";
import ImageComponent from "../ImageComponent";
import Icon from "../../components/Icon";
import { useDispatch } from "react-redux";
import { ICardPizzasSelected } from "../../interface/ICardPizzaSelected";
import { deletePizza } from "../../redux/redux";

const CardPizzasSelected: React.FC<ICardPizzasSelected> = ({
  pizzaSelected,
}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Votre selection</Text>
      {pizzaSelected.map((pizza) => {
        return (
          <View key={pizza.id} style={styles.card}>
            <ImageComponent style={styles.image} name={pizza.name} />
            <View style={styles.infos}>
              <Text style={styles.text}>
                {pizza.numberOfPizza} x {pizza.name} à {pizza.price} €
              </Text>
              <View style={styles.total}>
                <Text style={styles.text}>
                  Total: {pizza.numberOfPizza * pizza.price} €
                </Text>
                <Icon
                  name="delete-outline"
                  size={30}
                  color="black"
                  onPress={() => dispatch(deletePizza(pizza.id))}
                />
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: "center",
    position: "relative",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: "red",
  },
  card: {
    flexDirection: "row",
    width: "96%",
    backgroundColor: "#ffffff",
    height: 130,
    borderRadius: 20,
    marginBottom: 10,
  },
  infos: {
    width: "70%",
    padding: 10,
    justifyContent: "space-around",
    position: "relative",
    backgroundColor: "#fdb813",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  image: {
    height: "100%",
    width: "30%",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  text: {
    fontSize: 20,
    color: "red",
    fontWeight: "bold",
  },
  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default CardPizzasSelected;
