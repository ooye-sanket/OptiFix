import React, { useEffect } from "react";
import { Card, CardBody, CardHeader, Typography, Button } from "@material-tailwind/react";
import { FingerPrintIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard } from "@/widgets/cards";
import { featuresData, contactData } from "@/data";
import { Button as FlowbiteButton } from "flowbite-react";
import { motion } from 'framer-motion';
import Typed from 'typed.js'; // Import Typed.js library
import { MdGroups } from "react-icons/md";


function Component() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-2">
      <div className="mt-7">
        <motion.div
          whileHover={{
            scale: 1.1,
            boxShadow: '0 4px 12px rgba(138, 43, 226, 0.6)',
          }}
          transition={{ duration: 0.3 }}
        >
          <FlowbiteButton outline gradientDuoTone="greenToBlue" className="hover:text-purple-600">
            Try Optifix
          </FlowbiteButton>
        </motion.div>
      </div>
    </div>
  );
}

function initializeTyped() {
  return new Typed('#element', {
    strings: [
      '<span class="text-purple-600">Clean</span>',
      '<span class="text-purple-600">Safe</span>',
      '<span class="text-purple-600">Secure</span>'
    ],
    typeSpeed: 100,
    contentType: 'html', // Set content type to html to render HTML entities
    onComplete: function(self) { // Callback function when animation completes
      self.reset(); // Reset the Typed.js instance to start over
    }
  });
}

export function Home() {
  useEffect(() => {
    // Initialize Typed.js
    const typed = initializeTyped();

    // Clean up function to destroy Typed.js instance
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/backgroung5.svg')] bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <Typography variant="h1" color="white" className="mb-8 font-black">
                  Home of&nbsp;
                  <span id="element"></span>
                  &nbsp;code.
                </Typography>
              </motion.div>
              <Typography variant="lead" color="white" className="opacity-80">
                Customizable <span className="text-purple-200">static code analysis</span> that works in your <span className="text-purple-200">real-time application</span> and more. Advanced <span className="text-purple-200">error detection</span> and <span className="text-purple-200">optimization</span> for your real-time application.
              </Typography>
              <Component />
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
                icon={React.createElement(icon, { className: "w-5 h-5 text-white" })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <MdGroups className="h-8 w-8 text-white " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                About us.
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
              OptiFix is a tool that enhances coding efficiency by optimizing code performance and generating automated documentation
                <br />
                <br />
                It provides features like creating and sharing smart code snippets for improved collaboration. Dependency management helps resolve issues with outdated libraries, while code profiling identifies performance bottlenecks. OptiFix streamlines code development and maintenance, leading to smoother and more efficient coding workflows.
              </Typography>
              <Button variant="filled">Try Optifix</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/optifixteam1.svg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="small" color="blue-gray" className="font-normal">Develper Friendly</Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    OptiFix Services
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                   
Boosts coding efficiency by optimizing performance, automating documentation, creating smart snippets, managing dependencies, and profiling code for better workflows.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <PageTitle section="" heading="We support the most popular languages and libraries">
            
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
                  {React.createElement(icon, { className: "w-5 h-5 text-white" })}
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
