import { View, Text, StyleSheet } from "react-native";
import { IAllergens } from "../../interface/IAllergens";

const Allergens: React.FC<IAllergens> = ({ allergens }) => {
  return (
    <View>
      <Text style={styles.subTitle}>Allergenes: </Text>
      {allergens.map((allergen, index) => {
        return (
          <Text key={index} style={styles.listAllergens}>
            {allergen}
          </Text>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  subTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 20,
  },
  listAllergens: {
    color: "black",
    fontSize: 18,
    marginLeft: 30,
  },
});

export default Allergens;
