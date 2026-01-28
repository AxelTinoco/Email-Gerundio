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
  nombre?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://0f04a5ee825c.ngrok-free.app";

export const TpremiaEducativeEmail = ({ username }: TpremiaUserEmailProps) => {
  // const previewText = `Join ${invitedByUsername} on Vercel`;

  return (
    <Html>
      <Head>
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light dark" />
        <style>{`
          /* Google Fonts - Manrope */
          @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap');

          /* Font-face para New Order - actualiza la URL con tu hosting */
          @font-face {
            font-family: 'New Order';
            src: url('https://tu-dominio.com/fonts/NewOrder.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
          }

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

          /* Mobile styles */
          @media (max-width: 450px) {
            .banner-text-responsive {
              font-size: 12px !important;
              line-height: 12px !important;
              margin-bottom: 10px !important;
            }
            .banner-content-responsive {
              padding-right: 40% !important;
              padding-left: 20px !important;
            }
            .button_footer{
            font-size: 11px !important;
            padding-left: 10px !important;
            padding-right: 10px !important;
            }
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

          }
        `}</style>
      </Head>
      {/* <Preview>{previewText}</Preview> */}
      <Tailwind
        config={{
          presets: [pixelBasedPreset],
        }}
      >
        <Body className="mx-auto my-auto bg-white" style={{ fontFamily: "'Manrope', Helvetica, Arial, sans-serif" }}>
          <Container className="mx-auto my-[40px] max-w-[650px] border-[#eaeaea] border-solid py-[20px]">
            <Section className="mx-auto">
              <Row className=" gems-container">
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
            <Section className="mx-0 my-[30px] text-center">
              <Row>
                <Column>
                 <Text className='text-[32px] leading-[32px] text-center'>
                   Descubre una forma increíble de seguir ganando gemas con la misión de divisas de Banco Azteca
                 </Text>
                </Column>
              </Row>
            </Section>

            <Section className="mx-0 my-[30px] text-center">
              <Row>
                <Column>
                  <Img
                    className="mx-auto"
                    // src={`/static/t-premia/divisas02/hero_divisas02.png`}
                    src={`https://res.cloudinary.com/dirjvoxdc/image/upload/v1768848817/hero_divisas02_xivrwq.png`}
                    width="100%"
                    height="auto"
                  />
                </Column>
              </Row>
            </Section>

            <Section>
              <Row>
                <Column>
                  <Text className="text-[24px] text-black leading-[24px] text-center mb-10">
                    <strong>{"{{nombre}}"}, ¿Ya activaste
                    tu misión de divisas?</strong>
                  </Text>
                  <Text className="text-[24px] leading-[32px] text-center">
                    ¡Ándale! Actívala de una vez y no la dejes pasar.
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section className="mx-0 my-[30px] text-center bg-[#FFE5FF] ">
              <Row>
                <Column className="p-4">
                  <Text className="text-[24px] leading-[32px] text-center">Puedes ganar 20 gemas al comprar o vender un monto mínimo de 250 en cualquiera de las siguientes monedas extranjeras dentro de la app de Banco Azteca o directo en ventanilla.</Text>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Img
                    className="mx-auto"
                    // src={`/static/t-premia/divisas02/divisas.png`}
                    src={`https://res.cloudinary.com/dirjvoxdc/image/upload/v1768848819/divisas_iop16q.png`}
                    width="100%"
                    height="auto"
                  />
                </Column>
              </Row>
            </Section>

            <Section>
              <Row>
                <Column>
                  <Text className="text-[24px] leading-[32px] text-center">
                    Y aquí no acaba todo, cada vez que acumulas, compras o vendes $3,000 USD/CAD/EUR,
                    ¡cuentas con un bono especial de 50 gemas adicionales!
                  </Text>
                </Column>
              </Row>
            </Section>


            <Section>
              <Row>
                <Column align="center">
                  <Section style={{ textAlign: "center", marginTop: "20px" }}>
                    <Button
                      className="rounded-full bg-[#319948] px-5 py-3 text-center font-semibold text-[16px] text-white no-underline"
                      href={"Enlace 2"}
                    >
                      Activar misión
                    </Button>
                  </Section>
                </Column>
              </Row>
            </Section>

            {/* VERSION CON TABLAS - Compatible con Gmail */}
            {/*
            <Section className="mx-0 my-[30px] max-w-[650px] mx-auto">
              <Link href="#" style={{ textDecoration: "none" }}>
                <table
                  width="100%"
                  cellPadding="0"
                  cellSpacing="0"
                  style={{
                    backgroundImage: `url(https://res.cloudinary.com/dirjvoxdc/image/upload/v1768840207/banner_xvbvf4.png)`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <tr>
                    <td
                      className="banner-content-responsive responsive-height"
                      style={{
                        padding: "40px",
                        paddingTop: "15px",
                        paddingRight: "40%",
                        paddingLeft:"40px",
                        height: "350px",
                        verticalAlign: "middle",
                      }}
                    >
                      <table width="100%" cellPadding="0" cellSpacing="0">
                        <tr>
                          <td style={{ textAlign: "left" }}>
                            <Text
                              className="banner-text-responsive"
                              style={{
                                fontSize: "14px",
                                fontWeight: "bold",
                                color: "#000000",
                                lineHeight: "18px",
                                margin: "0 0 20px 0",
                              }}
                            >
                              Mientras más misiones completes, más gemas acumulas. Úsalas en grandes recompensas.
                            </Text>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "left" }}>
                            <Button
                              className="button_footer"
                              style={{
                                backgroundColor: "#319948",
                                color: "#ffffff",
                                fontWeight: "600",
                                fontSize: "12px",
                                padding: "10px",
                                borderRadius: "50px",
                                textDecoration: "none",
                                display: "inline-block",
                              }}
                            >
                              Descubre las recompensas
                            </Button>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </Link>
            </Section>
            */}



            <Section className="mx-0 my-[30px] max-w-[650px] mx-auto">
              <Row>
                <Column>
                  <Link href="enlace_03" style={{ textDecoration: "none" }}>
                    <div
                      style={{
                        // backgroundImage: `url(/static/t-premia/divisas02/footer_divisas02.png)`,
                        backgroundImage: `url(https://res.cloudinary.com/dirjvoxdc/image/upload/v1768848814/footer_divisas02_o9xe6c.png)`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        height: "100%",
                        width: "100%",
                      }}
                    >
                      <div style={{ height: "350px" }} className="responsive-height">
                      </div>
                    </div>
                  </Link>
                </Column>
              </Row>
            </Section>

            <Section className="text-center mb-[24px]">
              <table className="w-full">
                <tr className="w-full">
                  <td align="center">
                    <table cellPadding="0" cellSpacing="0" style={{ margin: "0 auto" }}>
                      <tr>
                        <td align="center" style={{ verticalAlign: "middle", paddingRight: "16px" }}>
                          <Img
                            alt="logo premia"
                            height="auto"
                            src={`https://res.cloudinary.com/dirjvoxdc/image/upload/v1755893471/Logo_go8xyq.png`}
                            width="95"
                          />
                        </td>
                        <td align="center" style={{ verticalAlign: "middle", borderLeft: "1px solid #d1d5db", paddingLeft: "16px" }}>
                          <Img
                            alt="logo banco azteca"
                            height="auto"
                            src={`https://res.cloudinary.com/dirjvoxdc/image/upload/v1757043107/banco-azteca_eliv94.png`}
                            width="142"
                          />
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr className="w-full">
                  <td align="center">
                    <Text className="my-[8px] font-light text-[10px] text-[#838383] leading-[24px]">
                      ¡No te quedes con dudas! Escríbenos y lo resolvemos juntos
                      en:{" "}
                      <a
                        href="mailto:hola@tpremia.com.mx"
                        className="text-[#319948]"
                      >
                        hola@tpremia.com.mx
                      </a>
                    </Text>
                    <Text className="mt-[4px] mb-0 text-[10px] text-[#838383] leading-[24px]">
                      Si deseas dejar de recibir nuestras comunicaciones, haz
                      clic{" "}
                      <a
                        href="mailto:hola@tpremia.com.mx"
                        className="text-[#319948]"
                      >
                       aquí
                      </a>
                      {" "}
                      para cancelar tu suscripción.
                    </Text>

                    <Text className="mt-[24px] mb-0 text-[10px] text-[#838383] leading-[15px]">
                      Valido del (*) de (*) de 2025 hasta agotar existencias, Aplica Restricciones
                      Consulta Términos y Condiciones Generales y nuestro Aviso de Privacidad {" "}
                      <Link
                        href="https://www.newtpremia.com.mx/terminos-y-condiciones"
                        className="text-[#319948]"
                      >
                        aquí.
                      </Link>
                    </Text>
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
  nombre: "Axel",
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
