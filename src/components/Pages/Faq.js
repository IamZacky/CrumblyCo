import React from 'react';

import { NavLink } from 'react-router-dom';

/* Components */
import Navbar from "./Navbar";
import Footer from "./Footer";

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

/* Images */
import faq from '../../assets/images/faq.png';

const Faq = () => {
  return (
    <>
        <Navbar />
        <div className="bg-[#0c0c0cf8] relative">
            <br/><br/>
            <div className="flex flex-col items-center justify-center text-white">
                <p className="text-xl font-semibold mb-4">FAQs</p>
                <h1 className="text-[3rem] text-center whitespace-nowrap font-serif font-semibold tracking-wide mb-4 custom:text-[1.5rem] sm:text-[1.5rem] md:text-[1.5rem] lg:text-[3rem] xl:text-[3rem]">Frequently asked questions</h1>
                <p className="text-xl text-center custom:text-base sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl">Have questions? We're here to help.</p>
            </div>
            <br/><br/>

            <Accordion allowZeroExpanded className="accordion__container max-w-5xl w-full lg:block md:block sm:block custom:block">

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Do you deliver?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className="indent-8 text-white">Yes, we deliver through third party couriers like Grab, Angkas, Lalamove, etc. (We choose whichever has the lowest price)</p>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Where are you located?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className="indent-8 text-white">We are located in Mandaluyong City, near Jose Rizal University or Jollibee Acacia Lane.</p>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Do you have physical stores?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className="indent-8 text-white">As of the moment, no.</p>
                    </AccordionItemPanel>
                </AccordionItem>

            </Accordion>
            <br/><br/>
            
            {/* Payment */}
            <h1 className="text-4xl text-white text-center font-serif font-semibold tracking-wider">Payment</h1>
            <br/><br/>

            <Accordion allowZeroExpanded className="accordion__container max-w-5xl w-full lg:block md:block sm:block custom:block">

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What are the modes of payment?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className="indent-8 text-white">BDO (bank deposit or online transfer) and GCASH only.</p>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            How much is the delivery fee?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className="indent-8 text-white">You can send us the address and we can give an estimate price.</p>
                    </AccordionItemPanel>
                </AccordionItem>

            </Accordion>
            <br/><br/>

            {/* Cookies */}
            <h1 className="text-4xl text-white text-center font-serif font-semibold tracking-wider">Cookies</h1>
            <br/><br/>

            <Accordion allowZeroExpanded className="accordion__container max-w-5xl w-full lg:block md:block sm:block custom:block">

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            How do I reheat the cookies?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className="indent-8 text-white">We recommend that you reheat cookies in a preheated 300 degrees Fahrenheit oven for 3-5 minutes or until warm. You can also use an oven toaster for 3 minutes or microwave for 10-15 seconds or until warm.</p>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            How long do the cookies last?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className="indent-8 text-white">Placed on an airtight container, cookies can last for 3 days in room temperature and 1 week in the refrigerator.</p>
                    </AccordionItemPanel>
                </AccordionItem>

            </Accordion>
            <br/><br/>

            <div className="bg-[#0C0C0C] flex flex-col items-center justify-center text-white">
                <br/><br/>
                <img src={faq} alt="faq_logo" className="w-[150px] custom:w-[100px] lg:w-[150px] xl:w-[150px]" />
                <h1 className="text-[2.5rem] text-center whitespace-nowrap font-serif font-semibold tracking-wide mb-4 custom:text-[1.5rem] sm:text-[1.5rem] md:text-[1.5rem] lg:text-[2.5rem]">Still have questions?</h1>
                <p className="text-xl custom:text-base lg:text-xl text-center p-2">Can't find the answer your looking for? Contact us at {" "} 
                    <NavLink target="_blank" to={{ pathname: "mailto:thecrumblycompany@gmail.com" }} className="text-[#DCCA87] font-serif tracking-wider">thecrumblycompany@gmail.com</NavLink>
                </p>
                <br/><br/>
            </div>

        </div>
        <Footer />
    </>
  )
}

export default Faq;
