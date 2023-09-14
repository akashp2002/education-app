import React from "react";
import "./Plans.css";
function Plans() {
  const pricingData = [{
    title:'Regular Member',
    price:'$0',
    duration:'/months',
    color:'#fff',
    features:[
        'unlimited access to the Courses',
        'customer support',
        'standard options',
        '5 classes per week'
    ]
  },
  {
    title:'Premium Member',
    price:'$100',
    duration:'/months',
    color:'#6f55f2',
    features:[
        'unlimited access to the Courses',
        'customer support',
        'standard options',
        '5 classes per week'
    ]
  },
  {
    title:'Standard Member',
    price:'$10',
    duration:'/months',
    color:'#fff',
    features:[
        'unlimited access to the Courses',
        'customer support',
        'personal mentor',
        'standard options',
        '5 classes per week'
    ]
  },
];
  return (
    <div className="container">
      <div className="pricing_top">
        <h2 className="section_title">Premium Pricing Plans</h2>
        <p>
          Unlock elite tech services with our premium prizing plan and sour
          ahead of the competetion
        </p>
      </div>
      <div className="pricing_wrapper">
        {pricingData.map((pricingItem, index) => (
          <div className="pricing-item" key={index}>
            <div className="pricing-card-top" style={{background:  pricingItem.color}}>
              <h2 className="section_title">{pricingItem.title}</h2>
              <h2 className="pricing-section-title">{pricingItem.price}
              <span>{pricingItem.duration}</span></h2>
            </div>
            <div className="services">
                <ul>
                    {
                        pricingItem.features.map((feature,index)=>(
                            <li key={index}>{feature}</li>
                        ))
                    }
                </ul>
                <button className="register-btn">Join</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
