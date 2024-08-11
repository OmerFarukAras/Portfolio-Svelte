<script>
  import { Container, Badge } from "@sveltestrap/sveltestrap";
  let experiences = [
    {
      name: "PROJECT MANAGER & SOFTWARE DEVELOPER, ANATOLIA IN TEKNOFEST, 2019 - 2022",
      detail:
        "Project leader, Algorithmic irrigation systems and integrated circuits (NodeJS, Esp32 and python)",
    },
    {
      name: "FULL-STACK SOFTWARE DEVELOPER, AITT IN TEKNOFEST, 2022 - 2023 ",
      detail:
        "Management team, Car screen ui and electronic differential system (go and rust)",
    },
    {
      name: "FULL-STACK SOFTWARE DEVELOPER, SPARK TECHNOLOGIES, 2023 - 2023 ",
      detail: "Express API’s and MongoDB management",
    },
    {
      name: "BACK-END SOFTWARE DEVELOPER, GOACTION TECHNOLOGIES, 2023 - 2023",
      detail: "Express API’s management",
    },
    {
      name: "SOFTWARE DEVELOPER, UET IN TEKNOFEST, 2023- NOW ",
      detail: "Vehicle Softwares & Hardware Software Integration.",
    },
    {
      name: "SOFTWARE DEVELOPER & TEAM LEADER, TÜBITAK 2209A, 2023- NOW ",
      detail: "Agricultural Applications & Social Platforms Developing.",
    },
    {
      name: "INDEPENT SOFTWARE DEVELOPER FOR OILS4US, 2024- NOW ",
      detail:
        "Developed and maintained Node.js and AWS-based projects, analyzed client needs, and implemented solutions to meet specific requirements.",
    },
  ];
  let educations = [
    {
      name: "ADVANCED SOFTWARE DEVELOPING BOOTCAMP, ÜRETKEN AKADEMI & BURSA BÜYÜKŞEHIR BELEDIYESI, 2023 - 2024 ",
      detail: "ReactJS, Project Management, Front-End Developing",
    },
    {
      name: "ŞÜKRÜ ŞANKAYA ANADOLU LISESI, 2019 - 2023 ",
      detail: "Teknofest Effiency Challenge in AITT, Tübitak 4006",
    },
    {
      name: "ULUDAĞ ÜNIVERSITESI, BILGISAYAR PROGRAMCILIĞI, 2023 - 2025 ",
      detail: "Teknofest Effiency Challenge in UET, Tübitak 2209-A",
    },
  ];
  let skills = [
    "Javascript",
    "NodeJS",
    "Go",
    "Python",
    "Arduino",
    "TypeScript",
    "Java",
    "AWS",
    "MongoDB",
    "Svelte",
    "React",
    "Redis",
    "ElectronJS",
    "Linux",
  ];
</script>

<main class="homepage">
  <div>
    <h1 class="text-end">Home</h1>
    <hr />
  </div>
  <Container class="overflow-auto p-2 " style="max-height:450px">
    <p class="text-start">
      &emsp;I am a freshman student in Computer Programming at Uludağ University
      in Bursa. I am actively developing APIs based on Node.js and MongoDB,
      focusing on creating efficient and scalable solutions.
    </p>
    <div>
      <h4 class="tshadow">Experience</h4>
      {#each experiences as experience}
        <h6 class="text-start">
          <b>{experience["name"]}</b>
        </h6>
        <p
          class="text-start py-2 roboto-light"
          style="border-bottom:1px solid #bdbdc6;border"
        >
          {experience["detail"]}
        </p>
      {/each}
    </div>
    <div>
      <h4 class="tshadow">Education</h4>
      {#each educations as education}
        <h6 class="text-start">
          <b>{education["name"]}</b>
        </h6>
        <p
          class="text-start py-1 roboto-light"
          style="border-bottom:1px solid #bdbdc6"
        >
          {education["detail"]}
        </p>
      {/each}
    </div>

    <h4>Skills</h4>

    <p class="text-start">
      {#each skills as skill}
        <Badge class="mx-1" color="light">{skill}</Badge>
      {/each}
    </p>
  </Container>
</main>
