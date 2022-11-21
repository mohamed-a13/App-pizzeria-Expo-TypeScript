import { Text, StyleSheet } from "react-native";
import { ITotalPrice } from "../../interface/ITotalPrice";

const TotalPrice: React.FC<ITotalPrice> = ({ totalPrice }) => {
  return (
    <Text style={styles.totalPanier}>Total du panier: {totalPrice} €</Text>
  );
};

const styles = StyleSheet.create({
  totalPanier: {
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    bottom: 100,
    right: 20,
    color: "#2B353B",
  },
});

export default TotalPrice;
