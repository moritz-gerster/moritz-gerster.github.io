AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Neural Interactions and Dynamics - Clinical Neuroscientist",
    cardImage: "assets/images/experience-page/MPG.jpg",
    place: "Max Planck Institute for Human Cognitive and Brain Sciences",
    time: "(September, 2020 - present)",
    desp: "Deep brain stimulation research in Parkinson's disease.",
  },
 /* {
    title: "CRC 910: Control of self-organizing nonlinear systems - Technical Assistant",
    cardImage: "assets/images/experience-page/TU.png",
    place: "Technische Universität Berlin",
    time: "(July, 2018 - December, 2022)",
    desp: "<li>Technical assistance and organization of talks and conferences </li> <li>updating the CRC 910 website</li>",
  },*/
  {
    title: "Nonlinear Dynamics and Control - Research Assistant",
    cardImage: "assets/images/experience-page/TU.png",
    place: "Technische Universität Berlin",
    time: "(November, 2017 - July, 2020)",
    // desp: "<li>Modeled epileptic seizures origination (Gerster et al. 2020).</li>",
    desp: "<li> Simulated human brain using the FitzHugh-Nagumo model with empirical connectivities </li> <li>Investigated emergence, propagation, and termination of epileptic seizures</li> <li>Evaluated the role of the network topology using graph theory</li>", // <li>Gerster et al. (2020)</li>
  },
  {
    title: "Laboratory of Behavioral and Cognitive Neuroscience  - Research Assistant",
    cardImage: "assets/images/experience-page/Stanford.png",
    place: "Stanford University",
    time: "(February, 2020 - March, 2020)",
    // desp: "<li>Analyzed phase-amplitude coupling in human electrocorticography data.</li>",
    desp: "<li>Analyzed electrocorticography (ECoG) and stereoelectroencephalography (SEEG) data collected from human subjects </li> <li>Analyzed phase-amplitude coupling during mathematical tasks</li>",
  },
  {
    title: "MathNeuro Team - Research Cooperation",
    cardImage: "assets/images/experience-page/INRIA.png",
    place: "Inria",
    time: "(October, 2019)",
    // desp: "<li>Modeled epileptic seizure propagation (Gerster et al. 2021).</li>",
    desp: "<li> Simulated epileptic seizures using quadratic integrate and fire neurons </li> <li>Compared simulation between healthy and epileptic diffusion tensor imaging topologies </li><li> Determined seizure recruitment and propagation dynamics</li>", // <li>Gerster et al. (2021)</li>
  },
  {
    title: "Core Facility 7T Experimental MRIs - Research Assistant",
    cardImage: "assets/images/experience-page/Charite.jpg",
    place: "Charité",
    time: "(November, 2015 - May, 2018)",
    // desp: "<li>Comparison of Magnetic Resonance Perfusion Imaging Methods after Stroke.</li>",
    desp: "<li>Determined the magnetic relaxivities of new contrast agents in dependence of their temperature using magnetic resonance imaging (MRI) </li> <li>Computed lesion sizes of ischemic strokes in mice</li> <li>Created blood flow maps using arterial spin labeling and dynamic susceptibility contrast imaging</li>",
  },
  {
    title: "Electrical Geodesics, Inc. - Research Assistant",
    cardImage: "assets/images/experience-page/BEL.png",
    place: "Brain Electrophysiology Laboratory",
    time: "(January, 2015 - June, 2015)",
    desp: "Conducted dense array electroencephalography experiments on language, attention, and affect.",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400">
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">

      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>

      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "The Uplift Project",
    subtitle: "Mentor",
    image: "assets/images/experience-page/uplift.png",
    desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
  },
  {
    title: "ULHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
  },
  {
    title: "WaffleHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/wafflehacks.png",
    desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
  },
  {
    title: "Elevate Tech",
    subtitle: "Judge",
    image: "assets/images/experience-page/elevate.png",
    desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
  },
  {
    title: "PitchTeen",
    subtitle: "Judge",
    image: "assets/images/experience-page/pitchteen.png",
    desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
  },
  {
    title: "Hack-A-Solution",
    subtitle: "Judge",
    image: "assets/images/experience-page/hackasolution.png",
    desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
  },
  {
    title: "UniGlobe Hacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/uniglobe.png",
    desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
  },
  {
    title: "AtlasHacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/atlas.png",
    desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
  },
  {
    title: "NeoHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/neo.png",
    desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
  },
  {
    title: "Mission Inspired",
    subtitle: "Judge",
    image: "assets/images/experience-page/mission.png",
    desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
  },
  {
    title: "Hack3",
    subtitle: "Judge",
    image: "assets/images/experience-page/hack3.png",
    desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
  },
  {
    title: "JITHack",
    subtitle: "Mentor",
    image: "assets/images/experience-page/jithack.png",
    desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
  },
  {
    title: "Recess Hacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/recess.png",
    desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
  },
  {
    title: "Citro Tech",
    subtitle: "Mentor",
    image: "assets/images/experience-page/citro.png",
    desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
  },
  {
    title: "NHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/nhacks.png",
    desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
