import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageData from "@/components/ui/PageData";
import { getPageData } from "@/lib/getPageData";

const tab = [
  {
    tab: "Cockroach",
    id: "cockroach",
  },
  {
    tab: "Bed Bug",
    id: "bed_bug",
  },
  {
    tab: "Termite",
    id: "termites",
  },
  {
    tab: "Bird",
    id: "bird",
  },
  {
    tab: "Mosquito",
    id: "mosquitoes",
  },
  {
    tab: "Fly",
    id: "flies",
  },
  {
    tab: "Rodent",
    id: "rodents",
  },
  {
    tab: "Ant",
    id: "ant",
  },
];

export async function generateMetadata() {
  const page = await getPageData("knowledgebase");
  return {
    title: page?.metaTitle || "Knowledgebase",
    description: page?.metaDescription || "",
  };
}


export default function page() {
  return (
    <div className="w-full">
      <PageData segment={"knowledgebase"}>
        <div className="w-full md:w-[80%] lg:w-[60%] mx-auto relative px-4">
          <h2 className="text-[#2F3293] text-3xl sm:text-4xl lg:text-5xl text-center font-bold mt-10 sm:mt-20">
            Knowledge Base – Orion Pest Control
          </h2>
          <h3 className="text-black text-xl text-center mt-16 font-bold">
            How We Approach Pests
          </h3>
          <p className="mt-4 text-center text-lg">
            We follow Integrated Pest Management (IPM): prevent first
            (sanitation, exclusion, habitat changes), then monitor, and only
            then treat—with the least-risk option that still solves the problem.
          </p>

          <div className="bg-[#ED1C26] w-full p-4 sm:p-6 md:p-8 mt-6 sm:mt-10 md:mt-20 rounded">
            <ul className="flex flex-wrap items-center justify-evenly gap-3 sm:gap-6 text-center">
              {tab.map((tab, index) => (
                <Link
                  key={index}
                  href={`#${tab.id}`}
                  scroll={true}
                  className="text-white font-semibold text-sm sm:text-md md:text-lg cursor-pointer"
                >
                  {tab.tab}
                </Link>
              ))}
            </ul>
          </div>

          <div className="mt-16" id="cockroach">
            <div className="bg-[#2F3293] p-6 w-[100%] md:w-fit text-white font-bold rounded mx-auto md:mx-0 text-center">
              Cockroaches
            </div>
            <p className="font-bold mt-10 text-lg">Why They Matter?</p>
            <p className="mt-3 text-lg">
              Cockroaches contaminate food/surfaces and are major asthma/allergy
              triggers due to potent indoor allergens.
            </p>
            <div className="md:float-right">
              <Image
                src="/Images/bugs/cockroach.png"
                alt="cockroach"
                height="200"
                width="200"
                className="mx-auto"
              />
            </div>
            <div>
              <p className="font-bold mt-5 text-lg">Common signs</p>
              <ul className="list-disc ml-8 text-lg">
                <li>
                  Pepper-like droppings, egg cases (ootheca), shed skins, musty
                  odor
                </li>
                <li>Activity in kitchens, drains, warm/moist voids at night</li>
              </ul>
            </div>
            <div>
              <p className="font-bold mt-5 text-lg">IPM prevention</p>
              <ul className="list-disc ml-8 text-lg">
                <li>
                  Nightly kitchen cleanup; fix leaks; declutter; cover drains
                </li>
                <li>
                  Seal cracks/crevices; deny food/water; sticky traps for
                  monitoring
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold mt-5 text-lg">Life Cycle</p>
              <ul className="list-disc ml-8 text-lg">
                <li>Egg capsules (ootheca) → Nymph → Adult</li>
                <li>
                  One female can produce up to 300–400 offspring in her lifetime
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold mt-5 text-lg">Seasonal Activity</p>
              <ul className="list-disc ml-8 text-lg">
                <li>Active year-round, but infestations peak in warm months</li>
              </ul>
            </div>
            <div>
              <p className="font-bold mt-5 text-lg">
                Professional treatments (when needed)
              </p>
              <ul className="list-disc ml-8 text-lg">
                <li>
                  Bait gels + IGRs as first line; targeted dusts in voids;
                  limited crack-and-crevice sprays (not broadcast) after
                  monitoring.
                </li>
              </ul>
            </div>
            <p className="mt-10 text-lg">
              Cockroaches have survived for millions of years thanks to their
              adaptability. They hide in kitchens, drains, and dark, moist
              places. Most infestations in India involve the German cockroach,
              American cockroach, and Oriental cockroach.
            </p>
          </div>

          <div className="mt-16" id="bed_bug">
            <div className="bg-[#2F3293] p-6 w-[100%] md:w-fit text-white font-bold rounded mx-auto md:mx-0 text-center">
              Bed Bugs
            </div>
            <p className="font-bold mt-10 md:text-right text-lg">
              Why they matter
            </p>
            <p className="mt-3 md:text-right text-lg">
              Bed bugs are expert hitchhikers; bites can cause welts and
              secondary infection from scratching. Most cases need symptomatic
              care, not antibiotics.
            </p>
            <div className="md:float-left flex md:justify-center">
              <Image
                src="/Images/bugs/bed-bug.png"
                alt="bed bug"
                height="150"
                width="150"
                className="mx-auto"
              />
            </div>
            <div>
              <p className="font-bold mt-5 md:text-right text-lg">
                Signs of Infestation
              </p>
              <ul className="list-disc list-inside md:text-right text-lg">
                <li>Rusty blood spots on sheets</li>
                <li>Clusters of itchy bites on skin</li>
                <li>Tiny black droppings on mattress seams</li>
              </ul>
            </div>
            <div>
              <p className="font-bold mt-5 md:text-right text-lg">
                IPM prevention
              </p>
              <ul className="list-disc list-inside md:text-right text-lg">
                <li>
                  Reduce clutter; encase mattresses; launder/dry on high heat
                  (≥60 °C); inspect used furniture and travel bags.
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold mt-5 md:text-right text-lg">Life Cycle</p>
              <ul className="list-disc list-inside md:text-right text-lg">
                <li>Egg → Nymph (5 stages) → Adult</li>
                <li>
                  Can live for months without feeding, making them tough to
                  eradicate
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold md:text-right text-lg">
                Professional treatments
              </p>
              <ul className="list-disc list-inside md:text-right text-lg">
                <li>
                  Heat remediation (whole-room thermal), thorough
                  vacuuming/steam, encasements, targeted insecticides where
                  necessary; follow-up inspections essential.
                </li>
              </ul>
            </div>
            <p className="mt-10 md:text-right float-right text-lg">
              Bed bugs are blood-feeding parasites that hide in beds, furniture,
              and luggage. They are expert hitchhikers, spreading easily through
              travel, second-hand items, or visitors.
            </p>
          </div>

          <div className="mt-48 md:mt-32" id="termites">
            <div className="bg-[#2F3293] p-6 w-[100%] md:w-fit text-white font-bold rounded mx-auto md:mx-0 text-center">
              Termites
            </div>
            <p className="font-bold mt-10 text-lg">Why they matter</p>
            <p className="mt-3 text-lg">
              “Silent destroyers” that eat cellulose and can compromise
              structures before you notice damage.
            </p>
            <div className="md:float-right">
              <Image
                src="/Images/bugs/termites.png"
                alt="termites"
                height="150"
                width="150"
                className="mx-auto"
              />
            </div>
            <div>
              <p className="font-bold mt-5 text-lg">Key signs</p>
              <ul className="list-disc ml-8 text-lg">
                <li>
                  Mud tubes on foundations/walls; hollow or papery wood;
                  discarded wings near windows/doors after swarms.
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold mt-5 text-lg">IPM prevention</p>
              <ul className="list-disc ml-8 text-lg">
                <li>
                  Fix moisture problems/grade water away; keep wood and mulch
                  off foundations; remove stumps/wood debris; schedule annual
                  inspections.
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold mt-5 text-lg">Life Cycle</p>
              <ul className="list-disc ml-8 text-lg">
                <li>Egg → Nymph → Worker/Soldier/Queen</li>
                <li>
                  Colonies can last decades and contain millions of termites
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold mt-5 text-lg">Professional treatments</p>
              <ul className="list-disc ml-8 text-lg">
                <li>
                  Soil barrier termiticides around foundations, plus bait
                  systems to eliminate colonies; documentation & re-inspections
                  to verify control.
                </li>
              </ul>
            </div>
            <p className="mt-10 text-lg">
              Known as “silent destroyers,” termites feed on cellulose in wood,
              books, and even drywall. In India, subterranean termites cause the
              most damage.
            </p>
          </div>

          <div className="mt-16" id="bird">
            <div className="bg-[#2F3293] p-6 w-[100%] md:w-fit text-white font-bold rounded mx-auto md:mx-0 text-center">
              Birds (e.g., Pigeons) – Humane Control
            </div>
            <p className="font-bold mt-10 md:text-right text-lg">
              Why they matter
            </p>
            <p className="mt-3 md:text-right text-lg">
              Droppings can harbor Histoplasma and other pathogens; nests clog
              drains/HVAC and corrode surfaces. Prevention focuses on exclusion,
              not harm.
            </p>
            <div className="md:float-left">
              <Image
                src="/Images/bugs/bird.png"
                alt="cockroach"
                height="200"
                width="200"
                className="mx-auto"
              />
            </div>
            <div>
              <p className="font-bold mt-5 md:text-right text-lg">
                Why They’re Dangerous
              </p>
              <ul className="list-disc list-inside md:text-right text-lg">
                <li>
                  Droppings carry pathogens like Histoplasmosis and Salmonella
                </li>
                <li>Acidic droppings corrode metal and paint</li>
                <li>Nesting materials block drains and HVAC systems</li>
              </ul>
            </div>
            <div>
              <p className="font-bold mt-5 md:text-right text-lg">
                IPM prevention
              </p>
              <ul className="list-disc list-inside md:text-right text-lg">
                <li>
                  Keep ledges/roofs clean; secure waste/food; remove standing
                  water; block roosts.
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold mt-5 md:text-right text-lg">
                Professional treatments
              </p>
              <ul className="list-disc list-inside md:text-right text-lg">
                <li>
                  Netting, spikes, ledge modifications, visual/audio deterrents,
                  and sanitation of droppings using safe work
                  practices/respiratory protection where indicated.
                </li>
              </ul>
            </div>
            <p className="mt-10 md:text-right float-right text-lg">
              Birds often nest on rooftops, balconies, and machinery, leading to
              hygiene and safety issues.
            </p>
          </div>

          <div className="mt-32" id="mosquitoes">
            <div className="bg-[#2F3293] p-6 w-[100%] md:w-fit text-white font-bold rounded mx-auto md:mx-0 text-center">
              Mosquitoes
            </div>
            <p className="font-bold mt-10 text-lg">Why they matter</p>
            <p className="mt-3 text-lg">
              Mosquitoes are the deadliest animal to humans—transmitting
              malaria, dengue, chikungunya, Zika, yellow fever, and more.
            </p>
            <div className="md:float-right">
              <Image
                src="/Images/bugs/mosquito.png"
                alt="mosquito"
                height="200"
                width="200"
                className="mx-auto"
              />
            </div>
            <div>
              <p className="font-bold mt-5 text-lg">Transmission & breeding</p>
              <ul className="list-disc ml-8 text-lg">
                <li>
                  Aedes aegypti/albopictus spread dengue and chikungunya; they
                  bite mainly daytime and lay eggs in small containers with
                  standing water.
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold mt-5 text-lg">IPM prevention</p>
              <ul className="list-disc ml-8 text-lg">
                <li>
                  Eliminate stagnant water (pots, trays, tyres, gutters) weekly;
                  fit window/door screens; use larvicides where water can’t be
                  drained; fans reduce bites indoors.
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold mt-5 text-lg">Life Cycle</p>
              <ul className="list-disc ml-8 text-lg">
                <li>Egg → Larva → Pupa → Adult (7–10 days)</li>
              </ul>
            </div>
            <div>
              <p className="font-bold mt-5 text-lg">Professional treatments</p>
              <ul className="list-disc ml-8 text-lg">
                <li>
                  Source reduction + larviciding for breeding sites; space
                  sprays/fogging only as part of outbreaks and combined with
                  surveillance. (Use judiciously within IPM).
                </li>
              </ul>
            </div>
            <p className="font-bold mt-5 text-lg">Global burden</p>
            <p className="mt-5 text-lg">
              Billions at risk of dengue; tens of thousands of deaths annually
              worldwide from vector-borne diseases.
            </p>
            <p className="mt-5 text-lg">
              Mosquitoes are the deadliest insects in the world, spreading
              life-threatening diseases. They breed in stagnant water—even in
              small containers like flowerpots or bottle caps.
            </p>
          </div>

          <div className="mt-16" id="flies">
            <div className="bg-[#2F3293] p-6 w-[100%] md:w-fit text-white font-bold rounded mx-auto md:mx-0 text-center">
              Flies (House/Drain/Fruit)
            </div>
            <p className="font-bold mt-10 md:text-right text-lg">
              Why they matter
            </p>
            <p className="mt-3 md:text-right text-lg">
              Filth flies mechanically transmit foodborne pathogens (e.g., E.
              coli O157:H7, Salmonella, Listeria) via contaminated body
              surfaces/regurgitation.
            </p>
            <div>
              <p className="font-bold mt-5 md:text-right text-lg">
                Why They’re Dangerous
              </p>
              <ul className="list-disc list-inside md:text-right text-lg">
                <li>
                  Carry 100+ pathogens including Cholera, Typhoid, and Dysentery
                </li>
                <li>Contaminate food by regurgitating digestive fluids</li>
              </ul>
            </div>
            <div className="md:float-left">
              <Image
                src="/Images/bugs/fly.png"
                alt="fly"
                height="200"
                width="200"
                className="mx-auto"
              />
            </div>
            <div>
              <p className="font-bold mt-5 md:text-right text-lg">
                IPM prevention
              </p>
              <ul className="list-disc list-inside md:text-right text-lg">
                <li>
                  Sanitation: seal trash, clean spills, maintain drains; install
                  tight screens; manage produce storage; UV flylights in
                  commercial kitchens away from food prep.
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold mt-5 md:text-right text-lg">
                Professional treatments
              </p>
              <ul className="list-disc list-inside md:text-right text-lg">
                <li>
                  Source sanitation, drain biofilm treatment, strategic
                  trapping/monitoring; targeted insecticides only after sources
                  are controlled.
                </li>
              </ul>
            </div>
            <p className="mt-10 md:text-right float-right text-lg">
              Houseflies, fruit flies, and drain flies are common in India. They
              breed in garbage, drains, and organic waste.
            </p>
          </div>

          <div className="mt-52" id="rodents">
            <div className="bg-[#2F3293] p-6 w-[100%] md:w-fit text-white font-bold rounded mx-auto md:mx-0 text-center">
              Rodents (Rats & Mice)
            </div>
            <p className="font-bold mt-10 text-lg">Why they matter</p>
            <p className="mt-3 text-lg">
              Rodents spread Leptospirosis, Hantavirus and contaminate food;
              gnawing can cause fires and equipment damage.
            </p>
            <div>
              <p className="font-bold mt-5 text-lg">Why They’re Dangerous</p>
              <ul className="list-disc ml-8 text-lg">
                <li>Spread Hantavirus, Leptospirosis, Plague</li>
                <li>Gnaw wires (fire risk) and contaminate food storage</li>
                <li>Damage crops and packaging in warehouses</li>
              </ul>
            </div>
            <div className="md:float-right">
              <Image
                src="/Images/bugs/rodents.png"
                alt="rodents"
                height="200"
                width="200"
                className="mx-auto"
              />
            </div>
            <div>
              <p className="font-bold mt-5 text-lg">IPM prevention</p>
              <ul className="list-disc ml-8 text-lg">
                <li>
                  Seal entry holes ≥ 6–7 mm; door sweeps; store food airtight;
                  remove clutter; maintain landscaping and drainage.
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold mt-5 text-lg">Life Cycle</p>
              <ul className="list-disc ml-8 text-lg">
                <li>
                  Reproduce rapidly: a pair can produce up to 2,000 offspring in
                  a year
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold mt-5 text-lg">Professional treatments</p>
              <ul className="list-disc ml-8 text-lg">
                <li>
                  Exclusion + sanitation; snap traps and tamper-resistant bait
                  stations where justified; safe cleanup of droppings/nests
                  using recommended PPE and methods.
                </li>
              </ul>
            </div>
            <p className="mt-5 text-lg">
              Rodents damage property, chew wires, and spread diseases. Common
              species in India: House mouse, Norway rat, and Roof rat.
            </p>
          </div>

          <div className="mt-16" id="ant">
            <div className="bg-[#2F3293] p-6 w-[100%] md:w-fit text-white font-bold rounded mx-auto md:mx-0 text-center">
              Ants (including Carpenter Ants)
            </div>
            <p className="font-bold mt-10 md:text-right text-lg">
              Why they matter
            </p>
            <p className="mt-3 md:text-right text-lg">
              Ants contaminate food; carpenter ants excavate wood causing
              structural issues. Effective control targets the colony, not just
              foragers.
            </p>
            <div>
              <p className="font-bold mt-5 md:text-right text-lg">
                Why They’re Dangerous
              </p>
              <ul className="list-disc list-inside md:text-right mt-3 text-lg">
                <li>Contaminate food and storage</li>
                <li>Painful stings (fire ants)</li>
                <li>Carpenter ants damage wooden structures</li>
              </ul>
            </div>
            <div className="md:float-left">
              <Image
                src="/Images/bugs/ant.png"
                alt="ant"
                height="200"
                width="200"
                className="mx-auto"
              />
            </div>
            <div>
              <p className="font-bold mt-5 md:text-right text-lg">
                IPM prevention
              </p>
              <ul className="list-disc list-inside md:text-right mt-3 text-lg">
                <li>
                  Eliminate food/water sources (sugar/grease spills); seal entry
                  points; prune vegetation off walls; manage moisture.
                  Non-repellent baits carried back to the nest are most
                  effective for long-term control.
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold mt-5 md:text-right text-lg">
                Professional treatments
              </p>
              <ul className="list-disc list-inside md:text-right mt-3 text-lg">
                <li>
                  Species ID → bait strategy (sweet/protein based by
                  species/season) + spot treatments; for carpenter ants, address
                  moisture/rot and treat nests/voids after locating trails.
                </li>
              </ul>
            </div>
            <p className="mt-10 md:text-right float-right text-lg">
              Ants live in colonies with thousands of members. Common species in
              India: Black ants, red ants, and carpenter ants.
            </p>
          </div>

          <div className="bg-gradient-to-b from-[#FFF300] to-[#FEBA00] relative mt-52 pt-10 px-10 md:px-20 pb-60 md:pb-80 rounded-4xl flex flex-col gap-7">
            <p className="text-lg">
              At Orion Pest Solutions, we believe that effective pest control
              goes far beyond just spraying chemicals. That is why we follow the
              principles of Integrated Pest Management (IPM), a scientifically
              proven and environmentally responsible approach that emphasizes
              inspection, identification, monitoring, and targeted treatment.
              Our process begins with a thorough inspection of your property,
              where our trained professionals carefully analyze signs of pest
              activity. Next, we move to identification, ensuring we correctly
              recognize the exact pest species and the root causes of the
              infestation. Finally, our treatment phase focuses on using the
              safest, most effective, and environmentally conscious solutions
              that not only eliminate existing pests but also prevent future
              infestations.
            </p>
            <p className="text-lg">
              We provide specialized solutions for a wide range of pests. For
              cockroaches, which are resilient and often hide in dark, moist
              places, we use targeted baits and gel treatments while also
              helping customers with sanitation advice. In the case of bed bugs,
              which hide in mattresses and furniture and feed on human blood,
              Orion offers advanced heat and chemical treatment combinations
              that eradicate them from even the tiniest cracks. Termite control
              is another area where our expertise shines, as termites silently
              damage wooden structures and furniture. We use soil treatments,
              liquid barriers, and monitoring systems to stop termite colonies
              before they cause irreversible harm. For birds, which can spread
              diseases and damage property, we install humane deterrents such as
              nets, spikes, and sound-based systems to keep them away without
              harming them.
            </p>
            <p className="text-lg">
              When it comes to mosquitoes and flies, both notorious carriers of
              diseases, Orion offers long-lasting larvicide treatments, fogging,
              and habitat management to control breeding grounds. For rodents
              such as rats and mice, we combine traps, baiting stations, and
              entry-point sealing to ensure complete rodent exclusion. Finally,
              for ants, which may invade homes and food supplies, our
              technicians apply eco-safe sprays, gels, and colony-targeting
              treatments to deliver lasting relief.
            </p>
            <p className="text-lg">
              What sets Orion Pest Solutions apart is not only our technical
              expertise but also our commitment to prevention. With every
              service, we provide clients with guidance on cleanliness, waste
              management, and structural repairs to reduce pest entry points. By
              combining cutting-edge technology, eco-friendly methods, and
              continuous monitoring, Orion ensures that your home or business
              stays pest-free throughout the year. Our IPM approach guarantees
              that treatments are only applied when necessary, reducing
              unnecessary chemical use and ensuring the safety of your family,
              pets, and the environment.
            </p>
            <p className="text-lg">
              Orion Pest Solutions is more than just a pest control service
              provider – we are a trusted partner in protecting your health,
              property, and peace of mind. Whether you are dealing with stubborn
              cockroaches, destructive termites, blood-feeding bed bugs, or
              disease-spreading mosquitoes, our professional team is equipped to
              handle it all with precision and care. With customized treatment
              plans, regular inspections, and guaranteed results, Orion makes
              sure that pests are not only removed but also kept away for good.
              This dedication to excellence and eco-conscious pest control is
              why thousands of customers rely on Orion as their long-term pest
              management partner.
            </p>
          </div>
        </div>
      </PageData>
    </div>
  );
}
