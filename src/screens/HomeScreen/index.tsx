import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import CardPizzasSelected from "../../components/CardPizzasSelected/index";
import TotalPrice from "../../components/TotalPrice/index";

const HomeScreen: React.FC = () => {
  const pizzas = useSelector((state: any) => state.pizzas);
  const pizzaSelected = pizzas.filter((el: any) => el.numberOfPizza > 0);
  const pricePerPizza = pizzaSelected.map((pizza: any) => {
    return pizza.currentPrice;
  });
  const totalPrice = pricePerPizza.reduce((acc: any, x: any) => {
    return acc + x;
  }, 0);

  return (
    <View style={styles.container}>
      <CardPizzasSelected pizzaSelected={pizzaSelected} />
      <TotalPrice totalPrice={totalPrice} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9ecef",
  },
});

export default HomeScreen;
