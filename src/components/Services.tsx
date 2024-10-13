import React from 'react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const Services: React.FC = () => {
  const services = [
    {
      title: "Customized Payment Processing",
      description: "Solutions designed to reduce costs and enhance efficiency for your payment processes."
    },
    {
      title: "Merchant Services",
      description: "Comprehensive merchant services tailored to your specific business requirements."
    },
    {
      title: "Point of Sale Systems",
      description: "State-of-the-art POS systems to facilitate efficient and seamless transactions."
    },
    {
      title: "E-commerce Solutions",
      description: "Support for online sales with advanced e-commerce services."
    }
  ];

  return (
    <section id="services" className="py-20 px-5 max-w-7xl mx-auto section-gap my-20">
      <h2 className="text-4xl font-bold mb-10 text-center font-poppins text-primary">Our Services</h2>
      <div className="flex flex-col space-y-8">
        {services.map((service, index) => {
          const ref = useAnimateOnScroll('animate__fadeInUp');
          return (
            <div key={index} ref={ref} className="service-card p-8 rounded-lg opacity-0 w-full">
              <h3 className="text-2xl font-semibold mb-4 text-primary font-poppins">{service.title}</h3>
              <p className="text-lg text-secondary">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;