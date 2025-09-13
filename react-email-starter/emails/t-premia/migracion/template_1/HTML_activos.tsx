import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface HTMLActivosProps {
  cliente?: string;
  gemasCount?: string;
  activationUrl?: string;
  emailAddress?: string;
  unsubscribeUrl?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const HTMLActivos = ({
  cliente = "Cliente",
  gemasCount = "100",
  activationUrl = "https://tpremia.com.mx/",
  emailAddress = "usuario@example.com",
  unsubscribeUrl = "#"
}: HTMLActivosProps) => (
  <Html>
    <Head>
      <Link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <Link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <Link
        href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap"
        rel="stylesheet"
      />
      <style>{`
        body,
        html {
          font-family: "Red Hat Display", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          font-size: 16px;
          color: #183744;
        }
        .logos--mobile {
          display: none !important;
        }

        @media only screen and (max-width: 620px) {
          table[class=body] h1 {
            font-size: 24px !important;
            line-height: 35px !important;
            margin-bottom: 10px !important;
          }
          table[class=body] h1 > span {
            font-size: 24px !important;
            line-height: 35px !important;
          }
          table[class=body] p,
          table[class=body] ul,
          table[class=body] ol,
          table[class=body] td,
          table[class=body] span,
          table[class=body] a {
            font-size: 16px !important;
          }
          table[class=body] .wrapper,
          table[class=body] .article {
            padding: 10px !important;
          }
          table[class=body] .wrapper.wrapper--mobile{
            padding: 0 !important;
          }
          table[class=body] .content {
            padding: 0 !important;
          }
          table[class=body] .container {
            padding: 0 !important;
            width: 100% !important;
          }
          table[class=body] .main {
            border-left-width: 0 !important;
            border-radius: 0 !important;
            border-right-width: 0 !important;
          }
          table[class=body] .btn table {
            width: 100% !important;
          }
          table[class=body] .btn a {
            width: 100% !important;
          }
          table[class=body] .img-responsive {
            height: auto !important;
            max-width: 100% !important;
            width: auto !important;
          }
          table[class=body] .title,
          table[class=body] .title > * {
            font-size: 18px !important;
            line-height: 30px !important;
          }
          table[class=body] .small {
            font-size: 10px !important;
            line-height: 15px !important;
          }
          table[class=body] .table-logos {
            margin-bottom: 0 !important;
            display: block;
          }
          table[class=body] .table-logos td,
          table[class=body] .table-logos tr {
            display: block;
            width: 100% !important;
            text-align: center !important;
          }
          table[class=body] .table-logos td {
            padding: 8px 0;
          }
          table[class=body] .table-logos tbody {
            width: 100%;
            display: block;
          }
          table[class=body] .table-logos img {
            width: 100% !important;
            max-width: 120px !important;
          }
          table[class=body] .container--aside {
            display: none !important;
          }
          .logos--desktop {
            display: none !important;
          }
          .logos--mobile {
            display: block !important;
          }
        }

        @media all {
          .ExternalClass {
            width: 100%;
          }
          .ExternalClass,
          .ExternalClass p,
          .ExternalClass span,
          .ExternalClass font,
          .ExternalClass td,
          .ExternalClass div {
            line-height: 100%;
          }
          .apple-link a {
            color: inherit !important;
            font-family: inherit !important;
            font-size: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
            text-decoration: none !important;
          }
          #MessageViewBody a {
            color: inherit;
            text-decoration: none;
            font-size: inherit;
            font-family: inherit;
            font-weight: inherit;
            line-height: inherit;
          }
          .btn-primary table td:hover {
            background-color: #34495e !important;
          }
          .btn-primary a:hover {
            background-color: #34495e !important;
            border-color: #34495e !important;
          }
        }
      `}</style>
    </Head>
    <Preview>¡Activa tus gemas rosas y doradas!</Preview>
    <Body
      className="body"
      style={{
        backgroundColor: "#f6f6f6",
        fontFamily: "'Red Hat Display', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        WebkitFontSmoothing: "antialiased",
        fontSize: "14px",
        lineHeight: "1.4",
        margin: "0",
        padding: "0",
        msTextSizeAdjust: "100%",
        WebkitTextSizeAdjust: "100%"
      }}
    >
      <table
        style={{
          borderCollapse: "separate",
          msoTableLspace: "0pt",
          msoTableRspace: "0pt",
          width: "100%",
          backgroundColor: "#f6f6f6"
        }}
      >
        <tr>
          <td
            className="container--aside"
            style={{
              fontFamily: "'Red Hat Display', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
              fontSize: "14px",
              verticalAlign: "top"
            }}
          >
            &nbsp;
          </td>
          <td
            className="container"
            style={{
              fontFamily: "'Red Hat Display', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
              fontSize: "14px",
              verticalAlign: "top",
              display: "block",
              margin: "0 auto",
              maxWidth: "580px",
              padding: "10px",
              width: "580px"
            }}
          >
            <div
              className="content"
              style={{
                boxSizing: "border-box",
                display: "block",
                margin: "0 auto",
                maxWidth: "580px",
                padding: "10px"
              }}
            >
              <table
                className="main"
                style={{
                  borderCollapse: "separate",
                  msoTableLspace: "0pt",
                  msoTableRspace: "0pt",
                  width: "100%",
                  background: "#F2F4FA",
                  borderRadius: "3px",
                  borderSpacing: "0",
                  backgroundImage: `url(${baseUrl}/static/background-neutral.png)`,
                  backgroundRepeat: "repeat",
                  backgroundPosition: "center"
                }}
              >
                <tr>
                  <td
                    className="wrapper"
                    style={{
                      fontFamily: "'Red Hat Display', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                      fontSize: "14px",
                      verticalAlign: "top",
                      boxSizing: "border-box",
                      padding: "20px"
                    }}
                  >
                    <table
                      style={{
                        borderCollapse: "separate",
                        msoTableLspace: "0pt",
                        msoTableRspace: "0pt",
                        width: "100%"
                      }}
                    >
                      <tr>
                        <td
                          style={{
                            fontFamily: "'Red Hat Display', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                            fontSize: "14px",
                            verticalAlign: "top",
                            textAlign: "center"
                          }}
                        >
                          <Text style={{ textAlign: "center" }}>
                            <Img
                              src={`https://res.cloudinary.com/dirjvoxdc/image/upload/v1757043112/tpremia_uismm7.png`}
                              alt="TPremia"
                              width="130"
                              style={{ maxWidth: "130px" }}
                            />
                          </Text>
                          <Text style={{ textAlign: "center" }}>
                            <Img
                              src={'https://res.cloudinary.com/dirjvoxdc/image/upload/v1757043111/title_heug14.png'}
                              alt="¡Activa tus gemas rosas y doradas!"
                              width="500"
                              style={{ maxWidth: "500px", width: "100%" }}
                            />
                          </Text>
                          <Text
                            style={{
                              fontWeight: "bold",
                              fontSize: "32px",
                              textAlign: "center",
                              lineHeight: "40px",
                              color: "#FF1C72",
                              margin: "16px 0"
                            }}
                          >
                            ¡{cliente}!
                          </Text>
                          <Text
                            className="title"
                            style={{
                              fontWeight: "bold",
                              fontSize: "32px",
                              textAlign: "center",
                              lineHeight: "40px",
                              color: "#183744",
                              marginBottom: "0"
                            }}
                          >
                            Tus {gemasCount} gemas rosas ahora serán {gemasCount} doradas. Sólo tienes que activarlas y vivir la experiencia.
                          </Text>
                          <Text style={{ textAlign: "center", marginTop: "24px" }}>
                            <Link
                              href={activationUrl}
                              target="_blank"
                              style={{
                                backgroundColor: "#FF1C72",
                                color: "#fff",
                                width: "172px",
                                height: "50px",
                                borderRadius: "30px",
                                textDecoration: "none",
                                display: "inline-block",
                                textAlign: "center",
                                lineHeight: "50px",
                                fontWeight: "bold",
                                fontSize: "20px"
                              }}
                            >
                              ¡Actívalas ya!
                            </Link>
                          </Text>
                          <Text
                            style={{
                              textAlign: "center",
                              color: "#183744",
                              fontSize: "12px",
                              lineHeight: "20px",
                              fontWeight: "600"
                            }}
                          >
                            Vigencia hasta el 31 de Octubre del 2025.
                          </Text>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td
                    className="wrapper wrapper--mobile"
                    style={{
                      fontFamily: "'Red Hat Display', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                      fontSize: "14px",
                      verticalAlign: "top",
                      boxSizing: "border-box",
                      padding: "0"
                    }}
                  >
                    <div className="logos--desktop">
                      <table style={{ width: "100%" }}>
                        <tbody>
                          <tr>
                            <td>
                              <div style={{ paddingLeft: "40px", width: "100%", marginTop: "-30px" }}>
                                <Text style={{ marginBottom: "0", marginTop: "0", color: "#183744" }}>
                                  <strong>Acumula y sigue<br/> disfrutando de tpremia:</strong>
                                </Text>
                              </div>

                              <Text style={{ marginBottom: "0", paddingLeft: "18px", marginTop: "0" }}>
                                <Img
                                  src={`https://res.cloudinary.com/dirjvoxdc/image/upload/v1757043107/card1_sbgbjq.png`}
                                  alt="Nuevos aliados para ganar y usar gemas"
                                  width="180"
                                />
                              </Text>
                              <Text style={{ marginBottom: "0", paddingLeft: "18px", marginTop: "0" }}>
                                <Img
                                  src={`https://res.cloudinary.com/dirjvoxdc/image/upload/v1757043109/card3_ebfupe.png`}
                                  alt="Descuentos y promociones especiales"
                                  width="180"
                                />
                              </Text>
                              <Text style={{ marginBottom: "0", paddingLeft: "18px", marginTop: "0" }}>
                                <Img
                                  src={`https://res.cloudinary.com/dirjvoxdc/image/upload/v1757043108/card2_efn0k4.png`}
                                  alt="Experiencias exclusivas"
                                  width="180"
                                />
                              </Text>
                              <div style={{ paddingLeft: "18px", width: "100%" }}>
                                <Text style={{ textAlign: "center", marginTop: "24px" }}>
                                  <Link
                                    href={activationUrl}
                                    target="_blank"
                                    style={{
                                      backgroundColor: "#FF1C72",
                                      color: "#fff",
                                      width: "172px",
                                      height: "50px",
                                      borderRadius: "30px",
                                      textDecoration: "none",
                                      display: "inline-block",
                                      textAlign: "center",
                                      lineHeight: "50px",
                                      fontWeight: "bold",
                                      fontSize: "20px"
                                    }}
                                  >
                                    ¡Actívalas ya!
                                  </Link>
                                </Text>
                              </div>
                            </td>
                            <td>
                              <Img src={`https://res.cloudinary.com/dirjvoxdc/image/upload/v1757043110/personajes_gd7xiz.png`} width="360" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="logos--mobile">
                      <table style={{ width: "100%", maxWidth: "100%" }}>
                        <tbody>
                          <tr>
                            <td style={{ width: "100%" }}>
                              <Text style={{ marginBottom: "24px", marginTop: "0", textAlign: "center", color: "#183744" }}>
                                <strong>Acumula y sigue<br/> disfrutando de tpremia:</strong>
                              </Text>
                              <Text style={{ marginBottom: "0", marginTop: "0", textAlign: "center" }}>
                                <Img
                                  src={`${baseUrl}/static/card1.png`}
                                  alt="Nuevos aliados para ganar y usar gemas"
                                  width="180"
                                  style={{ maxWidth: "180px", width: "100%" }}
                                />
                              </Text>
                              <Text style={{ marginBottom: "0", marginTop: "0", textAlign: "center" }}>
                                <Img
                                  src={`${baseUrl}/static/card3.png`}
                                  alt="Descuentos y promociones especiales"
                                  width="180"
                                  style={{ maxWidth: "180px", width: "100%" }}
                                />
                              </Text>
                              <Text style={{ marginBottom: "0", marginTop: "0", textAlign: "center" }}>
                                <Img
                                  src={`${baseUrl}/static/card2.png`}
                                  alt="Experiencias exclusivas"
                                  width="180"
                                  style={{ maxWidth: "180px", width: "100%" }}
                                />
                              </Text>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={2}>
                              <div style={{ width: "100%" }}>
                                <Text style={{ textAlign: "center", marginTop: "24px" }}>
                                  <Link
                                    href={activationUrl}
                                    target="_blank"
                                    style={{
                                      backgroundColor: "#FF1C72",
                                      color: "#fff",
                                      width: "172px",
                                      height: "50px",
                                      borderRadius: "30px",
                                      textDecoration: "none",
                                      display: "inline-block",
                                      textAlign: "center",
                                      lineHeight: "50px",
                                      fontWeight: "bold",
                                      fontSize: "20px"
                                    }}
                                  >
                                    ¡Actívalas ya!
                                  </Link>
                                </Text>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ textAlign: "center" }} colSpan={2}>
                              <Img
                                src={`${baseUrl}/static/personajes.png`}
                                width="240"
                                style={{ maxWidth: "240px", width: "100%" }}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td
                    className="wrapper wrapper--mobile"
                    style={{
                      fontFamily: "'Red Hat Display', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                      fontSize: "14px",
                      verticalAlign: "top",
                      boxSizing: "border-box",
                      padding: "0",
                      border: "0"
                    }}
                  >
                    <Img
                      src={`https://res.cloudinary.com/dirjvoxdc/image/upload/v1757043106/back-bottom_wo35zt.jpg`}
                      width="100%"
                      style={{ display: "block", width: "100%" }}
                    />
                  </td>
                </tr>

                <tr>
                  <td
                    className="wrapper"
                    style={{
                      fontFamily: "'Red Hat Display', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                      fontSize: "14px",
                      verticalAlign: "top",
                      boxSizing: "border-box",
                      padding: "20px",
                      background: "#fff",
                      backgroundImage: `url(${baseUrl}/static/background.png)`,
                      backgroundRepeat: "repeat",
                      backgroundPosition: "center"
                    }}
                  >
                    <table
                      className="table-logos logos--desktop"
                      width="100%"
                      role="presentation"
                      style={{ width: "100%", marginBottom: "24px" }}
                    >
                      <tr>
                        <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                          <Img
                            src={`${baseUrl}/static/tpremia.png`}
                            alt="t-premia"
                            width="120"
                          />
                        </td>
                      </tr>
                    </table>

                    <div
                      className="table-logos logos--mobile"
                      style={{ width: "100%", marginBottom: "24px", display: "none", marginTop: "24px" }}
                    >
                      <Text style={{ textAlign: "center", margin: "0" }}>
                        <Img
                          src={`${baseUrl}/static/tpremia.png`}
                          alt="t-premia"
                          width="100"
                        />
                      </Text>
                    </div>

                    <Text
                      className="small"
                      style={{
                        color: "#183744",
                        fontSize: "10px",
                        lineHeight: "18px",
                        textAlign: "center",
                        fontWeight: "600",
                        marginBottom: "0"
                      }}
                    >
                      Vigencia hasta el 31 de Octubre del 2025.<br/>
                      Consulta Términos y Condiciones Generales y nuestro Aviso de Privacidad en{" "}
                      <Link
                        href="https://tpremia.com.mx/"
                        target="_blank"
                        style={{
                          color: "#183744",
                          textDecoration: "underline",
                          fontSize: "10px",
                          lineHeight: "18px"
                        }}
                      >
                        tpremia.com.mx
                      </Link>
                    </Text>

                    <Text
                      className="small"
                      style={{
                        color: "#183744",
                        fontSize: "10px",
                        lineHeight: "18px",
                        textAlign: "center",
                        fontWeight: "600",
                        marginTop: "0"
                      }}
                    >
                      Este email fue enviado a {emailAddress}, Si no desea recibir nuestras comunicaciones,{" "}
                      <Link
                        href={unsubscribeUrl}
                        target="_blank"
                        style={{
                          color: "#183744",
                          textDecoration: "underline",
                          fontSize: "10px",
                          lineHeight: "18px"
                        }}
                      >
                        haga clic en este enlace
                      </Link>
                      .
                    </Text>
                  </td>
                </tr>
              </table>
            </div>
          </td>
          <td
            className="container--aside"
            style={{
              fontFamily: "'Red Hat Display', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
              fontSize: "14px",
              verticalAlign: "top"
            }}
          >
            &nbsp;
          </td>
        </tr>
      </table>
    </Body>
  </Html>
);

export default HTMLActivos;
