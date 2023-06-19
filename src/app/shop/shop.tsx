import { Link } from 'react-router-dom';
import styles from './shop.module.css';
import { Banner } from "@store/shared/ui"

/* eslint-disable-next-line */
export interface ShopProps { }

export function Shop(props: ShopProps) {
  return (
    <div className={styles['container']}>
      <Banner text="welcome to the shop!" />
      <Link to="/cart">View Cart</Link>
    </div>
  );
}

export default Shop;