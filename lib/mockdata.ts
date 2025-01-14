import img from "@/public/images/services/png/community.png";
import gridOne from "@/public/images/services/png/grid-one.png";
import gridTwo from "@/public/images/services/png/grid-two.png";
import gridThree from "@/public/images/services/png/grid-three.png";
import gridFour from "@/public/images/services/png/grid-four.png";
import { TimelineItemContent } from "./interface";

export const constructionSteps = [
  {
    title: "Preliminary Works & Demolitions",
    description:
      "Before preliminary and demolition works commence on any of our sites, we conduct an asbestos survey. Where asbestos is found, it is removed per guidelines listed in Parts 1, 2 and 2 of BS 8520.",
  },
  {
    title: "Materials Delivery to Site",
    description:
      "Our scheduling deliveries to a site are carefully considered because of our commitment that guarantees the continuity of access for adjoining properties.",
  },
  {
    title: "Scaffolding and Temporary Structures",
    description:
      "Where the scaffolding used obstructs a public pavement or pedestrian path, a gantry can be provided over the extent of the pavement covered to facilitate the removal and movement of materials and waste from the site. ",
  },
  {
    title: "Internal and External Works",
    description:
      "Both internal and external works will comprise the completion of proposed works - renovation, refurbishment, extension and fit-out - throughout all relevant floors of the existing building or structure and will also entail renewal of all relevant services.",
  },
  {
    title: "Health and Safety on Site",
    description:
      "Pearl Projects is committed to operating a project site that is safe and without risk to health, safety and welfare to all those involved in the project and for third parties as well. We are also committed to preventing accidents and ill health for our staff, client, (sub)-contractors, third parties and members of the public.",
  },
];


export const timelineItems: TimelineItemContent[] = [
  {
    title: "Why Pearl Projects?",
    description:
      "For Pearl Projects and Development, being a good Project Manager means strength of character with an added ability to understand the client and their brief and clearly communicate this to the team as part of the project process. Our PMs earn the client's trust and respect of their team, ensuring each project is not just delivered but is a success.",
    icon: img,
  },
  {
    title: "What we Offer",
    description: {
      text: "The services our PM teams provide includes:",
      bullets: [
        "Independent professional project management of all types of building and construction projects",
        "Briefing and Feasibility Process",
        "Move Management and Occupational space audits",
        "Post project review and evaluation",
      ],
    },
    icon: img,
  },
  {
    title: "Our Approach",
    description:
      "Each client brief is facilitated by our Director and the supporting team. Across Pearl Projects and Development, there are individuals with unique areas of expertise. Many work on several client projects and are on our Project Management team. Given their skills and experience, they work to guarantee the successful delivery of all client projects.",
    icon: img,
  },
];

export const services = [
  {
    title: "BUILDING CONVERSION",
    description:
      "Our teams were involved with and responsible for several client conversion projects. Two of the most common conversion projects we have been involved with and were responsible for have been garage and loft conversions. Consequently, we have built up our wealth of experience addressing many of the typical challenges encountered when working through a use conversion project, changing a space from one use type to another and creating a new layout for the given space.",
    imageSrc: gridOne,
  },
  {
    title: "BUILDING REFURBISHMENT",
    description:
      "All our refurbishment projects and engagements at Pearl Projects and Developments primarily enlist the service and expertise of the best craftsmen from across London and Greater London, ensuring we deliver the highest-quality projects with exceptional workmanship that exceeds client expectations. For refurbishment projects, we observe that refurbishment projects typically requested and carried out by our teams include remodelling kitchens and bathrooms, whilst some entail updating internal spaces, furnishing and fittings.",
    imageSrc: gridTwo,
  },
  {
    title: "BUILDING EXTENSION",
    description:
      "All our refurbishment projects and engagements at Pearl Projects and Developments primarily enlist the service and expertise of the best craftsmen from across London and Greater London, ensuring we deliver the highest-quality projects with exceptional workmanship that exceeds client expectations. For refurbishment projects, we observe that refurbishment projects typically requested and carried out by our teams include remodelling kitchens and bathrooms, whilst some entail updating internal spaces, furnishing and fittings.",
    imageSrc: gridThree,
  },
  {
    title: "NEW DEVELOPMENT",
    description:
      "At Pearl Projects and Development, we regard handling a new build project or development as a series of specialist activities. These activities produce a new property and/ or dwelling built for public, commercial or private use and will require access to relevant utility services to become habitable. So, on each new build project, we take responsibility and ensure our client's brief is executed and clearly interpreted.",
    imageSrc: gridFour,
  },
];
