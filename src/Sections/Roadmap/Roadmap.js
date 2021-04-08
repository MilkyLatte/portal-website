import { HorizontalFlexContainer } from "../../components/Layout/HorizontalFlexContainer";
import MainSectionContainer from "../../components/Layout/MainSectionContainer";
import Spacer from "../../components/Layout/Spacer";
import { VerticalFlexContainer } from "../../components/Layout/VerticalFlexContainer";
import BaseText from "../../components/Text/BaseText";
import "./Roadmap.css";
export default function RoadMap() {
  return (
    <MainSectionContainer height={"auto"} paddingHorizontal="100px">
      <BaseText fontSize="42px" fontWeight="bold" textAlign="left">
        Roadmap
      </BaseText>
      <Spacer height="40px" />
      <HorizontalFlexContainer justify="center">
        <VerticalFlexContainer align="center">
          <div className="road-map-node completed"></div>
          <div className="road-map-line" style={{ height: "300px" }}></div>
          <div className="road-map-node in-progress"></div>
          <div className="road-map-line" style={{ height: "450px" }}></div>
          <div className="road-map-node"></div>
          <div className="road-map-line" style={{ height: "500px" }}></div>
          <div className="road-map-node"></div>
          <div className="road-map-line" style={{ height: "250px" }}></div>
          <div className="road-map-node"></div>{" "}
          <div
            className="road-map-dotted-line"
            style={{ height: "250px" }}
          ></div>
        </VerticalFlexContainer>
        <Spacer width="20px" />

        <VerticalFlexContainer>
          <Spacer height="40px" />
          <div className="road-map-description">
            <BaseText textAlign="left" fontWeight="bold">
              Q1 - INCEPTION
            </BaseText>
            <BaseText fontSize="20px" textAlign="left">
              This is where it all began, in the mind of the all mighty spoon
              and after many rug pulls, the idea of creating a safe token for
              the community was concieved and put into action.
            </BaseText>
          </div>
          <Spacer height="100px" />
          <div className="road-map-description">
            <BaseText textAlign="left" fontWeight="bold">
              Q2-1 VISION
            </BaseText>
            <BaseText fontSize="20px" textAlign="left">
              This is the moment where we define the future of this community.
              With multiple AMAs and brainstorming sessions, we will mould our
              vision and set our goals for the future.
              <br />
              <br />
              In parallel, growing the community will be important and we will
              work with the community, influencers and social media to make sure
              our message spreads to a wider audience.
            </BaseText>
          </div>

          <Spacer height="75px" />
          <div className="road-map-description">
            <BaseText textAlign="left" fontWeight="bold">
              Q2-2 EXECUTION
            </BaseText>
            <BaseText fontSize="20px" textAlign="left">
              This is when we will start execution of the ideas and projects
              decided by the community. We will continue to listen and mould by
              maintaining an open channel of communication. Our whitepaper will
              also be written during this time as the vision will be defined.
              <br />
              <br />
              We will continue to grow the community and impulse the impact of
              our token beyong DeFi.
            </BaseText>
          </div>
          <Spacer height="130px" />
          <div className="road-map-description">
            <BaseText textAlign="left" fontWeight="bold">
              Q3 - PERFECTION
            </BaseText>
            <BaseText fontSize="20px" textAlign="left">
              Feedback will be the main force in this quarter. We will
              communicate closely with the community to polish the product of
              all our work together.
            </BaseText>
          </div>
          <Spacer height="90px" />
          <div className="road-map-description">
            <BaseText textAlign="left" fontWeight="bold">
              BEYOND - REPETITION
            </BaseText>
            <BaseText fontSize="20px" textAlign="left">
              We don't plan to stop once perfection has been achieved. We
              believe that by this point, our community will have gained enough
              volume and confidence to start over again and expand our vision.
            </BaseText>
          </div>
        </VerticalFlexContainer>
      </HorizontalFlexContainer>
    </MainSectionContainer>
  );
}
