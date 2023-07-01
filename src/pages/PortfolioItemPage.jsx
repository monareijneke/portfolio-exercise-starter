export const PortfolioItemPage = () => {
  return (
    <>
      <h2>{item.title} </h2>
      <p>Description: {item.description}</p>
      <img src={item.imgUrl} width="100" height="100" />
    </>
  );
};
