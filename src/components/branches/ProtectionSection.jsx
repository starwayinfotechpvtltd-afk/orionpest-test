import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Leaf,
  Award,
  UserCheck,
  Shield,
  PhoneCall,
  ArrowRight,
} from "lucide-react";

const protectionFeatures = [
  {
    title: "Safe & Non-Toxic",
    description:
      "We use eco-friendly products that are safe for your family, pets, and the environment.",
    icon: Leaf,
  },
  {
    title: "Guaranteed Results",
    description:
      "Our treatments are effective and backed by a service quality guarantee.",
    icon: Award,
  },
  {
    title: "Trained Professionals",
    description:
      "Our team is highly trained, certified, and experienced in handling all pest problems.",
    icon: UserCheck,
  },
  {
    title: "Long-Term Protection",
    description:
      "We focus on prevention and provide solutions that keep pests away for the long run.",
    icon: Shield,
  },
];

function ProtectionFeature({feature, index}) {
  const Icon = feature.icon;

  return (
    <div
      className={`
        group
        min-w-0
        text-center
      `}
    >
      {/* Icon */}

      <div
        className="
          mx-auto
          flex
          h-[62px]
          w-[62px]
          items-center
          justify-center
          rounded-full
          bg-[#f1f4fc]
          text-[#123b98]
          transition-all
          duration-300
          group-hover:scale-105
          group-hover:bg-[#e8edfc]
        "
      >
        <Icon size={31} strokeWidth={1.6} />
      </div>

      {/* Title */}

      <h3
        className="
          mt-4
          text-lg
          font-bold
          leading-tight
          text-[#102d75]
        "
      >
        {feature.title}
      </h3>

      {/* Description */}

      <p
        className="
          mx-auto
          mt-3
          
          text-sm
          leading-[1.65]
          text-[#535a69]
          sm:leading-[1.7]
        "
      >
        {feature.description}
      </p>
    </div>
  );
}

export default function ProtectionSection() {
  return (
    <section
      id="protection"
      className="
        w-full
        max-w-full
        overflow-hidden
        bg-white
        py-8
        sm:py-10
        lg:py-12
      "
    >
      {/* ==========================================
          MAIN CARD
      =========================================== */}

      <div
        className="
          mx-auto
          w-full
          max-w-[80%]
          px-3
          sm:px-5
          lg:px-8
        "
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-[16px]
            border
            border-[#e9edf5]
            bg-white
            shadow-[0_5px_25px_rgba(20,40,90,0.08)]
          "
        >
          {/* ======================================
              TOP CONTENT
          ======================================= */}

          <div
            className="
              grid
              min-w-0
              grid-cols-1
              lg:grid-cols-[38%_62%]
            "
          >
            {/* ====================================
                LEFT IMAGE
            ===================================== */}

            <div
              className="
                relative
                min-h-[300px]
                overflow-hidden
                sm:min-h-[380px]
                lg:min-h-[350px]
              "
            >
              <Image
                src="/Images/branches/img4.png"
                alt="Professional pest control service"
                fill
                priority
                className="
                  object-cover
                  object-center
                "
                sizes="
                  (max-width: 1024px) 100vw,
                  38vw
                "
              />

              {/* Image overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-transparent
                  via-transparent
                  to-[#092d87]/10
                  lg:hidden
                "
              />

              {/* =================================
                  DIAGONAL DIVIDER
              ================================== */}

              {/* <div
                className="
                  pointer-events-none
                  absolute
                  right-[-1px]
                  top-0
                  hidden
                  h-full
                  w-[70px]
                  bg-white
                  lg:block
                "
                style={{
                  clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                }}
              /> */}

              {/* <div
                className="
                  pointer-events-none
                  absolute
                  right-[36px]
                  top-0
                  hidden
                  h-full
                  w-[5px]
                  bg-[#123b98]
                  lg:block
                "
                style={{
                  clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                }}
              /> */}
            </div>

            {/* ====================================
                RIGHT CONTENT
            ===================================== */}

            <div
              className="
                relative
                min-w-0
                px-5
                pb-8
                pt-7
                
              "
            >
              {/* =================================
                  HEADING
              ================================== */}

              <div
                className="
                  flex
                  items-start
                  gap-4
                "
              >
                {/* Shield */}

                <div
                  className="
                    flex
                    h-[62px]
                    w-[62px]
                    shrink-0
                    justify-center
                    rounded-full
                    bg-[#f1f4fc]    
                    text-[#123b98]
                  "
                >
                  <ShieldCheck size={40} strokeWidth={1.7} />
                </div>

                <div className="min-w-0">
                  <h2
                    className="
                      text-3xl
                      font-bold 
                      leading-[1.1]
                      tracking-[-0.7px]
                      text-[#10337f]
                    "
                  >
                    Protection You Can Rely On
                  </h2>

                  {/* Heading underline */}

                  <div
                    className="
                      mt-4
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <span
                      className="
                        h-[4px]
                        w-14
                        rounded-full
                        bg-[#143b98]
                      "
                    />

                    <span
                      className="
                        h-[4px]
                        w-[6px]
                        rounded-full
                        bg-[#143b98]
                      "
                    />
                  </div>

                  <p
                    className="
                      mt-3
                      max-w-[610px]
                      leading-[1.65]
                      text-[#444b59]
                    "
                  >
                    We use advanced techniques and high-quality products to
                    ensure a pest-free environment for your loved ones and your
                    property.
                  </p>
                </div>
              </div>

              {/* =================================
                  FEATURES
              ================================== */}

              <div
                className="
                  mt-7
                  grid
                  grid-cols-1
                  gap-7
                  sm:grid-cols-2
                  lg:grid-cols-4
                "
              >
                {protectionFeatures.map((feature, index) => (
                  <ProtectionFeature
                    key={feature.title}
                    feature={feature}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ======================================
              CTA BAR
          ======================================= */}

          <div
            className="
              relative
              z-20
              flex
              flex-col
              gap-4
              bg-[#092f91]
              px-5
              py-4
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:px-7
              lg:px-8
            "
          >
            {/* Left */}

            <div
              className="
                flex
                min-w-0
                items-center
                gap-3
              "
            >
              {/* Phone Icon */}

              <div
                className="
                  flex
                  h-[42px]
                  w-[42px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/70
                  text-white
                "
              >
                <PhoneCall size={21} strokeWidth={1.6} />
              </div>

              <div
                className="
                  flex
                  min-w-0
                  flex-wrap
                  items-center
                  gap-x-3
                  gap-y-1
                "
              >
                <span
                  className="
                    text-lg
                    font-bold
                    text-white
                  "
                >
                  Need Immediate Assistance?
                </span>

                <span
                  className="
                    text-md
                    text-white/90
                  "
                >
                  Our team is just a call away!
                </span>
              </div>
            </div>

            {/* Button */}

            <Link
              href="#contact"
              className="
                inline-flex
                h-[40px]
                w-full
                shrink-0
                items-center
                justify-center
                gap-4
                rounded-[7px]
                bg-white
                px-5
                text-md
                font-bold
                text-[#123581]
                shadow-sm
                transition-all
                duration-300
                hover:bg-[#f7f9ff]
                hover:shadow-md
                sm:w-auto
                sm:min-w-[145px]
              "
            >
              <span>Get in Touch</span>

              <ArrowRight size={20} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
