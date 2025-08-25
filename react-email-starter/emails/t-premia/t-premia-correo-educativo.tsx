import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Html,
  Img,
  pixelBasedPreset,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

interface TpremiaUserEmailProps {
  username?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'https://0f04a5ee825c.ngrok-free.app';

export const TpremiaEducativeEmail = ({
  username,
}: TpremiaUserEmailProps) => {

  // const previewText = `Join ${invitedByUsername} on Vercel`;

  return (
    <Html>
      <Head>
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
            .banner-gema-gift {
              display: none;
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
            <Row className=' mt-[24px] mb-[32px] gems-container'>
              <Column align="center" className="h-[40px] w-2/3 bg-[#F6F6F6] px-4">
                <Row>
                  <Column className="pr-4">
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
                        <Text className="m-0 text-[16px] whitespace-nowrap">
                          500 gemas
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="pl-4">
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
                        <Text className="m-0 text-[16px] whitespace-nowrap">
                          500 gemas
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                </Row>
              </Column>
              <Column align="center" className="button-desktop h-[60px] w-full pl-4">
                <Button
                  className="rounded-full bg-[#319948] px-5 py-5 text-center font-semibold text-[12px] text-white no-underline"
                  href={""}
                >
                  Ir a mi cuenta
                </Button>
              </Column>
            </Row>
            <Section className="button-mobile">
              <Row className='mt-[24px]'>
                <Column align="left" className="h-[60px] w-full pl-4">
                  <Button
                    className="mobile-button rounded-full bg-[#319948] py-5 text-center font-semibold text-[12px] text-white no-underline"
                    href={""}
                  >
                    Ir a mi cuenta
                  </Button>
                </Column>
              </Row>

            </Section>
            
           
            <Section className="mx-0 my-[30px] banner-hero-desktop">
              <Row>
                <Column
                  style={{
                    // backgroundImage: `url(${baseUrl}/static/t-premia/educativo/hero_name.png)`,
                    backgroundImage: `url(https://res.cloudinary.com/dirjvoxdc/image/upload/v1755893630/hero_name_yxl4vn.png)`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '250px',
                    width: '100%'
                  }}
                >
                  <Row style={{ height: '150px' }}>
                    <Column style={{ verticalAlign: 'middle', textAlign: 'center' }} className='banner-hero'>
                      <Text className="text-[28px] text-black leading-[32px]" style={{ margin: 0, fontSize: '28px', lineHeight: '32px', color: '#000000' }}>
                        <strong>¡Hola, {username}!</strong>
                      </Text>
                    </Column>
                  </Row>
                </Column>
              </Row>
            </Section>

            {/* banner hero name mobile */}
            <Section className="mx-0 my-[30px] banner-hero-mobile">
              <Row>
                <Column
                  style={{
                    // backgroundImage: `url(${baseUrl}/static/t-premia/gema_name_mobile.png)`,
                    backgroundImage: `url(https://res.cloudinary.com/dirjvoxdc/image/upload/v1755893469/gema_name_mobile_qfz6wk.png)`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '300px',
                    width: '100%',
                    display: 'inline-table',
                  }}
                >
                  <Row style={{ height: 'auto' }}>
                    <Column style={{ textAlign: 'left', padding: '20px' , paddingLeft: '15px', paddingTop: '200px'}}>
                      <Text className="text-[28px] text-black leading-[32px]" style={{ margin: 0, fontSize: '28px', lineHeight: '32px', color: '#000000' }}>
                        <strong>¡Hola, {username}!</strong>
                      </Text>
                    </Column>
                  </Row>
                </Column>
              </Row>
            </Section>
            {/* banner hero name mobile */}


            <Text className="text-[28px] text-black leading-[24px] text-center">
              <strong>¡Conoce tus recompensas!</strong>
            </Text>
            <Text className="text-[16px] leading-[24px] text-center">
              Con tus gemas disfruta de grandes descuentos, conciertos y experiencias únicas
            </Text>
            <Section>
              <Row>
                <Column align="center">
                  <Img
                    className=""
                    // src={`${baseUrl}/static/t-premia/gema_cantando.png`}
                    src={`https://res.cloudinary.com/dirjvoxdc/image/upload/v1755893468/gema_cantando_qucypi.png`}
                    width="300px"
                    height="auto"
                  />
                </Column>
                <Section style={{ textAlign: 'center', marginTop: '20px' }}>
                  <Button
                    className="rounded-full bg-[#319948] px-5 py-5 text-center font-semibold text-[12px] text-white no-underline"
                    href={""}
                  >
                    Ir a recompensas
                  </Button>
                </Section>
              </Row>
            </Section>
            <Section className="mt-[32px] mb-[32px] text-center">
              <Text className="text-[28px] leading-[30px]">
                <strong>Descubre más sobre las gemas.</strong>
              </Text>
              <Text className="text-[28px]">
                <strong>¡Da <a href="%%%%" className='text-[#FF289B]'>clic</a> para conocer!</strong>
              </Text>
            </Section>
            <Section className="mt-[32px] mb-[32px] text-center max-w-[650px] mx-auto p-[20px]">
             <Row>
                <Column align="center">
                  <Img
                    className=""
                    // src={`${baseUrl}/static/t-premia/gema_video.png`}
                    src={`https://res.cloudinary.com/dirjvoxdc/image/upload/v1755893469/gema_video_hr63vf.png`}

                    width="100%"
                    height="auto"
                  />
                </Column>
              </Row>
            </Section>
            <Section className="mt-[32px] mb-[32px] text-center">
              <Text className="text-[28px] leading-[30px]">
                <strong>¡Domina toda la información sobre</strong>
              </Text>
              <Text className="text-[28px]">
                 <strong>misiones y actívalas!</strong>
              </Text>
              <Text className="text-[16px] leading-[24px] mt-[24px]">
                Chécate las misiones de tpremia y de nuestros aliados. 
              </Text>
               <Text className="text-[16px] leading-[10px]">
                Actívalas y empieza a cumplirlas.
              </Text>
               <Text className="text-[16px] leading-[10px]">
                 ¡Ve a descubrirlas y acumula muchas gemas! 
              </Text>
            </Section>

            <Section style={{ textAlign: 'center', marginTop: '20px' }}>
              <Button
                className="rounded-full bg-[#319948] px-5 py-5 text-center font-semibold text-[12px] text-white no-underline"
                href={"%%%%"}
              >
                Ir a central de misiones
              </Button>
            </Section>

            <Section className="mx-0 my-[30px] max-w-[650px] mx-auto overflow-hidden banner-gema-gift">
              <Row>
                <Column
                  style={{
                    // backgroundImage: `url(${baseUrl}/static/t-premia/Banner_gema_gift.png)`,
                    backgroundImage: `url(https://res.cloudinary.com/dirjvoxdc/image/upload/v1755893468/Banner_gema_gift_qfxyte.png)`,

                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '350px',
                    width: '100%'
                  }}
                >
                  <Row style={{ height: '150px' }}>
                    <Column style={{ verticalAlign: 'middle', textAlign: 'left', padding: '20px' , paddingLeft: '50px'}}>
                      <Text className="text-[20px] text-black leading-[32px]" style={{ margin: 0, lineHeight: '32px', color: '#000000' }}>
                        <strong>¡Activa hoy mismo tus misiones <br />
                        y empieza a disfrutar ya!</strong>
                      </Text>
                      <Button
                        className="rounded-full bg-[#319948] px-5 py-5 text-center font-semibold text-[12px] mt-[16px] text-white no-underline"
                        href={"%%%%"}
                      >
                        ¡Vamos a tpremia!
                      </Button>
                    </Column>
                  </Row>
                </Column>
              </Row>
            </Section>

            {/* Banner Gift Mobile */}

            <Section className="my-[30px] max-w-[650px] mx-auto overflow-hidden banner-gema-mobile-gift">
              <Row>
                <Column
                  style={{
                    // backgroundImage: `url(${baseUrl}/static/t-premia/Banner-mobile-gema-gift.png)`,
                    backgroundImage: `url(https://res.cloudinary.com/dirjvoxdc/image/upload/v1755893469/Banner-mobile-gema-gift_aapyqz.png)`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '400px',
                    width: '100%',
                    display: 'inline-table',
                  }}
                >
                    <Section style={{ textAlign: 'center' , paddingTop: '32px'   }}>
                      <Text className="text-[18px] text-black leading-[32px]" style={{ margin: 0, lineHeight: '32px', color: '#000000' }}>
                        <strong>¡Activa hoy mismo tus misiones <br />
                        y empieza a disfrutar ya!</strong>
                      </Text>
                      <Button
                        className="rounded-full w-[200px] bg-[#319948] px-5 py-5 text-center font-semibold text-[10px] mt-[16px] text-white no-underline"
                        href={"%%%%"}
                      >
                        ¡Vamos a tpremia!
                      </Button>
                    </Section>
                </Column>
              </Row>
            </Section>
            {/* Banner Gift Mobile */}


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
                      ¡No te quedes con dudas! Escríbenos y lo resolvemos juntos en: <a href="mailto:hola@tpremia.com.mx" className='text-[#319948]'>hola@tpremia.com.mx</a>
                    </Text>
                    <Text className="mt-[4px] mb-0 text-[10px] text-[#838383] leading-[24px]">
                      Si deseas dejar de recibir nuestras comunicaciones, haz clic aquí para cancelar tu suscripción.
                    </Text>
                    <Text className="mt-[24px] mb-0 text-[10px] text-[#838383] leading-[15px]">
                      Consulta términos y condiciones en tpremia.com.mx
                    </Text>
                    <Text className="mt-[4px] mb-0 text-[10px] text-[#838383] leading-[15px]">
                      Todas las operaciones al amparo de este programas son otorgadas por Banco Azteca, S.A.,
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
  username: 'alanturing',
  userImage: `${baseUrl}/static/vercel-user.png`,
  invitedByUsername: 'Alan',
  invitedByEmail: 'alan.turing@example.com',
  teamName: 'Enigma',
  teamImage: `${baseUrl}/static/vercel-team.png`,
  inviteLink: 'https://vercel.com/teams/invite/foo',
  inviteFromIp: '204.13.186.218',
  inviteFromLocation: 'São Paulo, Brazil',
} as TpremiaUserEmailProps;

export default TpremiaEducativeEmail;
