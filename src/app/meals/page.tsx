import classes from "@/app/meals/page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import Link from "next/link";

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Những bữa ăn ngon do{" "}
          <span className={classes.highlight}>chính bạn</span> tạo ra
        </h1>
        <p>
          Chọn công thức yêu thích của bạn và tự nấu. Thật dễ dàng và thú vị!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">
            Chia sẻ công thức nấu ăn yêu thích của bạn
          </Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
