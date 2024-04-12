import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import { Button as FlowbiteButton } from "flowbite-react"; // Rename Button from flowbite-react to avoid conflict
import { motion } from 'framer-motion';


// Define the Component function outside of the Home component's JSX
function Component() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-2"> {/* Centering the content horizontally */}
      <div className="mt-7">
        <motion.div
          whileHover={{
            scale: 1.1, // Scale up by 10% on hover
            boxShadow: '0 4px 12px rgba(138, 43, 226, 0.6)', // Purple shadow effect on hover
          }}
          transition={{ duration: 0.3 }} // Animation duration of 0.3 seconds
        >
          <FlowbiteButton outline gradientDuoTone="greenToBlue" className="hover:text-purple-600">
            Try Optifix
          </FlowbiteButton>
        </motion.div>
      </div>
    </div>
  );
}


export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/backgroung5.svg')] bg-cover bg-center" />
        {/* <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" /> */}
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
            <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: 'easeInOut' }}
>
<Typography
  variant="h1"
  color="white"
  className="mb-8 font-black"
>
  Home of
  <motion.span
    style={{ color: 'purple' }}
    initial={{ opacity: 0, y: -20 }} // Start with the text invisible and slightly above
    animate={{ opacity: 1, y: 0 }} // Animate to visible and at the original position
    transition={{ duration: 0.5, delay: 0.5 }} // Animation duration and delay for effect
  >
    Clean
  </motion.span>
  ,
  <motion.span
    style={{ color: 'purple', marginLeft: '5px' }} // Add a margin for better spacing
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 1.0 }} // Adjust the delay for each word
  >
    safe
  </motion.span>
  ,
  <motion.span
  style={{ color: 'purple', marginLeft: '5px' }}
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 1.5 }} // Adjust the delay for each word
>
  secure
</motion.span>
  code.
</Typography>


  
</motion.div>

<Typography variant="lead" color="white" className="opacity-80">
  Customizable <span className="text-purple-200">static code analysis</span> that works in your <span className="text-purple-200">real-time application</span> and more.
  Advanced <span className="text-purple-200">error detection</span> and <span className="text-purple-200">optimize</span> for your real-time application.
</Typography>



              <Component /> {/* Include the Component here */}
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Working with us is a pleasure
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Don't let your uses guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
                <br />
                <br />
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. Just make sure you enable them first via JavaScript.
              </Typography>
              <Button variant="filled">read more</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/teamwork.png"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="small" color="blue-gray" className="font-normal">Enterprise</Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    Top Notch Services
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <PageTitle section="Co-Working" heading="Build something">
            Put the potentially record low maximum sea ice extent tihs year down
            to low ice. According to the National Oceanic and Atmospheric
            Administration, Ted, Scambos.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
