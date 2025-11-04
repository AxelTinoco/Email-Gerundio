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

  return (
    <Html>
      <Head>
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light dark" />
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

          }
        `}</style>
      </Head>
      {/* <Preview>{previewText}</Preview> */}
      <Tailwind
        config={{
          presets: [pixelBasedPreset],
        }}
      >
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-[40px] max-w-[650px] border-[#eaeaea] border-solid p-[20px]">
            <Section className="mt-[32px]">
              <Img
                // src={`${baseUrl}/static/t-premia/logo.png`}
                src={`https://res.cloudinary.com/dirjvoxdc/image/upload/v1755893471/Logo_go8xyq.png`}
                width="160px"
                height="auto"
                alt="t-premia"
                className="mx-auto my-0"
              />
            </Section>
            <Section className="mx-auto">
              <Row className=" mt-[24px] mb-[32px] gems-container">
                <Column
                  align="center"
                  className="h-[40px] w-2/3 bg-[#F6F6F6] column-gems-main"
                >
                  <Row>
                    <Column className="gems-left-side">
                      <Row>
                        <Column align="left" width="32px">
                          <Img
                            // src={`${baseUrl}/static/t-premia/gema-rosa.png`}
                            src={`https://res.cloudinary.com/dirjvoxdc/image/upload/v1755893469/gema-rosa_kb2wbi.png`}
                            width="32px"
                            height="auto"
                            alt="t-premia"
                          />
                        </Column>
                        <Column align="left" className="pl-2">
                          <Text className="m-0 text-[14px] whitespace-nowrap">
                            %%%% gemas
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="gems-right-side">
                      <Row>
                        <Column align="center" width="32px">
                          <Img
                            // src={`${baseUrl}/static/t-premia/gema-dorada.png`}
                            src={`https://res.cloudinary.com/dirjvoxdc/image/upload/v1755893469/gema-dorada_lebvou.png`}
                            width="32px"
                            height="auto"
                            alt="t-premia"
                          />
                        </Column>
                        <Column align="left" className="pl-2">
                          <Text className="m-0 text-[14px] whitespace-nowrap">
                            %%%% gemas
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                  </Row>
                </Column>
                <Column
                  align="center"
                  className="w-1/3"
                  style={{ minWidth: "110px" }}
                >
                  <Button
                    className="rounded-full bg-[#319948] px-2 py-3 text-center font-semibold text-[12px] text-white no-underline account-button"
                    href={"t.premia.club/m8RAPp1"}
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

            <Section className="mx-0 my-[30px]">
              <Row>
                <Column>
                  <Img
                    className=""
                    src={`https://res.cloudinary.com/dirjvoxdc/image/upload/v1762198133/03_Hero_invitar-terminar-mision_vs1vy0.png`}
                    width="100%"
                    height="auto"
                  />
                </Column>
              </Row>
            </Section>

            <Section>
              <Row>
                <Column>
                  <Text className="text-[28px] text-black leading-[24px] text-center mb-10">
                    <strong>¡Hola, %%Nombre de usuario%%!</strong>
                  </Text>
                  <Text className="text-[16px] leading-[32px] text-center">
                    Tus gemas te esperan, termina tu misión depositando <strong>$1,500.00 MXN</strong> en tu Cuenta Azteca en Banco Azteca, mantenlo guardadito por 7 días y ¡listo!.
                  </Text>
                  <Text className="text-[16px] leading-[32px] text-center">
                    Entre más avances, más recompensas increíbles podrás disfrutar: desde recargas de tiempo aire hasta saliditas al cine o al acuario.
                  </Text>

                </Column>
              </Row>
            </Section>

            <Section>
              <Row>
                <Column align="center">
                  <Section style={{ textAlign: "center", marginTop: "20px" }}>
                    <Button
                      className="rounded-full bg-[#319948] px-5 py-5 text-center font-semibold text-[16px] text-white no-underline"
                      href={"t.premia.club/naDwl65"}
                    >
                      Revisar misión
                    </Button>
                  </Section>
                </Column>
              </Row>
            </Section>
            <Section className="mx-0 my-[30px] max-w-[650px] mx-auto">
              <Row>
                <Column>
                  <Link href="t.premia.club/5atAh04" style={{ textDecoration: "none" }}>
                    <div
                      style={{
                        backgroundImage: `url(https://res.cloudinary.com/dirjvoxdc/image/upload/v1762198131/03_footer_invitar_terminar_mision_eng5tw.png)`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        height: "350px",
                        width: "100%",
                      }}
                    >
                      <div style={{ height: "150px" }}>
                        <div
                          style={{
                            verticalAlign: "middle",
                            textAlign: "left",
                            padding: "20px",
                            paddingLeft: "50px",
                          }}
                        >
                        </div>
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
                    <Img
                      alt="logo premia"
                      height="auto"
                      // src={`${baseUrl}/static/t-premia/logo.png`}
                      src={`https://res.cloudinary.com/dirjvoxdc/image/upload/v1755893471/Logo_go8xyq.png`}
                      width="95"
                    />
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
                      clic aquí para cancelar tu suscripción.
                    </Text>

                    <Img
                      alt="logo banco azteca"
                      height="auto"
                      className="mb-4 mt-4"
                      src={`https://res.cloudinary.com/dirjvoxdc/image/upload/v1757043107/banco-azteca_eliv94.png`}
                      width="142"
                    />

                    <Text className="mt-[24px] mb-0 text-[10px] text-[#838383] leading-[15px]">
                      Consulta términos y condiciones en{" "}
                      <Link
                        href="https://www.newtpremia.com.mx/terminos-y-condiciones"
                        className="text-[#319948]"
                      >
                        newtpremia.com.mx
                      </Link>
                    </Text>
                    <Text className="mt-[4px] mb-0 text-[10px] text-[#838383] leading-[15px]">
                      Todas las operaciones al amparo de este programas son
                      otorgadas por Banco Azteca, S.A.,
                    </Text>
                    <Text className="mt-[4px] mb-0 text-[10px] text-[#838383] leading-[15px]">
                      Institución de Banca Múltiple.
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
