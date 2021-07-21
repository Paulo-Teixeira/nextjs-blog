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
import Button from "../../components/button";
import Reassurance from "../../components/reassurance";
import Tabs from "../../components/tabs";
import { EmblaCarousel } from "../../components/carousel";
import styles from "./product.module.scss";

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const SPECS = [
  {
    id: 123,
    title: "Caractéristiques",
    content: [
      "Caractéristique 1",
      "Caractéristique 2",
      "Caractéristique 3",
      "Caractéristique 4",
      "Caractéristique 5",
    ],
  },
  {
    id: 254,
    title: "Description",
    content: [
      "Description 1",
      "Description 2",
      "Description 3",
      "Description 4",
      "Description 5",
    ],
  },
  {
    id: 356,
    title: "Autres",
    content: ["Autre 1", "Autre 2", "Autre 3", "Autre 4", "Autre 5"],
  },
];

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
            tortor nec lacus efficitur sagittis. Suspendisse pulvinar id sem et
            placerat."
            />
          </article>
          <form className={styles.form}>
            <div className={styles.formField}>
              <Label id="sel" label="Options" />
              <Select
                id="sel"
                name="sel"
                options={["Option 1", "Option 2", "Option 3", "Option 4"]}
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
                    key={color.hue}
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
            <div className={styles.actions}>
              <Button btnStyle="primary" icon="🎁">
                Ajouter au panier
              </Button>
              <Button btnStyle="secondary" icon="💼">
                Achat direct
              </Button>
            </div>
          </form>
          <Reassurance />
        </div>
        <aside className={styles.productDetails}>
          <Tabs data={SPECS} />
        </aside>
      </div>
    </Layout>
  );
}
