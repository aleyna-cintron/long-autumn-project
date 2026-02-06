import { forwardRef, ReactNode } from "react";
import styles from "./cardGrid.module.css";

interface CardProps {
  id: string;
  children?: {
    front: ReactNode;
    back: ReactNode;
  };
  cardClassName?: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ id, children, cardClassName }, ref) => {
    return (
      <div className={`${styles.card} ${cardClassName || ""}`} id={id} ref={ref}>
        <div className={`${styles.cardWrapper} || ""}`}>
          <div className={styles.flipCardInner}>
            <div className={styles.flipCardFront}>{children?.front}</div>
            <div className={styles.flipCardBack}>{children?.back}</div>
          </div>
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
