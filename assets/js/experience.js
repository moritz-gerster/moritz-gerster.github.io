AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Neural Interactions and Dynamics - Clinical Neuroscientist",
    cardImage: "assets/images/experience-page/MPG.jpg",
    place: "Max Planck Institute for Human Cognitive and Brain Sciences",
    time: "(September, 2020 - present)",
    desp: "<li> Led a multidisciplinary, international collaboration across 4 university hospitals in 2 countries (32 coauthors); largest study linking subthalamic brain signals to Parkinson’s disease symptoms (119 patients). </li> <li>Built ML models (Multiple Linear Regression, Extremely Randomized Trees) to predict Parkinson’s disease medication response from local field potential spectral features; addressed generalization challenges across heterogeneous cohorts.</li> <li>Boosted symptom prediction performance using multiple linear regression with novel spectral features (r=0.47), doubling correlations reported in prior large-scale studies (r≈0.21). </li>",
  },
  {
    title: "Wellcome Trust Centre for Neuroimaging - Research Cooperation",
    cardImage: "assets/images/experience-page/UCL.jpg",
    place: "University College London",
    time: "(May, 2023 - June, 2023)",
    desp: "<li> Spectral parametrization of local field potential (LFP) spectra in Dystonia. </li> <li> MEG-LFP connectivity analysis in Parkinson's disease. </li>",
  },
  {
    title: "MRC Brain Network Dynamics Unit - Research Cooperation",
    cardImage: "assets/images/experience-page/Oxford.png",
    place: "University of Oxford",
    time: "(March, 2023 - April, 2023)",
    desp: "<li> Studied structural brain connectivity using diffusion MRI-based tractography. </li> <li> Investigated its relationship to functional connectivity inferred from brain oscillations.</li>",
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
    desp: "<li> Modeled epileptic seizures; achieved the group’s first empirical validation of seizure models using EEG techniques self-learned in a clinical epilepsy research lab at Stanford, bridging theory with empirical data. </li> <li>Published Master’s thesis as two first-author papers (Chaos, 2020; Front. Syst. Neurosci., 2021; 170+ citations combined), demonstrating rapid, high-impact research execution under tight timelines.</li>", // <li>Gerster et al. (2020)</li>
  },
  {
    title: "Laboratory of Behavioral and Cognitive Neuroscience  - Research Assistant",
    cardImage: "assets/images/experience-page/Stanford.png",
    place: "Stanford University",
    time: "(February, 2020 - March, 2020)",
    // desp: "<li>Analyzed phase-amplitude coupling in human electrocorticography data.</li>",
    desp: "<li>Analyzed electrocorticography (ECoG) and stereoelectroencephalography (SEEG) data collected from human subjects.</li> <li>Evaluated phase-amplitude coupling during mathematical tasks.</li>",
  },
  {
    title: "MathNeuro Team - Research Cooperation",
    cardImage: "assets/images/experience-page/INRIA.png",
    place: "Inria",
    time: "(October, 2019)",
    // desp: "<li>Modeled epileptic seizure propagation (Gerster et al. 2021).</li>",
    desp: "<li> Modeled epileptic seizures using quadratic integrate and fire neurons. </li> <li>Compared neural dynamics on structural brain networks from healthy and epileptic subjects.</li><li> Determined seizure recruitment and propagation dynamics.</li>", // <li>Gerster et al. (2021)</li>
  },
  {
    title: "Core Facility 7T Experimental MRIs - Research Assistant",
    cardImage: "assets/images/experience-page/Charite.jpg",
    place: "Charité",
    time: "(November, 2015 - May, 2018)",
    // desp: "<li>Comparison of Magnetic Resonance Perfusion Imaging Methods after Stroke.</li>",
    desp: "<li>Determined magnetic relaxivities of new contrast agents using magnetic resonance imaging (MRI).</li> <li>Computed lesion sizes of ischemic strokes in mice.</li> <li>Created blood flow maps using arterial spin labeling and dynamic susceptibility contrast imaging.</li>",
  },
  {
    title: "Electrical Geodesics, Inc. - Research Assistant",
    cardImage: "assets/images/experience-page/BEL.png",
    place: "Brain Electrophysiology Laboratory",
    time: "(January, 2015 - June, 2015)",
    desp: "<li>Conducted high-density EEG experiments on language, attention, and affect.</li>",
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
    title: "MNE-Python",
    cardImage: "assets/images/experience-page/MNE.svg",
    description:
      "Three bug fixes, one enhancement.",
  },
  {
    title: "MNE-BIDS",
    // cardImage: "assets/images/experience-page/MNE-BIDS.png",
    cardImage: "assets/images/experience-page/MNEBIDS.gif",
    description:
      "Add function mne_bids.find_matching_paths to enable smart dataset filtering.",
  },
  // {
  //   title: "MNE-Connectivity",
  //   // cardImage: "assets/images/experience-page/MNE-BIDS.png",
  //   cardImage: "assets/images/experience-page/MNEBIDS.gif",
  //   description:
  //     "Improve doc.",
  // },
  {
    title: "YASA",
    cardImage: "assets/images/experience-page/YASA.png",
    description:
      "Inform users of irasa function about evaluated fitting range and raise warnings when used incorrectly.",
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
    title: "ReTune Hackathon 2022",
    subtitle: "Guide",
    image: "assets/images/experience-page/Hackathon.png",
    desp: "Led a team of mostly inexperienced Python programmers to work on MNE-Python enhancements.",
  },
  {
    title: "ReTune Hackathon 2023",
    subtitle: "Participant",
    image: "assets/images/experience-page/Hackathon.png",
    desp: "Research on public neuropixel dataset; our team of n=2 replicated Manning (2009) in just 3 days; related LFPs to neural spiking activity.",
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
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
