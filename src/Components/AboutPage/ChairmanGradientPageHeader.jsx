const ChairmanGradientPageHeader = (probs) => {
  return (
    <>
      <img src={probs.image} alt="" className="chairman-msg-cover" />
      <h1 id="chairmanMSG" className="msg-title">
        {probs.title}
      </h1>
    </>
  );
};
export default ChairmanGradientPageHeader;
