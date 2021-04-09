import React from "react";

function Home() {
  const items = [
    {
      market: "btc",
      price: "59940",
      dolphin: "0.01",
      shark: "0.01",
      smallwhale: "0.01",
      medwhale: "0.01",
      bigwhale: "0.01",
      volume: "3000",
      change: "6.00",
    },
    {
      market: "btc",
      price: "59940",
      dolphin: "0.01",
      shark: "0.01",
      smallwhale: "0.01",
      medwhale: "0.01",
      bigwhale: "0.01",
      volume: "1000",
      change: "6.00",
    },
    {
      market: "btc",
      price: "59940",
      dolphin: "0.01",
      shark: "0.01",
      smallwhale: "0.01",
      medwhale: "0.01",
      bigwhale: "0.01",
      volume: "1000",
      change: "6.00",
    },
  ];

  const MarketProgressBar = (volume) => {
    const MarketPropgressVlaue = (volume / 100) * 2;
    return (
      <div className="progress mg-b-0 ht-2">
        <div
          className={`progress-bar bg-success wd-${MarketPropgressVlaue}p`}
          role="progressbar"
          aria-valuenow={volume}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    );
  };
  const Mniprogressbar = (vol) => {
    const ProgressValue = vol * 100;
    return (
      <div className="progress mg-b-0 ht-2">
        <div
          className={`progress-bar bg-primary wd-${ProgressValue}p`}
          role="progressbar"
          aria-valuenow="1"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    );
  };

  const rows = items.map((item) => (
    <>
      <tr>
        <td>{item.market}</td>
        <td>{item.price}</td>
        <td>
          {<i className="fas fa-dragon"></i>}
          {Mniprogressbar(0.5)}
        </td>
        <td>
          {item.shark}
          {Mniprogressbar(0.1)}
        </td>
        <td>
          {item.smallwhale}
          {Mniprogressbar(0.4)}
        </td>
        <td>
          {item.medwhale}
          {Mniprogressbar(0.2)}
        </td>
        <td>
          {item.bigwhale}
          {Mniprogressbar(0.7)}
        </td>
        <td>{item.change}</td>
      </tr>
      <tr className="bd-b mg-t-0">
        <td colSpan="8">{MarketProgressBar(item.volume)}</td>
      </tr>
    </>
  ));

  return (
    <React.Fragment>
      <div className="container pd-x-0 pd-lg-x-10 pd-xl-x-0 mg-t-60" id="cont">
        <div className="row row-xs">
          <div className="col-lg-12 col-xl-12 mg-t-20">
            <div className="card">
              <div className="card-header pd-y-20 d-md-flex align-items-center justify-content-between">
                <h5 className=" mg-b-0">Table</h5>
                <br></br>
              </div>
              <div className="card-body pos-relative mg-b-10">
                <div className="table-responsive border-top border-light ">
                  <table className="table table-borderless mg-b-0">
                    <thead>
                      <tr>
                        <th style={{ width: "8%" }}>Market</th>
                        <th style={{ width: "8%" }}>Price</th>
                        <th style={{ width: "8%" }}>Dolphin</th>
                        <th style={{ width: "8%" }}>Shark</th>
                        <th style={{ width: "8%" }}>Small Whale</th>
                        <th style={{ width: "8%" }}>Med Whale</th>
                        <th style={{ width: "8%" }}>Big Whale</th>
                        <th style={{ width: "8%" }}>Change</th>
                      </tr>
                    </thead>

                    <tbody>{rows}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
