import Image from "next/image";

import mealIcon from "@/assets/icons/mealIcon.png";
import communityIcon from "@/assets/icons/communityIcon.png";
import eventsIcon from "@/assets/icons/eventsIcon.png";
import classes from "@/app/community/page.module.css";

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Có chung niềm đam mê:{" "}
          <span className={classes.highlight}>Ẩm thực</span>
        </h1>
        <p>
          Tham gia cộng đồng của chúng tôi và chia sẻ công thức nấu ăn yêu thích
          của bạn!
        </p>
      </header>
      <main className={classes.main}>
        <h2>Đặc quyền cộng đồng</h2>

        <ul className={classes.perks}>
          <li>
            <Image src={mealIcon} alt="A delicious meal" />
            <p>Chia sẻ và khám phá công thức nấu ăn</p>
          </li>
          <li>
            <Image src={communityIcon} alt="A crowd of people, cooking" />
            <p>Tìm bạn mới và những người cùng chí hướng</p>
          </li>
          <li>
            <Image
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
            />
            <p>Tham gia vào các sự kiện độc quyền</p>
          </li>
        </ul>
      </main>
    </>
  );
}
