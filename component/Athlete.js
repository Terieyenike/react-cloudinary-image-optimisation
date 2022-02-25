import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

// import required actions
import { vectorize } from "@cloudinary/url-gen/actions/effect";

import styles from "../styles/Home.module.css";

export default function Athlete() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "demo"
    }
  });

  const athlete = cld
    .image("https://images.pexels.com/photos/6354732/pexels-photo-6354732.jpeg")
    .setDeliveryType("fetch");

  athlete.effect(vectorize()).format("auto").quality("auto");

  return (
    <div>
      <AdvancedImage className={styles.img} cldImg={athlete} />
    </div>
  );
}
