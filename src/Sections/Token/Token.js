import { useEffect, useState } from "react";
import MainSectionContainer from "../../components/Layout/MainSectionContainer";
import BaseText from "../../components/Text/BaseText";
import FeatureSelector from "./FeatureSelector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faFlask,
  faPiggyBank,
} from "@fortawesome/free-solid-svg-icons";
import { HorizontalFlexContainer } from "../../components/Layout/HorizontalFlexContainer";
import Spacer from "../../components/Layout/Spacer";
import { VerticalFlexContainer } from "../../components/Layout/VerticalFlexContainer";

const options = {
  "Community driven": {
    title: "Community driven",
    description: (
      <div className="description-container">
        <h2 className="token-title">The most important thing ☝️</h2>
        <p className="token-text">
          Like any new born, our token was created as a blank canvas. It is up
          to the community 100% to decide the destiny of this token. It might be
          the utility for something bigger, a wholesome meme or the next big
          thing in the Binance Smart Chain.
        </p>
        <p className="token-text">
          One thing is certain, our community are passionate and talented enough
          to achieve anything we set our mind to. We also have people from
          around the globe which all contribute and help us look at the bigger
          picture.
        </p>
        <p className="token-text">Join up and have a say!</p>
      </div>
    ),
    icon: <FontAwesomeIcon icon={faUsers} size="3x" />,
  },
  Features: {
    title: "Features",
    description: (
      <div className="description-container">
        <h2 className="token-title">Automatic LP 💧</h2>
        <p className="token-text">
          Every trade contributes towards automatically generating liquidity
          locked inside PancakeSwap LP, this adds value to the token as the
          community grows. The value we chose is 5% for this LP contribution.
        </p>
        <h2 className="token-title">RFI Static Rewards</h2>
        <p className="token-text">
          Holders earn passive rewards through static reflection as they watch
          their balance of SafeSpoon grow indefinitely. 5% of every trade will
          be distibuted accross all holders.
        </p>
        <h2 className="token-title">Future development 🙌</h2>
        <p className="token-text">
          As a community we will decide what the utility of this token is. There
          have already being proposals that are being taken into account and
          that will only add value to this token.
        </p>
      </div>
    ),
    icon: <FontAwesomeIcon icon={faFlask} size="3x" />,
  },

  Tokenomics: {
    title: "Tokenomics",
    description: (
      <div className="description-container">
        <h2 className="token-title">Burn 🔥</h2>
        <p className="token-text">
          Before anything, 99% of the total supply was burnt!
        </p>

        <h2 className="token-title">Presale</h2>
        <p className="token-text">
          For the presale, 0.7% of the tokens were put up for sale. This allowed
          us to get enough liquidity to meet the demand of tokens during launch.
        </p>
        <h2 className="token-title">Listing</h2>
        <p className="token-text">
          The remaining 0.3% of the tokens were provided as liquidity on
          PancakeSwap.
        </p>

        <h2 className="token-title">Dev wallet 🚫</h2>
        <p className="token-text">
          The dev wallet was burnt and the token creator has joined the
          community and purchased their own tokens.
        </p>
      </div>
    ),

    icon: <FontAwesomeIcon icon={faPiggyBank} size="3x" />,
  },
};

export default function Token() {
  const [option, setOption] = useState("Community driven");

  return (
    <MainSectionContainer
      paddingHorizontal="10vw"
      height="auto"
      width="100%"
      id="Token"
    >
      <Spacer height="40px" />
      <BaseText fontSize="42px" fontWeight="bold" textAlign="left">
        Token ($SSPN)
      </BaseText>
      <Spacer height="12px" />
      <h3 fontSize="24px" id="token-address">
        0x88e3bff2c9d07f548e6bfedf1e5c96b4e84ca8bc
      </h3>
      <Spacer height="40px" />
      <FeatureSelector
        options={Object.keys(options)}
        setOption={setOption}
        currentOption={option}
      />
      <Spacer height="32px" />
      <HorizontalFlexContainer width="100%" flexWrap="wrap">
        <VerticalFlexContainer flex={1} justify="center" align="center">
          <div className="icon-container">{options[option].icon}</div>
          <Spacer height="50px" />
        </VerticalFlexContainer>
        <HorizontalFlexContainer flex={1} height="700px">
          {options[option].description}
        </HorizontalFlexContainer>
      </HorizontalFlexContainer>
    </MainSectionContainer>
  );
}
