import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { IIcon } from "../../interface/IIcon";

const Icon: React.FC<IIcon> = ({ name, color, size, onPress }) => {
  return (
    <MaterialCommunityIcons
      name={name}
      color={color}
      size={size}
      onPress={onPress}
    />
  );
};

export default Icon;
