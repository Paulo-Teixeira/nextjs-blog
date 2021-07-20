import Head from "next/head";
import Layout from "../../components/layout";
import Breadcrumb from "../../components/breadcrumb";
import Title from "../../components/title";
import Price from "../../components/price";
import Description from "../../components/description";
import Label from "../../components/label";
import Select from "../../components/select";
import Range from "../../components/range";
import ColorPicker from "../../components/color-picker";
import Quantity from "../../components/quantity";
import { EmblaCarousel } from "../../components/carousel";
import styles from "./product.module.scss";

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const COLORS = [
  { hue: "crimson", tooltip: "Crimson" },
  { hue: "coral", tooltip: "Coral" },
  { hue: "darkcyan", tooltip: "Dark cyan" },
];

export default function Product() {
  return (
    <Layout>
      <Head>
        <title>Product</title>
      </Head>
      <Breadcrumb />
      <div className={styles.product}>
        <div className={styles.carousel}>Carousel</div>
        <div className={styles.productConfiguration}>
          <article>
            <Title marque="Marque" modele="Modèle" reference="Référence" />
            <Price value="€20.000,00" />
            <Description
              truncate
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
            condimentum elit, a mollis lacus. Suspendisse pulvinar id sem et
            placerat. Donec odio tellus, euismod non ornare at, ultricies quis
            urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
            tortor nec lacus efficitur sagittis."
            />
          </article>
          <form>
            <div className={styles.formField}>
              <Label id="sel" label="Options" />
              <Select
                id="sel"
                name="sel"
                options={["option 1", "option 2", "option 3", "option 4"]}
              />
            </div>
            <div className={styles.formField}>
              <Label id="dim" label="Dimensions" />
              <Range id="dim" name="dim" min={36} max={42} value={38} />
            </div>
            <div className={styles.formField}>
              <Label dummy label="Couleur" />
              <div className={styles.pickerContainer}>
                {COLORS.map((color) => (
                  <ColorPicker
                    name="color"
                    id={color.hue}
                    tooltip={color.tooltip}
                    value={color.hue}
                  />
                ))}
              </div>
            </div>
            <div className={styles.formField}>
              <Label id="qt" label="Quantité" />
              <Quantity id="qt" name="qt" min={0} maxVal={40} minVal={0} />
            </div>
          </form>
        </div>
        <aside className={styles.productDetails}>Caractèristiques</aside>
      </div>
    </Layout>
  );
}
