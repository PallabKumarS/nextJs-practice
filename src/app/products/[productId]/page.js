const ProductDetailsPage = async ({ params, searchParams }) => {
  const { productId } = await params;
  const query = await searchParams;

  return (
    <div>
      <h1 className="text-3xl text-center">
        This is ProductDetailsPage Component of {productId}
        <br />
        {query && JSON.stringify(query)}
      </h1>
    </div>
  );
};

export default ProductDetailsPage;
