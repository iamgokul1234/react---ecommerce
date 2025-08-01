import { Button, Card } from "antd";
import styles from "./HomeCard.module.css";

const { Meta } = Card;

const HomeCard = ({ title, description, image, onAction, actionLabel }) => (
  <Card
    className={styles.card}
    cover={
      <img
        className={styles.image}
        alt={title}
        src={image}
        style={{ width: 150, height: 150 }}
      />
    }
  >
    <Meta
      title={<span style={{ color: "#333" }}>{title}</span>}
      description={<span style={{ color: "#333" }}>{description}</span>}
    />
    <Button onClick={onAction}  style={{ marginTop: 10, backgroundColor:'#ffce12' }}>
      {actionLabel}
    </Button>
  </Card>
);
export default HomeCard;
