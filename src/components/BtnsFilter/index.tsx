import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { btnsData } from "../../data/btnsData";
import { IBtnsFilter } from "../../interface/IBtnsFilter";

const BtnsFilter: React.FC<IBtnsFilter> = ({ status, onPress }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      {btnsData.map((btn) => {
        return (
          <TouchableOpacity
            style={[styles.btns, status === btn.name && styles.btnActive]}
            onPress={() => onPress(btn.name)}
            key={btn.name}
          >
            <Text
              style={[styles.textBtn, status === btn.name && styles.textActive]}
            >
              {btn.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  btns: {
    width: Dimensions.get("window").width / 3.5,
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: "#fdb813",
    padding: 6,
    justifyContent: "center",
    borderRadius: 5,
    alignItems: "center",
  },
  textBtn: {
    color: "#fff",
    textAlign: "center",
    fontSize: 12,
  },
  btnActive: {
    borderColor: "#2B353B",
    backgroundColor: "#fdb813",
  },
  textActive: {
    color: "#232830",
  },
});

export default BtnsFilter;
