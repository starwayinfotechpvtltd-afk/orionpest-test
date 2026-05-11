
import Image from "next/image";
import Link from "next/link";
import Review from "@/components/ui/Review";
import Form from "@/components/ui/SubmitForm";
import PageData from "@/components/ui/PageData";
import { getPageData } from "@/lib/getPageData";

const certifictions = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dstlumjlw/image/upload/v1770893988/img4_jixnpk.png",
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dstlumjlw/image/upload/v1770893988/img3_gpjgns.png",
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dstlumjlw/image/upload/v1770893987/img2_kx7drk.png",
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/dstlumjlw/image/upload/v1770893987/img1_xo6lsw.png",
  },
];

const clients = [
  "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894048/img7_m0rsfl.webp",
  "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894047/img6_f1ypc6.jpg",
  "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894050/img8_oa67dw.jpg",
  "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894051/img10_nhwgta.webp",
  "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894052/img11_tsyjhr.png",
  "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894131/img73_tizcd3.png",
  "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894109/img55_kdnu1q.webp",
  "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894048/img6_e55i2r.png",
  "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894045/img4_tmpavf.png",
  "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894046/img5_sau6fx.jpg",
  "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894051/img9_hk2dj1.png",
  "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894056/img15_q3nedu.png",
  "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894055/img13_yqq4fs.png",
  "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894055/img14_yw3d4l.png",
  "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894044/img3_gha5qo.png",
];

const homeServices = [
  {
    image: "/Images/home1.jpg",
    text: "RESIDENTIAL PEST CONTROL SERVICES",
    link: "/services/residential",
  },
  {
    image: "/Images/home2.jpg",
    text: "COMMERCIAL PEST CONTROL SERVICES",
    link: "/services/commercial",
  },
  {
    image: "/Images/home3.jpg",
    text: "FUMIGATION PEST CONTROL SERVICES",
    link: "/services/fumigation",
  },
  {
    image: "/Images/home4.jpg",
    text: "TERMITE PEST CONTROL SERVICES",
    link: "/services/termite-control",
  },
];

const whyChooseUs = [
  {
    icon: "/Images/support.png",
  },
  {
    icon: "/Images/professional.png",
  },
  {
    icon: "/Images/environment.png",
  },
  {
    icon: "/Images/satisfaction.png",
  },
];



export async function generateMetadata() {
  const page = await getPageData("home");
  return {
    title: page?.metaTitle || "Pest Control Services Near You | Trusted Pest Control Company in India",
    description: page?.metaDescription || "Looking for reliable pest control services near you? Orion Pest offers safe, effective pest control solutions for homes and businesses across India. Book today.",
  };
}

export default function Home() {

  return (
    <div className="w-full">
      {/* <PageData segment={"home"}> */}
        <>
          <div className="w-[95%] md:w-[80%] mx-auto">
            <h1 className="text-[#2F3293] text-2xl md:text-4xl lg:text-5xl font-bold font-sans mx-auto text-center mt-20">
              Largest Indian Owned <br></br> Pan India Pest Control Company
            </h1>
            <h5 className="text-2xl text-center text-[#0094DA] mt-5 font-bold">
              Orion Pest Solutions Pvt. Ltd
            </h5>
            <p className="md:text-center mt-5 text-lg text-justify  px-2">
              The most trusted and reliable company providing the best pest
              control solutions in India.
            </p>

            <p className="md:text-center text-justify mt-5 max-w-5xl mx-auto text-lg px-2">
              Established in 1998, we are constantly pushing the envelope with
              innovations in the niche industry. Today, we take pride in
              identifying ourselves as the pioneers of the pest management
              industry.
            </p>

            <div className="flex flex-col lg:flex-row gap-10 items-center bg-[#FEF202] rounded-3xl mt-10 w-full overflow-hidden relative">
              <div className="homepage_image relative w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none ">
                <img
                  src="https://res.cloudinary.com/dstlumjlw/image/upload/v1770893894/img3_pp9ild.png"
                  fill
                  alt="image"
                  className="object-cover"
                />
              </div>

              <div className="w-full lg:w-1/2 font-bold text-[#2F3293] flex flex-col gap-8 items-start justify-center pl-10 lg:pl-0 pr-10 py-10">
                <p className="text-justify text-md">
                  Are you tired of dealing with cockroaches, termites, bed bugs,
                  or mosquitoes? Don’t worry Orion Pest Solutions is here to
                  help. We provide safe, affordable, and effective pest control
                  services to protect your home, office, and surroundings from
                  unwanted pests.
                  <br />
                  <br />
                  Our team of trained professionals uses modern equipment and
                  eco-friendly products to ensure complete pest removal without
                  harming your family, pets, or the environment. Whether you’re
                  facing a small problem or a major infestation, we’re ready to
                  provide fast and reliable solutions.
                  <br />
                  <br />
                  We understand that every customer and every property is
                  different. That’s why we offer customized pest control plans
                  designed to suit your specific needs. From one-time treatments
                  to regular maintenance services, we make sure your space stays
                  pest-free all year round.
                </p>

                <div className="flex flex-row items-center gap-4 md:gap-8 justify-center mx-auto">
                  <a
                    className="bg-[#2F3293] rounded-xl text-white px-3 sm:px-8 py-3 cursor-pointer"
                    href="tel:1800 419 8181"
                  >
                    Call Now
                  </a>

                  <a
                    className="relative overflow-hidden rounded-xl px-3 sm:px-8 py-3 text-white transition-all duration-500 group border-2
               border-[#2F3293] cursor-pointer bg-[#2F3293]"
                    href={"contact"}
                  >
                    <span className="relative z-10 text-white">
                      Get a quote
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <p className="md:text-center px-2 text-justify text-md text-lg mt-10">
              Boasting of an expansive pan-India presence, we operate in{" "}
              <span className="font-semibold md:font-bold text-black">
                Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Ahmedabad,
                Jaipur, Indore, Kolhapur, Kodaikanal, Dehradun, Mysore,
                Coimbatore, Vijayawada, Bilaspur, Puducherry, Aurangabad,
                Burdwan, Visakhapatnam, Guwahati, Ranchi, Dhanbad, Siliguri,
                Nagpur, Bhubaneswar, Kerala, Haldia, Jamshedpur, Raipur,
                Lucknow, Patna, Cochin, Mangalore, Trivandrum and Daman,
                including Bhutan and Nepal.
              </span>
            </p>
          </div>

          {/* Blue area */}
          <div className="bg-linear-to-br from-cyan-500 to-blue-500 w-full mt-20 p-10 mb-10 md:mb-20 border-b-8 border-blue-800">
            <div className="w-[95%] md:w-[80%] mx-auto">
              <p className="w-full text-white text-justify text-lg">
                Our vast experience, helmed by state-of-the-art technology,
                keeps you protected from every kind of pest menace. At Orion
                Pest Solutions Pvt. Ltd., we relentlessly strive to deliver the
                best pest control services in India, combining proven expertise
                with modern, science-backed techniques. <br></br> We provide
                prompt, affordable, and efficient pest control solutions
                designed to eliminate infestations quickly while ensuring
                long-term protection. Our comprehensive range of services covers
                Commercial Pest Control, Residential Pest Control, Herbal Pest
                Control, Termite Control, Mosquito Control, Rodent Control, and
                more. Whether it is your home, office, warehouse, or industrial
                space, we are available 24/7 at your service, offering
                tailor-made solutions to suit every requirement. <br></br>
                Headquartered in Kolkata, Orion has steadily grown to become one
                of the most trusted pest management companies in India, with a
                strong presence across multiple cities. Over the years, we have
                successfully catered to residential societies, corporate
                offices, hospitals, hotels, educational institutions, and
                government establishments—building long-term relationships with
                clients who value our professionalism. <br></br> What sets us
                apart is our team of highly trained experts who understand the
                root cause of infestations and eliminate pests at the source. We
                don’t just control pests; we create safe, hygienic, and
                pest-free environments that give you peace of mind. Most
                importantly, we strictly use safe, eco-friendly, and
                government-approved chemicals to protect your health, property,
                and the environment. <br></br> At Orion, we believe pest control
                is not just about extermination—it’s about prevention,
                protection, and lasting peace of mind. Our mission is simple: to
                safeguard your surroundings, enhance your quality of life, and
                make your spaces healthier and more comfortable. <br></br> So,
                if you are looking for India’s most reliable pest control
                partner, look no further. With Orion Pest Solutions Pvt. Ltd.,
                you’re not just hiring a service—you’re choosing a lifelong
                shield against pests.
              </p>
            </div>
          </div>

          {/* Form area */}
          <div className="w-[90%] md:w-[600px] bg-[#2F3293] rounded-3xl mx-auto p-10">
            <h2 className="md:text-4xl text-3xl text-white font-bold text-center mb-3">
              Contact Us
            </h2>
            <Form />
          </div>

          {/* Grid area */}
          <div className="w-[90%] md:w-full mx-auto mt-20">
            <div className="md:flex justify-between items-center gap-4 md:w-[60%] mx-auto">

              <div className="flex-1 min-w-0 flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-bold text-[#2F3293]">
                    PAN INDIA SERVICES
                  </h3>
                  <p className="whitespace-normal break-words text-lg">
                    Orion Pest Solutions Private Limited provides a range of
                    pest control services in more than 72 locations in India
                    including Nepal and Bhutan.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-bold text-[#2F3293]">
                    GUARANTEED RESULTS
                  </h3>
                  <p className="text-lg whitespace-normal break-words">
                    With our indepth experience over 27 plus years, we continue
                    to enhance our operational excellence, safety, capability,
                    customer service and innovations.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-bold text-[#2F3293]">
                    COST EFFECTIVE SOLUTIONS
                  </h3>
                  <p className="text-lg whitespace-normal break-words">
                    Orion Pest Solutions Private Limited provides a range of
                    pest control services in more than 72 locations in India
                    including Nepal and Bhutan.
                  </p>
                </div>
              </div>
              <div className="h-[550px] w-[300px] relative">
              <img
                src="https://res.cloudinary.com/dstlumjlw/image/upload/v1770893893/img1_flrbu6.png"
                alt="img1"
                fill
                className="object-cover"
              /></div>
            </div>
          </div>

          {/* Pest Control Processes */}
          <div className="mt-20 py-20 px-10 md:px-0 bg-[#5557a5] w-full">
            <div className="md:w-[60%] mx-auto">
              <div className="flex xl:flex-row flex-col justify-between items-center gap-10">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    Three Step Pest Control Process
                  </h3>
                  <p className="text-lg font-semibold text-white mt-5">
                    1: INSPECT
                  </p>
                  <p className="text-white text-lg">
                    Inspect to pinpoint pest issues.
                  </p>
                  <p className="text-lg font-semibold text-white mt-3">
                    2: IDENTIFY
                  </p>
                  <p className="text-white text-lg">
                    Identify not only the pest, but the true cause of the
                    problem.
                  </p>
                  <p className="text-lg font-semibold text-white mt-3">
                    3: TREAT
                  </p>
                  <p className="text-white text-lg">
                    Treat in the most environmentally responsible way to
                    alleviate current issues and help prevent any future
                    recurrence.
                  </p>
                </div>
                <Image
                  src={"/Images/home.jpg"}
                  height={500}
                  width={500}
                  alt="home image"
                  className="p-2 border-1 border-gray-300 rounded"
                />
              </div>
              <p className="text-xl font-semibold mt-10 text-white">
                ORION INTEGRATED PEST MANAGEMENT (IPM)
              </p>
              <p className="text-lg text-white">
                Orion IPM is an approach to pest control. It coheres to regular
                monitoring services in order to determine if and when the pest
                treatments are needed.
              </p>
            </div>
          </div>

          {/* Home services */}
          <div className="md:w-[60%] w-[90%] mx-auto mt-10">
            <h3 className="text-center text-[#2F3293] font-bold text-5xl">
              Services
            </h3>
            <div className="mx-auto grid grid-cols-2 md:grid-cols-4 md:gap-5 w-full mt-10 gap-2">
              {homeServices.map((item, index) => (
                <Link
                  href={`${item.link}`}
                  className="flex flex-col items-center justify-center gap-3 hover:shadow-2xl p-3 cursor-pointer py-5"
                  key={index}
                >
                  <Image
                    src={item.image}
                    height={250}
                    width={250}
                    alt={`home${index}`}
                    className="p-2 border-1 border-gray-400"
                  />
                  <p className="md:text-lg text-center font-stretch-90%">
                    {item.text}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Review */}
          <div className="w-[90%] md:w-full mx-auto overflow-hidden">
            <div className="md:w-[60%] mx-auto">
              <Review />
            </div>
          </div>

          {/* Yellow area */}
          <div className="bg-linear-to-br from-[#FFF300] to-[#FEBA00] pb-60 md:pb-80 relative mt-10 md:mt-20">
            <div className="w-full md:w-[60%] mx-auto px-5">
              <h2 className="text-2xl md:text-4xl font-bold uppercase text-[#2F3293] pt-16 pb-12 text-center">
                Membership & Certification
              </h2>
              <div className="flex gap-3 items-center justify-center">
                {certifictions.map((image) => (
                  <div
                    className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] relative"
                    key={image.id}
                  >
                    <img
                      src={image?.image}
                      alt="img1"
                      fill
                      className="transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <h4 className="text-center text-3xl font-bold uppercase text-[#2F3293]">
                  Our clients
                </h4>
                <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mt-10 justify-center items-center">
                  {clients.map((client, index) => (
                    <div
                      className="w-24 h-20 md:w-32 md:h-20 relative mx-auto"
                      key={index}
                    >
                      <img
                        src={client}
                        fill
                        alt={`img${index}`}
                        className="transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 rounded-2xl bg-white md:object-cover"
                        key={index}
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      {/* </PageData> */}
    </div>
  );
}
