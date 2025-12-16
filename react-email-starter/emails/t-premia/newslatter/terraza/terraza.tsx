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
  // "¡Hola," a la izquierda y {nombre} a la derecha, posicionado casi a la mitad de la imagen
  const textLine0 = `l_text:arial_80_bold:Hola%252C,co_rgb:fff,g_north_west,y_1050,x_300`;
  const textLine1 = `l_text:arial_80_bold:{nombre},co_rgb:FF1C72,g_north_west,y_1050,x_530`;

  const textLine0Desktop = `l_text:arial_120_bold:Hola%252C,co_rgb:fff,g_north_west,y_1230,x_130`;
  const textLine1Desktop = `l_text:arial_120_bold:{nombre},co_rgb:FF1C72,g_north_west,y_1230,x_380`;
  const heroImageWithText = `${cloudinaryBaseUrl}/${textLine0}/${textLine1}/v1765589070/terraza_oof0l9.png`;
  const heroImageWithTextDesktop = `${cloudinaryBaseUrl}/${textLine0Desktop}/${textLine1Desktop}/v1765589070/terraza_oof0l9.png`;
  return (
    <Html>
      <Head>
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
        <style>{`

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

          /* Responsive image switching - Desktop/Mobile */
          /* On mobile: hide desktop, show mobile */
          @media screen and (max-width: 400px) {
            .desktop-image {
              display: none !important;
              max-height: 0 !important;
              overflow: hidden !important;
            }
            .mobile-image {
              display: block !important;
              max-height: none !important;
            }
          }

          /* On desktop: hide mobile, show desktop */
          @media screen and (min-width: 401px) {
            .mobile-image {
              display: none !important;
              max-height: 0 !important;
              overflow: hidden !important;
            }
            .desktop-image {
              display: block !important;
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
        <Body className="mx-auto my-auto font-sans email-body" style={{ backgroundColor: "#FFF]" }}>
          <Container className="mx-auto max-w-[650px] border-[#eaeaea] border-solid email-container" style={{ backgroundColor: "#FFFF" }}>
            <Section>
              <Link href="https://tpre.mx/497wRg6" target="_blank">
                <Img
                  src={heroImageWithText}
                  width="100%"
                  height="auto"
                  alt="t-premia"
                  className=""
                />
              </Link>
            </Section>
            <Section>
              <Text className="p-4 text-[10px] leading-normal text-center" >
                La experiencia exclusiva es al portador, cualquier pérdida o mal uso del mismo es responsabilidad de quien lo redima. El acceso es de uso único e intransferible del cliente activo del programa “tpremia” y su acompañante. Queda estrictamente prohibido realizar copias del boleto. No está autorizada la copia o reventa del acceso. En caso de que el cliente desee gozar nuevamente del beneficio, deberá acumular las gemas respectivas y redimirlas a través de www.newtpremia.com.mx. No se permite ingresar al establecimiento con alimentos o bebidas de afuera. Promoción no acumulable ni canjeable por dinero en efectivo.  Al aceptar el pase se cede el derecho de uso de imágen, voz y testimonio para el uso del mismo en las redes oficiales de tpremia. Consulta términos y condiciones  aquí <Link className="text-[#FF1C72]" href="https://www.newtpremia.com.mx/terminos-y-condiciones-cupones">https://www.newtpremia.com.mx/terminos-y-condiciones-cupones</Link><br></br>
                El número para confirmar la asistencia vía WhatsApp, es operado por Ara y Punto.
              </Text>
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
