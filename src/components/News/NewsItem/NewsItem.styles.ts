import { styled } from "@mui/material";
import ColorScheme from "@/styles/theme/colorScheme";
import { Breakpoints } from "@/styles/breakpoints";

const ContainerSC = styled("div")`
  width: 100%;
  min-height: 240px;

  padding: 14px 13px;
  margin-bottom: 30px;

  border-radius: 50px;
  box-shadow: 0 0 10px ${ColorScheme.SHADOW};

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    min-height: 203px;

    padding: 14px 11px;
    margin-bottom: 24px;
  }

  @media (max-width: ${Breakpoints.SMALL_TABLET}px) {
    min-height: auto;

    margin-bottom: 16px;
    padding: 16px 12px;

    border-radius: 20px;
  }
`;

const WrapperSC = styled("div")`
  display: flex;
  justify-content: center;

  @media (max-width: ${Breakpoints.MOBILE}px) {
    align-items: center;
    flex-direction: column;
  }
`;

const ImageSC = styled("img")`
  width: 226px;
  height: 204px;

  object-fit: cover;

  flex-shrink: 0;
  border-radius: 49px 49px 49px 43px;

  @media (max-width: ${Breakpoints.NOTEBOOK}px) {
    max-width: 180px;
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    width: 197px;
    max-width: 197px;
    height: 175px;
  }

  @media (max-width: ${Breakpoints.SMALL_TABLET}px) {
    flex-shrink: 1;

    width: 100%;
    height: 100%;

    max-width: 114px;
    max-height: 103px;

    border-radius: 16px;
  }

  @media (max-width: ${Breakpoints.MOBILE}px) {
    max-width: none;
    object-fit: contain;
    max-height: 150px;
  }
`;

const TextContainerSC = styled("div")`
  flex: 1;

  display: flex;
  flex-direction: column;

  padding: 10px 23px 10px 14px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    padding: 5px 29px 3px 24px;
  }

  @media (max-width: ${Breakpoints.SMALL_TABLET}px) {
    padding: 4px 0 0 16px;
  }

  @media (max-width: ${Breakpoints.MOBILE}px) {
    padding: 10px 0 0 0;
  }
`;

const TitleSC = styled("a")`
  display: block;

  color: ${ColorScheme.SECONDARY};

  margin-bottom: 16px;

  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;

  &:hover {
    color: ${ColorScheme.SECONDARY_DARK};
  }

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    font-size: 15px;
    line-height: 18px;
  }

  @media (max-width: ${Breakpoints.SMALL_TABLET}px) {
    font-size: 15px;
    font-weight: 700;
    line-height: 20px;
    text-align: center;
  }
`;

const DescContainerSC = styled("div")`
  flex-grow: 1;
`;

const DescriptionSC = styled("p")`
  display: -webkit-box;
  color: ${ColorScheme.GRAY};

  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  text-overflow: ellipsis;

  overflow: hidden;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;

  @media (max-width: ${Breakpoints.SMALL_TABLET}px) {
    font-size: 13.5px;
    line-height: 16px;
    -webkit-line-clamp: 6;
  }
`;

const DateSC = styled("div")`
  color: ${ColorScheme.GRAY_LIGHT};

  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: right;

  margin-top: 15px;

  @media (max-width: ${Breakpoints.BIG_TABLET}px) {
    margin-top: 16px;
  }
`;

export const useNewsItemStyles = () => ({
  ContainerSC,
  WrapperSC,
  ImageSC,
  TextContainerSC,
  TitleSC,
  DescContainerSC,
  DescriptionSC,
  DateSC,
});
