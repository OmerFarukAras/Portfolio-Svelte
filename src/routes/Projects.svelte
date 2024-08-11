<script>
  import {
    Container,
    Row,
    Col,
    Image,
    Card,
    CardBody,
    CardHeader,
    CardText,
    CardTitle,
  } from "@sveltestrap/sveltestrap";
  let projects = [
    {
      name: "Oils4Us ",
      description:
        "Oils4Us is a company specializing in oil recycling. I am currently working with Oils4Us, focusing on the software aspects and admin panels. Currently using AWS EC2, Lambda, DynamoDB, and Node.js.",
      photo: "IMG5.png",
      link: "https://www.oils4us.co.uk/",
    },
    {
      name: "Artı Tur ",
      description:
        "Artı Tur is a transportation company dedicated to providing efficient and reliable transport solutions. I'm creating and maintaining software solutions that enhance their operational efficiency and improve customer experience.",
      photo: "IMG6.png",
      link: "https://artitur.com/",
    },
    {
      name: "Masel Turizm ",
      description:
      "Masel Turizm is a transportation company dedicated to providing efficient and reliable transport solutions. I'm creating and maintaining software solutions that enhance their operational efficiency and improve customer experience.",
      photo: "IMG7.png",
      link: "https://maselturizm.com/",
    },
    {
      name: "Github",
      description:
      "I develop and update open-source projects on GitHub using languages such as Node.js, Go, and Arduino.",
      photo: "IMG8.png",
      link: "https://github.com/OmerFarukAras",
    },
  ];
</script>

<main class="homepage">
  <div>
    <a href="/portfolio" class="btn btn-dark"
      ><i class="bi bi-arrow-left-short"></i>&nbsp;Go Back
    </a>
    <h1 class="text-end">Projects</h1>
    <hr />
  </div>
  <Container>
    <Row class="overflow-auto p-2 " style="max-height:450px">
      {#each projects as project}
        <Col xs="12">
          <Card body color="dark" inverse class="mb-2">
            <CardHeader>
              <CardTitle>{project["name"]}</CardTitle>
            </CardHeader>
            <CardBody>
              <CardText>
                {project["description"]}
              </CardText>
              <a target="_blank" href={project["link"]}>
                <Image fluid src={project["photo"]} />
              </a>
            </CardBody>
          </Card>
        </Col>
      {/each}
    </Row>
  </Container>
</main>
