
"use client";
import { useState } from 'react';
import styles from './Accordion.module.css';
import AccordionItem from './AccordionItem';

const accordionData = [
    {
        title: '01.',
        description: 'What kind of process can I expect?',
        content: `We begin by documenting specific project requirements, timelines, budget ranges, and overall project scope. While we briefly establish this in our project form, we use introductory calls to outline projects in greater detail, eventually leading to a statement of work.
        
        Following client approval, our team will prepare the necessary paperwork, which will be followed by a deposit (usually 50%) and a kickoff call that will end in virtual handshakes. A senior project manager organizes and leads all projects using industry-standard tools and scheduled weekly calls to provide updates and gather feedback.
        
        As we near the end of an iterative process divided into stages, we will proudly launch another successful project and remain by our clients' sides to support them as their business grows.`
        
    },
    {
        title: '02.',
        description: 'What in-house services do you offer?',
        content: `The Doodlo Team  has brought together a team skilled in design, strategy, digital work, and marketing to offer a full range of creative services. Here are some of the services we offer in projects:

        Branding | Brand Strategy | Brand Guidelines | Brand Identity | Logo Design | Naming & Domain | Website UI Design | Web Hosting | Development | Performance Optimization | Brand Strategy Development | Product positioning | Packaging Design for Hero Products | Guideline Formulation | Brand Roadmap | Communication Design | Ecomm Store Setup | Frontend & Backend Development | CRMs`
        
    },
    {
        title: '03.',
        description: 'Do you have any fixed rates?',
        content: `At our design agency, we understand that every project is unique, and therefore, we don't have fixed rates. We believe that it's important to tailor our services to meet the specific needs and requirements of each project. However, we do provide transparent pricing estimates based on the scope of work and complexity of the project.

        Our rates are competitive, and we strive to offer the best value for our clients' investments. Please feel free to contact us to discuss your project needs and receive a detailed quote.`
        
    },
    {
        title: '04.',
        description: 'How soon can you take on a project?',
        content: `At our design agency, we pride ourselves on our ability to work efficiently and effectively. We understand that timing is crucial, and we do our best to accommodate our clients' timelines. The timeline for taking on a project depends on various factors, such as the scope of work, the complexity of the project, and our current workload.

        However, we always strive to begin projects as soon as possible without compromising the quality of our work. We encourage our clients to reach out to us as early as possible so that we can discuss their needs and provide an estimated timeline for their project. Contact us today to get started!`
        
    },
    {
        title: '05.',
        description: 'How long does it take for you to deliver a project?',
        content: `The duration for delivering a project depends on the scope and complexity of the project. We always aim to deliver projects in a timely manner while ensuring the quality of our work. We discuss timelines with our clients during the project planning stage and provide estimated delivery times based on the scope of work.`
        
    },
    {
        title: '06.',
        description: 'What technologies do you use?',
        content: `At Doodlo, we use a variety of technologies to deliver quality projects to our clients. We stay up to date with the latest design tools and software, including Adobe Creative Suite, Sketch, and Figma. We also use project management tools, communication tools, and collaboration platforms to ensure efficient communication and project delivery. We are always exploring new technologies and tools that can help us deliver the best results for our clients.`
        
    },
];

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <div className={styles.accordion}>
            {accordionData.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    description={item.description}
                    content={item.content}
                    isOpen={openIndex === index}
                    onClick={() => handleToggle(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;