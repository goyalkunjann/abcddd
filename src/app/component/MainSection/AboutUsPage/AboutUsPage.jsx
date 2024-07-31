'use client';
import React from "react";
import Image from 'next/image';
import goal1 from '/public/assets/images/goal01.jpeg';
import goal2 from '/public/assets/images/goal02.jpeg';
import goal3 from '/public/assets/images/goal03.jpeg';
import goal4 from '/public/assets/images/goal04.webp';

const AboutUsPage = () => {
  const goals = [
    {
      img: goal1,
      heading: 'End-To-End Construction',
      points: [
        'We offer comprehensive end-to-end construction services, managing every phase from initial planning and design to final completion. Our team ensures seamless execution, delivering high-quality results on time and within budget.'
      ]
    },
    {
      img: goal2,
      heading: 'Interior Designing',
      points: [
        'Our interior design services transform spaces into stylish, functional, and personalized environments. From concept to completion, we tailor every detail to reflect your unique taste and lifestyle, creating spaces that inspire and delight.'
      ]
    },
    {
      img: goal3,
      heading: 'Construction + Interior',
      points: [
        'We offer integrated interior design and construction services, providing seamless solutions from concept to completion. Our team transforms your vision into reality, creating beautiful, functional spaces with impeccable craftsmanship and attention to detail.'
      ]
    },
    {
      img: goal4,
      heading: 'Office Interior',
      points: [
        'We specialize in creating dynamic and efficient office interiors that enhance productivity and reflect your brand’s identity. Our designs blend functionality with aesthetic appeal, crafting workspaces that inspire and support your team’s success.'
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      {/* Who We Are Section */}
      <div className="flex flex-wrap justify-center items-center p-6 mb-8">
        <div className="w-full md:w-1/2">
          <Image src="/assets/images/sofa.webp" alt="About Home" width={500} height={300} className="rounded-lg" />
        </div>
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-3xl text-center mb-4 text-[#5D5D5D]">Who We Are</h2>
          <p className="text-left text-[#575757]">
            Welcome to House Banao, where innovation meets craftsmanship. We are a premier construction and interior design firm dedicated to transforming your vision into reality. Our team of skilled architects, designers, and builders brings unparalleled expertise and passion to every project, ensuring that each space we create is unique, functional, and inspiring.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="text-center bg-[#ECE8E5] ml-0 mr-0 p-8 mb-8">
        <h1 className="text-3xl text-[#5D5D5D] mb-4">Our Story</h1>
        <p className="text-[#575757] text-left mx-8">
          Founded in 2015, House Banao began with a mission to provide exceptional construction and interior design services. Starting with residential projects, we quickly expanded into commercial developments, earning a reputation for quality and innovation.
          <br /><br />
          Today, as a full-service firm, we handle everything from initial concepts to final execution, ensuring every project exceeds client expectations. Our commitment to quality, creativity, and customer satisfaction drives us to deliver outstanding results in every space we transform.
          <br /><br />
          At House Banao, we are proud of our journey and excited about the future, continuing to shape the landscape of construction and interior design.
        </p>
      </div>

      {/* Goals Section */}
      <div className="bg-white py-6 px-4 md:px-10">
        <div className="container mx-auto">
          {goals.map((goal, index) => (
            <div key={index} className="flex flex-wrap md:flex-nowrap items-center my-8">
              <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                <div className="p-2">
                  <Image src={goal.img} alt={goal.heading} className="object-cover text-center rounded-lg" width={400} height={300} />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <h1 className="text-xl md:text-2xl mb-2 text-center text-[#5D5D5D]">{goal.heading}</h1>
                <ul className="pl-5 text-[#575757] max-w-md mx-auto" style={{ listStyleType: 'none', paddingLeft: '0' }}>
                  {goal.points.map((point, idx) => (
                    <li key={idx} className="mb-2 text-sm">
                      <p className="text-[#575757] text-left">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
