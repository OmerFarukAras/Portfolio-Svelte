<script>
  import { Image, Col, Row, Container, Nav } from "@sveltestrap/sveltestrap";
  import ChangeText from "./components/ChangeText.svelte";
</script>

<div class="center-box">
  <div class="content-box">
    <Container>
      <Container>
        <Row>
          <Col xs="4" class="text-center vertical-line align-self-center">
            <div class="left-box">
              <Row>
                <Col xs="12">
                  <a href="/">
                    <Image
                      data-bs-theme="dark"
                      fluid
                      class="rounded-circle my-2 shadow"
                      style="width:60%"
                      alt="This is a thumbnail Image"
                      src="/pp.jpg"
                    />
                  </a>
                </Col>
                <Col xs="12"><h1 class="montserrat">Ömer Faruk Aras.</h1></Col>
                <Col xs="6" class="mx-auto"><hr /></Col>

                <Col xs="12"><ChangeText></ChangeText></Col>
                <Col xs="6" class="mx-auto"><hr /></Col>
                <Col xs="12">
                  <Nav>
                    <Row class="mx-auto montserrat">
                      <a href="/about" class="btn btn-outline-light my-2">
                        About Me
                      </a>
                      <a href="/portfolio" class="btn btn-outline-light my-2">
                        Portfolio
                      </a>
                      <a href="/contact" class="btn btn-outline-light my-2">
                        Contact
                      </a>
                    </Row>
                  </Nav>
                </Col>
              </Row>
            </div>
          </Col>
          <div class="col-8 text-center">
            <Container class="montserrat">
              <slot></slot>
            </Container>
          </div>
        </Row>
      </Container>
    </Container>
  </div>
</div>
