import Image from "next/image";

export default function ImageLayouts() {
  return (
    <div>
      <h1>Next.js Image Layouts</h1>
      <div className="hero">
        <Image
          src="/msi-banner.jpg"
          alt="fill layout"
          // layout="fill"  // legacy prop "layout"
          // objectFit="cover"  // legacy prop "objectFit"
          fill
          style={{
            objectFit: "cover",
          }}
          priority
        />
      </div>
      <Image
        src="https://www.sbsinformatique.com/2719/tunisie/home/souris-gamer-msi-clutch-gm08-tunisie.jpg"
        alt="intrinsic layout"
        width={500}
        height={500}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
        priority
      />
      <Image
        src="/msi-laptop.jpg"
        alt="intrinsic layout"
        width={500}
        height={500}
        // layout="intrinsic" // legacy prop "layout"
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
        priority
      />
      <Image
        src="/msi-monitor.jpg"
        alt="fixed layout"
        width={500}
        height={500}
        // layout="fixed"
        style={{
          width: "500px",
          height: "500px",
        }}
        priority
      />
      <div>
        <Image
          src="/msi-footer.jpg"
          alt="responsive layout"
          width={800}
          height={600}
          // layout="responsive" // legacy prop "layout"
          // sizes="(max-width: 1200px) 100vw, 1200px" // 100vw up to 1200px, then stays 1200px for larger screens.
          sizes="100vw" // always takes up the full width of the viewport.
          style={{
            width: '100%',
            height: 'auto',
          }}
          priority
        />
      </div>
    </div>
  )
}
