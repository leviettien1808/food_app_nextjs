import Link from "next/link";

import classes from "@/app/page.module.css";
import ImageSlideshow from "@/components/images/image-slideshow";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Thực phẩm dành cho những người yêu thích ẩm thực</h1>
            <p>Nếm và chia sẻ ẩm thực từ khắp nơi trên thế giới.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/company">Tham gia cộng đồng</Link>
            <Link href="/meals">Khám phá bữa ăn</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>Đôi nét về Thiên đường ẩm thực</h2>
          <p>
            Không chỉ đơn thuần là món ăn, mà là một hành trình khám phá hương
            vị, văn hóa và sự sáng tạo. Với họ, mỗi nguyên liệu đều mang một câu
            chuyện, mỗi món ăn là một tác phẩm nghệ thuật. Từ những miếng phô
            mai thủ công béo ngậy, thịt nguội ủ lâu năm đến các loại gia vị đặc
            trưng vùng miền như nghệ saffron, tiêu Kampot hay dầu ô liu nguyên
            chất, tất cả đều được lựa chọn kỹ lưỡng để tạo nên trải nghiệm ẩm
            thực trọn vẹn.
          </p>
          <p>
            Những người yêu ẩm thực thường tìm đến các món fusion độc đáo, thử
            nghiệm kỹ thuật nấu mới như sous-vide hay lên men tự nhiên, và không
            ngại đầu tư thời gian để chế biến món ăn đạt đến độ tinh tế cao
            nhất. Với họ, bữa ăn không chỉ để no bụng, mà là dịp để thưởng thức,
            kết nối và tôn vinh sự đa dạng của ẩm thực toàn cầu.
          </p>
        </section>
      </main>
    </>
  );
}
