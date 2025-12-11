import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Html,
  Img,
  Link,
  pixelBasedPreset,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface TpremiaUserEmailProps {
  username?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://0f04a5ee825c.ngrok-free.app";

export const TpremiaEducativeEmail = ({ username }: TpremiaUserEmailProps) => {
  // const previewText = `Join ${invitedByUsername} on Vercel`;

  // Generar URL de Cloudinary con texto superpuesto dinámico
  // La variable {nombre} será reemplazada por el gestor de email marketing
  const cloudinaryBaseUrl = 'https://res.cloudinary.com/dirjvoxdc/image/upload';

  // Cuadro blanco con bordes redondeados
  const whiteBoxOverlay = `l_text:Arial_1:_,co_rgb:FFFFFF,b_rgb:FFFFFF,bo_0px_solid_rgb:FFFFFF,w_1450,h_400,c_fit,r_24,g_north,y_60,o_95`;
  // pdf , canvas, images
  // Transformaciones de Cloudinary para agregar texto sobre el cuadro blanco
  // IMPORTANTE: La URL contiene {nombre} como variable para el gestor de email
  // Interlineado de 38px entre cada línea (80px de fuente + 38px de espacio = 118px entre líneas)
  const textLine1 = `l_text:arial_80_bold:{nombre},co_rgb:000000,g_north,y_120`;
  const textLine2 = `l_text:arial_80_bold:${encodeURIComponent('Te damos la bienvenida a')},co_rgb:000000,g_north,y_220`;
  const textLine3 = `l_text:arial_80_bold:${encodeURIComponent('bordo de tpremia.')},co_rgb:000000,g_north,y_326`;

  const heroImageWithText = `${cloudinaryBaseUrl}/${whiteBoxOverlay}/${textLine1}/${textLine2}/${textLine3}/v1765230309/Header_rdwehx.png`;

  return (
    <Html>
      <Head>
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
        <style>{`
          .button-mobile {
            display: none;
          }

          .banner-gema-mobile-gift {
            display: none;
          }
          .banner-hero{
            padding-left: 120px
          }
          .banner-hero-mobile{
            display:none;
          }

          .hero-text-overlay-desktop {
            display: block;
          }
          .hero-text-overlay-mobile {
            display: none;
          }
          .hero-image-mobile {
            display: none;
          }

          .text-responsive-hero{
            font-size: 28px;
          }

          .hero-text-box {
            min-width: 400px;
            max-width: 85%;
          }

          .hero-text-content {
            font-size: 28px !important;
          }

          /* Ocultar versión moderna en Outlook */
          .non-outlook-hero {
            mso-hide: all;
          }

          .column-gems-main{
            padding-left: 16px;
            padding-right: 16px;
          }

          .gems-left-side{
            padding-righ: 8px:
          }
          .gems-right-side{
            padding-left: 8px:
          }

          /* Override Outlook dark mode */
          [data-ogsc] .force-black-text {
            color: #000000 !important;
          }
          [data-ogsb] .force-black-text {
            color: #000000 !important;
          }

          /* Protect hero text box from dark mode */
          [data-ogsc] .hero-text-box,
          [data-ogsc] .hero-text-box td {
            background-color: #FFFFFF !important;
            top: 80px !important;
          }
          [data-ogsb] .hero-text-box,
          [data-ogsb] .hero-text-box td {
            background-color: #FFFFFF !important;
            top: 80px !important;
          }

          [data-ogsc] .hero-text-content {
            color: #000000 !important;
          }
          [data-ogsb] .hero-text-content {
            color: #000000 !important;
          }

          /* Force light background for body and container */
          [data-ogsc] body,
          [data-ogsc] .email-body,
          [data-ogsc] .email-container {
            background-color: #FFFFFF !important;
          }
          [data-ogsb] body,
          [data-ogsb] .email-body,
          [data-ogsb] .email-container {
            background-color: #FFFFFF !important;
          }

          /* Protect all black text from inversion */
          [data-ogsc] .text-black,
          [data-ogsc] strong {
            color: #000000 !important;
          }
          [data-ogsb] .text-black,
          [data-ogsb] strong {
            color: #000000 !important;
          }

          /* Force gray text in Outlook light mode */
          .text-gray-footer {
            background-color: transparent !important;
          }
          .text-gray-footer,
          .text-gray-footer span,
          .text-gray-footer p {
            color: #838383 !important;
          }

          /* Force green links in Outlook light mode */
          .link-green,
          a.link-green {
            color: #319948 !important;
          }

          /* Force gray text to white in Outlook dark mode ONLY */
          [data-ogsc] .text-gray-footer {
            background-color: transparent !important;
          }
          [data-ogsc] .text-gray-footer,
          [data-ogsc] .text-gray-footer span,
          [data-ogsc] .text-gray-footer p {
            color: #FFFFFF !important;
          }

          [data-ogsb] .text-gray-footer {
            background-color: transparent !important;
          }
          [data-ogsb] .text-gray-footer,
          [data-ogsb] .text-gray-footer span,
          [data-ogsb] .text-gray-footer p {
            color: #FFFFFF !important;
          }

          /* Keep green links visible in Outlook dark mode ONLY */
          [data-ogsc] .link-green,
          [data-ogsc] a.link-green {
            color: #4CAF50 !important;
          }
          [data-ogsb] .link-green,
          [data-ogsb] a.link-green {
            color: #4CAF50 !important;
          }

          /* Protect footer image from being hidden in Outlook dark mode */
          [data-ogsc] .footer-image,
          [data-ogsc] .footer-image img {
            opacity: 1 !important;
            visibility: visible !important;
            display: block !important;
          }
          [data-ogsb] .footer-image,
          [data-ogsb] .footer-image img {
            opacity: 1 !important;
            visibility: visible !important;
            display: block !important;
          }

          /* Fix button styling for Outlook */
          .account-button {
            display: inline-block !important;
            white-space: nowrap !important;
            min-width: 90px !important;
            text-align: center !important;

          }

          [data-ogsc] .account-button {
            display: inline-block !important;
            white-space: nowrap !important;
            min-width: 90px !important;

          }
          [data-ogsb] .account-button {
            display: inline-block !important;
            white-space: nowrap !important;
            min-width: 90px !important;

          }

          @media (max-width: 375px) {
            .button-desktop {
              display: none !important;
              height: 0 !important;
              overflow: hidden !important;
            }
            .button-mobile {
              display: inline-table;
            }
            .mobile-button {
              width: 100% !important;
            }
            .banner-gema-mobile-gift {
            display: inline-table;
            }
            .banner-hero{
            padding-left: 110px
            }
            .gems-container{
              margin-bottom: 0px !important;
            }
            .banner-hero-desktop{
              display: none;
            }
            .banner-hero-mobile{
              display:inline-table;
            }

            .column-gems-main{
              padding-left: 0px;
              padding-right: 0px;
            }

            .gems-left-side{
              padding-righ: 2px:
            }
            .gems-right-side{
              padding-left: 0px:
            }

            .responsive-height {
              height: 200px !important;
            }

            .hero-text-overlay-desktop {
              display: none !important;
            }
            .hero-text-overlay-mobile {
              display: block !important;
            }
            .hero-image-mobile {
              display: block !important;
            }

            .hero-text-box {
              min-width: 250px !important;
              max-width: 95% !important;
            }

            .hero-text-content {
              font-size: 16px !important;
            }

            .text-responsive-hero{
              fontSize:16px !important;
            }

          }
        `}</style>
      </Head>
      {/* <Preview>{previewText}</Preview> */}
      <Tailwind
        config={{
          presets: [pixelBasedPreset],
        }}
      >
        <Body className="mx-auto my-auto bg-[#F6F6F6] px-2 font-sans email-body" style={{ backgroundColor: "#F6F6F6" }}>
          <Container className="mx-auto my-[40px] max-w-[650px] border-[#eaeaea] border-solid p-[0px] email-container" style={{ backgroundColor: "#F6F6F6" }}>
            <Section className="mx-auto">
              <Row className="gems-container">
                <Column
                  align="left"
                  className="h-[40px] w-2/3"
                >
                  <Row>
                    <Img
                      src={`https://res.cloudinary.com/dirjvoxdc/image/upload/v1755893471/Logo_go8xyq.png`}
                      width="160px"
                      height="auto"
                      alt="t-premia"
                      className=""
                    />
                  </Row>
                </Column>
                <Column
                  align="right"
                  className="w-1/3"
                  style={{ minWidth: "110px" }}
                >
                  <Button
                    className="rounded-full bg-[#319948] px-2 py-3 text-center font-semibold text-[12px] text-white no-underline account-button"
                    href={"Enlace 1"}
                    style={{
                      display: "inline-block",
                      whiteSpace: "nowrap",
                      minWidth: "90px",
                      textAlign: "center",
                      lineHeight: "16px",
                    }}
                  >
                    Ir a mi cuenta
                  </Button>
                </Column>
              </Row>
            </Section>

            <Section className="mx-0 my-[30px] w-full">
              <Row>
                <Column style={{ padding: 0 }}>
                  <Link href="Enlace_3" style={{ textDecoration: "none", display: "block" }}>
                    {/* Imagen generada por Cloudinary con texto dinámico */}
                    <Img
                      src={heroImageWithText}
                      alt="Bienvenida a tpremia"
                      width="650"
                      height="auto"
                      style={{
                        display: "block",
                        width: "100%",
                        maxWidth: "650px",
                        height: "auto",
                        margin: "0 auto",
                      }}
                    />
                  </Link>
                </Column>
              </Row>
            </Section>

            <Section>
              <Row>
                <Column>
                  <Text className="text-[24px] text-black leading-[24px] text-center mb-10" style={{ color: "#000000" }}>
                    ¡Hoy arranca tu aventura
                    en nuestro programa de lealtad!
                  </Text>
                  <Text className="text-[24px] text-black leading-[32px] text-center" style={{ color: "#000000" }}>
                    Cumple misiones, gana gemas y úsalas para darte tus gustitos
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section className="mx-0 my-[30px] text-center">
              <Row>
                <Column>
                  <Img
                    className="mx-auto"
                    src={`https://res.cloudinary.com/dirjvoxdc/image/upload/v1765237680/Selections_lnwqvc.png`}
                    width="100%"
                    height="auto"
                  />
                </Column>
              </Row>
            </Section>

            <Section className="mx-0 my-[30px] max-w-[650px] mx-auto">
              <Row>
                <Column>
                  <Link href="Enlace_3" style={{ textDecoration: "none", display: "block" }}>
                    <Img
                      src="https://res.cloudinary.com/dirjvoxdc/image/upload/v1765319812/footer_diahan.png"
                      alt="Footer tpremia"
                      width="650"
                      height="auto"
                      className="footer-image"
                      style={{
                        display: "block",
                        width: "100%",
                        maxWidth: "650px",
                        height: "auto",
                        opacity: 1,
                        visibility: "visible",
                      }}
                    />
                  </Link>
                </Column>
              </Row>
            </Section>

            <Section className="text-center mb-[24px]">
              <table className="w-full">
                <tr className="w-full">
                  <td align="center">
                    <Img
                      alt="logo premia"
                      height="auto"
                      src={`https://res.cloudinary.com/dirjvoxdc/image/upload/v1755893471/Logo_go8xyq.png`}
                      width="95"
                    />
                  </td>
                </tr>
                <tr className="w-full">
                  <td align="center">
                    {/* MSO conditional for Outlook dark mode */}
                    <div className="text-gray-footer">
                      <Text className="my-[8px] font-light text-[10px] leading-[24px]" style={{ color: "#838383", msoLineHeightRule: "exactly" }}>
                        <span style={{ color: "#838383" }}>¡No te quedes con dudas! Escríbenos y lo resolvemos juntos en: </span>
                        <a
                          href="mailto:hola@tpremia.com.mx"
                          className="link-green"
                          style={{ color: "#319948", textDecoration: "none" }}
                        >
                          hola@tpremia.com.mx
                        </a>
                      </Text>
                    </div>

                    <div className="text-gray-footer">
                      <Text className="mt-[4px] mb-0 text-[10px] leading-[24px]" style={{ color: "#838383", msoLineHeightRule: "exactly" }}>
                        Si deseas dejar de recibir nuestras comunicaciones, haz
                        clic aquí para cancelar tu suscripción.
                      </Text>
                    </div>

                    <div className="text-gray-footer">
                      <Text className="mt-[24px] mb-0 text-[10px] leading-[15px]" style={{ color: "#838383", msoLineHeightRule: "exactly" }}>
                        <span style={{ color: "#838383" }}>Consulta términos y condiciones en </span>
                        <Link
                          href="https://www.newtpremia.com.mx/terminos-y-condiciones"
                          className="link-green"
                          style={{ color: "#319948", textDecoration: "none" }}
                        >
                          newtpremia.com.mx
                        </Link>
                      </Text>
                    </div>

                    <div className="text-gray-footer">
                      <Text className="mt-[4px] mb-0 text-[10px] leading-[15px]" style={{ color: "#838383", msoLineHeightRule: "exactly" }}>
                        Todas las operaciones al amparo de este programas son
                        otorgadas por Banco Azteca, S.A.,
                      </Text>
                    </div>

                    <div className="text-gray-footer">
                      <Text className="mt-[4px] mb-0 text-[10px] leading-[15px]" style={{ color: "#838383", msoLineHeightRule: "exactly" }}>
                        Institución de Banca Múltiple.
                      </Text>
                    </div>
                  </td>
                </tr>
              </table>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

TpremiaEducativeEmail.PreviewProps = {
  username: "alanturing",
  userImage: `${baseUrl}/static/vercel-user.png`,
  invitedByUsername: "Alan",
  invitedByEmail: "alan.turing@example.com",
  teamName: "Enigma",
  teamImage: `${baseUrl}/static/vercel-team.png`,
  inviteLink: "https://vercel.com/teams/invite/foo",
  inviteFromIp: "204.13.186.218",
  inviteFromLocation: "São Paulo, Brazil",
} as TpremiaUserEmailProps;

export default TpremiaEducativeEmail;
