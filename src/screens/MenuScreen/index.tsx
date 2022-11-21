import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, FlatList, ListRenderItem } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatListProps } from "../../interface/FlatListInterface";
import { useSelector } from "react-redux";
import CardPizza from "../../components/CardPizza";
import TitleMenuScreen from "../../components/TitleMenuScreen";
import BtnsFilter from "../../components/BtnsFilter";

const MenuScreen: React.FC = () => {
  const [status, setStatus] = useState("Toutes");
  const [listPizzas, setListPizzas] = useState(null);

  const flatListRef = useRef<any>(null);

  const pizzas = useSelector((state: any) => state.pizzas);
  const numberOfPizzas = pizzas.map((pizza: any) => {
    return pizza.numberOfPizza;
  });
  const totalPizzas = numberOfPizzas.reduce((acc: number, x: number) => {
    return acc + x;
  }, 0);

  const handleFilter = (status: string) => {
    setStatus(status);
    switch (status) {
      case "Toutes":
        setListPizzas(pizzas);
        break;
      case "moins de 9€":
        setListPizzas(pizzas.filter((el: any) => el.price < 10));
        break;
      case "moins de 8€":
        setListPizzas(pizzas.filter((el: any) => el.price < 9));
        break;
      default:
        break;
    }
    flatListRef.current?.scrollToOffset({ animated: true, x: 0 });
    return;
  };

  const renderItem: ListRenderItem<FlatListProps> = ({ item: pizza }) => {
    return (
      <CardPizza
        id={pizza.id}
        image={pizza.image}
        name={pizza.name}
        price={pizza.price}
        ingredients={pizza.ingredients}
        allergens={pizza.allergens}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TitleMenuScreen totalPizzas={totalPizzas} />
      <BtnsFilter onPress={handleFilter} status={status} />
      <FlatList
        data={listPizzas ? listPizzas : pizzas}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        keyExtractor={(item, index) => index.toString()}
        ref={flatListRef}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B353B",
  },
});

export default MenuScreen;
