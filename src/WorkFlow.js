import React from 'react'

function WorkFlow() {
  return (
    <section className="bg-03">
    <div className="shape-05" />
    <div className="shape-06" />
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="heading">
            <span style={{textAlign:"center",fontWeight:"bold",fontSize:"40PX"}}>Work</span>
            <h2>How It Works</h2>
            <p>
            "Simply choose your organic foods, set your preferred delivery schedule, and we’ll handle the rest. Enjoy seamless service with fresh, healthy products arriving right on time."
            </p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="wrapper">
            <div className="content">
              <div className="icons">
                <span className="flaticon-fish" />
              </div>
              <h3>Pick Food</h3>
              <p>
              "Select from our curated range of premium organic foods, each carefully sourced for maximum freshness and quality. Enjoy the best of nature’s bounty delivered to your table."
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="wrapper">
            <div className="content">
              <div className="icons">
                <span className="flaticon-touch" />
              </div>
              <h3>choose How Often</h3>
              <p>
              "Customize your delivery schedule to fit your needs, ensuring a steady supply of fresh, organic foods. Choose how often you receive your favorites for ultimate convenience."
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="wrapper">
            <div className="content">
              <div className="icons">
                <span className="flaticon-catering" />
              </div>
              <h3>Fast Deliveries</h3>
              <p>
              "Benefit from our speedy delivery service, bringing fresh organic foods right to your doorstep. Enjoy quick, reliable shipments that keep your pantry stocked with wholesome goodness."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default WorkFlow