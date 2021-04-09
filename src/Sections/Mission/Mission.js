import MainSectionContainer from "../../components/Layout/MainSectionContainer";
import Spacer from "../../components/Layout/Spacer";
import BaseText from "../../components/Text/BaseText";

export default function Mission() {
  return (
    <MainSectionContainer paddingHorizontal="100px" height="auto">
      <Spacer height="120px" />

      <BaseText fontSize="42px" fontWeight="bold" textAlign="left" id="Mission">
        Mission
      </BaseText>
      <Spacer height="40px" />

      <BaseText fontSize="20px" textAlign="left">
        <i>
          ”United we stand and divided we fall. Let us join upon one another to
          create a reality- a union of a true community. Let us join together as
          the pillar of light, shining across the galaxy that leads us; Past the
          Moon, past the Mars, to the Big dipper in the space afars! Join us and
          see, to all that we can be! Let your voice come through, and your
          ideas come true! Be it far, or be it soon; Be it early, or late
          afternoon. First or last, it's all in the past. United together, all
          we surpass!”
        </i>{" "}
        - The All Mighty Spoon
      </BaseText>

      <Spacer height="40px" />
    </MainSectionContainer>
  );
}
