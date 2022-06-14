import {
  HeroWrap,
  Title,
  WrapText,
  Text,
  Button,
  WrapLeft,
  WrapRight,
  BoatTitleWrap,
  WrapValTitle,
  WrapImages,
  WrapImage,
  Caption,
} from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import Image from "next/image";
import { SRLWrapper } from "simple-react-lightbox";
import SimpleReactLightbox from "simple-react-lightbox";

import Images from "./photos.js";
const Sights = () => {
  const options = {
    // Please note that "caption" is singular
    caption: {
      captionAlignment: "start",
      captionColor: "#FFFFFF",
      captionContainerPadding: "0",
      captionFontFamily: "inherit",
      captionFontSize: "inherit",
      captionFontStyle: "inherit",
      captionFontWeight: "inherit",
      captionTextTransform: "inherit",
      showCaption: true,
    },
  };
  return (
    <SimpleReactLightbox>
      <HeroWrap>
        <Title>JUST FEW HOURS FROM MARINA</Title>
        <WrapImages>
          <SRLWrapper options={options}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                width: "100%",
              }}
            >
              {Images.map((image) => (
                <WrapImage
                  key={image.id}
                  // onClick={(e) => handleClickImage(e, image.in)}
                >
                  <Image
                    src={image.photo}
                    alt={image.id}
                    layout="fill"
                    objectFit="cover"
                    // width={500} automatically provided
                    // height={500} automatically provided
                    // blurDataURL="data:..." automatically provided
                    placeholder="blur" // Optional blur-up while loading
                  />
                  <Caption>{image.id}</Caption>
                </WrapImage>
              ))}
            </div>
          </SRLWrapper>
        </WrapImages>
      </HeroWrap>
    </SimpleReactLightbox>
  );
};

export default Sights;
