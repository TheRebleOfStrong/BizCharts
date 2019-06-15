import NavLink from 'umi/navlink';
import styles from './footer.css';

export default function() {
  return (
    <div className={styles.normal}>
      <NavLink exact to="/" replace className={styles.nav} activeClassName={styles.avtive}>首页</NavLink>
      <NavLink exact to="/market" replace className={styles.nav} activeClassName={styles.avtive}>商城</NavLink>
      <NavLink exact to="/order" replace className={styles.nav} activeClassName={styles.avtive}>订单</NavLink>
      <NavLink exact to="/shopCar" replace className={styles.nav} activeClassName={styles.avtive}>购物车</NavLink>
      <NavLink exact to="/user" replace className={styles.nav} activeClassName={styles.avtive}>我的</NavLink>
    </div>
  );
}
