<script>
  import { Container, Row, Col, Image } from "@sveltestrap/sveltestrap";
  let imgs = ["/IMG2.JPG", "/IMG3.JPG", "/IMG4.JPG", "/IMG9.JPG"];
</script>

<main class="homepage">
  <div>
    <a href="/portfolio" class="btn btn-dark"
      ><i class="bi bi-arrow-left-short"></i>&nbsp;Go Back
    </a>
    <h1 class="text-end">Photos</h1>
    <hr />
  </div>
  <Container>
      <Row class="overflow-auto p-2 " style="max-height:450px">
        {#each imgs as img}
          <Col xs="6">
              <Image fluid src={img} class="my-1" />
          </Col>
        {/each}
      </Row>
    </Container>
</main>
