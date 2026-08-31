import Image from "next/image";
import Link from "next/link";
import { Check, ShieldCheck } from "lucide-react";



function CertificationCard(certification) {

    console.log(certification)
  return (
    <div
      className="
        group
        relative
        flex
        min-h-[380px]
        flex-col
        overflow-hidden
        rounded-[18px]
        bg-white
        shadow-[0_8px_25px_rgba(35,58,120,0.09)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_15px_35px_rgba(35,58,120,0.15)]
        border border-gray-200
      "
    >
      {/* =========================================
          TOP CONTENT
      ========================================== */}

      <div
        className="
          relative
          z-10
          flex
          flex-1
          flex-col
          items-center
          px-5
          pb-24
          pt-5
          text-center
        "
      >
        {/* Logo circle */}
        <div
          className="
            relative
            flex
            h-[145px]
            w-[145px]
            shrink-0
            items-center
            justify-center
            rounded-full
            border-2
            border-[#dce5fb]
            bg-white
          "
        >
          <div
            className="
              absolute
              inset-[9px]
              rounded-full
              border
              border-[#e4eaf7]
            "
          />

          <Image
            src={`${certification.certification.logo}`}
            alt={certification.certification.title}
            width={112}
            height={112}
            className="
              relative
              z-10
              h-[108px]
              w-[108px]
              object-contain
              transition-transform
              duration-300
              group-hover:scale-105
            "
          />
        </div>

        {/* Title */}
        <h3
          className="
            mt-5
            font-bold
            leading-tight
            text-[#172f87]
            text-md
          "
        >
          {certification.certification.title}
        </h3>

        {/* Subtitle */}
        <p
          className="
            mt-2
            
            text-sm
            font-medium
            leading-[1.45]
            text-[#30343d]
          "
        >
          {certification.certification.subtitle}
        </p>
      </div>

      {/* =========================================
          BLUE BOTTOM PANEL
      ========================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          min-h-[94px]
          bg-[#263ba7]
          px-5
          pb-4
          pt-7
          text-center
        "
      >
        {/* Curved top edge */}
        <div
          className="
            absolute
            -top-[18px]
            left-[-5%]
            h-[35px]
            w-[110%]
            rounded-[50%]
            bg-white
          "
        />

        <div
          className="
            absolute
            -top-[7px]
            left-[-5%]
            h-[30px]
            w-[110%]
            rounded-[50%]
            bg-[#263ba7]
          "
        />

        {/* Check badge */}
        <div
          className="
            absolute
            left-1/2
            top-[-15px]
            flex
            h-[30px]
            w-[30px]
            -translate-x-1/2
            items-center
            justify-center
            rounded-full
            border-[2px]
            border-white
            bg-[#263ba7]
            text-white
            shadow-sm
          "
        >
          <Check size={15} strokeWidth={3} />
        </div>

        <p
          className="
            relative
            z-10
            mx-auto
            max-w-[215px]
            text-sm
            leading-[1.55]
            text-white/95
          "
        >
          {certification.certification.description}
        </p>
      </div>
    </div>
  );
}

export default function MembershipCertification() {
  return (
    <section
      id="certifications"
      className="
        relative
        bg-white
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* =========================================
          BACKGROUND DECORATION
      ========================================== */}

      {/* Left dots */}
      <div
        className="
          pointer-events-none
          absolute
          left-7
          top-10
          grid
          grid-cols-6
          gap-[13px]
          opacity-70
          sm:left-10
          lg:left-12
        "
      >
        {Array.from({ length: 30 }).map((_, index) => (
          <span
            key={index}
            className="
              h-[4px]
              w-[4px]
              rounded-full
              bg-[#c9d5f5]
            "
          />
        ))}
      </div>

      {/* Right shield decoration */}
      <div
        className="
          pointer-events-none
          absolute
          right-8
          top-8
          hidden
          opacity-[0.08]
          lg:block
        "
      >
        <ShieldCheck size={170} strokeWidth={1.3} className="text-[#17368f]" />
      </div>

      {/* =========================================
          CONTENT
      ========================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[80%]
          px-5
          sm:px-7
          lg:px-8
        "
      >
        {/* =========================================
            HEADER
        ========================================== */}

        <header className="mx-auto max-w-[750px] text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#2943bd]" />

            <span
              className="
                rounded-full
                bg-gradient-to-r
                from-[#20349c]
                to-[#2f46b5]
                px-5
                py-2
                text-[10px]
                font-semibold
                uppercase
                tracking-wide
                text-white
                shadow-[0_5px_12px_rgba(39,59,165,0.18)]
              "
            >
              Our Memberships & Certifications
            </span>

            <span className="h-px w-7 bg-[#2943bd]" />
          </div>

          {/* Heading */}
          <h2
            className="
             text-3xl sm:text-5xl font-bold text-[#2F3293] leading-tight mt-6
            "
          >
            Membership & Certification
          </h2>

          {/* Heading underline */}
          <div className="mx-auto mt-5 flex items-center justify-center gap-2">
            <span className="h-[5px] w-16 rounded-full bg-[#293fae]" />
            <span className="h-[5px] w-2 rounded-full bg-[#293fae]" />
          </div>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-5
              leading-[1.7]
              text-[#3c4250]
            "
          >
            Our memberships and certifications reflect our commitment to quality
            service, safety standards, and environmental care.
          </p>
        </header>

        {/* =========================================
            CERTIFICATION GRID
        ========================================== */}

        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-5
          "
        >
          {certifications.map((certification) => (
            <CertificationCard
              key={certification.title}
              certification={certification}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
