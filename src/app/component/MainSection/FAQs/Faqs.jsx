import React from 'react';
import { CommonHeading } from '../../Heading/CommonHeading';
import { Accordion } from '../../Utils/Accordion/Accordion';

export const Faqs = () => {
    const data = [
        {
            question: 'What services do you offer?',
            answer: 'We offer comprehensive services in both construction and interior design. This includes end-to-end solutions from conceptual design to construction, along with customized interior design services for residential and commercial spaces.'
        },
        {
            question: 'How much experience does your team have?',
            answer: 'Our team comprises industry veterans with over a decade of experience in construction and design. Collectively, we bring a rich tapestry of expertise, ensuring quality and innovation in every project.'
        },
        {
            question: 'Can I see examples of your past work?',
            answer: 'Certainly! You can view examples of our past projects on our website’s portfolio section or visit our office for a more personal showcase of our work.'
        },
        {
            question: 'Do you offer consultations?',
            answer: 'Yes, we offer free initial consultations to understand your requirements and discuss potential solutions tailored to your space and budget.'
        },
        {
            question: 'What is your process for project development?',
            answer: 'Our process begins with a client consultation, followed by site analysis, design conceptualization, budgeting, and project planning. Construction and quality checks ensue, culminating in a final walkthrough to ensure complete satisfaction.'
        },
        {
            question: 'How long does a typical project take?',
            answer: 'The duration of a project depends on its scope and complexity. A typical interior design project may take 2-4 months, while construction projects can range from 6 months to over a year.'
        },
        {
            question: 'What sets your company apart from others?',
            answer: 'Our dedication to sustainability and luxury, coupled with an unyielding commitment to client satisfaction, sets us apart. We leverage the latest technologies and innovative materials to deliver exceptional quality and design.'
        },
    ];

    return (
        <section className='w-full h-auto bg-[#FAF7F6] p-[30px]' id='faqs'>
            <CommonHeading className={'text-center'}>Frequently asked questions</CommonHeading>
            <Accordion data={data} />
        </section>
    );
};

export default Faqs;