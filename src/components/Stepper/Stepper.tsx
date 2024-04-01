import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import stepperStyles from "./stepperStyles";
import * as Progress from "react-native-progress";

interface StepperProps {
  total: number;
  current: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  unit: string;
}

const Stepper = ({ total, current, setStep, unit }: StepperProps) => {
  return (
    <View style={stepperStyles.stepper}>
      <View style={stepperStyles.info}>
        <View style={stepperStyles.step}>
          <Text style={stepperStyles.current}>
            {unit} {current}
          </Text>

          <Text>/{total}</Text>
        </View>

        <View style={stepperStyles.arrows}>
          <Icon
            name="arrow-left"
            size={20}
            onPress={() => {
              setStep((prev) => {
                if (prev === 0) return prev;
                return prev - 1;
              });
            }}
          />
          <Icon
            name="arrow-right"
            size={20}
            onPress={() => {
              setStep((prev) => {
                if (prev === total - 1) return prev;
                return prev + 1;
              });
            }}
          />
        </View>
      </View>
      <Progress.Bar
        progress={current / total}
        width={null}
        color="#5DBF10"
        height={12}
        borderRadius={20}
        unfilledColor="#E5E5E5"
      />
    </View>
  );
};

export default Stepper;
