import { Image } from "react-native";
import { IImageComponent } from "../../interface/IImageComponent";

const ImageComponent: React.FC<IImageComponent> = ({ style, name }) => {
  return (
    <Image
      style={style}
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
  );
};

export default ImageComponent;
