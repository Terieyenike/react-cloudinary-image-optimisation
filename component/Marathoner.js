import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { Transformation } from "@cloudinary/url-gen";

// import required actions and qualifiers
import { thumbnail, scale } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { grayscale } from "@cloudinary/url-gen/actions/effect";
import { source } from "@cloudinary/url-gen/actions/overlay";
import { Position } from "@cloudinary/url-gen/qualifiers/position";
import { compass } from "@cloudinary/url-gen/qualifiers/gravity";
import { image } from "@cloudinary/url-gen/qualifiers/source";

// styling
import styles from "../styles/Home.module.css";

// javascript utility for classnames
import cls from "classnames";

export default function Marathoner() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "demo"
    }
  });

  const myImage = cld
    .image("https://reefit.netlify.app/img/eloho.jpg")
    .setDeliveryType("fetch");

  myImage
    .resize(thumbnail().width(250).height(250).gravity(focusOn(FocusOn.face()))) // Crop the image, focusing on the face.
    .roundCorners(byRadius(20))
    .effect(grayscale())
    .overlay(
      source(
        image("cloudinary_icon_blue").transformation(
          new Transformation().resize(scale(50))
        )
      ).position(
        new Position().gravity(compass("south_west")).offsetX(10).offsetY(5)
      )
    );
  return (
    <div>
      <AdvancedImage
        className={cls(styles.img, styles.space)}
        cldImg={myImage}
      />
    </div>
  );
}
