import { TouchableOpacity, Text } from "react-native";
import buttonStyles from "./buttonStyles";
import styleRules from "../../utils/styleRules";

interface ButtonProps {
  onPress: () => void;
  title: string;
  disabled?: boolean;
  textStyle?: Record<string, number | string>;
  style?: Record<string, number | string>;
}

const Button = ({
  onPress,
  title,
  disabled = false,
  textStyle,
  style,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={styleRules(
        buttonStyles.button,
        style,
        disabled && buttonStyles.buttonDisabled
      )}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styleRules(buttonStyles.buttonText, textStyle)}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
