import orders from "./../orders.json";

type Order = {
  id: string;
  title: string;
};
type Props = {
  paths: ParamsProps[];
  order: Order;
};
const OrderDetails = ({ order }: Props) => {
  return (
    <div>
      <h1>Order Details</h1>
      <div>{order.title}</div>
    </div>
  );
};

export default OrderDetails;

type ParamsProps = {
  id: number;
};
export async function getStaticProps({ params }: { params: ParamsProps }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const order = orders[params.id - 1];

  // Pass post data to the page via props
  return { props: { order } };
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts

  // Get the paths we want to pre-render based on posts

  const paths = orders.map((o) => ({
    params: { id: o.id },
  }));

  console.log(paths);

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
