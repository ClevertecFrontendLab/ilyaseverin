import styles from "./footer.module.css";
import Facebook from "./img/facebook.svg";
import Instagram from "./img/instagram.svg";
import LinkedIn from "./img/linkedIn.svg";
import VKontakte from "./img/vk.svg";

export const Footer: React.FC = () => (

    <footer className={styles.footer}>
        <div>
            <hr className={styles.hr} />

            <div className={styles.wrapper} >

                <section className={styles.footerContent}>

                    <div className={styles.left}>
                        <span>© 2020-2023 Cleverland. Все права защищены.</span     >
                    </div>

                    <div className={styles.right}>
                        <img src={Facebook} alt="avatar" />
                        <img src={Instagram} alt="avatar" />
                        <img src={VKontakte} alt="avatar" />
                        <img src={LinkedIn} alt="avatar" />
                    </div>
                </section>
            </div>
        </div>
    </footer>
);
