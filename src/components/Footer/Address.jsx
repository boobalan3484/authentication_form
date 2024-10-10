const AddressInfo = () => {
    const addresses = [
      {
        icon: "/icons/icon_37.svg",
        title: "Our Address",
        address: `MPeoples Business Solutions pvt ltd,`,
         street_1:" 1/248, Raja Ganapathy Complex,",
         street_2:" 2nd Floor, Opposite BSNL Office, Meyyaanur Main Road,",
         district:" Salem -636004."
  
      },
      {
        icon: "/icons/icon_38.svg",
        title: "Contact Info",
        num_1: "+91 9487812715",
        num_2: "+91 4273590609",
      },
    ];
  
    return (
      <>
        {addresses.map((address, i) => (
          <div className="col-md-6 d-flex" key={i}>
            <div className="address-block-one">
              <div className="icon position-absolute">
                <img src={address.icon} alt="icon" className="lazy-img" />
              </div>
              <div className="text-meta">
                <h4 className="title">{address.title}</h4>
                <p className="fs-18 m-0">{address.num_1}</p>
                <p className="fs-18 m-0">{address.num_2}</p>
                <p className="fs-18 m-0">{address.street_1}</p>
                <p className="fs-18 m-0">{address.street_2}</p>
                <p className="fs-18 m-0">{address.district}</p>
              </div>
              {/* /.text-meta */}
            </div>
          </div>
        ))}
      </>
    );
  };
  
  export default AddressInfo;
  