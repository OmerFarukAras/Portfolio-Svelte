<script>
  import { Container, Row, Col, Image } from "@sveltestrap/sveltestrap";
  let imgs = [
    { data: "/IMG5.png", link: "/portfolio/projects" },
    { data: "/IMG2.JPG", link: "/portfolio/photos" },
    { data: "/IMG6.png", link: "/portfolio/projects" },
    { data: "/IMG3.JPG", link: "/portfolio/photos" },
    { data: "/IMG7.png", link: "/portfolio/projects" },
    { data: "/IMG4.JPG", link: "/portfolio/photos" },
    { data: "/IMG8.png", link: "/portfolio/projects" },
    { data: "/IMG9.JPG", link: "/portfolio/photos" },
  ];
</script>

<main class="homepage">
  <div>
    <h1 class="text-end">Portfolio</h1>
    <hr />
  </div>
  <Container>
    <Container>
      <Row class="overflow-auto p-2 " style="max-height:400px">
        {#each imgs as img}
          <Col xs="6">
            <a href={img["link"]}>
              <Image fluid src={img["data"]} class="my-1" />
            </a>
          </Col>
        {/each}
      </Row>
    </Container>
    <nav class="my-4">
      <a href="/portfolio/projects" class="btn btn-light mx-4">
        <i class="bi bi-arrow-left-short"></i>&nbsp;Projects
      </a>
      <a href="/portfolio/photos" class="btn btn-light mx-4">
        Photos &nbsp;<i class="bi bi-arrow-right-short"></i>
      </a>
    </nav>
  </Container>
</main>
