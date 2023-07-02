export const PortfolioItemPage = item => {
  console.log(item.item);
  return (
    <>
      <h2>{item.item.title} </h2>
      <p>Description: {item.item.description}</p>
      <img src={item.item.imageUrl} width="100" height="100" />
    </>
  );
};
