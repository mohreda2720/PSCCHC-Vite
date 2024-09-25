import MarineTraffic from "./MarineTraffic";
import CountUpNumbers from "./NumbersCounter";

const MarineAndCountup = ({statistics}) => {
  return (
    <>
      <section id="about">
        <div className="container" >
        <div className="row">
          <div className="col-12 col-md-6">
            <MarineTraffic />
          </div>
          <div className="col-12 col-md-6">
            <CountUpNumbers statistics={statistics} />
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default MarineAndCountup;
