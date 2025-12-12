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
  // Transformaciones de Cloudinary para agregar texto sobre el cuadro blanco
  // IMPORTANTE: La URL contiene {nombre} como variable para el gestor de email
  // "¡Hola," a la izquierda y {nombre} a la derecha, casi al inicio de la imagen (parte superior)
  const textLine0 = `l_text:arial_80_bold:¡Hola%252C,co_rgb:000000,g_north_west,y_100,x_50`;
  const textLine1 = `l_text:arial_80_bold:{nombre}!,co_rgb:000000,g_north_west,y_100,x_270`;

  const heroImageWithText = `${cloudinaryBaseUrl}/${textLine0}/${textLine1}/v1765478921/hero_correo_educativo_qoadnb.png`;

  return (
    <Html>
      <Head>
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet" />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
          /* Importar fuente New Order */
          @font-face {
            font-family: 'New Order';
            src: url('https://res.cloudinary.com/dirjvoxdc/raw/upload/v1765496418/NewOrder-Regular_tqlzqd.woff') format('woff');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: 'New Order';
            src: url('https://res.cloudinary.com/dirjvoxdc/raw/upload/v1765496432/NewOrder-Bold_tfioeq.woff2') format('woff2');
            font-weight: 600;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: 'New Order';
            src: url('https://res.cloudinary.com/dirjvoxdc/raw/upload/v1765496432/NewOrder-Bold_tfioeq.woff2') format('woff2');
            font-weight: 700;
            font-style: normal;
            font-display: swap;
          }

          body, table, td, p, a, li, blockquote {
            font-family: 'New Order', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif !important;
          }

          .buttons-mobile {
            display: block;
          }

          .buttons-desktop {
            display: block;
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

          /* Estilos para botones responsive */
          .button-text {
            font-size: 16px;
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
            .buttons-desktop {
              display: none !important;
            }
            .buttons-mobile {
              display: block !important;
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

            /* Texto de botones a 10px en mobile */
            .button-text {
              font-size: 10px !important;
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
        <Body className="mx-auto my-auto bg-[#FFE5FF] px-2 font-sans email-body" style={{ backgroundColor: "#FFE5FF]" }}>
          <Container className="mx-auto my-[40px] max-w-[650px] border-[#eaeaea] border-solid p-[0px] email-container" style={{ backgroundColor: "#FFE5FF" }}>
            <Section className="mx-auto bg-[#FFF] ">
              <Row className="gems-container mb-8">
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
                  <table cellPadding="0" cellSpacing="0" border={0} role="presentation" style={{ borderRadius: "36px", backgroundColor: "#319948", margin: "0 0 0 auto" }}>
                    <tbody>
                      <tr>
                        <td align="center" style={{ borderRadius: "36px", backgroundColor: "#319948", padding: "12px 16px" }}>
                          <a
                            href="enlace_cuenta"
                            style={{
                              color: "#ffffff",
                              display: "inline-block",
                              fontFamily: "Arial, sans-serif",
                              fontSize: "12px",
                              fontWeight: "600",
                              lineHeight: "16px",
                              textAlign: "center",
                              textDecoration: "none",
                              msoLineHeightRule: "exactly",
                            }}
                            target="_blank"
                          >
                            <span style={{ color: "#ffffff", msoTextRaise: "0" }}>Ir a mi cuenta</span>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Column>
              </Row>
            </Section>

            <Section className="mx-0 w-full">
              <Row>
                <Column style={{ padding: 0 }}>
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
                </Column>
              </Row>
            </Section>

            <Section>
              <Row>
                <Column className="px-10 pt-6">
                  <Img
                    className="mx-auto"
                    src={`https://res.cloudinary.com/dirjvoxdc/image/upload/v1765504733/text_disfruta_qostkv.png`}
                    width="100%"
                    height="auto"
                  />
                </Column>
              </Row>
            </Section>

            <Section className="mx-0 text-center">
              <Row>
                <Column>
                  <Img
                    className="mx-auto"
                    src={`https://res.cloudinary.com/dirjvoxdc/image/upload/v1765491487/banner-producots_vy5sp0.png`}
                    width="100%"
                    height="auto"
                  />
                </Column>
              </Row>
            </Section>

            <Tailwind>
              <Row>
                <Column align="center" className="h-[40px] w-1/3 ">
                  <Row>
                    <td align="center" className="w-1/2 pl-[20px] pr-[6px]" colSpan={1}>

                      <Link
                        href="enlace_activa"
                        className=""
                        style={{textDecoration: "none" }}
                      >
                        <Img
                          className="mx-auto"
                          src={`https://res.cloudinary.com/dirjvoxdc/image/upload/v1765556043/activa_tus_misiones_dcllhr.png`}
                          width="100%"
                          height="auto"
                        />
                      </Link>
                    </td>
                  </Row>
                </Column>
                <Column align="center" className="h-[40px] w-1/3 ">
                  <Row>
                    <td align="center" className="w-1/2 pl-[10px] pr-[10px]" colSpan={1}>
                      <Link
                        href="enlace_central"
                        className=""
                        style={{textDecoration: "none" }}
                      >
                        <Img
                          className="mx-auto"
                          src={`https://res.cloudinary.com/dirjvoxdc/image/upload/v1765556256/central_lvjr6k.png`}
                          width="100%"
                          height="auto"
                        />
                      </Link>
                    </td>
                  </Row>
                </Column>
                <Column align="center" className="h-[40px] w-1/3 ">
                  <Row>
                    <td align="center" className="w-1/2 pl-[6px] pr-[20px]" colSpan={1}>
                      <Link
                        href="enlace_recompensa"
                        className=""
                        style={{textDecoration: "none" }}
                      >
                        <Img
                          className="mx-auto"
                          src={`https://res.cloudinary.com/dirjvoxdc/image/upload/v1765556850/recompesa_iblmhw.png`}
                          width="100%"
                          height="auto"
                        />
                      </Link>
                    </td>
                  </Row>
                </Column>
              </Row>
            </Tailwind>

            <Section className="mx-0 max-w-[650px] mx-auto bg-[#FFF]">
              <Row>
                <Column>
                    <Img
                      src="https://res.cloudinary.com/dirjvoxdc/image/upload/v1765494605/brands_3x_dlgoiv.png"
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
                </Column>
              </Row>
            </Section>

            <Section className="text-center bg-[#FFF] py-10">
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
